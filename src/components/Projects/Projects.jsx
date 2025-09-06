import React from "react";
import { motion } from "framer-motion";
import { Code, Globe, Sparkles } from "lucide-react";

const projects = [
  {
    title: "Yoga Website",
    description: "A modern yoga landing page with React + Tailwind, minimal design & smooth animations.",
    tech: ["React", "Tailwind", "Framer Motion"],
    link: "https://yoga-website-jzzk8wblw-virendra-singhs-projects-32e149d5.vercel.app",
    icon: <Globe className="w-6 h-6 text-white" />,
    special: true,
    emojis: ["🧘‍♀️", "🌿", "🌸", "☀️", "🌊"],
    gradient:
      "bg-[conic-gradient(at_top_left,_#A8E6CF,_#D0F0FD,_#FFDAB9,_#E6E6FA,_#FFF5E1,_#FFEBEF)]",
  },
  {
    title: "AgroFuture-Agriculture-Website",
    description: "Interactive agriculture website with 3D animations, product listings & green tech.",
    tech: ["Three.js", "React.js", "Tailwind", "Framer Motion"],
    link: "https://agro-future-agriculture-website-he7p-pcvytzsp5.vercel.app",
    icon: <Sparkles className="w-6 h-6 text-green-600" />,
    special: true,
    emojis: ["🌱", "🌾", "🌻", "🚜", "🍎"],
    gradient:
      "bg-[conic-gradient(at_top_left,_#E6F7E6,_#DFFFD6,_#F0FFF0,_#FFFEE6,_#F9FFF5,_#E0F7FA)]",
    emojiAnimation: {
      duration: 8,
      yRange: 8,
      rotateRange: 5,
    },
  },
  {
    title: "Portfolio Website",
    description: "My personal portfolio website showcasing projects, skills & interactive 3D animations.",
    tech: ["React.js", "Three.js", "Tailwind", "Framer Motion"],
    link: "https://my-portfolio-v2l7-abqpduezm-virendra-singhs-projects-32e149d5.vercel.app",
    icon: <Globe className="w-6 h-6 text-pink-500" />,
    special: true,
    emojis: ["💻", "🎨", "🚀", "✨", "🌐"],
    gradient:
      "bg-[conic-gradient(at_top_left,_#FFD6E0,_#FFE1B5,_#D6F0FF,_#C6FFD6,_#F0E6FF,_#FFF0E6)]",
    emojiAnimation: {
      duration: 7,
      yRange: 10,
      rotateRange: 8,
    },
  },
  {
    title: "TODO-LIST-APP",
    description: "A dynamic task management app with charts, authentication & sleek UI animations.",
    tech: ["Javascript", "React.js", "Tailwind", "Framer Motion"],
    link: "https://to-do-list-qcxxsstxj-virendra-singhs-projects-32e149d5.vercel.app",
    icon: <Code className="w-6 h-6 text-yellow-500" />,
    special: true,
    emojis: ["📋", "✅", "📝", "⏰", "📌"],
    gradient:
      "bg-[conic-gradient(at_top_left,_#FFF5E6,_#FFFEE6,_#FFFACD,_#FFEFD5,_#FFF0F5,_#FFF8DC)]",
    emojiAnimation: {
      duration: 7,
      yRange: 10,
      rotateRange: 6,
    },
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
        <h2 className="text-4xl font-bold text-gray-800 relative inline-block">
          My Projects
          <span className="absolute left-0 -bottom-2 w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full" />
        </h2>
        <p className="text-gray-600 mt-3 text-lg">
          Showcasing my best works, experiments, and creative solutions.
        </p>
      </div>

      {/* Horizontal Scrollable Projects with Centering */}
      <div className="flex justify-center overflow-x-auto gap-6 py-4 px-[50px] scrollbar-thin scrollbar-thumb-purple-400 scrollbar-track-gray-100 scroll-snap-x snap-mandatory">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className={`relative flex-shrink-0 w-80 snap-center rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 ${
              project.special
                ? `${project.gradient} text-gray-800`
                : "bg-white/80 backdrop-blur-md"
            }`}
          >
            {/* Floating Emojis */}
            {project.special &&
              project.emojis &&
              project.emojis.map((emoji, i) => (
                <motion.span
                  key={i}
                  className="absolute text-3xl opacity-25"
                  style={{
                    top: `${20 + i * 12}%`,
                    left: `${10 + i * 12}%`,
                  }}
                  animate={
                    project.emojiAnimation
                      ? {
                          y: [0, -project.emojiAnimation.yRange, 0],
                          x: [0, 5, -5, 0],
                          rotate: [
                            0,
                            project.emojiAnimation.rotateRange,
                            -project.emojiAnimation.rotateRange,
                            0,
                          ],
                        }
                      : { y: [0, -15, 0] }
                  }
                  transition={{
                    duration: project.emojiAnimation
                      ? project.emojiAnimation.duration + i
                      : 3 + i,
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
              <h3 className="text-2xl font-bold">{project.title}</h3>
            </div>

            <p className="mb-4 relative z-10 text-gray-700">{project.description}</p>

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
          </motion.div>
        ))}
      </div>
    </section>
  );
}
