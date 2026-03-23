import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import CaseStudyCard from "../components/CaseStudyCard";
import BlogPostCard from "../components/BlogPostCard";
import { projectCaseStudies } from "../data/projects";
import { blogPosts } from "../data/posts.ts";
import { Link } from "react-router-dom";

const HomePage: React.FC = () => {
  const featuredProjects = projectCaseStudies.slice(0, 3);
  const latestBlogPosts = blogPosts.filter((post) => post.category === "blog").slice(0, 4);
  const latestTutorials = blogPosts.filter((post) => post.category === "tutorial").slice(0, 3);

  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Skills />

      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-14">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Featured Case Studies</h2>
            <p className="text-gray-400 max-w-3xl mx-auto text-lg">
              Real projects explained with clear problem statements, implementation details, and engineering trade-offs.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {featuredProjects.map((project) => (
              <CaseStudyCard key={project.slug} project={project} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/projects"
              className="inline-flex items-center px-7 py-3 bg-white text-black rounded-xl font-semibold hover:bg-gray-200 transition-colors duration-200"
            >
              View all project pages
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-14">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Blog</h2>
            <p className="text-gray-400 max-w-3xl mx-auto text-lg">
              Practical engineering write-ups based on real issues and real implementation work.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {latestBlogPosts.map((post) => (
              <BlogPostCard key={post.slug} post={post} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/posts"
              className="inline-flex items-center px-7 py-3 bg-white text-black rounded-xl font-semibold hover:bg-gray-200 transition-colors duration-200"
            >
              Read all posts
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-14">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Tutorials</h2>
            <p className="text-gray-400 max-w-3xl mx-auto text-lg">
              Step-by-step guides for React, Node.js, backend APIs, deployment, and SEO basics.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestTutorials.map((post) => (
              <BlogPostCard key={post.slug} post={post} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/tutorials"
              className="inline-flex items-center px-7 py-3 bg-white text-black rounded-xl font-semibold hover:bg-gray-200 transition-colors duration-200"
            >
              Browse tutorials
            </Link>
          </div>
        </div>
      </section>

      <Contact />
    </>
  );
};

export default HomePage;
