/// <reference types="node" />

import { getSupabaseAdmin } from "../_supabaseAdmin";

type Req = {
  method?: string;
  query?: Record<string, string | string[] | undefined>;
  body?: any;
};

type Res = {
  setHeader: (key: string, value: string | string[]) => void;
  status: (code: number) => { json: (body: any) => void };
};

function sanitizeSlug(input: string) {
  return input
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

function parseTags(tags: unknown): string[] {
  if (Array.isArray(tags)) {
    return tags.map((tag) => String(tag).trim()).filter(Boolean);
  }

  if (typeof tags === "string") {
    return tags
      .split(",")
      .map((tag) => tag.trim())
      .filter(Boolean);
  }

  return [];
}

function parseKeyTakeaways(value: unknown): string[] {
  if (Array.isArray(value)) {
    return value.map((item) => String(item).trim()).filter(Boolean);
  }

  if (typeof value === "string") {
    return value
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean);
  }

  return [];
}

function toSectionParagraphs(content: string): string[] {
  return content
    .split(/\n\s*\n/g)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);
}

function extFromMime(mime: string): string {
  if (mime.includes("png")) return "png";
  if (mime.includes("jpeg") || mime.includes("jpg")) return "jpg";
  if (mime.includes("webp")) return "webp";
  if (mime.includes("gif")) return "gif";
  return "bin";
}

function getErrorCode(error: unknown): string | undefined {
  if (error && typeof error === "object" && "code" in error) {
    const code = (error as { code?: unknown }).code;
    if (typeof code === "string") {
      return code;
    }
  }
  return undefined;
}

function isMissingBlogTableError(error: unknown): error is { code: string } {
  return getErrorCode(error) === "PGRST205";
}

export default async function handler(req: Req, res: Res) {
  try {
    if (req.method !== "GET" && req.method !== "POST") {
      res.setHeader("Allow", ["GET", "POST"]);
      return res.status(405).json({ error: "Method not allowed" });
    }

    const supabase = getSupabaseAdmin();

    if (req.method === "GET") {
      const categoryRaw = req.query?.category;
      const limitRaw = req.query?.limit;
      const category = Array.isArray(categoryRaw) ? categoryRaw[0] : categoryRaw;
      const limit = Number(Array.isArray(limitRaw) ? limitRaw[0] : limitRaw) || 50;

      let query = supabase
        .from("blog_posts")
        .select("id, slug, category, title, excerpt, published_at, read_time, tags, intro, sections, key_takeaways, cover_image_url")
        .eq("is_published", true)
        .order("published_at", { ascending: false })
        .limit(Math.min(limit, 100));

      if (category === "blog" || category === "tutorial") {
        query = query.eq("category", category);
      }

      const { data, error } = await query;

      if (error) {
        console.error(error);
        if (isMissingBlogTableError(error)) {
          return res.status(500).json({
            error: "Supabase blog table is missing",
            details: "Run supabase/blog_posts_setup.sql in your Supabase SQL editor.",
          });
        }
        return res.status(500).json({ error: "Failed to fetch posts" });
      }

      const mapped = (data ?? []).map((row: any) => ({
        slug: row.slug,
        category: row.category,
        title: row.title,
        excerpt: row.excerpt,
        publishedAt: row.published_at,
        readTime: row.read_time,
        tags: row.tags ?? [],
        intro: row.intro,
        sections: row.sections ?? [],
        keyTakeaways: row.key_takeaways ?? [],
        coverImageUrl: row.cover_image_url ?? null,
      }));

      return res.status(200).json({ posts: mapped });
    }

    if (req.method === "POST") {
      const {
        adminId,
        slug,
        category,
        title,
        excerpt,
        intro,
        content,
        tags,
        readTime,
        keyTakeaways,
        imageBase64,
        imageMimeType,
      } = req.body || {};

      const expectedId = process.env.BLOG_POSTER_ID;
      if (!expectedId || adminId !== expectedId) {
        return res.status(401).json({ error: "Unauthorized poster ID" });
      }

      if (!title || !excerpt || !intro || !content) {
        return res.status(400).json({ error: "Missing required fields" });
      }

      const normalizedCategory = category === "tutorial" ? "tutorial" : "blog";
      const normalizedSlug = sanitizeSlug(slug || title);

      if (!normalizedSlug) {
        return res.status(400).json({ error: "Invalid slug/title" });
      }

      const paragraphs = toSectionParagraphs(String(content));
      if (paragraphs.length === 0) {
        return res.status(400).json({ error: "Content cannot be empty" });
      }

      let coverImageUrl: string | null = null;

      if (typeof imageBase64 === "string" && imageBase64.trim()) {
        const maxBase64Length = 2_800_000;
        if (imageBase64.length > maxBase64Length) {
          return res.status(413).json({ error: "Image payload too large. Please use a smaller image." });
        }

        const cleaned = imageBase64.replace(/^data:[^;]+;base64,/, "");
        const mime = typeof imageMimeType === "string" ? imageMimeType : "application/octet-stream";
        const ext = extFromMime(mime);
        const filePath = `blog-images/${normalizedSlug}-${Date.now()}.${ext}`;
        const fileBuffer = Buffer.from(cleaned, "base64");

        const { error: uploadError } = await supabase.storage
          .from("blog-images")
          .upload(filePath, fileBuffer, {
            contentType: mime,
            upsert: false,
          });

        if (uploadError) {
          console.error(uploadError);
          return res.status(500).json({ error: "Failed to upload image" });
        }

        const { data: publicData } = supabase.storage
          .from("blog-images")
          .getPublicUrl(filePath);

        coverImageUrl = publicData.publicUrl;
      }

      const payload = {
        slug: normalizedSlug,
        category: normalizedCategory,
        title: String(title).trim(),
        excerpt: String(excerpt).trim(),
        published_at: new Date().toISOString(),
        read_time: String(readTime || "10 min read").trim(),
        tags: parseTags(tags),
        intro: String(intro).trim(),
        sections: [
          {
            heading: "Main content",
            paragraphs,
          },
        ],
        key_takeaways: parseKeyTakeaways(keyTakeaways),
        cover_image_url: coverImageUrl,
        is_published: true,
      };

      const { error: insertError } = await supabase
        .from("blog_posts")
        .insert(payload);

      if (insertError) {
        console.error(insertError);
        if (isMissingBlogTableError(insertError)) {
          return res.status(500).json({
            error: "Supabase blog table is missing",
            details: "Run supabase/blog_posts_setup.sql in your Supabase SQL editor.",
          });
        }
        if (getErrorCode(insertError) === "23505") {
          return res.status(409).json({ error: "Slug already exists" });
        }
        return res.status(500).json({ error: "Failed to create post" });
      }

      return res.status(201).json({ success: true, slug: normalizedSlug });
    }
  } catch (error) {
    console.error(error);

    const message = error instanceof Error ? error.message : "Unexpected server error";
    if (typeof message === "string" && message.includes("Missing Supabase env vars")) {
      return res.status(500).json({
        error: "Server configuration incomplete for Supabase",
        details: message,
      });
    }

    return res.status(500).json({ error: "Unexpected server error" });
  }
}
