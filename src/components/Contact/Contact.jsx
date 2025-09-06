import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const contactCards = [
    {
      icon: <FaEnvelope className="text-4xl text-blue-500 mx-auto mb-4" />,
      title: "Email",
      text: "virusingh0125@gmail.com",
    },
    {
      icon: <FaPhone className="text-4xl text-green-500 mx-auto mb-4" />,
      title: "Phone",
      text: "+91 8384934907",
    },
    {
      icon: <FaMapMarkerAlt className="text-4xl text-red-500 mx-auto mb-4" />,
      title: "Location",
      text: "Jodhpur, Rajasthan",
    },
  ];

  return (
    <section
      id="contact"
      className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-12 bg-white overflow-hidden"
    >
      {/* Animated Background Blobs */}
      <motion.div className="absolute top-20 -left-10 w-64 sm:w-72 h-64 sm:h-72 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
      <motion.div className="absolute bottom-20 -right-10 w-72 sm:w-80 h-72 sm:h-80 bg-gradient-to-r from-blue-400 via-green-400 to-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />

      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 sm:mb-6 text-gray-900"
        >
          Get in Touch
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-lg text-gray-600 mb-12 sm:mb-16 max-w-2xl mx-auto"
        >
          Have a project in mind or just want to say hi? Let’s connect!
        </motion.p>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {contactCards.map((card, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, y: -6 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="p-6 sm:p-8 rounded-2xl bg-white/40 backdrop-blur-md border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-300 hover:border-purple-400/50"
            >
              {card.icon}
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-1 sm:mb-2">
                {card.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">{card.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 sm:mt-12 max-w-3xl mx-auto bg-white/60 backdrop-blur-lg p-6 sm:p-10 rounded-2xl shadow-xl border border-gray-200"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div className="relative">
              <input
                type="text"
                id="name"
                className="peer w-full p-3 sm:p-4 rounded-xl bg-transparent border border-gray-300 text-gray-800 focus:outline-none focus:ring-4 focus:ring-blue-200 focus:border-blue-400 transition-all duration-300"
                placeholder=" "
              />
              <label
                htmlFor="name"
                className="absolute left-3 sm:left-4 top-3 sm:top-4 text-gray-500 transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-focus:top-[-10px] peer-focus:text-sm peer-focus:text-blue-500 bg-white px-1"
              >
                Your Name
              </label>
            </div>
            <div className="relative">
              <input
                type="email"
                id="email"
                className="peer w-full p-3 sm:p-4 rounded-xl bg-transparent border border-gray-300 text-gray-800 focus:outline-none focus:ring-4 focus:ring-blue-200 focus:border-blue-400 transition-all duration-300"
                placeholder=" "
              />
              <label
                htmlFor="email"
                className="absolute left-3 sm:left-4 top-3 sm:top-4 text-gray-500 transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-focus:top-[-10px] peer-focus:text-sm peer-focus:text-blue-500 bg-white px-1"
              >
                Your Email
              </label>
            </div>
          </div>

          <div className="relative mt-4 sm:mt-6">
            <textarea
              id="message"
              rows="5"
              className="peer w-full p-3 sm:p-4 rounded-xl bg-transparent border border-gray-300 text-gray-800 focus:outline-none focus:ring-4 focus:ring-blue-200 focus:border-blue-400 transition-all duration-300"
              placeholder=" "
            ></textarea>
            <label
              htmlFor="message"
              className="absolute left-3 sm:left-4 top-3 sm:top-4 text-gray-500 transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-focus:top-[-10px] peer-focus:text-sm peer-focus:text-blue-500 bg-white px-1"
            >
              Your Message
            </label>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="mt-6 sm:mt-8 relative px-8 sm:px-10 py-3 sm:py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-semibold rounded-full shadow-lg overflow-hidden group w-full sm:w-auto"
          >
            <span className="relative z-10">Send Message</span>
            <span className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
