import React from "react";
import { motion } from "framer-motion";
import { Code, Globe, Sparkles } from "lucide-react";

const projects = [
  {
    title: "Yoga Website",
    description: "A modern yoga landing page with React + Tailwind.",
    tech: ["React", "Tailwind", "Framer Motion"],
    link: "https://yoga-website-jzzk8wblw-virendra-singhs-projects-32e149d5.vercel.app",
    icon: <Globe className="w-6 h-6 text-white" />,
    special: true,
    emojis: ["🧘‍♀️", "🌿", "🌸", "☀️", "🌊"], // Floating emojis
  },
  {
    title: "AgroFuture-Agriculture-Website",
    description: "Interactive 3D portfolio with animations & glassmorphism.",
    tech: ["Three.js", "React.js", "Tailwind", "Framer Motion"],
    link: "https://agro-future-agriculture-website-he7p-pcvytzsp5.vercel.app",
    icon: <Sparkles className="w-6 h-6 text-pink-500" />,
  },
  {
    title: "TODO-LIST-APP",
    description: "Custom ERP dashboard with charts & authentication.",
    tech: ["Javascript", "React.js", "Tailwind"],
    link: "https://to-do-list-qcxxsstxj-virendra-singhs-projects-32e149d5.vercel.app",
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

      {/* Project Timeline */}
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
            <div
              className={`relative overflow-hidden rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 ${
                project.special
                  ? "bg-[conic-gradient(at_top_left,_#A8E6CF,_#D0F0FD,_#FFDAB9,_#E6E6FA,_#FFF5E1,_#FFEBEF)] text-gray-800"
                  : "bg-white/80 backdrop-blur-md"
              }`}
            >
              {/* Floating Emojis for Yoga Card */}
              {project.special &&
                project.emojis &&
                project.emojis.map((emoji, i) => (
                  <motion.span
                    key={i}
                    className="absolute text-3xl opacity-30"
                    style={{
                      top: `${20 + i * 15}%`,
                      left: `${15 + i * 12}%`,
                    }}
                    animate={{ y: [0, -15, 0] }}
                    transition={{
                      duration: 3 + i,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.5,
                    }}
                  >
                    {emoji}
                  </motion.span>
                ))}

              {/* Card Content */}
              <div className="flex items-center gap-3 mb-3 relative z-10">
                {project.icon}
                <h3
                  className={`text-2xl font-bold ${
                    project.special ? "text-gray-800" : "text-gray-800"
                  }`}
                >
                  {project.title}
                </h3>
              </div>

              <p
                className={`mb-4 relative z-10 ${
                  project.special ? "text-gray-700" : "text-gray-600"
                }`}
              >
                {project.description}
              </p>

              {/* Tech Badges */}
              <div className="flex flex-wrap gap-2 mb-4 relative z-10">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className={`px-3 py-1 text-sm rounded-full shadow-md ${
                      project.special
                        ? "bg-white/40 text-gray-800 border border-white/50"
                        : "bg-gradient-to-r from-purple-500 to-blue-500 text-white"
                    }`}
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Simple Project Link */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`relative z-10 inline-block px-4 py-2 rounded-md font-medium transition-colors duration-300 ${
                  project.special
                    ? "bg-white/40 text-gray-800 border border-white/60 hover:bg-white/60"
                    : "border border-purple-500 text-purple-600 hover:bg-purple-500 hover:text-white"
                }`}
              >
                View Project
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
