import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const certificationList = [
  {
    id: 1,
    name: "정보처리기사",
    issuer: "한국산업인력공단",
    date: "2024-09-10",
    img: "/certification/kisa.png",
  },
  {
    id: 2,
    name: "리눅스마스터 2급",
    issuer: "한국정보통신진흥협회 ",
    date: "2024-06-28",
    img: "/certification/linux.png",
  },
  {
    id: 3,
    name: "네트워크 관리사 2급",
    issuer: "한국정보통신자격협회",
    date: "2024-04-09",
    img: "/certification/network.png",
  },
];

const Certification = () => {
  return (
    <motion.section
      id="certifications"
      className="bg-white dark:bg-gray-800 py-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-8 text-emerald-500">
          Certifications
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificationList.map((cert, index) => (
            <motion.div
              key={cert.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center mb-4">
                <h3 className="text-xl font-semibold">🏅 {cert.name}</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-2">
                <b>Issuer</b> {cert.issuer}
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                <b>Date</b> {cert.date}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Certification;
