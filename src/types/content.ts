export type ProjectImage = {
  label: string;
  url: string;
};

export type ProjectCaseStudy = {
  slug: string;
  title: string;
  summary: string;
  year: string;
  problem: string;
  solution: string;
  techUsed: string[];
  challenges: string[];
  images: ProjectImage[];
  repoUrl: string | null;
  liveUrl: string | null;
};

export type PostSection = {
  heading: string;
  paragraphs: string[];
};

export type BlogPost = {
  slug: string;
  category: "blog" | "tutorial";
  title: string;
  excerpt: string;
  publishedAt: string;
  readTime: string;
  tags: string[];
  intro: string;
  sections: PostSection[];
  keyTakeaways: string[];
  coverImageUrl?: string | null;
};
