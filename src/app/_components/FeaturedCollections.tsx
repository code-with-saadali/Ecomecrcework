"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

const collections = [
  {
    title: "Men",
    image:
      "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/d8ae11a9-b2ae-4a78-8bbc-101257c1260b.png",
    href: "/men",
  },
  {
    title: "Women",
    image:
      "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/92865840-2085-4577-9816-b0a86f16aa3d.png",
    href: "/women",
  },
];

const FeaturedCollections = () => {
  return (
    <main className="relative mx-auto px-5 lg:px-24 py-16 md:py-24 bg-white text-[#2C1E1E] overflow-hidden">
      <section className="max-w-7xl mx-auto">
        {/* Heading Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-md mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 leading-tight">
            Featured <br /> Collections
          </h2>
          <p className="text-gray-600 text-base md:text-lg mb-6">
            Discover the latest additions to our best-selling Loungewear
            collection.
          </p>
          <motion.a
            href="/shop"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-6 py-2 border border-[#2C1E1E] rounded-full text-[#2C1E1E] font-medium hover:bg-[#2C1E1E] hover:text-white transition duration-300"
          >
            Shop Now
            <FaArrowRight className="ml-2" />
          </motion.a>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 relative">
          {collections.map((item, idx) => (
            <motion.a
              key={idx}
              href={item.href}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="group relative block overflow-hidden rounded-xl shadow-md"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="relative w-full h-[400px]"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover rounded-xl"
                />
              </motion.div>
              <div className="absolute bottom-5 left-5 bg-white/90 backdrop-blur-sm px-5 py-2 rounded-full flex items-center gap-3 border border-[#AD7E7A]">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-[#2C1E1E]">
                  {item.title}
                </h3>
                <FaArrowRight className="text-[#2C1E1E] text-xs" />
              </div>
            </motion.a>
          ))}

          {/* Discount Badge */}
          <motion.div 
            className="absolute right-0 -bottom-10 md:right-[-80px] md:bottom-[-40px] w-[120px] h-[120px] md:w-[150px] md:h-[150px] rounded-full z-20"
            initial={{ scale: 0, rotate: -45 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 1.5, type: "spring", stiffness: 100 }}
          >
            <div className="relative w-full h-full">
              <div className="absolute inset-[20px] rounded-full border-2 border-[#AD7E7A] border-dashed opacity-30" />
              <motion.div
                className="absolute inset-0 flex items-center justify-center rounded-full"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
              >
                <svg viewBox="0 0 100 100" className="w-full h-full fill-[#2C1E1E]">
                  <defs>
                    <path
                      id="circlePath"
                      d="M 50, 50 m -30, 0 a 30,30 0 1,1 60,0 a 30,30 0 1,1 -60,0"
                    />
                  </defs>
                  <text fontSize="6" fontWeight="bold">
                    <textPath xlinkHref="#circlePath" startOffset="0%" textLength="220">
                      • NEW COLLECTION • SUMMER SALE •
                    </textPath>
                  </text>
                </svg>
              </motion.div>

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#FCE691] w-[60px] h-[60px] md:w-[70px] md:h-[70px] rounded-full flex flex-col items-center justify-center shadow-md border border-[#AD7E7A]">
                <h1 className="text-[14px] md:text-[16px] font-bold text-[#2C1E1E]">30%</h1>
                <h1 className="uppercase text-[10px] md:text-[11px] text-[#2C1E1E] mt-[-2px]">OFF</h1>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default FeaturedCollections;
