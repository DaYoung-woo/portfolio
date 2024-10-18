import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaFigma } from "react-icons/fa";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const project = {
  title: "🐽 PIGGY",
  description:
    "PIGGY는 사용자가 서로 약속을 생성하고, 그 정보를 함께 관리할 수 있는 커뮤니티 앱입니다.\n사용자는 약속 시간과 장소를 등록하고, 약속 시각에 해당 장소에서 위치 인증을 완료해야 합니다.\n인증에 성공하면 포인트를 획득할 수 있으며, 모은 포인트로 앱 내 상점에서 기프티콘을 구매할 수 있습니다.",
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
  figma:
    "https://www.figma.com/design/gjdIDLNhgn25G0rBgcB8KA/Untitled?node-id=1-3129&t=roXpFo4MC4yzqovY-1",
};

interface CustomSliderSettings
  extends Omit<Settings, "appendDots" | "customPaging"> {
  appendDots?: (dots: React.ReactNode) => React.ReactElement;
  customPaging?: (i: number) => React.ReactElement;
  afterChange?: (currentSlide: number) => void;
}

const Project = () => {
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
    <motion.section
      id="project"
      className="bg-white dark:bg-gray-800 py-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-8 text-emerald-500">My Project</h2>
        <motion.div
          className="bg-gray-50 dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <div>
            <div
              className="mx-auto relative"
              style={{ width: "300px", height: "680px" }}
            >
              <Slider {...sliderSettings}>
                {project.images.map((image, index) => (
                  <div key={index} style={{ width: "300px", height: "680px" }}>
                    <img
                      src={image}
                      alt={`${project.title} screenshot ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </Slider>
            </div>

            {/* Right side - Project Details */}
            <div className="lg:w-2/3 p-6">
              <h3 className="text-2xl font-bold mb-4 text-emerald-500 mt-8">
                {project.title}
              </h3>
              <p className="my-4 text-gray-700 dark:text-gray-300 whitespace-pre-wrap">
                {project.description}
              </p>
              <div className="flex space-x-4 mb-4">
                <motion.a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-emerald-500 hover:underline"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaGithub className="mr-2" /> GitHub 레포지토리
                </motion.a>
                <motion.a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-emerald-500 hover:underline"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaFigma className="mr-2" /> Figma 프로토타입
                </motion.a>
              </div>
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
                <h4 className="text-xl font-semibold mb-2">주요 기능</h4>
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
                <h4 className="text-xl font-semibold mb-2">기여한 부분</h4>
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
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Project;
