import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import MotionVideo from "@/components/MotionVideo";
import { FaGithub, FaExternalLinkAlt, FaUser, FaUsers } from "react-icons/fa";
import { SiNotion, SiFigma } from "react-icons/si";

const project = [
  {
    title: "🎬 Video Editor",
    description:
      "Video Editor는 동영상을 편집할 수 있는 웹 서비스입니다.\n 비디오의 길이를 조절할 수 있으며 gif, mp3, mp4 파일로 변환이 가능합니다.",
    tech: ["React", "javascript", "ffmpeg", "Chakra UI", "tailwindcss"],
    video: "/video_editor/videoEditor.mp4",
    type: "web",
    githubLink: "https://github.com/DaYoung-woo/video-editor",
    liveLink: "https://video-editor-dayoung.netlify.app/",
    features: [
      "다크/라이트 모드",
      "영상 길이 조절",
      "GIF 변환",
      "MP3 변환",
      "MP4 변환",
    ],
    people: 1,
  },
  {
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
    video: "/piggy/piggy.mp4",
    type: "app",
    githubLink: "https://github.com/DaYoung-woo/Piggy",
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
    people: 4,
    details: [
      {
        title: "팀 소개 사이트",
        content: (
          <motion.a
            href="https://truthful-paw-79e.notion.site/641697039e7a4e598c3b0e660a529aea?pvs=4"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center hover:underline text-emerald-500"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <SiNotion className="mr-2 text-emerald-500" /> 팀 소개 노션 페이지
          </motion.a>
        ),
      },
      {
        title: "기획 및 디자인",
        content: (
          <div className="mt-4 mb-2">
            <motion.a
              href="https://www.figma.com/design/gjdIDLNhgn25G0rBgcB8KA/Untitled?node-id=0-1&t=O1DIH0eBImr2bW2O-1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center hover:underline text-emerald-500"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <SiFigma className="mr-2 text-emerald-500" /> figma 프로토타입
            </motion.a>
            <div className="mt-2 mb-2">
              figma를 통해 기획 및 포로토타입을 생성하여 관리했습니다.
            </div>
            <Image
              src="/piggy/figma.png"
              alt="피그마 이미지"
              width={720}
              height={400}
              style={{
                objectFit: "contain",
                width: "100%",
                margin: "0 auto",
                position: "relative",
                maxWidth: "720px",
              }}
            />
          </div>
        ),
      },
      {
        title: "공통 컴포넌트 문서화",
        content: (
          <div className="mt-4 mb-2">
            <motion.a
              href="https://truthful-paw-79e.notion.site/124b82cac40f8043a0d0f4cdd3975eed?v=124b82cac40f818db596000c7fc6d064&pvs=4"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center hover:underline text-emerald-500"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <SiNotion className="mr-2 text-emerald-500" /> 공통 컴포넌트
              명세서 페이지
            </motion.a>
            <div className="mt-2 mb-2">
            생산성을 높이고자 공통 컴포넌트에 대한 명세서를 작성하였습니다.
            <br />
            사진처럼 명세서에 사용법이 잘 정리되어 있기 때문에 다른 사람이 만든
            컴포넌트도 쉽게 사용할 수 있었습니다.
            </div>
            <div>
              <Image
                src="/piggy/components.png"
                alt="피그마 이미지"
                width={720}
                height={400}
                style={{
                  objectFit: "contain",
                  width: "100%",
                  margin: "0 auto",
                  position: "relative",
                  maxWidth: "720px",
                }}
              />
            </div>
          </div>
        ),
      },
    ],
  },
];

const Project = () => {
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
        {project.map((el) => (
          <motion.div
            key={el.title}
            className="bg-gray-50 dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden p-4 mt-8"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-2xl font-bold mb-4">{el.title}</h3>
            <p className="my-4 text-gray-700 dark:text-gray-300 whitespace-pre-wrap">
              {el.description}
            </p>
            <h3 className="text-xl font-semibold mt-8">GitHub 레포지토리</h3>
            <div className="flex space-x-4 mb-4 mt-2">
              <motion.a
                href={el.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:underline text-emerald-500"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaGithub className="mr-2 text-emerald-500" /> GitHub 레포지토리
              </motion.a>
            </div>
            {el.liveLink && (
              <div>
                <h3 className="text-xl font-semibold mt-8">배포 사이트</h3>
                <div className="flex space-x-4 mb-4 mt-2">
                  <motion.a
                    href={el.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center hover:underline text-emerald-500"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaExternalLinkAlt className="mr-2 text-emerald-500" /> Live
                    Demo
                  </motion.a>
                </div>
              </div>
            )}
            <div
              className="mx-auto relative"
              style={
                el.type === "web" ? {} : { width: "300px", height: "540px" }
              }
            >
              <MotionVideo src={el.video} />
            </div>

            <h3 className="text-xl font-semibold mt-8 mb-2">사용 기술</h3>
            <div className="flex flex-wrap">
              {el.tech.map((tech, index) => (
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

            <h3 className="text-xl font-semibold mt-8 mb-2">
              프로젝트 참여인원
            </h3>
            <div className="flex items-center">
              {el.people === 1 ? (
                <FaUser className="mr-2" />
              ) : (
                <FaUsers className="mr-2" />
              )}
              {el.people === 1 ? "1인 개인프로젝트" : "4인 팀프로젝트"}
            </div>

            <h3 className="text-xl font-semibold mt-8 mb-2">주요 기능</h3>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
              {el.features.map((feature, i) => (
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

            {el?.details?.length &&
              el.details.map((detail) => (
                <div key={detail.title}>
                  <h3 className="text-xl font-semibold mt-8 mb-2">
                    {detail.title}
                  </h3>
                  {detail.content}
                </div>
              ))}
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Project;
