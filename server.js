import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { Resend } from 'resend';
import { createClient } from '@supabase/supabase-js';

const app = express();
const resend = new Resend(process.env.RESEND_API_KEY);

app.use(cors());
app.use(express.json());

function sanitizeSlug(input) {
  return String(input)
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

function parseTags(tags) {
  if (Array.isArray(tags)) {
    return tags.map((tag) => String(tag).trim()).filter(Boolean);
  }

  if (typeof tags === 'string') {
    return tags
      .split(',')
      .map((tag) => tag.trim())
      .filter(Boolean);
  }

  return [];
}

function parseKeyTakeaways(value) {
  if (Array.isArray(value)) {
    return value.map((item) => String(item).trim()).filter(Boolean);
  }

  if (typeof value === 'string') {
    return value
      .split('\n')
      .map((line) => line.trim())
      .filter(Boolean);
  }

  return [];
}

function toSectionParagraphs(content) {
  return String(content)
    .split(/\n\s*\n/g)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);
}

function extFromMime(mime) {
  if (mime.includes('png')) return 'png';
  if (mime.includes('jpeg') || mime.includes('jpg')) return 'jpg';
  if (mime.includes('webp')) return 'webp';
  if (mime.includes('gif')) return 'gif';
  return 'bin';
}

function isMissingBlogTableError(error) {
  return Boolean(error && error.code === 'PGRST205');
}

function getSupabaseAdmin() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_SECRET_KEY;

  if (!supabaseUrl || !serviceRoleKey) {
    throw new Error('Missing Supabase env vars for local server');
  }

  return createClient(supabaseUrl, serviceRoleKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });
}

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing fields' });
  }

  try {
    const { error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: process.env.CONTACT_TO_EMAIL,
      reply_to: email,
      subject: `New portfolio message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    if (error) {
      console.error(error);
      return res.status(500).json({ error: 'Failed to send email' });
    }

    return res.json({ success: true });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Unexpected error' });
  }
});

app.get('/api/posts', async (req, res) => {
  try {
    const supabase = getSupabaseAdmin();
    const category = typeof req.query.category === 'string' ? req.query.category : undefined;
    const limit = Number(req.query.limit) || 50;

    let query = supabase
      .from('blog_posts')
      .select('id, slug, category, title, excerpt, published_at, read_time, tags, intro, sections, key_takeaways, cover_image_url')
      .eq('is_published', true)
      .order('published_at', { ascending: false })
      .limit(Math.min(limit, 100));

    if (category === 'blog' || category === 'tutorial') {
      query = query.eq('category', category);
    }

    const { data, error } = await query;

    if (error) {
      console.error(error);
      if (isMissingBlogTableError(error)) {
        return res.status(500).json({
          error: 'Supabase blog table is missing',
          details: "Run supabase/blog_posts_setup.sql in your Supabase SQL editor.",
        });
      }
      return res.status(500).json({ error: 'Failed to fetch posts' });
    }

    const mapped = (data ?? []).map((row) => ({
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
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Unexpected server error' });
  }
});

app.get('/api/posts/:slug', async (req, res) => {
  try {
    const { slug } = req.params;
    if (!slug) {
      return res.status(400).json({ error: 'Missing slug' });
    }

    const supabase = getSupabaseAdmin();
    const { data, error } = await supabase
      .from('blog_posts')
      .select('slug, category, title, excerpt, published_at, read_time, tags, intro, sections, key_takeaways, cover_image_url')
      .eq('slug', slug)
      .eq('is_published', true)
      .single();

    if (isMissingBlogTableError(error)) {
      return res.status(500).json({
        error: 'Supabase blog table is missing',
        details: "Run supabase/blog_posts_setup.sql in your Supabase SQL editor.",
      });
    }

    if (error || !data) {
      return res.status(404).json({ error: 'Post not found' });
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
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Unexpected server error' });
  }
});

app.post('/api/posts', async (req, res) => {
  try {
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
      return res.status(401).json({ error: 'Unauthorized poster ID' });
    }

    if (!title || !excerpt || !intro || !content) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const supabase = getSupabaseAdmin();
    const normalizedCategory = category === 'tutorial' ? 'tutorial' : 'blog';
    const normalizedSlug = sanitizeSlug(slug || title);

    if (!normalizedSlug) {
      return res.status(400).json({ error: 'Invalid slug/title' });
    }

    const paragraphs = toSectionParagraphs(content);
    if (paragraphs.length === 0) {
      return res.status(400).json({ error: 'Content cannot be empty' });
    }

    let coverImageUrl = null;

    if (typeof imageBase64 === 'string' && imageBase64.trim()) {
      const maxBase64Length = 2_800_000;
      if (imageBase64.length > maxBase64Length) {
        return res.status(413).json({ error: 'Image payload too large. Please use a smaller image.' });
      }

      const cleaned = imageBase64.replace(/^data:[^;]+;base64,/, '');
      const mime = typeof imageMimeType === 'string' ? imageMimeType : 'application/octet-stream';
      const ext = extFromMime(mime);
      const filePath = `blog-images/${normalizedSlug}-${Date.now()}.${ext}`;
      const fileBuffer = Buffer.from(cleaned, 'base64');

      const { error: uploadError } = await supabase.storage
        .from('blog-images')
        .upload(filePath, fileBuffer, {
          contentType: mime,
          upsert: false,
        });

      if (uploadError) {
        console.error(uploadError);
        return res.status(500).json({ error: 'Failed to upload image' });
      }

      const { data: publicData } = supabase.storage
        .from('blog-images')
        .getPublicUrl(filePath);

      coverImageUrl = publicData.publicUrl;
    }

    const payload = {
      slug: normalizedSlug,
      category: normalizedCategory,
      title: String(title).trim(),
      excerpt: String(excerpt).trim(),
      published_at: new Date().toISOString(),
      read_time: String(readTime || '10 min read').trim(),
      tags: parseTags(tags),
      intro: String(intro).trim(),
      sections: [
        {
          heading: 'Main content',
          paragraphs,
        },
      ],
      key_takeaways: parseKeyTakeaways(keyTakeaways),
      cover_image_url: coverImageUrl,
      is_published: true,
    };

    const { error: insertError } = await supabase
      .from('blog_posts')
      .insert(payload);

    if (insertError) {
      console.error(insertError);
      if (isMissingBlogTableError(insertError)) {
        return res.status(500).json({
          error: 'Supabase blog table is missing',
          details: "Run supabase/blog_posts_setup.sql in your Supabase SQL editor.",
        });
      }
      if (insertError.code === '23505') {
        return res.status(409).json({ error: 'Slug already exists' });
      }
      return res.status(500).json({ error: 'Failed to create post' });
    }

    return res.status(201).json({ success: true, slug: normalizedSlug });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Unexpected server error' });
  }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Contact server listening on http://localhost:${PORT}`);
});
