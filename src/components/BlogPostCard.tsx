import { Link } from "react-router-dom";
import { BlogPost } from "../types/content";

type BlogPostCardProps = {
  post: BlogPost;
};

const BlogPostCard: React.FC<BlogPostCardProps> = ({ post }) => {
  return (
    <article className="glass-bw rounded-2xl border border-white/15 p-6 hover:glass-bw-strong hover:border-white/35 transition-all duration-300">
      <p className="text-sm text-gray-400 mb-2">
        {new Date(post.publishedAt).toLocaleDateString()} · {post.readTime}
      </p>

      <h3 className="text-xl font-bold text-white mb-3 leading-tight">{post.title}</h3>

      <p className="text-gray-300 leading-relaxed mb-4">{post.excerpt}</p>

      <div className="flex flex-wrap gap-2 mb-5">
        {post.tags.map((tag) => (
          <span key={tag} className="px-2.5 py-1 rounded-md text-xs bg-white/10 text-gray-200 border border-white/20">
            {tag}
          </span>
        ))}
      </div>

      <Link
        to={`/posts/${post.slug}`}
        className="inline-flex items-center px-5 py-2.5 bg-white text-black rounded-xl font-medium hover:bg-gray-200 transition-colors duration-200"
      >
        Read post
      </Link>
    </article>
  );
};

export default BlogPostCard;
