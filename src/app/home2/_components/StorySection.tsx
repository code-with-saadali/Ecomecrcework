"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";

const StorySection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const leftRotate = useSpring(useTransform(scrollYProgress, [0, 1], [-35, 0]), {
    stiffness: 100,
    damping: 20,
  });

  const rightRotate = useSpring(useTransform(scrollYProgress, [0, 1], [35, 0]), {
    stiffness: 100,
    damping: 20,
  });

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#f9f6ef] py-32 px-5 lg:px-28 flex justify-center items-center overflow-hidden min-h-screen"
    >
      {/* Left Image */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        style={{ rotate: leftRotate }}
        className="hidden md:block absolute left-[6%] top-1/2 transform -translate-y-1/2 w-[300px] h-[500px] overflow-hidden rounded-xl shadow-xl"
      >
        <Image
          src="https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?auto=format&fit=crop&w=600&h=800&q=80"
          alt="Left Model"
          fill
          className="object-cover"
        />
      </motion.div>

      {/* Center Text */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center max-w-xl z-10"
      >
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Style that tells a story
        </h2>
        <p className="text-gray-600 mb-6 leading-relaxed">
          Each piece in our collection speaks volumes, reflecting <br />
          your unique journey. Express your personality and style <br />
          through our curated designs.
        </p>
        <button className="px-6 py-2 border border-black text-black rounded-full hover:bg-black hover:text-white transition">
          Learn More
        </button>
      </motion.div>

      {/* Right Image */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        style={{ rotate: rightRotate }}
        className="hidden md:block absolute right-[6%] top-1/2 transform -translate-y-1/2 w-[400px] h-[500px] overflow-hidden rounded-xl shadow-xl"
      >
        <Image
          src="https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?auto=format&fit=crop&w=600&h=800&q=80"
          alt="Right Model"
          fill
          className="object-cover"
        />
      </motion.div>
    </section>
  );
};

export default StorySection;
