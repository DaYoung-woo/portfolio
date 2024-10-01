import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";

const NavBar = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "career", "project", "certifications", "activities", "contact"];
      const currentSection = sections.find((section) => {
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

  const navItems = [
    "about",
    "career",
    "project",
    "certifications",
    "activities",
    "contact",
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-800 shadow-md z-50">
      <div className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <motion.h1
            className="font-bold text-orange-500"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img src="/logo.svg" alt="Logo" width={120} height={120} />
          </motion.h1>
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <motion.a
                key={item}
                href={`#${item}`}
                className={`capitalize ${
                  activeSection === item ? "text-orange-500" : "hover:text-orange-500"
                } transition-colors`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {item}
              </motion.a>
            ))}
            <motion.button
              onClick={() => setDarkMode(!darkMode)}
              className="ml-4 text-orange-500"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {darkMode ? <FaSun /> : <FaMoon />}
            </motion.button>
          </div>
          <div className="md:hidden flex items-center">
            <motion.button
              onClick={() => setDarkMode(!darkMode)}
              className="mr-4 text-orange-500"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {darkMode ? <FaSun /> : <FaMoon />}
            </motion.button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white dark:bg-gray-800"
          >
            {navItems.map((item) => (
              <motion.a
                key={item}
                href={`#${item}`}
                className={`block px-6 py-2 capitalize ${
                  activeSection === item ? "text-orange-500" : "hover:text-orange-500"
                } transition-colors`}
                onClick={() => setIsOpen(false)}
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                {item}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default NavBar;