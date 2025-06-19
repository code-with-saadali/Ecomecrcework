"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const categories = [
  {
    label: "Men’s",
    imageLeft: "https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?auto=format&fit=crop&w=600&h=800&q=80",
    imageRight: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=600&h=800&q=80",
  },
  {
    label: "Women’s",
    imageLeft: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=600&h=750&q=80",
    imageRight: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=600&h=750&q=80",
  },
  {
    label: "Bestseller",
    imageLeft: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&h=750&q=80",
    imageRight: "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?auto=format&fit=crop&w=600&h=750&q=80",
  },
  {
    label: "New Arrival",
    imageLeft: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=600&h=750&q=80",
    imageRight: "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?auto=format&fit=crop&w=600&h=750&q=80",
  },
];

const CategorySection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-[#f9f6ef] py-16 md:py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="uppercase tracking-[4px] text-xs text-gray-500 mb-3">
            Premium Collections
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-light tracking-tight mb-6">
            Discover Our Categories
          </h2>
          <div className="w-20 h-0.5 bg-amber-800 mx-auto"></div>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-4">
          {/* Left Image */}
          <div className="w-full lg:w-[35%] h-[400px] relative rounded-lg overflow-hidden group cursor-pointer shadow-lg">
            <AnimatePresence mode="wait">
              <motion.div
                key={`left-${activeIndex}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0"
              >
                <Image
                  src={categories[activeIndex].imageLeft}
                  alt={categories[activeIndex].label}
                  fill
                  sizes="(max-width: 768px) 100vw, 35vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Center Category Text */}
          <div className="w-full lg:w-[30%] py-6 space-y-8">
            {categories.map((cat, index) => (
              <div
                key={index}
                onMouseEnter={() => setActiveIndex(index)}
                className="relative cursor-pointer overflow-hidden py-3"
              >
                <motion.div
                  className={`text-2xl md:text-3xl font-medium text-center ${
                    activeIndex === index ? "text-[#c56e3f]" : "text-gray-800"
                  }`}
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.3 } 
                  }}
                >
                  {cat.label}
                  
                  {activeIndex === index && (
                    <motion.div
                      layoutId="categoryHighlight"
                      className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-[#c56e3f]"
                      initial={false}
                      transition={{ 
                        type: "spring", 
                        stiffness: 300, 
                        damping: 25 
                      }}
                      style={{ width: '30%' }}
                    />
                  )}
                </motion.div>
              </div>
            ))}
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-[35%] h-[400px] relative rounded-lg overflow-hidden group cursor-pointer shadow-lg">
            <AnimatePresence mode="wait">
              <motion.div
                key={`right-${activeIndex}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0"
              >
                <Image
                  src={categories[activeIndex].imageRight}
                  alt={categories[activeIndex].label}
                  fill
                  sizes="(max-width: 768px) 100vw, 35vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;