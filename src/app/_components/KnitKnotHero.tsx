"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";

const KnitKnotHero = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  
  const smoothScroll = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 20,
    mass: 0.6,
  });

  // Left Image animation
  const leftY = useTransform(smoothScroll, [0, 1], [200, -300]);
  const leftScale = useTransform(smoothScroll, [0, 1], [1, 1.12]);

  // Right Image animation
  const rightY = useTransform(smoothScroll, [0, 1], [-200, 300]);
  const rightScale = useTransform(smoothScroll, [0, 1], [1, 1.12]);

  return (
    <section
      ref={ref}
      className="relative bg-[#EDEBE5] h-full lg:h-[130vh] overflow-hidden flex items-center justify-center"
    >
      {/* Left Image */}
      <motion.div
        style={{ y: leftY, scale: leftScale }}
        className="absolute left-24 bottom-1/3 w-[200px] md:w-[260px] lg:w-[300px] z-0"
      >
        <Image
          src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/92865840-2085-4577-9816-b0a86f16aa3d.png"
          alt="Left Model"
          width={400}
          height={600}
          className="object-contain"
        />
      </motion.div>

      {/* Right Image */}
      <motion.div
        style={{ y: rightY, scale: rightScale }}
        className="absolute right-24 top-1/3 w-[200px] md:w-[260px] lg:w-[300px] z-0"
      >
        <Image
          src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/d8ae11a9-b2ae-4a78-8bbc-101257c1260b.png"
          alt="Right Model"
          width={400}
          height={600}
          className="object-contain"
        />
      </motion.div>

      {/* Center Content */}
      <div className="relative z-10 text-center px-4 md:px-8 max-w-2xl">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-[30px] md:text-[42px] font-semibold leading-snug text-[#2C1E1E]"
        >
          Tailored, High-Quality Custom <br />
          Clothing from KnitKnot
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="mt-4 text-[14px] md:text-base text-[#2C1E1E]/80"
        >
          Premium-quality clothing crafted to reflect the essence of KnitKnot.
          Elegance, comfort, and durability woven into every stitch.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="mt-6 flex justify-center"
        >
          <Link href="/shop">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-6 py-2 border border-[#2C1E1E] rounded-full text-[#2C1E1E] font-medium hover:bg-[#2C1E1E] hover:text-white transition duration-300"
            >
              Learn More <FaArrowRight className="ml-2" />
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default KnitKnotHero;
