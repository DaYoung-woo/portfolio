"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt, FaGraduationCap } from "react-icons/fa";
import { SiVelog } from "react-icons/si";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Nav from "@/components/Nav";
import About from "@/components/About";
import Thumb from "@/components/Thumb";
import Career from "@/components/Career";
import Certification from "@/components/Certification";
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
        <Thumb />
        <About />
        <Career />

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

        <Certification />

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
