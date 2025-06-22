"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });


  const yTitle = useTransform(scrollYProgress, [0, 1], [0, -70]);
  const yImage = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const xLeft = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const xRight = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.02]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div
      ref={containerRef}
      className="min-h-screen flex flex-col justify-center items-center px-4 max-md:pt-34 pt-44 overflow-hidden relative bg-gradient-to-b from-[#f8f5f2] to-[#eae4dd]"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/concrete-wall.png')] opacity-20" />
      </div>
      
      <div className="max-w-7xl w-full relative z-10">
        {/* Main Content Row */}
        <div className="relative flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 mb-16">
          {/* Elevated Tag Box */}
          <motion.div
            initial={{ opacity: 0, y: 20, rotate: -2 }}
            animate={{ opacity: 1, y: 0, rotate: -2 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="absolute top-0 left-0 md:left-[-30px] md:top-1/4 transform -translate-y-1/3 -ml-3 z-10 -mt-16"
          >
            <div className="bg-[#1a1a1a] h-[50px] w-[150px] flex flex-col justify-center items-center rounded-md relative shadow-lg overflow-hidden border border-[#333]">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#ffffff22] to-transparent opacity-30" />
              <h1 className="text-xs font-medium uppercase tracking-[0.2em] text-[#f8f5f2] z-10">
                Summer is here
              </h1>
              <h1 className="text-xs font-medium uppercase tracking-[0.2em] text-[#f8f5f2] z-10">
                get ready!
              </h1>
            </div>
          </motion.div>

          {/* Refined Decorative Elements */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="absolute bg-[#1a1a1a] w-8 h-8 rounded-full top-[-20px] left-8 opacity-30 mt-5"
          />
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="absolute w-6 h-6 rounded-full bg-[#d4af37] top-1/4 right-4 opacity-70"
          />
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="absolute w-4 h-4 rounded-full bg-[#d4af37] bottom-8 left-1/4 opacity-40"
          />

          {/* Elegant Headings */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center md:text-right"
            style={{ x: xLeft, y: yTitle }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold uppercase tracking-tight text-[#1a1a1a]">
              Your
            </h1>
          </motion.div>

          {/* Main Image with Border and Shadow */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-[300px] h-[400px] md:w-[380px] md:h-[480px] overflow-hidden z-10 group"
            style={{ y: yImage, scale }}
          >
            <div className="absolute inset-0 border-4 border-[#ffffffcc] rounded-xl z-20 pointer-events-none" />
            <div className="absolute inset-0 rounded-xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)]" />
            <Image
              src="/dz9jyD4eKoxFvRvO2exMS97GwOY.avif"
              alt="Summer fashion collection"
              layout="fill"
              objectFit="cover"
              className="rounded-xl transition-transform duration-700 group-hover:scale-105"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-center md:text-left"
            style={{ x: xRight, y: yTitle }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold uppercase tracking-tight text-[#1a1a1a]">
              Style
            </h1>
          </motion.div>
        </div>

          {/* Premium Secondary Headings with Elegant Line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16 relative"
          style={{ opacity, y: yTitle }}
        >
          <div className="absolute left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-64 h-px bg-gradient-to-r from-transparent via-[#d4af37] to-transparent opacity-70" />
          <div className="relative z-10 px-8 inline-block">
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-xl md:text-2xl font-light uppercase tracking-[0.4em] mb-1 text-[#7a6a5c]"
            >
              Starts
            </motion.h2>
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="text-xl md:text-2xl font-light uppercase tracking-[0.4em] text-[#7a6a5c]"
            >
              Here
            </motion.h2>
          </div>
        </motion.div>
        {/* Premium Rotating Discount Badge */}
        <motion.div
          className="absolute bottom-10 md:bottom-40 right-4 md:right-48 w-[130px] h-[130px] md:w-[160px] md:h-[160px] rounded-full z-20"
          initial={{ scale: 0.5, rotate: -30, opacity: 0 }}
          animate={{ scale: 1, rotate: 0, opacity: 1 }}
          transition={{
            duration: 1,
            delay: 1.2,
            type: "spring",
            stiffness: 120,
            damping: 12,
          }}
        >
          <div className="relative w-full h-full">
            {/* Metallic Border */}
            <div className="absolute inset-0 rounded-full border-2 border-[#d4af37] border-opacity-60 shadow-[0_0_15px_rgba(212,175,55,0.3)]" />

            {/* Rotating Text Circle */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center rounded-full overflow-hidden"
              animate={{ rotate: 360 }}
              transition={{
                repeat: Infinity,
                duration: 12,
                ease: "linear",
              }}
            >
              <svg viewBox="0 0 100 100" className="w-full h-full fill-[#1a1a1a]">
                <defs>
                  <path
                    id="circlePath"
                    d="
              M 50, 50
              m -30, 0
              a 30,30 0 1,1 60,0
              a 30,30 0 1,1 -60,0
            "
                  />
                </defs>
                <text fontSize="5.5" fontWeight="bold" letterSpacing="1.5px">
                  <textPath
                    xlinkHref="#circlePath"
                    startOffset="0%"
                    textLength="220"
                  >
                    • SUMMER SALE • LIMITED OFFER • EXCLUSIVE •
                  </textPath>
                </text>
              </svg>
            </motion.div>

            {/* Center Circle with Gradient */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-[#d4af37] to-[#b8972f] w-[65px] h-[65px] md:w-[80px] md:h-[80px] rounded-full flex flex-col items-center justify-center shadow-[0_4px_15px_rgba(0,0,0,0.2)] border border-[#ffffff66]">
              <h1 className="text-[16px] md:text-[18px] font-extrabold text-white tracking-tight">
                30%
              </h1>
              <h2 className="uppercase text-[10px] md:text-[11px] text-white -mt-[2px] tracking-widest font-medium">
                OFF
              </h2>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <motion.div
          className="absolute bottom-8 left-8 w-12 h-12 rounded-full"
          style={{ y: yImage }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ delay: 1.3 }}
        >
          <div className="w-full h-full rounded-full bg-gradient-to-br from-[#d4af37] to-[#b8972f] opacity-20 shadow-[0_0_20px_rgba(212,175,55,0.3)]" />
        </motion.div>
        <motion.div
          className="absolute top-12 right-8 w-10 h-10 rounded-full"
          style={{ y: yImage }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          transition={{ delay: 1.4 }}
        >
          <div className="w-full h-full rounded-full bg-gradient-to-br from-[#d4af37] to-[#b8972f] opacity-15 shadow-[0_0_20px_rgba(212,175,55,0.3)]" />
        </motion.div>
        <motion.div
          className="absolute bottom-24 right-16 w-6 h-6 rounded-full"
          style={{ y: yImage }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ delay: 1.5 }}
        >
          <div className="w-full h-full rounded-full bg-gradient-to-br from-[#d4af37] to-[#b8972f] opacity-10 shadow-[0_0_20px_rgba(212,175,55,0.3)]" />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;