// src/components/Projects.jsx
import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "One-Jeet-Yoga-Website",
    description:
      "A modern, minimal, and fully responsive personal portfolio built with React.js, Tailwind CSS, and Framer Motion.",
    tech: ["React", "Tailwind", "Framer Motion"],
    live: "https://yoga-website-beta-bice.vercel.app",
    github: "https://github.com/VIRENDRA-18/Yoga-Website.git",
    icon: "🧘",
  },
  {
    title: "AgroFuture-Agriculture-Website",
    description:
      "Developed a feature-rich e-commerce platform with product listings, cart, and checkout functionality.",
    tech: ["React", "Redux", "Node.js"],
    live: "https://agro-future-agriculture-website-he7p-pcvytzsp5.vercel.app",
    github: "https://github.com/VIRENDRA-18/AgroFuture-Agriculture-Website.git",
    icon: "🌱",
  },
  {
    title: "3D Portfolio Experience",
    description:
      "Interactive 3D portfolio section using Three.js, showcasing innovative animations and immersive UI.",
    tech: ["React", "Three.js", "GSAP"],
    live: "https://3d-portfolio.com",
    github: "https://github.com/username/3d-portfolio",
    icon: "🎨",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative py-20 px-6 bg-gradient-to-b from-gray-50 via-white to-gray-100 overflow-hidden"
    >
      {/* Glowing Background Shapes */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-400/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-400/20 blur-[120px] rounded-full" />
      </div>

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="relative text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 inline-block">
          Projects
          <span className="absolute left-1/2 -bottom-3 w-16 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full transform -translate-x-1/2 animate-pulse" />
        </h2>
        <p className="text-gray-600 mt-5 text-lg">
          A showcase of some of my best works and experiments
        </p>
      </motion.div>

      {/* Project Cards */}
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            viewport={{ once: true }}
            className="group relative rounded-2xl border border-gray-200 bg-white/80 backdrop-blur-lg p-6 shadow-md hover:shadow-2xl hover:border-purple-400/60 transition-all duration-500"
          >
            {/* Project Icon / Badge */}
            <div className="flex items-center justify-center w-14 h-14 mb-4 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 text-white text-2xl shadow-lg">
              {project.icon}
            </div>

            {/* Content */}
            <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
              {project.title}
            </h3>
            <p className="text-gray-600 text-sm mb-4 leading-relaxed">
              {project.description}
            </p>

            {/* Tech stack */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((t, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex gap-6">
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-purple-600 hover:text-purple-800 font-medium relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-purple-500 hover:after:w-full after:transition-all"
              >
                <ExternalLink size={16} /> Live
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-700 hover:text-gray-900 font-medium relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-gray-700 hover:after:w-full after:transition-all"
              >
                <Github size={16} /> Code
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
