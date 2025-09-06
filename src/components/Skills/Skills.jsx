import React from "react";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiThreedotjs, SiMui, SiCplusplus } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";

const skills = [
  { name: "HTML5", icon: <FaHtml5 className="text-5xl md:text-6xl text-orange-500" />, gradient: "from-pink-100 via-purple-100 to-blue-100" },
  { name: "CSS3", icon: <FaCss3Alt className="text-5xl md:text-6xl text-blue-500" />, gradient: "from-blue-100 via-teal-100 to-green-100" },
  { name: "JavaScript", icon: <FaJs className="text-5xl md:text-6xl text-yellow-500" />, gradient: "from-yellow-100 via-orange-100 to-pink-100" },
  { name: "React.js", icon: <FaReact className="text-5xl md:text-6xl text-blue-400" />, gradient: "from-green-100 via-teal-100 to-cyan-100" },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-5xl md:text-6xl text-cyan-500" />, gradient: "from-purple-100 via-pink-100 to-red-100" },
  { name: "Three.js", icon: <SiThreedotjs className="text-5xl md:text-6xl text-gray-700" />, gradient: "from-cyan-100 via-blue-100 to-indigo-100" },
  { name: "Framer Motion", icon: <TbBrandFramerMotion className="text-5xl md:text-6xl text-pink-500" />, gradient: "from-pink-100 via-purple-100 to-blue-100" },
  { name: "Material-UI", icon: <SiMui className="text-5xl md:text-6xl text-indigo-500" />, gradient: "from-blue-100 via-teal-100 to-green-100" },
  { name: "C++ Programming", icon: <SiCplusplus className="text-5xl md:text-6xl text-blue-700" />, gradient: "from-yellow-100 via-orange-100 to-pink-100" },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6 bg-white text-gray-900">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-14
                     text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500"
        >
          My Skills
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 md:gap-10">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`p-6 sm:p-8 md:p-10 rounded-2xl shadow-lg
                          bg-gradient-to-br ${skill.gradient} 
                          hover:scale-105 hover:shadow-2xl
                          transition-all duration-500`}
            >
              <div className="flex flex-col items-center gap-3 sm:gap-4">
                {skill.icon}
                <p className="text-sm sm:text-base md:text-lg font-semibold text-gray-800">
                  {skill.name}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
