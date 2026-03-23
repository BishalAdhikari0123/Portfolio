import BlogPostCard from "../components/BlogPostCard";
import { blogPosts } from "../data/posts.ts";
import { Link } from "react-router-dom";

const PostsPage: React.FC = () => {
  const blogOnlyPosts = blogPosts.filter((post) => post.category === "blog");

  return (
    <section className="py-20 bg-black relative overflow-hidden min-h-[70vh]">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-14">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Technical Posts</h1>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            A growing library of practical backend and full-stack development notes.
          </p>
          <div className="flex items-center justify-center gap-3 mt-6 flex-wrap">
            <Link
              to="/blog"
              className="px-4 py-2 bg-white text-black rounded-lg font-medium"
            >
              Blog
            </Link>
            <Link
              to="/tutorials"
              className="px-4 py-2 border border-white/30 text-white rounded-lg font-medium hover:bg-white/10 transition-colors"
            >
              Tutorials
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogOnlyPosts.map((post) => (
            <BlogPostCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PostsPage;
