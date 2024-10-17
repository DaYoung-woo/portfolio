"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaBuilding,
  FaGraduationCap,
  FaEnvelope,
} from "react-icons/fa";
import { SiVelog } from "react-icons/si";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Nav from "@/components/Nav";
import About from "@/components/About";

const MotionImage = motion(Image);

interface ActivityImageProps {
  src: string;
  alt: string;
}

const ActivityImage: React.FC<ActivityImageProps> = ({ src, alt }) => (
  <div className="relative w-full max-w-[680px] mx-auto aspect-video">
    <MotionImage
      src={src}
      alt={alt}
      fill
      sizes="(max-width: 680px) 100vw, 680px"
      style={{ objectFit: "contain" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    />
  </div>
);

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
  title: "🐽 PIGGY",
  description:
    "PIGGY는 사용자가 서로 약속을 생성하고, 그 정보를 함께 관리할 수 있는 커뮤니티 앱입니다.\n사용자는 약속 시간과 장소를 등록하고, 약속 시각에 해당 장소에서 위치 인증을 완료해야 합니다.\n인증에 성공하면 포인트를 획득할 수 있으며, 모은 포인트로 앱 내 상점에서 기프티콘을 구매할 수 있습니다.",
  longDescription: "",
  tech: [
    "React",
    "React-native",
    "Supabase",
    "Firebase",
    "Node.js",
    "Typescript",
    "Zustand",
  ],
  images: [
    "/piggy/1.png",
    "/piggy/2.png",
    "/piggy/3.png",
    "/piggy/4.png",
    "/piggy/5.png",
    "/piggy/6.png",
    "/piggy/7.png",
    "/piggy/8.png",
    "/piggy/9.png",
    "/piggy/10.png",
    "/piggy/11.png",
    "/piggy/12.png",
  ],
  githubLink: "https://github.com/DaYoung-woo/Piggy",
  liveLink: "https://your-project-url.com",
  features: [
    "구글/카카오 소셜 로그인 기능",
    "본인 확인을 위한 인증 번호 전송 기능",
    "친구 관리 기능 및 친구에게 피기 선물하기 기능",
    "fcm을 활용한 알람 기능",
    "약속 생성 기능",
    "약속 시간 10분전부터 약속 시간까지 약속 장소에서의 인증 기능(약속 인증 시 보상 피기포인트 지급)",
    "기프티콘 상점/구매 기능",
    "문의하기 기능",
  ],
  contributes: [
    "카카로 로그인",
    "약속 생성(멀티파트폼)",
    "약속 리스트",
    "약속 상세",
    "상점 물품 리스트",
  ],
};

const careerExperiences = [
  {
    company: "SHIELDRM",
    duration: "1년 4개월",
    period: "2022.12 ~ 2024.03",
    description:
      "SHIELDRM은 DRM 문서를 사용자 PC로 다운로드하지 않고도 클라우드 환경에서 공동편집할 수 있는 서비스입니다. SK쉴더스, SK 넥실리스, DRB동일 등 여러 기업에 납품하였습니다.",
    experiences: [
      "메인 프론트엔드 개발자로 프로젝트 생성과 파일과 폴더의 구조 설계",
      "사용자 OAuth 로그인 기능 및 MS 로그인을 위한 MSAL 라이브러리를 활용한 로그인 기능 구현",
      "MS AIP 레이블 조회 및 문서 암호화를 위한 기본 정책 설정 관리 기능 구현",
      "암/복호 키파일 관리 기능 구현",
      "앱(라이선스) 관리 기능 구현",
      "메일 발신자/수신자/문서 유형 등에 따른 첨부 파일 조건부 정책 설정 관리 기능 구현",
      "대상 문서/저장소 위치/파일 이벤트 등에 따른 문서 조건부 정책 설정 기능 구현",
      "소나큐브를 도입하여 코드의 취약점을 개선하고 코드 중복과 복잡도를 관리하여 전체적인 코드의 품질을 개선",
      "다른 제품군과 일관성을 위해 전체적인 디자인 컨셉 변경",
      "wdio 라이브러리를 사용하여 E2E테스트를 구현. 브라우저 환경에서의 테스트를 자동화 및 장애 발생률 감소",
      "Jenkins를 통해 빌드와 배포를 자동화하여 생산성을 향상",
      "공통으로 사용하는 모달을 컴포넌트화. 크기나 닫기 버튼 노출 여부 등을 관리할 수 있도록 만들어 유지보수성 개선 및 재사용성 증가",
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
    experience: "2024.04 - 2024.09",
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

interface CustomSliderSettings
  extends Omit<Settings, "appendDots" | "customPaging"> {
  appendDots?: (dots: React.ReactNode) => React.ReactElement;
  customPaging?: (i: number) => React.ReactElement;
  afterChange?: (currentSlide: number) => void;
}

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const sliderSettings: CustomSliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          bottom: "-32px",
        }}
      >
        <ul style={{ margin: "-12px", padding: "-12px" }}>{dots}</ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          width: "6px",
          height: "6px",
          margin: "0 -12px",
          background: i === currentSlide ? "#10B981" : "#D1D5DB",
          borderRadius: "50%",
          display: "inline-block",
        }}
      />
    ),
    afterChange: (current) => setCurrentSlide(current),
  };

  return (
    <div className={`${darkMode ? "dark" : ""} transition-colors duration-300`}>
      <main className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen">
        <Nav darkMode={darkMode} setDarkMode={setDarkMode} />

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
              style={{ backgroundImage: "url('/hero-background.jpg')" }} // 이미지 경로를 적절히 수정해주세요
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

        {/* About Section */}
        <About />
        {/* <motion.section
          id="about"
          className="bg-gradient-to-b from-white to-gray-100 dark:from-gray-800 dark:to-gray-900 py-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold mb-12 text-emerald-500">
              About Me
            </h2>
            <div className="flex flex-col md:flex-row items-center justify-between">
              <motion.div
                className="w-full md:w-1/3 mb-8 md:mb-0"
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src="https://avatars.githubusercontent.com/u/131967254?v=4"
                  alt="profile"
                  className="w-60 h-60 rounded-full object-cover mx-auto shadow-lg"
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
                  <motion.div
                    className="flex items-center"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <FaEnvelope className="text-emerald-500 mr-3 text-xl" />
                    <p>iamwooda0@gmail.com</p>
                  </motion.div>
                  <motion.div
                    className="flex items-center"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <FaGithub className="text-emerald-500 mr-3 text-xl" />
                    <a href="https://github.com/DaYoung-woo">
                      github.com/DaYoung-woo
                    </a>
                  </motion.div>
                  <motion.div
                    className="flex items-center"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <SiVelog className="text-emerald-500 mr-3 text-xl" />
                    <a href="https://velog.io/@iamwooda/posts">
                      velog.io/@iamwooda
                    </a>
                  </motion.div>
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
                <motion.div
                  className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md"
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <h4 className="text-lg font-semibold mb-2 text-emerald-500">
                    원활한 의사 소통 능력
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    백엔드 개발자와 원활하게 소통할 수 있으며, 새로운 기능
                    추가나 변경 작업이 자주 발생하는 애자일한 개발 환경에서도
                    신속하게 대응할 수 있습니다.
                  </p>
                </motion.div>
                <motion.div
                  className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md"
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <h4 className="text-lg font-semibold mb-2 text-emerald-500">
                    읽기 쉬운 코드 작성
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    팀원들이 읽기 쉬운 코드 작성을 지향합니다. <br />
                    이를 위해 복잡한 로직들은 분리하여 한 가지 기능만을 수행하는
                    함수를 설계하고 가급적 작게 만듭니다. <br />
                    또한 직관적인 네이밍을 사용하여 함수의 역할을 명확하게
                    전달하고자 합니다.
                  </p>
                </motion.div>
                <motion.div
                  className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md"
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <h4 className="text-lg font-semibold mb-2 text-emerald-500">
                    지속적인 자기 개발
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    빠르게 변화하는 프론트엔드 기술 생태계에서 최신 트렌드를
                    주시하고 새로운 기술을 학습하는 데 열정적입니다. <br />
                    개인 프로젝트와 오픈소스 기여를 통해 실무에 적용 가능한
                    기술을 꾸준히 습득하고 있습니다.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.section> */}

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
            <h2 className="text-4xl font-bold mb-8 text-emerald-500">Career</h2>
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-2">
                <h3 className="text-2xl font-bold  flex items-center">
                  <FaBuilding className="mr-2 text-emerald-500" />
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
                    className="bg-emerald-50 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-100 px-3 py-1 rounded-full text-sm mr-2 mb-2"
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
                    {/* <FaBriefcase className="text-2xl text-emerald-500 mr-2" /> */}
                    <h3 className="text-xl font-semibold ">
                      {experience.company}
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-2">
                    {experience.description}
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
            <h2 className="text-4xl font-bold mb-8 text-emerald-500">
              My Project
            </h2>
            <motion.div
              className="bg-gray-50 dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col lg:flex-row">
                {/* Left side - Image Slider */}
                <div className="lg:w-1/3 p-6">
                  <div
                    className="mx-auto relative"
                    style={{ width: "300px", height: "680px" }}
                  >
                    <Slider {...sliderSettings}>
                      {project.images.map((image, index) => (
                        <div
                          key={index}
                          style={{ width: "300px", height: "680px" }}
                        >
                          <img
                            src={image}
                            alt={`${project.title} screenshot ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                    </Slider>
                  </div>
                </div>

                {/* Right side - Project Details */}
                <div className="lg:w-2/3 p-6">
                  <h3 className="text-2xl font-bold mb-4 text-emerald-500">
                    {project.title}
                  </h3>
                  <p className="mb-4 text-gray-700 dark:text-gray-300 whitespace-pre-wrap">
                    {project.description}
                  </p>
                  <p className="mb-6 text-gray-700 dark:text-gray-300">
                    {project.longDescription}
                  </p>
                  <div className="mb-6">
                    <h4 className="text-xl font-semibold mb-2">사용 기술</h4>
                    <div className="flex flex-wrap">
                      {project.tech.map((tech, index) => (
                        <motion.span
                          key={tech}
                          className="bg-emerald-50 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-100 px-3 py-1 rounded-full text-sm mr-2 mb-2"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                  <div className="mb-6">
                    <h4 className="text-xl font-semibold mb-2">주요 기능:</h4>
                    <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                      {project.features.map((feature, i) => (
                        <motion.li
                          key={i}
                          className="mb-1"
                          initial={{ x: -20, opacity: 0 }}
                          whileInView={{ x: 0, opacity: 1 }}
                          transition={{ delay: i * 0.1, duration: 0.3 }}
                          viewport={{ once: true }}
                        >
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  <div className="mb-6">
                    <h4 className="text-xl font-semibold mb-2">기여한 부분:</h4>
                    <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                      {project.contributes.map((contribute, i) => (
                        <motion.li
                          key={i}
                          className="mb-1"
                          initial={{ x: -20, opacity: 0 }}
                          whileInView={{ x: 0, opacity: 1 }}
                          transition={{ delay: i * 0.1, duration: 0.3 }}
                          viewport={{ once: true }}
                        >
                          {contribute}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex space-x-4">
                    <motion.a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-emerald-500 hover:underline"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaGithub className="mr-2" /> View on GitHub
                    </motion.a>
                  </div>
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
            <h2 className="text-4xl font-bold mb-8 text-emerald-500">
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
                  <FaGraduationCap className="text-2xl text-emerald-500 mr-2" />
                  <h3 className="text-2xl font-semibold">{activity.title}</h3>
                </div>

                {activity.videoLink && (
                  <>
                    <h5 className="text-gray-600 dark:text-gray-400 font-semibold">
                      {activity.experience}
                    </h5>
                    <p className="mb-4">
                      클라우드 애플리케이션 엔지니어링 데브코스 수업을 통해
                      React와 React Native에 대한 숙련도를 높였습니다.
                    </p>

                    <div className="mt-8">
                      <div>
                        <h4 className="text-xl font-bold">🎬 비디오 에디터</h4>
                        <p className="text-gray-700 dark:text-gray-300">
                          비디오 에디터는 영상을 gif, mp4, mp3 파일료 변환해주는
                          웹어플리케이션입니다.
                        </p>

                        <div className="flex mt-4">
                          <a
                            className="flex items-center text-emerald-500 hover:underline "
                            href="https://video-editor-dayoung.netlify.app"
                          >
                            <FaExternalLinkAlt className="mr-2" /> Live Demo
                          </a>
                          <a
                            className="flex items-center text-emerald-500 hover:underline ml-2"
                            href="https://video-editor-dayoung.netlify.app"
                          >
                            <FaGithub className="mr-2" /> View on GitHub
                          </a>
                        </div>

                        {/* <h4 className="text-lg font-semibold mt-4 mb-2">
                          사용 기술
                        </h4>
                        <div className="mb-4">
                          {[
                            "react",
                            "Vite",
                            "Chakra",
                            "TailwindCSS",
                            "FFmpeg",
                          ].map((tech, index) => (
                            <motion.span
                              key={tech}
                              className="bg-emerald-50 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-100 px-3 py-1 rounded-full text-sm mr-2 mb-2"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div> */}

                        {/* <div className="relative w-full">
                          <div className="max-w-[768px] max-h-[365px] mx-auto">
                            <Slider {...sliderSettings}>
                              {[
                                "/videoEditor1.png",
                                "/videoEditor2.png",
                                "/videoEditor3.png",
                                "/videoEditor4.png",
                                "/videoEditor5.png",
                              ].map((image, index) => (
                                <div key={index} className="w-full h-full">
                                  <img
                                    src={image}
                                    alt={`Video Editor ${index + 1}`}
                                    className="w-full h-full object-cover"
                                  />
                                </div>
                              ))}
                            </Slider>
                          </div>
                        </div> */}

                        <p className="text-gray-700 dark:text-gray-300 mb-4 mt-8">
                          비디오 에디터 프로젝트는 좋은 평가를 받아 발표를
                          진행하였습니다.
                        </p>
                        <div className="max-w-[768px] mx-auto">
                          <div
                            className="relative w-full"
                            style={{ aspectRatio: "16 / 9" }}
                          >
                            <motion.iframe
                              src={activity.videoLink}
                              frameBorder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                              className="absolute top-0 left-0 w-full h-full"
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.5 }}
                              viewport={{ once: true }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}
                {activity.link && (
                  <>
                    <p className="text-gray-700 dark:text-gray-300">
                      vscode의 익스텐션 중 하나로 Git 히스토리와 커밋, 기여
                      내역을 시각적으로 쉽게 탐색할 수 있게 해주는 githru
                      오픈소스에 참여하였습니다.
                    </p>
                    <p className="text-gray-700 dark:text-gray-300">
                      git을 기반으로 동작하는 익스텐션이므로 git이 연동되지 않은
                      프로젝트에서 githru를 사용하는 경우 무한 로딩이 발생하는
                      것을 확인하였습니다.
                    </p>
                    <p className="text-gray-700 dark:text-gray-300">
                      이 증상은 사용자 경험에 부정적인 영향을 미칠 수 있어 해당
                      이슈를 리포트했습니다.
                    </p>
                    <a
                      className="flex items-center text-emerald-500 hover:underline mt-2 mb-4"
                      href="https://github.com/githru/githru-vscode-ext/issues/520"
                    >
                      <FaExternalLinkAlt className="mr-2" /> View Issue
                    </a>
                    <ActivityImage src="/issue.png" alt="issue" />

                    <p className="text-gray-700 dark:text-gray-300 mt-12">
                      해당 이슈를 같이 활동을 하는 팀원과 함께 짝코딩을 통해
                      문제를 해결하였습니다.
                    </p>
                    <p className="text-gray-700 dark:text-gray-300">
                      무한 로딩을 막고 하단 오른쪽에 Git이 연결되어 있지 않다는
                      메시지를 보여주도록 변경하였습니다.
                    </p>
                    <p className="text-gray-700 dark:text-gray-300">
                      또한 하단 왼쪽에 로딩 아이콘을 X아이콘으로 변경되도록
                      설정하여 풀리퀘스트를 생성했습니다.
                    </p>
                    <a
                      className="flex items-center text-emerald-500 hover:underline mt-2 mb-4"
                      href="https://github.com/githru/githru-vscode-ext/pull/679"
                    >
                      <FaExternalLinkAlt className="mr-2" /> View Pull Request
                    </a>
                    <ActivityImage src="/fix.png" alt="fix" />
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
            <h2 className="text-4xl font-bold mb-8 text-emerald-500">
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
      </main>
    </div>
  );
}
