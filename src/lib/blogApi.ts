import { BlogPost } from "../types/content";

export async function fetchPosts(category?: "blog" | "tutorial"): Promise<BlogPost[]> {
  const params = new URLSearchParams();
  if (category) params.set("category", category);
  const query = params.toString();

  const response = await fetch(`/api/posts${query ? `?${query}` : ""}`);
  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }

  const data = await response.json();
  return (data.posts ?? []) as BlogPost[];
}

export async function fetchPostBySlug(slug: string): Promise<BlogPost | null> {
  const response = await fetch(`/api/posts/${slug}`);
  if (response.status === 404) {
    return null;
  }

  if (!response.ok) {
    throw new Error("Failed to fetch post");
  }

  const data = await response.json();
  return (data.post ?? null) as BlogPost | null;
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

export async function createPost(payload: CreatePostPayload): Promise<{ slug: string }> {
  const response = await fetch("/api/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || "Failed to create post");
  }

  return data as { slug: string };
}
