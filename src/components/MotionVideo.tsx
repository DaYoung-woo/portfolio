import { motion } from "framer-motion";

const MotionVideo = ({ src }: { src: string }) => {
  return (
    <div className="flex justify-center">
      <motion.video
        src={src} // Path to your video in the public folder
        autoPlay
        loop
        muted
        controls // Optional: Remove this if you don't want controls
        initial={{ opacity: 0 }} // Animation startㅌ s with opacity 0
        animate={{ opacity: 1 }} // Animation ends with opacity 1
        transition={{ duration: 0.5 }} // Transition duration of 0.5s
        style={{
          objectFit: "contain", // Ensures the video fits within its container
          width: "100%", // Responsive width for video
          maxWidth: "800px", // Max width similar to your sizes attribute for images
          height: "auto", // Maintain aspect ratio
        }}
      />
    </div>
  );
};

export default MotionVideo;
