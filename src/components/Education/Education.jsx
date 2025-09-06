import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { GraduationCap, School, BookOpen } from "lucide-react";

const education = [
  {
    degree: "🎓 Bachelor of Technology in Computer Science",
    school: "Jodhpur Institute of Engineering and Technology",
    year: "2022 - 2026",
    description:
      "Focused on software engineering, data structures, and web development. Graduated with honors.",
    colors: "from-purple-100 via-pink-100 to-blue-100",
    icon: <GraduationCap className="w-7 h-7 text-purple-600" />,
  },
  {
    degree: "🏫 Higher Secondary Education",
    school: "Alpha International Academy, Jaipur",
    year: "2021",
    description:
      "Specialized in Physics, Chemistry, and Mathematics. Built strong foundations in logical thinking.",
    colors: "from-blue-100 via-teal-100 to-green-100",
    icon: <School className="w-7 h-7 text-teal-600" />,
  },
  {
    degree: "📚 Secondary Education",
    school: "Shri Shyam Bal Sr. Sec. School Chhoti Khatu, Nagaur",
    year: "2019",
    description:
      "Completed secondary education with a strong focus on science and mathematics.",
    colors: "from-pink-100 via-orange-100 to-yellow-100",
    icon: <BookOpen className="w-7 h-7 text-orange-600" />,
  },
];

const emojis = ["🎓", "📘", "✏️", "📚", "🏫", "📝", "💡"];

const Education = () => {
  const [floatingEmojis, setFloatingEmojis] = useState([]);

  useEffect(() => {
    const generated = Array.from({ length: 15 }, () => ({
      emoji: emojis[Math.floor(Math.random() * emojis.length)],
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 8 + Math.random() * 5,
      size: 24 + Math.random() * 16,
    }));
    setFloatingEmojis(generated);
  }, []);

  return (
    <section 
    id = "education"
    className="relative py-24 bg-gradient-to-b from-white via-gray-50 to-white text-gray-900 overflow-hidden">
      {/* Floating Emojis Background */}
      {floatingEmojis.map((item, index) => (
        <motion.span
          key={index}
          initial={{ y: "110vh" }}
          animate={{ y: "-10vh" }}
          transition={{
            duration: item.duration,
            repeat: Infinity,
            delay: item.delay,
            ease: "linear",
          }}
          className="absolute"
          style={{
            left: `${item.left}%`,
            fontSize: `${item.size}px`,
            opacity: 0.2,
          }}
        >
          {item.emoji}
        </motion.span>
      ))}

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-purple-200/30 blur-[120px] rounded-full" />
        <div className="absolute bottom-20 right-1/4 w-72 h-72 bg-blue-200/30 blur-[120px] rounded-full" />
      </div>

      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-20"
      >
        <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">
          Education
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          My Academic Journey and Learning Milestones
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="relative max-w-5xl mx-auto">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-300 via-pink-300 to-blue-300 rounded-full" />
        <div className="space-y-20">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative flex items-center ${
                index % 2 === 0 ? "justify-start" : "justify-end"
              }`}
            >
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-purple-300 to-blue-300 rounded-full shadow-md shadow-purple-400/40 ring-4 ring-white" />
              <motion.div
                whileHover={{
                  scale: 1.05,
                  rotate: 0.5,
                }}
                className={`relative w-[45%] p-8 rounded-2xl shadow-lg transition-all duration-500 bg-gradient-to-r ${edu.colors} border border-white/70 backdrop-blur-md`}
              >
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                    {edu.icon}
                    <h3 className="text-2xl font-bold text-gray-800">
                      {edu.degree}
                    </h3>
                  </div>
                  <p className="text-lg font-medium text-gray-700">
                    {edu.school}
                  </p>
                  <p className="mt-2 text-sm text-gray-500">{edu.year}</p>
                  <p className="mt-4 text-gray-700 leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
