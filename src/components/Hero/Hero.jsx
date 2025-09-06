import React from "react";
import { motion } from "framer-motion";
import HeroCanvas from "../../three/HeroCanvas/HeroCanvas.jsx";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative h-screen flex flex-col md:flex-row justify-center items-center px-6 sm:px-12 md:px-16 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-100"
    >
      {/* Subtle Glow/Pattern Overlay */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.15),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(147,51,234,0.15),transparent_40%)]"></div>

      {/* Animated Gradient Light */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
        className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-gradient-to-tr from-purple-300 via-transparent to-blue-300 opacity-30 blur-3xl"
      ></motion.div>

      {/* Floating 3D Shapes */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 6 }}
        className="absolute top-16 sm:top-20 left-6 sm:left-10 w-24 sm:w-32 h-24 sm:h-32 bg-purple-300 rounded-full opacity-30 blur-2xl"
      ></motion.div>
      <motion.div
        animate={{ y: [0, 20, 0], x: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 8 }}
        className="absolute bottom-16 sm:bottom-20 right-6 sm:right-10 w-32 sm:w-40 h-32 sm:h-40 bg-blue-400 rounded-full opacity-30 blur-3xl"
      ></motion.div>

      {/* Left Section: Text */}
      <div className="flex-1 flex flex-col justify-center items-start text-left z-10 w-full md:w-1/2">
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text drop-shadow-md"
        >
          Virendra Singh
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="mt-4 text-base sm:text-lg md:text-2xl text-gray-700 max-w-full sm:max-w-lg"
        >
          🚀 Front-End Developer
        </motion.p>

        <motion.a
          href="#projects"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 sm:mt-8 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        >
          🔥 View My Work
        </motion.a>
      </div>

      {/* Right Section: 3D Cube */}
      <div className="flex-1 flex justify-center items-center w-full h-64 sm:h-96 md:h-full z-10 mt-10 md:mt-0">
        <HeroCanvas />
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="absolute bottom-6 text-gray-600 z-10 text-sm sm:text-base"
      >
        ⬇ Scroll
      </motion.div>
    </section>
  );
};

export default Hero;
