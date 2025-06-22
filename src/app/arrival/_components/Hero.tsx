'use client';

import Image from 'next/image';
import React, { useRef } from 'react';
import { motion, useInView, Variants } from 'framer-motion';

const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.6, 
        ease: [0.16, 1, 0.3, 1] 
      },
    },
  };

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div
        className="bg-[#F7F5EF] max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-16 md:py-24 rounded-2xl relative z-10"
        ref={ref}
      >
        <div className="flex flex-col-reverse md:flex-row justify-between items-center">
          {/* Left Content */}
          <motion.div
            className="max-w-xl mt-10 md:mt-0"
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-gray-900"
              variants={fadeUp}
            >
              New Arrivals
            </motion.h1>
            <motion.p 
              className="mt-4 md:mt-6 text-lg md:text-xl text-gray-700 max-w-md"
              variants={fadeUp}
            >
              Fresh drops just in—explore the latest must-haves before they&apos;re gone.
            </motion.p>
            <motion.button
              className="mt-8 bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-full"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Shop Now
            </motion.button>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="md:absolute -right-6 -top-10 md:w-[45%] lg:w-auto"
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            transition={{ delay: 0.2 }}
          >
            <div className="relative w-64 h-80 sm:w-72 sm:h-96 md:w-[400px] md:h-[467px]">
              <Image
                src="https://ik.imagekit.io/msmrd69gi/QJO8Npsh1Ojp8Xa0MvNcGcDKHg.png?updatedAt=1750492852178"
                alt="New Arrivals Collection"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain"
                quality={90}
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;