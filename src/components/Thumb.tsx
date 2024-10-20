import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const Thumb = () => {
  return (
    <AnimatePresence>
      <motion.section
        id="hero"
        className="relative w-full min-h-screen flex flex-col justify-center items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* 배경 이미지 */}
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center z-0"
          style={{ backgroundImage: "url('/hero-background.jpg')" }}
        ></div>

        {/* 반투명 오버레이 */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10"></div>

        {/* 컨텐츠 */}
        <div className="container mx-auto px-6 text-center relative z-20">
          <motion.h2
            className="text-6xl font-bold mb-4 text-white"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Frontend Developer
          </motion.h2>
          <motion.h2
            className="text-2xl mb-8 text-white"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            우다영의 포트폴리오에 오신 것을 환영합니다.
          </motion.h2>
        </div>
      </motion.section>
    </AnimatePresence>
  );
};

export default Thumb;
