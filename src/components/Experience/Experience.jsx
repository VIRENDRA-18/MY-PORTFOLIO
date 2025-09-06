// src/components/Experience.jsx
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, Code2, Palette } from "lucide-react";

const experiences = [
  {
    title: "Frontend Developer Intern",
    company: "Celebal Technologies",
    year: "2025",
    description:
      "Built modern UI components using React, Tailwind CSS, and Framer Motion.",
    icon: <Code2 className="w-6 h-6 text-purple-500" />,
  },
  {
    title: "Frontend Development Trainee",
    company: "Zeetron Networks, Jaipur",
    year: "2024",
    description:
      "Gained practical experience in modern frontend technologies (HTML5, CSS3, JavaScript, React.js, and Tailwind CSS).",
    icon: <Palette className="w-6 h-6 text-pink-500" />,
  },
];

const floatingEmojis = ["💼", "👨‍💻", "✨", "🎨", "🔥", "🖥️", "🚀"];

const FloatingEmoji = ({ emoji, delay, x, y }) => (
  <motion.div
    initial={{ opacity: 0, y }}
    animate={{
      opacity: [0.1, 0.6, 0.1],
      y: [y, y - 60, y],
      x: [x, x + 40, x],
      rotate: [0, 8, -8, 0],
    }}
    transition={{
      duration: 10,
      delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="absolute text-4xl sm:text-5xl select-none pointer-events-none"
    style={{ left: `${x}px`, top: `${y}px` }}
  >
    {emoji}
  </motion.div>
);

const Experience = () => {
  const [emojiPositions, setEmojiPositions] = useState([]);

  useEffect(() => {
    const positions = floatingEmojis.map(() => ({
      x: Math.random() * window.innerWidth * 0.8,
      y: Math.random() * window.innerHeight * 0.6,
    }));
    setEmojiPositions(positions);
  }, []);

  return (
    <section
      id="experience"
      className="relative w-full py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white to-gray-100 text-gray-900 overflow-hidden"
    >
      {/* Floating Emojis */}
      <div className="absolute inset-0 -z-10">
        {emojiPositions.map((pos, i) => (
          <FloatingEmoji
            key={i}
            emoji={floatingEmojis[i]}
            delay={i * 1.5}
            x={pos.x}
            y={pos.y}
          />
        ))}
      </div>

      {/* Background Blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-0 w-56 sm:w-72 h-56 sm:h-72 bg-purple-400/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-10 right-0 w-56 sm:w-72 h-56 sm:h-72 bg-blue-400/20 blur-[120px] rounded-full" />
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12 sm:mb-16"
      >
        <h2 className="relative text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 inline-block">
          <Briefcase className="inline-block w-8 sm:w-10 h-8 sm:h-10 mr-2 text-purple-500" />
          Experience
          <span className="absolute left-1/2 -bottom-3 w-16 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full transform -translate-x-1/2 animate-pulse" />
        </h2>
        <p className="text-gray-600 mt-3 sm:mt-5 text-base sm:text-lg">
          A premium look at my professional journey
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
        {/* Vertical Line */}
        <div className="absolute left-1/2 top-0 w-1 h-full bg-gradient-to-b from-purple-500 via-pink-500 to-blue-500 rounded-full transform -translate-x-1/2 hidden sm:block" />

        <div className="space-y-12 sm:space-y-20">
          {experiences.map((exp, index) => {
            const isLeft = index % 2 === 0;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex flex-col sm:flex-row items-center w-full ${
                  isLeft ? "sm:justify-start" : "sm:justify-end"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute sm:left-1/2 transform sm:-translate-x-1/2 top-0 w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full shadow-lg flex items-center justify-center ring-4 ring-white animate-pulse">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-white rounded-full" />
                </div>

                {/* Card */}
                <motion.div
                  whileHover={{ scale: 1.05, rotateY: isLeft ? -3 : 3 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className={`relative w-full sm:w-[45%] mt-6 sm:mt-0 p-1 sm:p-[2px] rounded-2xl bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 ${
                    isLeft ? "sm:mr-auto" : "sm:ml-auto"
                  }`}
                >
                  <div className="relative p-4 sm:p-6 md:p-8 rounded-2xl bg-white/80 backdrop-blur-lg shadow-xl">
                    <div className="absolute -top-4 sm:-top-5 right-4 sm:right-6 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-3 py-1 sm:px-4 sm:py-1.5 rounded-full text-xs sm:text-sm font-bold shadow-lg">
                      {exp.year}
                    </div>
                    <div className="mb-3">{exp.icon}</div>
                    <h3 className="text-lg sm:text-2xl font-bold text-gray-900">
                      {exp.title}
                    </h3>
                    <p className="text-gray-700 font-medium text-sm sm:text-base">
                      {exp.company}
                    </p>
                    <p className="mt-2 sm:mt-3 text-gray-600 text-sm sm:text-base leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
