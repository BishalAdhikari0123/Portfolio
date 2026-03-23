/// <reference types="node" />

import { getSupabaseAdmin } from "../_supabaseAdmin";

type Req = {
  method?: string;
  query?: Record<string, string | string[] | undefined>;
};

type Res = {
  setHeader: (key: string, value: string | string[]) => void;
  status: (code: number) => { json: (body: any) => void };
};

export default async function handler(req: Req, res: Res) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const slugRaw = req.query?.slug;
    const slug = Array.isArray(slugRaw) ? slugRaw[0] : slugRaw;

    if (!slug) {
      return res.status(400).json({ error: "Missing slug" });
    }

    const supabase = getSupabaseAdmin();
    const { data, error } = await supabase
      .from("blog_posts")
      .select("slug, category, title, excerpt, published_at, read_time, tags, intro, sections, key_takeaways, cover_image_url")
      .eq("slug", slug)
      .eq("is_published", true)
      .single();

    if (error || !data) {
      return res.status(404).json({ error: "Post not found" });
    }

    return res.status(200).json({
      post: {
        slug: data.slug,
        category: data.category,
        title: data.title,
        excerpt: data.excerpt,
        publishedAt: data.published_at,
        readTime: data.read_time,
        tags: data.tags ?? [],
        intro: data.intro,
        sections: data.sections ?? [],
        keyTakeaways: data.key_takeaways ?? [],
        coverImageUrl: data.cover_image_url ?? null,
      },
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Unexpected server error" });
  }
}
