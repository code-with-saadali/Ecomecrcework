"use client";
import { motion, useScroll } from "framer-motion";

export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[4px] bg-black z-[999]"
      style={{ scaleX: scrollYProgress, transformOrigin: "left" }}
    />
  );
};
