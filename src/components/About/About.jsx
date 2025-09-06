import React from "react";
import { motion } from "framer-motion";

const About = () => {
  const techs = [
    "HTML5",
    "CSS",
    "JAVASCRIPT",
    "REACT.JS",
    "THREE.JS",
    "TAILWIND CSS",
    "MATERIAL-UI",
    "C++ PROGRAMMING",
  ];

  return (
    <section
      id="about"
      className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-12 bg-gradient-to-b from-white via-blue-50 to-purple-50 overflow-hidden"
    >
      {/* Background Glow/Pattern */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_20%,rgba(59,130,246,0.06),transparent_50%),radial-gradient(circle_at_85%_80%,rgba(147,51,234,0.06),transparent_50%)] animate-slow-pulse"></div>

      <div className="relative max-w-7xl mx-auto text-center z-10">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
        >
          About Me
        </motion.h2>

        {/* Animated Underline */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="w-16 sm:w-20 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto mt-3 rounded-full"
        />

        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 text-left max-w-3xl mx-auto"
        >
          <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-gray-800">
            👋 Hi, I’m{" "}
            <span className="text-blue-600 font-bold">Virendra Singh</span>
          </h3>

          <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-6">
            I’m a{" "}
            <span className="font-semibold text-purple-600">
              Front-End Developer
            </span>{" "}
            passionate about crafting <span className="text-blue-600">modern</span>,{" "}
            <span className="text-purple-600">minimal</span>, and{" "}
            <span className="text-pink-600">highly interactive</span> web
            applications. My goal is to create{" "}
            <span className="font-medium">smooth, fast,</span> and{" "}
            <span className="font-medium">visually stunning</span> digital
            experiences.
          </p>

          <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-6">
            Beyond coding, I enjoy exploring{" "}
            <span className="font-semibold text-blue-600">new technologies</span>{" "}
            and contributing to{" "}
            <span className="font-semibold text-purple-600">open-source</span>{" "}
            projects, constantly learning to sharpen my skills.
          </p>

          {/* Tech Stack */}
          <h4 className="text-base sm:text-lg font-semibold text-gray-800 mb-2 sm:mb-3">
            ⚡ Technologies I work with:
          </h4>
          <div className="flex flex-wrap gap-2 sm:gap-3 justify-center sm:justify-start">
            {techs.map((tech, i) => (
              <motion.span
                key={i}
                whileHover={{ scale: 1.1 }}
                className="px-3 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm bg-white/70 border rounded-full shadow-md text-gray-800 font-medium backdrop-blur-md hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:text-white transition-all"
              >
                {tech}
              </motion.span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="mt-6 sm:mt-10 flex flex-wrap gap-3 justify-center sm:justify-start">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 sm:px-7 py-2 sm:py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-full shadow-lg hover:shadow-2xl transition-all"
            >
              📩 Contact Me
            </motion.a>
            <motion.a
              href="/resume.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 sm:px-7 py-2 sm:py-3 bg-white font-medium border rounded-full shadow-md hover:shadow-xl hover:bg-gray-50 transition-all"
            >
              📄 Download CV
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
