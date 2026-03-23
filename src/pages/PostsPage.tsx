import BlogPostCard from "../components/BlogPostCard";
import { blogPosts } from "../data/posts";

const PostsPage: React.FC = () => {
  return (
    <section className="py-20 bg-black relative overflow-hidden min-h-[70vh]">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-14">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Technical Posts</h1>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            A growing library of practical backend and full-stack development notes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <BlogPostCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PostsPage;
