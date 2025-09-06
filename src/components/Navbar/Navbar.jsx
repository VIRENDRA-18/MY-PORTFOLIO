import React from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 w-full backdrop-blur-lg bg-white/70 shadow-md z-50 px-8 py-4 flex justify-between items-center"
    >
      <h1 className="text-2xl font-bold text-gradient">Portfolio</h1>
      <div className="space-x-6 font-medium hidden md:flex">
        <a href="#home" className="hover:text-blue-500">Home</a>
        <a href="#about" className="hover:text-blue-500">About</a>
        <a href="#experience" className="hover:text-blue-500">Experience</a>
        <a href="#skills" className="hover:text-blue-500">Skills</a>
        <a href="#projects" className="hover:text-blue-500">Projects</a>
        <a href="#education" className="hover:text-blue-500">Education</a>
        <a href="#contact" className="hover:text-blue-500">Contact</a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
