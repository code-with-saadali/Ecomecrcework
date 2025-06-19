"use client";

import Image from "next/image";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import React, { useRef } from "react";

const images = [
  "https://ik.imagekit.io/msmrd69gi/ad9hzDGbo7UUKZgQz9Rvt8FRNxI.png?updatedAt=1750241391755",
  "https://ik.imagekit.io/msmrd69gi/o0PboYCFNR2C0w7GsBJL9PEtoMU.png?updatedAt=1750241268909",
  "https://ik.imagekit.io/msmrd69gi/0pyIyZeEMmj75LffprppnoSi9AY.webp?updatedAt=1750242834133",
  "https://ik.imagekit.io/msmrd69gi/QOQznmgVNN2dBIaCveRf29Zcc4.png?updatedAt=1750238882573",
];


interface InstagramImageProps {
  src: string;
  index: number;
  total: number;
  scrollProgress: MotionValue<number>;
}

const InstagramImage = ({ src, index, total, scrollProgress }: InstagramImageProps) => {
  const centerOffset = index - (total - 1) / 2;
  const spread = 400;

  const x = useTransform(
    scrollProgress,
    [0, 1],
    ["0px", `${centerOffset * spread}px`]
  );

  const scale = useTransform(scrollProgress, [0, 1], [1.2, 1]);
  const rotate = useTransform(scrollProgress, [0, 1], [index % 2 ? -5 : 5, 0]);
  const opacity = useTransform(scrollProgress, [0, 0.5], [0, 1]);

  return (
    <motion.div
      style={{ x, scale, rotate, opacity }}
      className="absolute top-1/2 left-1/2 w-[240px] h-[240px] -translate-x-1/2 -translate-y-1/2 rounded-xl overflow-hidden shadow-xl"
    >
      <Image
        src={src}
        alt={`Instagram post ${index + 1}`}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
        <div className="text-white">
          <svg 
            className="w-5 h-5 mb-1" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </div>
      </div>
    </motion.div>
  );
};

const Follow = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  return (
    <section
      ref={ref}
      className="relative min-h-screen bg-gradient-to-b from-gray-50 to-white px-5 py-32 overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-20 left-5 w-40 h-40 bg-gradient-to-r from-amber-200 to-rose-300 rounded-full blur-[100px] opacity-30"></div>
      <div className="absolute bottom-20 right-5 w-40 h-40 bg-gradient-to-r from-indigo-200 to-teal-300 rounded-full blur-[100px] opacity-30"></div>
      
      {/* Enhanced header */}
      <div className="text-center mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="inline-block mb-4"
        >
          <span className="inline-block px-4 py-1.5 text-sm font-medium tracking-wider text-rose-600 uppercase bg-rose-50 rounded-full">
            Social Gallery
          </span>
        </motion.div>
        
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3 tracking-tight">
          Follow Our Journey
        </h2>
        <p className="text-gray-600 max-w-md mx-auto">
          Behind the scenes, style tips, and daily inspiration @ourbrand
        </p>
      </div>

      <div className="relative h-[400px] w-full max-w-5xl mx-auto">
        {images.map((src, index) => (
          <InstagramImage
            key={index}
            src={src}
            index={index}
            total={images.length}
            scrollProgress={scrollYProgress}
          />
        ))}
      </div>

      {/* CTA Button */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-center mt-24"
      >
        <a
          href="https://instagram.com/ourbrand"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-rose-600 to-amber-500 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
        >
          <span className="mr-3">Follow on Instagram</span>
          <svg 
            className="w-5 h-5 group-hover:translate-x-1 transition-transform" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
          </svg>
        </a>
      </motion.div>
    </section>
  );
};

export default Follow;