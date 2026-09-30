import React from "react";
import { BarChart3, Database, Server } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Server,
    title: "Backend systems",
    description:
      "Plan and build reliable REST APIs, authentication flows, database-backed features, and integrations for an early product or internal tool.",
    fit: "Useful when a working idea needs a dependable technical foundation.",
  },
  {
    icon: BarChart3,
    title: "Data and ML prototypes",
    description:
      "Turn a business question into a clean analysis, baseline model, evaluation workflow, or small Streamlit tool that people can actually inspect.",
    fit: "Useful when a team needs evidence before committing to a larger build.",
  },
  {
    icon: Database,
    title: "Technical project support",
    description:
      "Review an existing project, improve data or API structure, document the important decisions, and leave the codebase easier to continue.",
    fit: "Useful for student teams, founders, and small teams preparing for their next release.",
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="relative overflow-hidden bg-black py-20">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-gray-400">Work with me</p>
          <h2 className="mb-5 text-4xl font-bold text-white sm:text-5xl">Useful work, clearly scoped.</h2>
          <p className="text-lg leading-relaxed text-gray-400">
            I am available for focused freelance work, project collaborations, and junior data or backend roles. The best first step is a small, well-defined problem rather than a vague promise to build everything.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {services.map((service) => (
            <article key={service.title} className="glass-bw rounded-lg border border-white/15 p-6">
              <service.icon className="mb-6 text-white" size={28} strokeWidth={1.5} />
              <h3 className="mb-3 text-2xl font-bold text-white">{service.title}</h3>
              <p className="mb-5 leading-relaxed text-gray-300">{service.description}</p>
              <p className="border-t border-white/10 pt-4 text-sm leading-relaxed text-gray-500">{service.fit}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-start gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl text-gray-400">Have a problem in mind? Send the context, constraints, and what a useful outcome would look like.</p>
          <Link to="/contact" className="inline-flex items-center rounded-lg bg-white px-6 py-3 font-semibold text-black transition-colors hover:bg-gray-200">
            Start a conversation
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
