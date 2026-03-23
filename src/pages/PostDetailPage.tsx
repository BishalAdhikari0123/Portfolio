import { Link, useParams } from "react-router-dom";
import { blogPosts } from "../data/posts";

const PostDetailPage: React.FC = () => {
  const { slug } = useParams();
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    return (
      <section className="py-20 min-h-[65vh] bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Post not found</h1>
          <p className="text-gray-400 mb-8">The article you requested does not exist.</p>
          <Link to="/posts" className="px-6 py-3 bg-white text-black rounded-xl font-medium hover:bg-gray-200 transition-colors">
            Back to posts
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-8">
          <Link to="/posts" className="text-gray-300 hover:text-white underline-animate">
            ← Back to all posts
          </Link>
        </div>

        <header className="mb-10">
          <p className="text-sm text-gray-400 mb-3">
            {new Date(post.publishedAt).toLocaleDateString()} · {post.readTime}
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5">{post.title}</h1>
          <p className="text-lg text-gray-300 leading-relaxed">{post.intro}</p>

          <div className="flex flex-wrap gap-2 mt-5">
            {post.tags.map((tag) => (
              <span key={tag} className="px-2.5 py-1 rounded-md text-xs bg-white/10 text-gray-200 border border-white/20">
                {tag}
              </span>
            ))}
          </div>
        </header>

        <div className="space-y-8">
          {post.sections.map((section) => (
            <section key={section.heading} className="glass-bw rounded-2xl p-7 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-3">{section.heading}</h2>
              <div className="space-y-3">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="text-gray-300 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          ))}

          <section className="glass-bw rounded-2xl p-7 border border-white/20">
            <h2 className="text-2xl font-bold text-white mb-3">Key takeaways</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2 leading-relaxed">
              {post.keyTakeaways.map((takeaway) => (
                <li key={takeaway}>{takeaway}</li>
              ))}
            </ul>
          </section>
        </div>
      </article>
    </section>
  );
};

export default PostDetailPage;
