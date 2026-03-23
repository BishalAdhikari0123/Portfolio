import { Link, useParams } from "react-router-dom";
import { projectCaseStudies } from "../data/projects";

const ProjectCaseStudyPage: React.FC = () => {
  const { slug } = useParams();
  const project = projectCaseStudies.find((item) => item.slug === slug);

  if (!project) {
    return (
      <section className="py-20 min-h-[65vh] bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Case study not found</h1>
          <p className="text-gray-400 mb-8">The project page you requested does not exist.</p>
          <Link to="/projects" className="px-6 py-3 bg-white text-black rounded-xl font-medium hover:bg-gray-200 transition-colors">
            Back to projects
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />

      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-8">
          <Link to="/projects" className="text-gray-300 hover:text-white underline-animate">
            ← Back to all projects
          </Link>
        </div>

        <header className="mb-10">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-white text-black mb-4">{project.year}</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">{project.title}</h1>
          <p className="text-lg text-gray-300 leading-relaxed">{project.summary}</p>
        </header>

        <div className="space-y-8">
          <section className="glass-bw rounded-2xl p-7 border border-white/20">
            <h2 className="text-2xl font-bold text-white mb-3">Problem</h2>
            <p className="text-gray-300 leading-relaxed">{project.problem}</p>
          </section>

          <section className="glass-bw rounded-2xl p-7 border border-white/20">
            <h2 className="text-2xl font-bold text-white mb-3">Solution</h2>
            <p className="text-gray-300 leading-relaxed">{project.solution}</p>
          </section>

          <section className="glass-bw rounded-2xl p-7 border border-white/20">
            <h2 className="text-2xl font-bold text-white mb-3">Tech used</h2>
            <div className="flex flex-wrap gap-2">
              {project.techUsed.map((tech) => (
                <span key={tech} className="px-3 py-1.5 rounded-lg bg-white/10 text-gray-200 border border-white/20">
                  {tech}
                </span>
              ))}
            </div>
          </section>

          <section className="glass-bw rounded-2xl p-7 border border-white/20">
            <h2 className="text-2xl font-bold text-white mb-3">Challenges</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2 leading-relaxed">
              {project.challenges.map((challenge) => (
                <li key={challenge}>{challenge}</li>
              ))}
            </ul>
          </section>

          <section className="glass-bw rounded-2xl p-7 border border-white/20">
            <h2 className="text-2xl font-bold text-white mb-4">Screenshots</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {project.screenshots.map((screenshot) => (
                <figure key={screenshot.url} className="space-y-3">
                  <img
                    src={screenshot.url}
                    alt={screenshot.label}
                    loading="lazy"
                    className="w-full h-56 object-cover rounded-xl border border-white/20"
                  />
                  <figcaption className="text-sm text-gray-400">{screenshot.label}</figcaption>
                </figure>
              ))}
            </div>
          </section>
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 glass-bw border border-white/25 rounded-xl text-white hover:glass-bw-strong transition-colors"
            >
              View repository
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white text-black rounded-xl font-medium hover:bg-gray-200 transition-colors"
            >
              Open live demo
            </a>
          )}
        </div>
      </article>
    </section>
  );
};

export default ProjectCaseStudyPage;
