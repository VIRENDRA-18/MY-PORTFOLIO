import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="relative py-24 px-6 bg-gradient-to-b from-white via-blue-50 to-purple-50 overflow-hidden"
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
          className="text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text"
        >
          About Me
        </motion.h2>

        {/* Animated Underline */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto mt-3 rounded-full"
        />

        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-left max-w-3xl mx-auto"
        >
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">
            👋 Hi, I’m{" "}
            <span className="text-blue-600 font-bold">Virendra Singh</span>
          </h3>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            I’m a{" "}
            <span className="font-semibold text-purple-600">
              Front-End Developer
            </span>{" "}
            passionate about crafting{" "}
            <span className="text-blue-600">modern</span>,{" "}
            <span className="text-purple-600">minimal</span>, and{" "}
            <span className="text-pink-600">highly interactive</span> web
            applications. My goal is to create{" "}
            <span className="font-medium">smooth, fast,</span> and{" "}
            <span className="font-medium">visually stunning</span> digital
            experiences.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Beyond coding, I enjoy exploring{" "}
            <span className="font-semibold text-blue-600">
              new technologies
            </span>{" "}
            and contributing to{" "}
            <span className="font-semibold text-purple-600">open-source</span>{" "}
            projects, constantly learning to sharpen my skills.
          </p>

          {/* Tech Stack */}
          <h4 className="text-lg font-semibold text-gray-800 mb-3">
            ⚡ Technologies I work with:
          </h4>
          <div className="flex flex-wrap gap-3">
            {[
              "HTML5",
              "CSS",
              "JAVASCRIPT",
              "REACT.JS",
              "THREE.JS",
              "TAILWIND CSS",
              "MATERIAL-UI",
              "C++ PROGRAMMING",
            ].map((tech, i) => (
              <motion.span
                key={i}
                whileHover={{ scale: 1.12 }}
                className="px-4 py-2 text-sm bg-white/70 border rounded-full shadow-md text-gray-800 font-medium backdrop-blur-md hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:text-white transition-all"
              >
                {tech}
              </motion.span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="mt-10 flex gap-4 flex-wrap justify-center md:justify-start">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="px-7 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-full shadow-lg hover:shadow-2xl transition-all"
            >
              📩 Contact Me
            </motion.a>
            <motion.a
              href="/resume.pdf"
              download
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="px-7 py-3 bg-white font-medium border rounded-full shadow-md hover:shadow-xl hover:bg-gray-50 transition-all"
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
