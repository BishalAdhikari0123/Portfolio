import CaseStudyCard from "../components/CaseStudyCard";
import { projectCaseStudies } from "../data/projects";
import { Link } from "react-router-dom";

const ProjectsPage: React.FC = () => {
  return (
    <section className="py-20 bg-black relative overflow-hidden min-h-[70vh]">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-14">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Project Case Studies</h1>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            Every project is documented with Problem, Solution, Tech used, Challenges, and Images.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {projectCaseStudies.map((project) => (
            <CaseStudyCard key={project.slug} project={project} />
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-gray-400 mb-4">
            Looking for implementation details behind these case studies?
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link to="/blog" className="px-5 py-2.5 bg-white text-black rounded-xl font-medium hover:bg-gray-200 transition-colors">
              Read blog articles
            </Link>
            <Link to="/tutorials" className="px-5 py-2.5 border border-white/30 text-white rounded-xl font-medium hover:bg-white/10 transition-colors">
              Read tutorials
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;
