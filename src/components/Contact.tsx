import React from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { SiVelog } from "react-icons/si";

const Contact = () => {
  return (
    <motion.section
      id="contact"
      className="py-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-8 text-emerald-500 mb-8">
          Get In Touch
        </h2>

        <div className="flex justify-center space-x-4">
          <motion.a
            href="https://github.com/DaYoung-Woo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-emerald-500 hover:text-emerald-600"
            whileHover={{ scale: 1.2, rotate: 360 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            <FaGithub />
          </motion.a>
          <motion.a
            href="https://velog.io/@iamwooda"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-emerald-500 hover:text-emerald-600"
            whileHover={{ scale: 1.2, rotate: 360 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            <SiVelog />
          </motion.a>
        </div>
        <motion.p
          className="text-xl text-gray-700 dark:text-gray-300 mt-12 mb-8"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
        >
          읽어주셔서 감사합니다.
        </motion.p>
      </div>
    </motion.section>
  );
};

export default Contact;
