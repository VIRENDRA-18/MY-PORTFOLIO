import React from "react";
import { motion } from "framer-motion";
import { Code, Globe, Sparkles } from "lucide-react";

const projects = [
  {
    title: "Yoga Website",
    description: "A modern yoga landing page with React + Tailwind.",
    tech: ["React", "Tailwind", "Framer Motion"],
    link: "#",
    icon: <Globe className="w-6 h-6 text-purple-500" />,
  },
  {
    title: "Portfolio 3D",
    description: "Interactive 3D portfolio with animations & glassmorphism.",
    tech: ["Three.js", "React", "Vite"],
    link: "#",
    icon: <Sparkles className="w-6 h-6 text-pink-500" />,
  },
  {
    title: "ERP Dashboard",
    description: "Custom ERP dashboard with charts & authentication.",
    tech: ["Next.js", "Tailwind", "MongoDB"],
    link: "#",
    icon: <Code className="w-6 h-6 text-blue-500" />,
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-24 px-6 bg-gradient-to-b from-gray-50 via-white to-gray-100"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-400/30 blur-[150px] rounded-full" />
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-400/30 blur-[150px] rounded-full" />
      </div>

      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600">
          My Projects 🚀
        </h2>
        <p className="text-gray-600 mt-3 text-lg max-w-xl mx-auto">
          Showcasing my best works, experiments, and creative solutions.
        </p>
      </div>

      {/* Project Timeline Style */}
      <div className="relative border-l-4 border-purple-400 pl-8 space-y-14 max-w-3xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Timeline Dot */}
            <div className="absolute -left-[38px] top-2 w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-lg border-4 border-white" />

            {/* Project Card */}
            <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                {project.icon}
                <h3 className="text-2xl font-bold text-gray-800">
                  {project.title}
                </h3>
              </div>
              <p className="text-gray-600 mb-4">{project.description}</p>

              {/* Tech Badges */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-md"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Project Link */}
              <a
                href={project.link}
                className="inline-block text-purple-600 font-semibold hover:text-pink-500 transition-colors"
              >
                🔗 View Project
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
