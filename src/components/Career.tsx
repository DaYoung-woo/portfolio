import { motion } from "framer-motion";
import React from "react";
import { FaBuilding } from "react-icons/fa";

const techList = [
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
];

const careerExperienceList = [
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

const Career = () => {
  return (
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
            {techList.map((tech, index) => (
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

          {careerExperienceList.map((experience, index) => (
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
                <h3 className="text-xl font-semibold ">{experience.company}</h3>
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
  );
};

export default Career;
