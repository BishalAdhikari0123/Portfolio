import { ArrowRight, BarChart3, Database, Download, GitBranch, ShieldCheck, Table2 } from "lucide-react";
import { Link } from "react-router-dom";

const dataScienceTools = [
  {
    name: "Pandas",
    category: "DATA WRANGLING",
    description: "Clean, transform, join, and inspect tabular datasets with a dependable Python workflow.",
    href: "https://pandas.pydata.org/docs/",
    icon: Table2,
  },
  {
    name: "scikit-learn",
    category: "MACHINE LEARNING",
    description: "Build reproducible baselines with preprocessing, model selection, and evaluation utilities.",
    href: "https://scikit-learn.org/stable/user_guide.html",
    icon: GitBranch,
  },
  {
    name: "SHAP",
    category: "MODEL EXPLAINABILITY",
    description: "Understand which features influence a prediction and communicate model behaviour clearly.",
    href: "https://shap.readthedocs.io/en/latest/",
    icon: ShieldCheck,
  },
  {
    name: "MLflow",
    category: "EXPERIMENT TRACKING",
    description: "Track parameters, metrics, artifacts, and model versions while experiments evolve.",
    href: "https://mlflow.org/docs/latest/ml/tracking/",
    icon: BarChart3,
  },
  {
    name: "DuckDB",
    category: "ANALYTICS SQL",
    description: "Query local CSV, Parquet, and JSON files quickly without standing up a database server.",
    href: "https://duckdb.org/docs/",
    icon: Database,
  },
];

const ToolsPage: React.FC = () => {
  return (
    <section className="relative min-h-[75vh] overflow-hidden bg-black py-20">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-gray-400">Open resources</p>
          <h1 className="mb-5 text-4xl font-bold text-white sm:text-5xl">Small tools for better project decisions.</h1>
          <p className="text-lg leading-relaxed text-gray-400">
            Practical utilities and checklists from my work across data science and backend development. No signup required.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <article className="glass-bw rounded-lg border border-white/15 p-7">
            <BarChart3 className="mb-6 text-white" size={30} strokeWidth={1.5} />
            <p className="mb-2 text-sm text-gray-500">DATA SCIENCE</p>
            <h2 className="mb-3 text-2xl font-bold text-white">Classification metrics calculator</h2>
            <p className="mb-7 leading-relaxed text-gray-300">
              Explore precision, recall, F1 score, and accuracy from a confusion matrix. A quick way to think beyond a single headline metric.
            </p>
            <Link to="/tools/model-metrics" className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 font-semibold text-black hover:bg-gray-200">
              Open calculator <ArrowRight size={17} />
            </Link>
          </article>

          <article className="glass-bw rounded-lg border border-white/15 p-7">
            <Download className="mb-6 text-white" size={30} strokeWidth={1.5} />
            <p className="mb-2 text-sm text-gray-500">DOWNLOADABLE CHECKLIST</p>
            <h2 className="mb-3 text-2xl font-bold text-white">Data Project Checklist</h2>
            <p className="mb-7 leading-relaxed text-gray-300">
              A practical markdown checklist covering problem definition, data quality, leakage, evaluation, explanation, and responsible release.
            </p>
            <a href="/data-project-checklist.md" download className="inline-flex items-center gap-2 rounded-lg border border-white/25 px-5 py-3 font-semibold text-white hover:bg-white/10">
              Download checklist <Download size={17} />
            </a>
          </article>
        </div>

        <div className="mt-14">
          <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-gray-400">My working toolkit</p>
              <h2 className="text-3xl font-bold text-white">Data science tools worth knowing.</h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-gray-500">A short list of the libraries and platforms I reach for when moving from raw data to a model I can explain.</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {dataScienceTools.map(({ name, category, description, href, icon: Icon }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="glass-bw group rounded-lg border border-white/15 p-6 transition-colors hover:border-white/40"
              >
                <Icon className="mb-5 text-white" size={26} strokeWidth={1.5} />
                <p className="mb-2 text-xs font-semibold tracking-[0.14em] text-gray-500">{category}</p>
                <h3 className="mb-3 text-xl font-bold text-white">{name}</h3>
                <p className="mb-5 text-sm leading-relaxed text-gray-400">{description}</p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-white">
                  View documentation <ArrowRight className="transition-transform group-hover:translate-x-1" size={16} />
                </span>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-7 text-gray-400">
          Need something tailored to your data or API workflow? <Link to="/contact" className="text-white underline-animate">Start a project conversation.</Link>
        </div>
      </div>
    </section>
  );
};

export default ToolsPage;
