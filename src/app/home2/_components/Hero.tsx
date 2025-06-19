"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { FaPlay } from "react-icons/fa";

const stats = [
  { label: "Items", value: "4k+" },
  { label: "Brands", value: "10+" },
  { label: "Review", value: "4.9" },
];

const HeroSection = () => {
  const containerRef = useRef(null);
  const [showVideo, setShowVideo] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const moveLeft = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);
  const moveRight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const moveUpImage = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  return (
    <section
      ref={containerRef}
      className="relative bg-black text-white min-h-screen flex flex-col justify-between overflow-hidden"
    >
      {/* Animated Heading */}
      <div className="flex justify-center items-center gap-8 pt-32 z-10 relative overflow-hidden">
        <motion.span
          className="text-[130px] md:text-[260px] font-extrabold tracking-tight"
          style={{ x: moveLeft }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
        >
          FAS
        </motion.span>
        <motion.span
          className="text-[130px] md:text-[260px] font-extrabold tracking-tight ml-0"
          style={{ x: moveRight }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
        >
          HION
        </motion.span>
      </div>

      {/* Model Image + Stats */}
      <motion.div
        className="relative z-10 flex justify-center items-center mt-[-100px] px-6"
        style={{ y: moveUpImage }}
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { delay: 0.5, duration: 0.8, ease: "easeOut" },
          },
        }}
      >
        <motion.div
          className="relative w-[600px] max-w-full"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
        >
          <Image
            src="https://ik.imagekit.io/msmrd69gi/MmOC8qMI4qYY95fzQgazYpkw.png?updatedAt=1750321544063"
            alt="Model"
            width={600}
            height={800}
            className="object-contain"
          />

          {/* Stats */}
          <motion.div
            className="absolute top-1/2 right-[-190px] flex gap-10 -translate-y-1/2 text-left max-md:static max-md:translate-y-0 max-md:mt-5 max-md:right-0 max-md:text-center"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.2,
                  delayChildren: 0.8,
                },
              },
            }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className={index === 0 ? "" : "pl-6 border-l border-white/20"}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <p className="text-2xl font-bold">{stat.value}</p>
                <p className="text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Play Button */}
      <motion.div
        className="absolute bottom-24 left-24 flex flex-col items-center gap-2 max-md:left-5"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <div className="flex -space-x-3">
          {["men/32", "women/44", "men/56"].map((person, i) => (
            <Image
              key={i}
              src={`https://randomuser.me/api/portraits/${person}.jpg`}
              alt={`user${i}`}
              width={40}
              height={40}
              className="rounded-full border-2 border-white"
            />
          ))}
        </div>
        <button
          onClick={() => setShowVideo(true)}
          className="mt-2 flex items-center justify-center bg-white text-black w-10 h-10 rounded-full shadow-md hover:scale-110 transition-transform cursor-pointer"
        >
          <FaPlay size={14} />
        </button>
        <p className="text-xs mt-1">PLAY VIDEO</p>
      </motion.div>

      {/* Rotating Offer Circle */}
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
          <div className="absolute inset-0 rounded-full border-2 border-[#d4af37] border-opacity-60 shadow-[0_0_15px_rgba(212,175,55,0.3)]" />
          <motion.div
            className="absolute inset-0 flex items-center justify-center rounded-full overflow-hidden"
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              duration: 12,
              ease: "linear",
            }}
          >
            <svg viewBox="0 0 100 100" className="w-full h-full fill-white">
              <defs>
                <path
                  id="circlePath"
                  d="M 50, 50 m -30, 0 a 30,30 0 1,1 60,0 a 30,30 0 1,1 -60,0"
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

      {/* Marquee */}
      <motion.div
        className="relative w-full bg-[#82817B] py-3 overflow-hidden z-30 border-t border-white/10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <motion.div
          className="flex whitespace-nowrap gap-10 text-white text-lg md:text-[22px] font-semibold tracking-wide"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear",
          }}
        >
          {[...Array(2)].map((_, i) => (
            <span key={i} className="flex gap-6 items-center">
              {Array.from({ length: 20 }).map((_, index) => (
                <span key={index}>* SCROLL TO DISCOVER STYLE ⭣</span>
              ))}
            </span>
          ))}
        </motion.div>
      </motion.div>

      {/* Video Modal */}
      {showVideo && (
        <motion.div
          className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="relative w-full max-w-4xl aspect-video">
            <button
              onClick={() => setShowVideo(false)}
              className="absolute top-2 right-2 text-white text-2xl z-50 cursor-pointer"
            >
              ✕
            </button>
            <iframe
              className="w-full h-full rounded-xl"
              src="https://www.youtube.com/embed/RWLzUnESylc?autoplay=1"
              title="Fashion Promo"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default HeroSection;
