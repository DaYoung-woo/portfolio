"use client";
import { useState } from "react";
import Nav from "@/components/Nav";
import About from "@/components/About";
import Thumb from "@/components/Thumb";
import Career from "@/components/Career";
import Activity from "@/components/Activity";
import Certification from "@/components/Certification";
import Contact from "@/components/Contact";
import Project from "@/components/Project";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`${darkMode ? "dark" : ""} transition-colors duration-300`}>
      <main className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen">
        <Nav darkMode={darkMode} setDarkMode={setDarkMode} />
        <Thumb />
        <About />
        <Career />
        <Project />
        <Activity />
        <Certification />
        <Contact />
      </main>
    </div>
  );
}
