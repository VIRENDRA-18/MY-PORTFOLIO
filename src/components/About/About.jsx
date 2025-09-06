import React from "react";
import { motion } from "framer-motion";
// import profile from "../assets/profile.png";

const About = () => {
  return (
    <section
      id="about"
      className="relative py-24 px-6 bg-gradient-to-b from-white via-blue-50 to-purple-50 overflow-hidden"
    >
      {/* Background Glow/Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(59,130,246,0.08),transparent_50%),radial-gradient(circle_at_85%_80%,rgba(147,51,234,0.08),transparent_50%)]"></div>

      <div className="relative max-w-7xl mx-auto text-center z-10">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text"
        >
          About Me
        </motion.h2>

        {/* Underline Animation */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-3 rounded-full"
        />

        {/* Content */}
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20 mt-16">
          {/* Profile Card (optional) */}
          {/* <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="w-56 h-56 md:w-72 md:h-72 rounded-2xl shadow-xl overflow-hidden border-4 border-white bg-white/60 backdrop-blur-md group-hover:scale-105 transition-transform duration-500">
              <img
                src={profile}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-tr from-blue-500/20 to-purple-600/20"></div>
          </motion.div> */}

          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-left max-w-2xl"
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
              with a deep passion for crafting{" "}
              <span className="text-blue-600">modern</span>,{" "}
              <span className="text-purple-600">minimal</span>, and{" "}
              <span className="text-pink-600">highly interactive</span> web
              applications. My goal is to design{" "}
              <span className="font-medium">smooth, fast,</span> and{" "}
              <span className="font-medium">visually stunning</span> digital
              experiences that truly stand out and leave a lasting impact.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Beyond coding, I love exploring{" "}
              <span className="font-semibold text-blue-600">
                new technologies
              </span>
              , contributing to{" "}
              <span className="font-semibold text-purple-600">open-source</span>{" "}
              communities, and constantly learning to sharpen my skills.
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
                  whileHover={{ scale: 1.15 }}
                  className="px-4 py-2 text-sm bg-white/80 border rounded-full shadow-md text-gray-800 font-medium backdrop-blur-md hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:text-white transition-all"
                >
                  {tech}
                </motion.span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="mt-10 flex gap-4 flex-wrap">
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
      </div>
    </section>
  );
};

export default About;
