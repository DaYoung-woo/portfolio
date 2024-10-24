import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaEnvelope, FaGithub } from "react-icons/fa";
import { SiVelog } from "react-icons/si";

const iconList = [
  {
    title: "iamwooda0@gmail.com",
    icon: <FaEnvelope className="text-emerald-500 mr-3 text-xl" />,
  },
  {
    title: "github.com/DaYoung-woo",
    icon: <FaGithub className="text-emerald-500 mr-3 text-xl" />,
  },
  {
    title: "velog.io/@iamwooda",
    icon: <SiVelog className="text-emerald-500 mr-3 text-xl" />,
  },
];
const introduceList = [
  {
    title: "원활한 의사 소통 능력",
    content:
      "SHIELDRM 프로젝트를 진행하며 백엔드 개발자, 기획자, 디자이너와 직접 소통하면서 다양한 부서의 동료들과 원활하게 협력하는 능력을 키웠습니다. \n이를 통해 새로운 기능 추가나 변경 작업이 자주 발생하는 애자일 개발 환경에서도 신속하게 대응할 수 있는 역량을 강화했습니다.",
  },
  {
    title: "읽기 쉬운 코드 작성",
    content:
      "팀원들이 읽기 쉬운 코드 작성을 지향합니다. \n이를 위해 복잡한 로직들은 분리하여 한 가지 기능만을 수행하는 함수를 설계하고 가급적 작게 만듭니다. \n또한 직관적인 네이밍을 사용하여 함수의 역할을 명확하게 전달하고자 합니다.",
  },
  {
    title: "지속적인 자기 개발",
    content:
      "빠르게 변화하는 프론트엔드 기술 생태계에서 최신 트렌드를 주시하고 새로운 기술을 학습하는 데 열정적입니다. \n개인 프로젝트와 오픈소스 기여를 통해 실무에 적용 가능한 기술을 꾸준히 습득하고 있습니다.",
  },
];

const About = () => {
  return (
    <motion.section
      id="about"
      className="bg-gradient-to-b from-white to-gray-100 dark:from-gray-800 dark:to-gray-900 py-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-emerald-500">About Me</h2>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            className="w-full md:w-1/3 mb-8 md:mb-0"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="/profile.jpg"
              alt="profile"
              className="w-60 h-60 rounded-full object-cover mx-auto shadow-lg"
              width={240}
              height={240}
            />
          </motion.div>
          <motion.div
            className="w-full md:w-2/3 md:pl-12"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
              👋🏻 안녕하세요 프론트엔드 개발자 우다영입니다.
            </h3>
            <div className="space-y-4">
              {iconList.map((el) => (
                <motion.div
                  className="flex items-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  key={el.title}
                >
                  {el.icon}
                  <p>{el.title}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
        <motion.div
          className="mt-16"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-6">
            {introduceList.map((el) => (
              <motion.div
                key={el.title}
                className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <h4 className="text-lg font-semibold mb-2 text-emerald-500">
                  {el.title}
                </h4>
                <p className="text-gray-700 dark:text-gray-300 whitespace-pre-wrap">
                  {el.content}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
