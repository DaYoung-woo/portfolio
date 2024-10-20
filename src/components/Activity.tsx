import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGraduationCap } from "react-icons/fa";
import MotionVideo from "@/components/MotionVideo";

const Activity = () => {
  return (
    <>
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
          <motion.div
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-4">
              <FaGraduationCap className="text-2xl text-emerald-500 mr-2" />
              <h3 className="text-2xl font-semibold">
                2024 오픈소스 컨트리뷰션 아카데미
              </h3>
            </div>
            <p className="text-gray-700 dark:text-gray-300">
              vscode의 익스텐션 중 하나로 Git 히스토리와 커밋, 기여 내역을
              시각적으로 쉽게 탐색할 수 있게 해주는 githru 오픈소스에
              참여하였습니다.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              git을 기반으로 동작하는 익스텐션이므로 git이 연동되지 않은
              프로젝트에서 githru를 사용하는 경우 무한 로딩이 발생하는 것을
              확인하였습니다.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              이 증상은 사용자 경험에 부정적인 영향을 미칠 수 있어 해당 이슈를
              리포트했습니다.
            </p>
            <a
              className="flex items-center text-emerald-500 hover:underline mt-2 mb-4"
              href="https://github.com/githru/githru-vscode-ext/issues/520"
            >
              <FaExternalLinkAlt className="mr-2" /> View Issue
            </a>
            <MotionVideo src="/open_source/issue.mp4" />

            <p className="text-gray-700 dark:text-gray-300 mt-12">
              해당 이슈를 같이 활동을 하는 팀원과 함께 짝코딩을 통해 문제를
              해결하였습니다.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              무한 로딩을 막고 하단 오른쪽에 Git이 연결되어 있지 않다는 메시지를
              보여주도록 변경하였습니다.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              또한 하단 왼쪽에 로딩 아이콘을 X아이콘으로 변경되도록 설정하여
              풀리퀘스트를 생성했습니다.
            </p>
            <a
              className="flex items-center text-emerald-500 hover:underline mt-2 mb-4"
              href="https://github.com/githru/githru-vscode-ext/pull/679"
            >
              <FaExternalLinkAlt className="mr-2" /> View Pull Request
            </a>
            <MotionVideo src="/open_source/fix.mp4" />
          </motion.div>
        </div>
      </motion.section>
    </>
  );
};

export default Activity;
