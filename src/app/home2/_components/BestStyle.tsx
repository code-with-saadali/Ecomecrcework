"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FaArrowRight } from "react-icons/fa";

const BestStyle = () => {
  const sectionRef = useRef(null);


  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 80%", "center 60%"],
  });


  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const translateY = useTransform(scrollYProgress, [0, 1], [60, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative bg-gradient-to-br from-[#fff7f0] to-[#f5f5f5] py-24 px-5 lg:px-28 overflow-hidden"
    >
      {/* Blurred Backgrounds */}
      <div className="absolute top-[-100px] left-[-100px] w-96 h-96 bg-[#e3834f]/20 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-[-80px] right-[-80px] w-80 h-80 bg-[#e3834f]/20 rounded-full blur-[100px] -z-10"></div>

      <div className="flex flex-col md:flex-row items-center gap-14 md:gap-20">
        {/* Text Section */}
        <motion.div
          className="w-full md:w-[40%]"
          style={{ opacity, y: translateY }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="uppercase tracking-widest text-sm font-semibold text-[#e3834f] mb-3">
            Premium Lookbook
          </p>

          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">
            Redefine Your <br />
            <span className="bg-gradient-to-r from-[#e3834f] to-[#d26c34] text-transparent bg-clip-text">
              Street Style
            </span>
          </h1>

          <p className="mt-5 text-gray-600 text-lg leading-relaxed">
            Curated looks that speak confidence, attitude, and everyday
            versatility. Style crafted for trendsetters.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="px-6 py-3 bg-[#e3834f] text-white font-semibold rounded-full shadow-lg hover:bg-[#c55f2e] transition-all duration-300"
            >
              Shop Now
            </motion.button>

            <motion.a
              whileHover={{ x: 6 }}
              transition={{ duration: 0.3 }}
              href="#"
              className="inline-flex items-center gap-2 text-[#e3834f] font-medium text-sm hover:underline"
            >
              View Lookbook <FaArrowRight />
            </motion.a>
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          style={{ opacity, y: translateY }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="w-full md:w-[60%] relative rounded-2xl overflow-hidden shadow-xl group cursor-pointer border border-transparent hover:border-[#e3834f]/40 transition duration-300"
        >
          {/* Tag */}
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-[#e3834f] text-xs font-bold px-4 py-1 rounded-full shadow-sm flex items-center gap-2 z-10">
            <svg
              className="w-3.5 h-3.5 text-[#e3834f]"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 2a8 8 0 108 8 8 8 0 00-8-8zm1 12H9v-2h2zm0-4H9V6h2z" />
            </svg>
            Trending Now
          </div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.5 }}
            className="w-full h-full"
          >
            <Image
              src="https://ik.imagekit.io/msmrd69gi/NrX2Ytxl4H8toVEyviJXd07dyE.png?updatedAt=1750328730807"
              width={800}
              height={600}
              alt="Best Street Style"
              className="w-full h-auto object-cover rounded-xl transition-transform duration-500"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default BestStyle;
