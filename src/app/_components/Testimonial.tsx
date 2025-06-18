"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaStar, FaChevronLeft, FaChevronRight, FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    text: `Incredible customer service and beautiful packaging! Every order feels like a gift.`,
    name: "Sarah Johnson",
    location: "New York, NY",
  },
  {
    text: `Amazing experience, super fast delivery and very polite support team.`,
    name: "Ali Raza",
    location: "Lahore, PK",
  },
  {
    text: `High quality products with premium touch. Loved the shopping journey!`,
    name: "Emma Clark",
    location: "London, UK",
  },
  {
    text: `Customer support is outstanding. Would definitely recommend!`,
    name: "Zainab Ahmed",
    location: "Karachi, PK",
  },
  {
    text: `Absolutely perfect from packaging to delivery. 10/10!`,
    name: "John Doe",
    location: "Dubai, UAE",
  },
];

const Testimonial = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setIndex((prev) =>
      newDirection === 1
        ? (prev + 1) % testimonials.length
        : (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
    }),
  };

  return (
    <section className="bg-[#EDEBE5] py-24 px-5 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-16 overflow-hidden">
        {/* Left Title */}
        <div className="w-full lg:w-[30%]">
          <p className="uppercase tracking-[0.15em] text-gray-500 text-sm mb-4">
            What clients are saying
          </p>
          <h2 className="text-5xl font-serif text-gray-900 leading-tight">
            Customer<br />care is our<br />priority
          </h2>

          {/* Navigation */}
          <div className="flex items-center gap-6 mt-10">
            <button
              onClick={() => paginate(-1)}
              className="text-gray-700 hover:text-black transition text-2xl"
            >
              <FaChevronLeft />
            </button>
            <span className="text-gray-600 font-medium text-sm">
              {index + 1}/{testimonials.length}
            </span>
            <button
              onClick={() => paginate(1)}
              className="text-gray-700 hover:text-black transition text-2xl"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>

        {/* Right Testimonial Card */}
        <div className="w-full lg:w-[70%] relative min-h-[300px]">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={index}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.6 }}
              className="absolute top-0 left-0 w-full bg-white p-10 rounded-2xl shadow-xl"
            >
              {/* Quote Icon */}
              <FaQuoteLeft className="text-gray-300 text-5xl mb-6" />

              {/* Testimonial Text */}
              <p className="text-xl text-gray-800 font-serif mb-6 leading-relaxed">
                “{testimonials[index].text}”
              </p>

              {/* Stars */}
              <div className="flex items-center gap-1 text-yellow-500 mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>

              {/* Name */}
              <p className="font-semibold text-gray-900 text-lg">
                {testimonials[index].name}
                <span className="text-gray-600 font-normal text-base">
                  , {testimonials[index].location}
                </span>
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
