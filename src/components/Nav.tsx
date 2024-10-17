import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaMoon, FaSun } from "react-icons/fa";

const navItems = [
  "about",
  "career",
  "project",
  "activities",
  "certifications",
  "contact",
];

function Nav({
  darkMode,
  setDarkMode,
}: {
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
}) {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const currentSection = navItems.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-800 shadow-md z-50">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          <motion.h1
            className="font-bold text-emerald-500"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Image src="/logo.svg" width={120} height={120} alt="Logo" />
          </motion.h1>
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <motion.a
                key={item}
                href={`#${item}`}
                className={`capitalize ${
                  activeSection === item
                    ? "text-emerald-500"
                    : "hover:text-emerald-500"
                } transition-colors`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {item}
              </motion.a>
            ))}
            <motion.button
              onClick={() => setDarkMode(!darkMode)}
              className="ml-4 text-emerald-500"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {darkMode ? <FaSun /> : <FaMoon />}
            </motion.button>
          </div>
          <div className="md:hidden flex items-center">
            <motion.button
              onClick={() => setDarkMode(!darkMode)}
              className="mr-4 text-emerald-500"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {darkMode ? <FaSun /> : <FaMoon />}
            </motion.button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
