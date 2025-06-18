"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const Articales = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="px-5 lg:px-28 py-28 bg-[#f9f7f6]">
      {/* Heading */}
      <div className="text-center mb-14">
        <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 leading-snug">
          Read Our <span className="text-[#AD7E7A]">Articles</span>
        </h1>
        <p className="text-gray-500 mt-4 text-lg">
          Discover trends, stories, and inspiration curated for you
        </p>
      </div>

      {/* Top Articles Row (Feature + 2 small) */}
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Featured Large Card */}
        <Link
          href="/"
          className="group relative w-full lg:w-1/2 h-[380px] overflow-hidden transition-all duration-500 rounded-xl"
        >
          <Image
            src="https://ik.imagekit.io/msmrd69gi/6Ta3F2s6VUa2Ce1PeHFELCdS6L4.png?updatedAt=1750242283743"
            alt="Featured"
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700 rounded-xl"
          />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all p-6 flex flex-col justify-end">
            <h2 className="text-white text-3xl font-semibold mb-1">Innovative</h2>
            <p className="text-gray-300">
              Discover our latest fashion trends – exclusively
            </p>
            <p className="text-sm text-gray-400 mt-2">Jul 12, 2024</p>
          </div>
        </Link>

        {/* Two Small Cards */}
        <div className="w-full lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: "Confidence",
              desc: "Find your perfect fit today – comfort & style",
              date: "Jun 18, 2024",
              src: "https://ik.imagekit.io/msmrd69gi/ad9hzDGbo7UUKZgQz9Rvt8FRNxI.png?updatedAt=1750241391755",
            },
            {
              title: "Essentials",
              desc: "Shop timeless pieces for every occasion",
              date: "May 5, 2024",
              src: "https://ik.imagekit.io/msmrd69gi/o0PboYCFNR2C0w7GsBJL9PEtoMU.png?updatedAt=1750241268909",
            },
          ].map((item, index) => (
            <Link href="/" key={index} className="group space-y-4">
              <div className="relative overflow-hidden rounded-xl">
                <Image
                  src={item.src}
                  alt={item.title}
                  width={350}
                  height={350}
                  className="object-cover group-hover:scale-105 transition-transform duration-500 rounded-xl"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
                <p className="text-sm text-gray-500 mt-1">{item.date}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Show More Articles (New Row Below) */}
      {showMore && (
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            {
              title: "Elevated",
              desc: "Minimalist styles that speak volumes",
              date: "Apr 9, 2024",
              src: "https://ik.imagekit.io/msmrd69gi/Xy2PhL2ycReAWgY5M0ir7vSnylc.webp?updatedAt=1750242702929",
            },
            {
              title: "Layered Looks",
              desc: "Perfect layers for winter and fall",
              date: "Mar 1, 2024",
              src: "https://ik.imagekit.io/msmrd69gi/pIjPE0NSwoJunbxFQevjENPKr2k.webp?updatedAt=1750242742973",
            },
            {
              title: "Everyday Vibes",
              desc: "Simplicity meets sophistication",
              date: "Feb 10, 2024",
              src: "https://ik.imagekit.io/msmrd69gi/0pyIyZeEMmj75LffprppnoSi9AY.webp?updatedAt=1750242834133",
            },
          ].map((item, index) => (
            <Link href="/" key={index} className="group space-y-4">
              <div className="relative overflow-hidden rounded-xl">
                <Image
                  src={item.src}
                  alt={item.title}
                  width={400}
                  height={300}
                  className="object-cover w-full h-[260px] group-hover:scale-105 transition-transform duration-500 rounded-xl"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
                <p className="text-sm text-gray-500 mt-1">{item.date}</p>
              </div>
            </Link>
          ))}
        </div>
      )}

      {/* Button */}
      {!showMore && (
        <div className="flex justify-center pt-16">
          <motion.button
            onClick={() => setShowMore(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center uppercase px-8 py-3 border border-[#2C1E1E] rounded-full text-[#2C1E1E] font-medium hover:bg-[#2C1E1E] hover:text-white transition duration-300 gap-2"
          >
            Read More <FaArrowRight className="text-xs" />
          </motion.button>
        </div>
      )}
    </section>
  );
};

export default Articales;
