"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiHeart, FiShoppingCart, FiStar} from "react-icons/fi";
import { useState } from "react";

const products = [
  {
    id: 1,
    title: "Ridge Knit Jacket",
    category: "Sport Jackets",
    price: "$85",
    rating: 4.8,
    reviews: 142,
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/92865840-2085-4577-9816-b0a86f16aa3d.png",
    badge: "BEST SELLER",
    colors: ["#2C1E1E", "#B91C1C", "#1D4ED8"]
  },
  {
    id: 2,
    title: "Adventure Ready Sweater",
    category: "Outerwear",
    price: "$65",
    rating: 4.6,
    reviews: 89,
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/d8ae11a9-b2ae-4a78-8bbc-101257c1260b.png",
    badge: "NEW ARRIVAL",
    colors: ["#0F766E", "#78350F", "#1E293B"]
  },
  {
    id: 3,
    title: "Pure Whimsy Baby Tee",
    category: "T-Shirts",
    price: "$32",
    rating: 4.9,
    reviews: 210,
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/92865840-2085-4577-9816-b0a86f16aa3d.png",
    badge: "TRENDING",
    colors: ["#C026D3", "#F97316", "#3B82F6"]
  },
  {
    id: 4,
    title: "FlexFit Leggings",
    category: "Athletic Wear",
    price: "$45",
    rating: 4.7,
    reviews: 167,
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/d8ae11a9-b2ae-4a78-8bbc-101257c1260b.png",
    badge: "LIMITED EDITION",
    colors: ["#4B5563", "#7C3AED", "#0D9488"]
  },
];

const PopularProduct = () => {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);
  const [filter, setFilter] = useState<"ALL" | "BEST SELLER" | "NEW ARRIVAL">("ALL");

  const filteredProducts =
    filter === "ALL"
      ? products
      : products.filter((product) => product.badge === filter);

  return (
    <section className="px-5 lg:px-28 py-24 bg-gradient-to-b from-[#F9FAFB] to-[#F1F5F9] text-[#1F2937]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-extrabold text-[#111827]">Popular Products</h2>
          <p className="mt-3 text-lg text-gray-600">
            Discover our most loved and top-rated selections, handpicked for you.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="flex justify-center flex-wrap gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {["ALL", "NEW ARRIVAL", "BEST SELLER"].map((btn) => (
            <button
              key={btn}
              onClick={() => setFilter(btn as typeof filter)}
              className={`px-6 py-2.5 rounded-full font-semibold transition duration-200 border ${
                filter === btn
                  ? "bg-[#1F2937] text-white"
                  : "bg-white border-gray-300 text-gray-700 hover:bg-gray-100"
              }`}
            >
              {btn === "ALL" ? "All Products" : btn.replace("_", " ")}
            </button>
          ))}
        </motion.div>

        {/* Product Grid */}
        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              className="relative bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 group"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              {/* Badge */}
              <div className="absolute top-4 left-4 z-10">
                <span className="text-xs font-medium px-3 py-1 rounded-full bg-[#1F2937] text-white shadow-md">
                  {product.badge}
                </span>
              </div>

              {/* Hover Icons */}
              <div
                className={`absolute top-4 right-4 z-10 flex flex-col gap-2 transition-all duration-300 ${
                  hoveredProduct === product.id ? "opacity-100" : "opacity-0"
                }`}
              >
                {[FiHeart, FiShoppingCart].map((Icon, i) => (
                  <motion.button
                    key={i}
                    className="w-10 h-10 bg-white flex items-center justify-center rounded-full shadow hover:shadow-md hover:bg-gray-100"
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Icon className="text-gray-700" />
                  </motion.button>
                ))}
              </div>

              {/* Image */}
              <div className="relative w-full h-80 bg-gray-50">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-contain p-6 transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Product Info */}
              <div className="p-5 space-y-2">
                <div className="flex items-center gap-2">
                  {product.colors.map((color, i) => (
                    <div
                      key={i}
                      className="w-4 h-4 rounded-full border border-white ring-1 ring-gray-300"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
                <h3 className="text-lg font-semibold">{product.title}</h3>
                <p className="text-sm text-gray-500">{product.category}</p>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-lg font-bold text-[#1F2937]">{product.price}</span>
                  <div className="flex items-center gap-1 text-sm text-yellow-500">
                    <FiStar className="w-4 h-4" />
                    <span>{product.rating}</span>
                    <span className="text-gray-400 ml-1">({product.reviews})</span>
                  </div>
                </div>
              </div>

              {/* Quick View CTA */}
              <motion.div
                className={`absolute bottom-0 left-0 right-0 text-center py-3 font-semibold text-white bg-[#1F2937] transition-all duration-300 ${
                  hoveredProduct === product.id
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-full"
                }`}
              >
                Quick View
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularProduct;
