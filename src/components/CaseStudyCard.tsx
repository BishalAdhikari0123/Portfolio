import { Link } from "react-router-dom";
import { ProjectCaseStudy } from "../types/content";

type CaseStudyCardProps = {
  project: ProjectCaseStudy;
};

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ project }) => {
  return (
    <article className="glass-bw rounded-2xl border border-white/15 p-6 hover:glass-bw-strong hover:border-white/35 transition-all duration-300">
      <div className="flex items-center justify-between gap-3 mb-4">
        <h3 className="text-xl font-bold text-white">{project.title}</h3>
        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white text-black">
          {project.year}
        </span>
      </div>

      <p className="text-gray-300 mb-5 leading-relaxed">{project.summary}</p>

      <div className="space-y-4 mb-5">
        <div>
          <h4 className="text-white font-semibold mb-1">Problem</h4>
          <p className="text-gray-400 text-sm leading-relaxed">{project.problem}</p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-1">What I built</h4>
          <p className="text-gray-400 text-sm leading-relaxed">{project.solution}</p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-1">Result</h4>
          <p className="text-gray-400 text-sm leading-relaxed">{project.summary}</p>
        </div>
      </div>

      <div className="mb-5">
        <h4 className="text-white font-semibold mb-2">Tech used</h4>
        <div className="flex flex-wrap gap-2">
          {project.techUsed.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-md text-xs bg-white/10 text-gray-200 border border-white/20"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h4 className="text-white font-semibold mb-2">Challenges</h4>
        <ul className="list-disc list-inside text-sm text-gray-400 space-y-1">
          {project.challenges.slice(0, 2).map((challenge) => (
            <li key={challenge}>{challenge}</li>
          ))}
        </ul>
      </div>

      <Link
        to={`/projects/${project.slug}`}
        className="inline-flex items-center px-5 py-2.5 bg-white text-black rounded-xl font-medium hover:bg-gray-200 transition-colors duration-200"
      >
        Read full case study
      </Link>
    </article>
  );
};

export default CaseStudyCard;
