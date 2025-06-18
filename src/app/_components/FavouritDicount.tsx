"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const FavouritDicount = () => {
  return (
    <main className="bg-white">
      <section className="px-5 lg:px-28 py-20">
        <div className="flex gap-10 max-lg:flex-col">
          {/* Left Sticky Text Section */}
          <div className="w-full lg:w-[40%] sticky top-20 self-start">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Your favorites, <br /> now at <span className="text-[#AD7E7A]">discounts!</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Grab your favorite styles now at unbeatable sale prices!
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center uppercase px-8 py-3 border border-[#2C1E1E] rounded-full text-[#2C1E1E] font-semibold hover:bg-[#2C1E1E] hover:text-white transition duration-300"
            >
              Shop now
            </motion.button>
          </div>

          {/* Right Product Display Section */}
          <div className="w-full lg:w-[60%] bg-[#ECEBE6] p-8 rounded-xl">
            <div className="flex flex-col md:flex-row justify-between items-center gap-10">
              {/* Left Product (hover group wrapper) */}
              <div className="group space-y-4 text-center md:text-left">
                <div className="overflow-hidden rounded-lg">
                  <Image
                    src="https://ik.imagekit.io/msmrd69gi/HSXcqTyvkGjEoyK13qN4gIpaDQ.png?updatedAt=1750243900045"
                    width={350}
                    height={400}
                    alt="Ridge knit jacket"
                    className="rounded-lg object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-gray-900 cursor-pointer">
                    Ridge Knit Jacket
                  </h3>
                  <p className="text-gray-600 cursor-pointer">Sport Jackets</p>
                </div>
              </div>

              {/* Right Product */}
              <div className="hidden md:block">
                <Image
                  src="https://ik.imagekit.io/msmrd69gi/GgklwQYSLkrkj8pzHebIfKy2Rbc.png?updatedAt=1750243916403"
                  width={200}
                  height={400}
                  alt="Product"
                  className="rounded-lg object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default FavouritDicount;
