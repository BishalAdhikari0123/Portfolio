import { BlogPost } from "../types/content";
import { blogPosts } from "../data/posts";

function getSeedPosts(category?: "blog" | "tutorial"): BlogPost[] {
  if (!category) {
    return blogPosts;
  }
  return blogPosts.filter((post) => post.category === category);
}

export async function fetchPosts(category?: "blog" | "tutorial"): Promise<BlogPost[]> {
  try {
    const params = new URLSearchParams();
    if (category) params.set("category", category);
    const query = params.toString();

    const response = await fetch(`/api/posts${query ? `?${query}` : ""}`);
    if (!response.ok) {
      throw new Error("Failed to fetch posts");
    }

    const data = await response.json();
    const posts = (data.posts ?? []) as BlogPost[];

    if (posts.length > 0) {
      return posts;
    }

    return getSeedPosts(category);
  } catch (error) {
    console.error(error);
    return getSeedPosts(category);
  }
}

export async function fetchPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const response = await fetch(`/api/posts/${slug}`);
    if (response.status === 404) {
      return blogPosts.find((post) => post.slug === slug) ?? null;
    }

    if (!response.ok) {
      throw new Error("Failed to fetch post");
    }

    const data = await response.json();
    const post = (data.post ?? null) as BlogPost | null;
    if (post) {
      return post;
    }

    return blogPosts.find((item) => item.slug === slug) ?? null;
  } catch (error) {
    console.error(error);
    return blogPosts.find((post) => post.slug === slug) ?? null;
  }
}

type CreatePostPayload = {
  adminId: string;
  slug?: string;
  category: "blog" | "tutorial";
  title: string;
  excerpt: string;
  intro: string;
  content: string;
  tags?: string;
  readTime?: string;
  keyTakeaways?: string;
  imageBase64?: string;
  imageMimeType?: string;
};

async function parseApiResponse(response: Response): Promise<Record<string, unknown>> {
  const contentType = response.headers.get("content-type") || "";

  if (contentType.includes("application/json")) {
    return (await response.json()) as Record<string, unknown>;
  }

  const text = await response.text();
  return { error: text || `Request failed with status ${response.status}` };
}

export async function createPost(payload: CreatePostPayload): Promise<{ slug: string }> {
  const response = await fetch("/api/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const data = await parseApiResponse(response);

  if (!response.ok) {
    const errorMessage =
      typeof data.error === "string" && data.error.trim().length > 0
        ? data.error
        : `Failed to create post (HTTP ${response.status})`;
    throw new Error(errorMessage);
  }

  return data as { slug: string };
}
