"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";

const ElegantCollection = () => {
  return (
    <section className="px-5 lg:px-28 py-24 ">
      {/* Top Text */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-6"
      >
        <div>
          <h2 className="text-4xl font-bold text-gray-900">2025</h2>
          <p className="mt-2 text-gray-600 text-base leading-relaxed">
            Discover timeless elegance with our <br />
            curated collection of stylish dresses, <br />
            perfect for every occasion.
          </p>
        </div>
        <p className="text-xl md:text-2xl lg:text-4xl font-semibold">
          Elegant Dress <br />
          Collection
        </p>
      </motion.div>

      {/* Main Layout */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Large Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="lg:w-[50%] w-full rounded-xl overflow-hidden"
        >
          <Image
            src="https://ik.imagekit.io/msmrd69gi/0HR0u3IgahkEj84iPfEp9Tmm0k.png?updatedAt=1750330468896"
            alt="Elegant Dress"
            width={600}
            height={600}
            className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
          />
        </motion.div>

        {/* Right Side Items */}
        <div className="lg:w-[50%] w-full flex flex-col gap-8">
          {/* Top Product */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center justify-between gap-6"
          >
            <div>
              <h3 className="text-xl font-semibold text-gray-800">
                FrostShield Jacket
              </h3>
              <p className="text-gray-600 mt-1">
                Stay warm, stylish, and cozy <br /> in cold weather.
              </p>
              <p className="mt-2 font-bold text-[#e3834f]">$89.99</p>
            </div>
            <div className="w-[400px]">
              <Image
                src="https://ik.imagekit.io/msmrd69gi/g9xY9UheLGzcX2IETcgAUqHmhgM.png?updatedAt=1750330486891"
                alt="Jacket"
                width={300}
                height={200}
                className="rounded-lg hover:scale-105 transition duration-500"
              />
            </div>
          </motion.div>

          {/* Bottom Product */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center justify-between gap-6"
          >
            <div className="w-[400px]">
              <Image
                src="https://ik.imagekit.io/msmrd69gi/L7AHuVIdi7CVQYRWpBHlTYdVPsc.png?updatedAt=1750330502343"
                alt="Jacket 2"
                width={300}
                height={200}
                className="rounded-lg hover:scale-105 transition duration-500"
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">
                Arctic Edge Coat
              </h3>
              <p className="text-gray-600 mt-1">
                Embrace chilly days with <br /> fashionable insulation.
              </p>
              <p className="mt-2 font-bold text-[#e3834f]">$99.99</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ElegantCollection;
