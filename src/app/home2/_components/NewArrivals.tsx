"use client";

import Image from "next/image";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const NewArrivals = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Scroll-based animation
  const width = useTransform(scrollYProgress, [0, 1], ["50%", "120%"]);

  return (
    <section ref={ref} className="relative w-full min-h-screen overflow-hidden">
      {/* Animated Image */}
      <motion.div
        style={{ width }}
        className="absolute top-0 left-1/2 -translate-x-1/2 h-full z-0"
      >
        <Image
          src="https://ik.imagekit.io/msmrd69gi/ytoboPfCjKXbgjVoMfOM1hWaSho.png?updatedAt=1750334099814"
          alt="New Arrivals"
          fill
          className="object-cover"
        />
      </motion.div>

      {/* Center Text */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-[120px] uppercase tracking-tight font-extrabold text-white mb-4">
            Wear the best
          </h2>
          <button className="bg-white text-black px-8 py-3 rounded-full font-semibold uppercase tracking-wider border border-transparent hover:border-white hover:bg-transparent hover:text-white transition-all duration-300 shadow-md hover:shadow-lg">
            Shop New Arrivals
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default NewArrivals;
