import { motion } from "framer-motion";

const MotionVideo = () => {
  return (
    <motion.video
      src="/video.mp4" // Path to your video in the public folder
      autoPlay
      loop
      muted
      controls // Optional: Remove this if you don't want controls
      initial={{ opacity: 0 }} // Animation starts with opacity 0
      animate={{ opacity: 1 }} // Animation ends with opacity 1
      transition={{ duration: 0.5 }} // Transition duration of 0.5s
      style={{
        objectFit: "contain", // Keep the same object-fit style
        width: "100%", // Make sure the video fills the container width
        height: "auto", // Adjust height automatically
      }}
    />
  );
};

export default MotionVideo;
