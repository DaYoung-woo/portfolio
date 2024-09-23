"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaMoon,
  FaSun,
  FaExternalLinkAlt,
  FaCertificate,
  FaLink,
  FaBuilding,
  FaGraduationCap,
} from "react-icons/fa";
import { PiCertificateThin } from "react-icons/pi";

const certifications = [
  {
    id: 1,
    name: "정보처리기사",
    issuer: "한국산업인력공단",
    date: "2024-09-10",
    img: "/kisa.png",
  },
  {
    id: 2,
    name: "리눅스마스터 2급",
    issuer: "한국정보통신진흥협회 ",
    date: "2024-06-28",
    img: "/linux.png",
  },
  {
    id: 3,
    name: "네트워크 관리사 2급",
    issuer: "한국정보통신자격협회",
    date: "2024-04-09",
    img: "/network.png",
  },
];

const project = {
  title: "My Amazing Project",
  description:
    "This is a detailed description of my project. It showcases my skills in frontend development and problem-solving abilities.",
  longDescription:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  tech: ["React", "Next.js", "Tailwind CSS", "Node.js"],
  image: "/project-image.jpg",
  githubLink: "https://github.com/yourusername/project",
  liveLink: "https://your-project-url.com",
};

const careerExperiences = [
  {
    company: "SHIELDRM",
    duration: "1년 4개월",
    period: "2022.12 ~ 2024.03",
    description:
      "SHIELDInfo는 문서 분류, 등급 관리, 원본 증명을 통해 영업비밀과 같은 중요 정보를 보호합니다.",
    experiences: [
      "문서의 분류 관리 기능 구현",
      "문서의 등급 기능 구현",
      "지원 중단된 Moment.js 라이브러리를 더 가벼운 Day.js 라이브러리로 변경하여 경량화 및 안정성을 개선",
      "여러 컴포넌트에서 사용하는 공통 에러 처리에 대한 코드를 Mixin에 선언하여 코드 중복도를 감소시키고 효율적으로 관리",
      "chart.js 라이브러리를 사용하여 데이터를 시각적으로 표현하고 그래프에 hover 효과를 사용하여 사용자 친화적인 인터페이스 제공",
    ],
  },
  {
    company: "SHIELDGate",
    duration: "7개월",
    period: "2022.03 ~ 2022.10",
    description:
      "SHIELDGate는 제로트러스트 보안을 기반으로 하는 조건부 접근 정책을 적용한 원격 접속 서비스입니다. GS인증을 받은 제품입니다.",
    experiences: [
      "접속 위치, 시간에 따라 사용자의 접근을 제어하는 조건부 정책 관리 기능 구현",
      "업무 시스템을 연결할 앱 관리 기능 구현",
      "vue-i18n 라이브러리를 사용하여 글로벌 사용자를 위한 다국어 지원(한국어, 영어, 일본어)",
      "공통 컴포넌트(checkbox, button, input) 개발하여 일관된 디자인/스타일을 제공하고 코드의 재사용성 증가",
      "props로 전달하던 데이터를 상태 관리 라이브러리에서 관리하도록 변경하여 여러 컴포넌트 간에 데이터를 공유하고 통일된 상태를 유지하게 하여 생산성 증가",
      "인피니트 스크롤 라이브러리를 활용해 페이징 기능 구현",
    ],
  },
  {
    company: "SHIELDInfo",
    duration: "5개월",
    period: "2021.09 ~ 2022.02",
    description:
      "SHIELDInfo는 문서 분류, 등급 관리, 원본 증명을 통해 영업비밀과 같은 중요 정보를 보호합니다.",
    experiences: [
      "문서의 분류 관리 기능 구현",
      "문서의 등급 기능 구현",
      "지원 중단된 Moment.js 라이브러리를 더 가벼운 Day.js 라이브러리로 변경하여 경량화 및 안정성을 개선",
      "여러 컴포넌트에서 사용하는 공통 에러 처리에 대한 코드를 Mixin에 선언하여 코드 중복도를 감소시키고 효율적으로 관리",
      "chart.js 라이브러리를 사용하여 데이터를 시각적으로 표현하고 그래프에 hover 효과를 사용하여 사용자 친화적인 인터페이스 제공",
    ],
  },
];

const activities = [
  {
    title: "클라우딩 어플리케이션 엔지니어링 데브코스",
    description: `클라우드 애플리케이션 엔지니어링 데브코스 수업을 통해 React와 React Native에 대한 숙련도를 높였습니다.\n 
    열정적으로 참여하여 개인 프로젝트에서 좋은 결과를 도출하여 발표를 진행했습니다.`,
    videoLink: "https://www.youtube.com/embed/0f9AZ6O93Ig", // Replace with actual link
  },
  {
    title: "2024 오픈소스 컨트리뷰션 아카데미",
    description:
      "git 연동이 안 된 프로젝트에서 무한로딩이 발생하는 증상을 발견하여 이슈를 리포트했습니다.\n 같이 활동을 하는 팀원과 함께 문제를 해결하여 풀리퀘스트를 생성했습니다.",
    link: "https://github.com/your-contribution-link", // Replace with actual link
  },
];

const career = {
  tech: [
    "VUE",
    "Vuetify",
    "Vuex",
    "Axios",
    "Vue-cli",
    "figma",
    "git",
    "vue-router",
    "Azure DevOps",
    "i18n",
    "Jenkins",
    "MSAL",
  ],
};

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "hero",
        "about",
        "career",
        "project",
        "certifications",
        "activities",
        "contact",
      ];
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

  return (
    <div className={`${darkMode ? "dark" : ""} transition-colors duration-300`}>
      <main className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen">
        <nav className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-800 shadow-md z-50">
          <div className="container mx-auto px-6ㅌ flex justify-between items-center">
            <motion.h1
              className="font-bold text-orange-500"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img src="/logo.svg" alt="Logo" width={120} height={120} />
            </motion.h1>
            <div className="flex items-center">
              {[
                "about",
                "career",
                "project",
                "certifications",
                "activities",
                "contact",
              ].map((section) => (
                <motion.a
                  key={section}
                  href={`#${section}`}
                  className={`mx-2 capitalize ${activeSection === section ? "text-orange-500" : "hover:text-orange-500"} transition-colors`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {section}
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
          </div>
        </nav>

        <AnimatePresence>
          <motion.section
            id="hero"
            className="container mx-auto px-6 py-32 text-center min-h-screen flex flex-col justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.p
              className="text-xl mb-8 text-gray-600 dark:text-gray-300"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              👋🏻 안녕하세요
            </motion.p>
            <motion.h2
              className="text-6xl font-bold mb-4"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Frontend Developer
            </motion.h2>
            <motion.h3
              className="text-2xl mb-8 text-gray-600 dark:text-gray-300"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              우다영의 포트폴리오입니다
            </motion.h3>
          </motion.section>
        </AnimatePresence>

        {/* About Section */}
        <AnimatePresence>
          <motion.section
            id="about"
            className="bg-white dark:bg-gray-800 py-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="container mx-auto px-6">
              <h2 className="text-4xl font-bold mb-8 text-orange-500">
                👩🏻‍💼 About
              </h2>
              <div className="flex">
                <img
                  src="https://avatars.githubusercontent.com/u/131967254?v=4"
                  alt="profile"
                  className="w-60 h-60 rounded-full object-coverm mr-16"
                />
                <div>
                  <h3 className="text-2xl font-semibold mb-4">
                    👋🏻 안녕하세요 프론트엔드 개발자 우다영입니다.
                  </h3>
                  <b className="text-md">📧 Email</b>
                  <p className="mb-2">iamwooda0@gmail.com</p>
                  <b>🖥 Github</b>
                  <p className="mb-2">
                    <a href="https://github.com/DaYoung-woo">
                      https://github.com/DaYoung-woo
                    </a>
                  </p>
                  <b>📔 Blog</b>
                  <p>
                    <a href="https://velog.io/@iamwooda/posts">
                      https://velog.io/@iamwooda
                    </a>
                  </p>
                </div>
              </div>
              <h4 className="text-xl font-semibold mt-8">
                원활한 의사 소통 능력
              </h4>
              <p>
                백엔드 개발자와 원활하게 소통할 수 있으며, 새로운 기능 추가나
                변경 작업이 자주 발생하는 애자일한 개발 환경에서도 신속하게
                대응할 수 있습니다.
              </p>
              <h4 className="text-xl font-semibold mt-4">
                읽기 쉬운 코드 작성
              </h4>
              <p>
                팀원들이 읽기 쉬운 코드 작성을 지향합니다. 이를 위해 복잡한
                로직들은 분리하여 한 가지 기능만을 수행하는 함수를 설계하고
                가급적 작게 만듭니다. <br />
                또한 직관적인 네이밍을 사용하여 함수의 역할을 명확하게
                전달하고자 합니다.
              </p>
            </div>
          </motion.section>
        </AnimatePresence>

        {/* Career Section */}
        <motion.section
          id="career"
          className="py-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold mb-8 text-orange-500">
              💼 Career
            </h2>
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-2">
                <h3 className="text-2xl font-bold  flex items-center">
                  <FaBuilding className="mr-2 text-orange-500" />
                  소프트캠프(SOFTCAMP)
                </h3>
              </div>
              <h5 className="text-gray-600 dark:text-gray-400 font-semibold">
                2021.07 - 2023.03(2년 8개월)
              </h5>
              <p className="pb-4">프론트엔드 개발자</p>
              <h4 className="text-xl font-semibold pb-2">사용 기술</h4>
              <div className="mb-8">
                {career.tech.map((tech, index) => (
                  <motion.span
                    key={tech}
                    className="bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-100 px-3 py-1 rounded-full text-sm mr-2 mb-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>

              {careerExperiences.map((experience, index) => (
                <div
                  key={index}
                  className={
                    index !== 0
                      ? "mt-8 pt-8 border-t border-gray-200 dark:border-gray-700"
                      : ""
                  }
                >
                  <div className="flex items-center mb-4">
                    {/* <FaBriefcase className="text-2xl text-orange-500 mr-2" /> */}
                    <h3 className="text-xl font-semibold ">
                      {experience.company}
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-2">
                    {experience.period}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300  ">
                    클라우드 애플리케이션 엔지니어링 데브코스 수업을 통해
                    React와 React Native에 대한 숙련도를 높였습니다.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    열정적으로 참여하여 개인 프로젝트에서 좋은 결과를 도출하여
                    발표를 진행했습니다.
                  </p>
                  <h4 className="font-semibold mb-2">Experience:</h4>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                    {experience.experiences.map((exp, i) => (
                      <motion.li
                        key={i}
                        className="mb-1"
                        initial={{ x: -20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: i * 0.1, duration: 0.3 }}
                        viewport={{ once: true }}
                      >
                        {exp}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Project Section */}
        <motion.section
          id="project"
          className="bg-white dark:bg-gray-800 py-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold mb-8 text-orange-500">
              My Project
            </h2>
            <motion.div
              className="bg-gray-50 dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4 text-orange-500">
                  {project.title}
                </h3>
                <p className="mb-4 text-gray-700 dark:text-gray-300">
                  {project.description}
                </p>
                <p className="mb-6 text-gray-700 dark:text-gray-300">
                  {project.longDescription}
                </p>
                <div className="mb-6">
                  <h4 className="text-xl font-semibold mb-2 text-orange-500">
                    Technologies Used:
                  </h4>
                  <div className="flex flex-wrap">
                    {project.tech.map((tech, index) => (
                      <motion.span
                        key={tech}
                        className="bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-100 px-3 py-1 rounded-full text-sm mr-2 mb-2"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
                <div className="flex space-x-4">
                  <motion.a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-orange-500 hover:underline"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGithub className="mr-2" /> View on GitHub
                  </motion.a>
                  <motion.a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-orange-500 hover:underline"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaExternalLinkAlt className="mr-2" /> Live Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Activities Section */}
        <motion.section
          id="activities"
          className="py-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold mb-8 text-orange-500">
              Activities
            </h2>
            {activities.map((activity, index) => (
              <motion.div
                key={index}
                className="mb-12 bg-gray-50 dark:bg-gray-700 rounded-lg shadow-lg p-6"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-4">
                  <FaGraduationCap className="text-2xl text-orange-500 mr-2" />
                  <h3 className="text-2xl font-semibold">{activity.title}</h3>
                </div>

                {activity.videoLink && (
                  <>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      {activity.description}
                    </p>
                    <div className="mb-4">
                      <h4 className="text-xl font-semibold mb-2">
                        Presentation Video
                      </h4>
                      <div className="relative overflow-hidden pb-[56.25%]">
                        <motion.iframe
                          src={activity.videoLink}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="absolute top-0 left-0 w-full h-full max-w-600px"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.5 }}
                          viewport={{ once: true }}
                        />
                      </div>
                      <a className="flex items-center text-orange-500 hover:underline mt-4">
                        <FaExternalLinkAlt className="mr-2" /> Live Demo
                      </a>
                    </div>
                  </>
                )}
                {activity.link && (
                  <>
                    <p className="text-gray-700 dark:text-gray-300 text-lg">
                      git 연동이 안 된 프로젝트에서 무한로딩이 발생하는 증상을
                      발견하여 이슈를 리포트했습니다.
                    </p>
                    <a
                      className="flex items-center text-orange-500 hover:underline mt-2 mb-4"
                      href="https://github.com/githru/githru-vscode-ext/issues/520"
                    >
                      <FaExternalLinkAlt className="mr-2" /> View Issue
                    </a>
                    <img src="./issue.gif" className="max-w-600px" />

                    <p className="text-gray-700 dark:text-gray-300 mt-12 text-lg">
                      해당 이슈를 같이 활동을 하는 팀원과 함께 문제를 해결하여
                      풀리퀘스트를 생성했습니다.
                    </p>
                    <a
                      className="flex items-center text-orange-500 hover:underline mt-2 mb-4"
                      href="https://github.com/githru/githru-vscode-ext/pull/679"
                    >
                      <FaExternalLinkAlt className="mr-2" /> View Pull Request
                    </a>
                    <img src="./fix.gif" className="max-w-600px" />
                  </>
                )}
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Certifications Section */}
        <motion.section
          id="certifications"
          className="bg-white dark:bg-gray-800 py-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold mb-8 text-orange-500">
              Certifications
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
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
                  <img
                    src={cert.img}
                    alt={cert.name}
                    className="mt-2 w-full object-cover"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          id="contact"
          className="py-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-8 text-orange-500">
              Get In Touch
            </h2>
            <motion.p
              className="mb-8 text-gray-700 dark:text-gray-300"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ once: true }}
            >
              I'm always open to new opportunities and collaborations.
            </motion.p>
            <div className="flex justify-center space-x-4">
              <motion.a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl text-orange-500 hover:text-orange-600"
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
              >
                <FaGithub />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl text-orange-500 hover:text-orange-600"
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
              >
                <FaLinkedin />
              </motion.a>
            </div>
          </div>
        </motion.section>

        <motion.footer
          className="bg-white dark:bg-gray-800 py-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <div className="container mx-auto px-6 text-center text-gray-700 dark:text-gray-300">
            <p>
              &copy; {new Date().getFullYear()} Your Name. All rights reserved.
            </p>
          </div>
        </motion.footer>
      </main>
    </div>
  );
}
