"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  FiShoppingBag,
  FiX,
  FiEdit2,
  FiTrash2,
  FiChevronRight,
} from "react-icons/fi";
import { MdKeyboardArrowDown } from "react-icons/md";
import ProductHeader from "./ProductHeader";
import ProductImageGallery from "./ProductImageGallery";
import CheckoutSidebar from "@/app/_components/CheckoutSidebar";

const productImages = [
  "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1548126032-079a0fb0099d?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=800&q=80",
];

const sectionItems = [
  {
    id: "materials",
    title: "MATERIALS & CRAFTSMANSHIP",
    content:
      "100% premium merino wool sourced ethically from New Zealand. Each jacket undergoes 78 steps of meticulous hand-finishing by our master tailors in Italy.",
  },
  {
    id: "shipping",
    title: "WORLDWIDE DELIVERY & CARE",
    content:
      "Complimentary global express shipping with full insurance. Hand-delivered in premium packaging. Dry cleaning recommended.",
  },
  {
    id: "sustainability",
    title: "SUSTAINABILITY & ETHICS",
    content:
      "Carbon-neutral certified production. Each purchase contributes to reforestation initiatives. Crafted in facilities with fair wages.",
  },
];

const dummyCartItems = [
  {
    id: 1,
    name: "Ridge Knit Jacket",
    material: "100% Merino Wool",
    image:
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=800&q=80",
    qty: 1,
    price: 189,
    color: "BLACK",
    size: "M",
  },
];

const subtotal = dummyCartItems.reduce((acc, item) => acc + item.price * item.qty, 0);
const shipping = 20;
const total = subtotal + shipping;

type SectionKey = "materials" | "shipping" | "sustainability";

const ProductDetails: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState(productImages[0]);
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState("BLACK");
  const [selectedSize, setSelectedSize] = useState("M");
  const [isHovering, setIsHovering] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);
  const [expandedSections, setExpandedSections] = useState<Record<SectionKey, boolean>>({
    materials: false,
    shipping: false,
    sustainability: false,
  });

  const toggleSection = (section: SectionKey) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const closeCart = () => setIsCartOpen(false);

  return (
    <section className="min-h-screen text-[#1f1f1f] py-40 px-5">
      <div className="max-w-7xl mx-auto">
        <ProductHeader />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <ProductImageGallery
            selectedImage={selectedImage}
            setSelectedImage={setSelectedImage}
            isHovering={isHovering}
            setIsHovering={setIsHovering}
            images={productImages}
          />

          {/* Product Info Section */}
          <div className="px-2">
            {/* Title & Price */}
            <div className="mb-8">
              <span className="text-sm text-[#7d7d7d] uppercase tracking-[3px]">Heritage Collection</span>
              <h1 className="text-4xl font-serif font-light mt-1 mb-3 tracking-wide">Ridge Knit Jacket</h1>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl font-light text-[#1f1f1f]">$189</span>
                <span className="line-through text-[#9e9e9e]">$289</span>
                <span className="ml-2 px-2.5 py-1 bg-[#c5a47e] text-white text-xs rounded-full">35% OFF</span>
              </div>
              <p className="text-[#5a5a5a] mb-6 leading-relaxed border-l-2 border-[#c5a47e] pl-4">
                Meticulously crafted from the finest sustainable merino wool, this jacket embodies timeless elegance.
              </p>
            </div>

            {/* Color Options */}
            <div className="mb-8">
              <p className="font-medium text-[#1f1f1f] mb-2">COLOR: {selectedColor}</p>
              <div className="flex gap-3">
                {[
                  { name: "BLACK", color: "#1f1f1f" },
                  { name: "CHARCOAL", color: "#4a4a4a" },
                  { name: "CAMEL", color: "#c5a47e" },
                ].map(({ name, color }) => (
                  <button
                    key={name}
                    onClick={() => setSelectedColor(name)}
                    className={`w-12 h-12 rounded-full`}
                    style={{
                      backgroundColor: color,
                      border: selectedColor === name ? "2px solid #c5a47e" : "1px solid #eae6e1",
                      transform: selectedColor === name ? "scale(1.1)" : "scale(1)",
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Size Options */}
            <div className="mb-8">
              <p className="font-medium text-[#1f1f1f] mb-2">SIZE: {selectedSize}</p>
              <div className="grid grid-cols-5 gap-3">
                {["XS", "S", "M", "L", "XL"].map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-3.5 rounded-lg transition-all ${
                      selectedSize === size
                        ? "bg-[#1f1f1f] text-white border border-[#1f1f1f]"
                        : "bg-white text-[#5a5a5a] border border-[#eae6e1] hover:border-[#c5a47e]"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity + Add to Cart */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <div className="border rounded-xl flex items-center">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-5 py-3.5 text-xl"
                  disabled={quantity === 1}
                >
                  −
                </button>
                <span className="px-5 py-2 w-12 text-center">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="px-5 py-3.5 text-xl">
                  ＋
                </button>
              </div>
              <button
                onClick={() => setIsCartOpen(true)}
                className="flex-1 bg-[#1f1f1f] text-white py-4 px-6 rounded-xl"
              >
                ADD TO CART
              </button>
            </div>

            {/* Expandable Sections */}
            <div className="space-y-5 border-t pt-8 border-[#eae6e1]">
              {sectionItems.map(({ id, title, content }) => (
                <div key={id}>
                  <button
                    onClick={() => toggleSection(id as SectionKey)}
                    className="flex justify-between w-full font-medium text-[#1f1f1f]"
                  >
                    {title}
                    <span className={`transform transition-transform ${expandedSections[id as SectionKey] ? "rotate-180" : ""}`}>
                      <MdKeyboardArrowDown />
                    </span>
                  </button>
                  {expandedSections[id as SectionKey] && (
                    <p className="text-[#5a5a5a] mt-2">{content}</p>
                  )}
                </div>
              ))}
            </div>

            {/* Cart Sidebar */}
            <AnimatePresence>
              {isCartOpen && !showCheckout && (
                <>
                  <motion.div
                    className="fixed inset-0 bg-black/70 z-[1000]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={closeCart}
                  />
                  <motion.div
                    className="fixed right-0 top-0 h-full w-full sm:w-[450px] bg-neutral-900 z-[10001] p-5 flex flex-col"
                    initial={{ x: "100%" }}
                    animate={{ x: 0 }}
                    exit={{ x: "100%" }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  >
                    <div className="flex justify-between items-center border-b border-neutral-800 pb-4">
                      <div className="flex items-center gap-2 text-white">
                        <FiShoppingBag />
                        <h2 className="text-xl">Shopping Bag</h2>
                        <span className="bg-amber-500 text-black text-xs px-2 py-1 rounded-full">
                          {dummyCartItems.length} items
                        </span>
                      </div>
                      <button onClick={closeCart}><FiX className="text-white text-xl" /></button>
                    </div>

                    <div className="flex-1 overflow-y-auto mt-5">
                      {dummyCartItems.map((item) => (
                        <div key={item.id} className="flex gap-4 mb-4 text-white border-b border-neutral-800 pb-4">
                          <div className="relative w-24 h-24">
                            <Image src={item.image} alt={item.name} fill className="rounded-lg object-cover" />
                            <span className="absolute -top-2 -right-2 bg-amber-500 text-black w-6 h-6 flex items-center justify-center rounded-full text-xs">
                              {item.qty}
                            </span>
                          </div>
                          <div>
                            <p className="font-medium">{item.name}</p>
                            <p className="text-xs text-neutral-400">{item.material}</p>
                            <div className="text-xs flex gap-2 mt-1">
                              <span>Color: {item.color}</span>
                              <span>Size: {item.size}</span>
                            </div>
                            <p className="mt-1 text-neutral-400">${item.price.toFixed(2)} × {item.qty}</p>
                            <div className="flex gap-3 text-sm mt-2">
                              <button className="text-amber-400 flex items-center gap-1"><FiEdit2 />Edit</button>
                              <button className="text-red-500 flex items-center gap-1"><FiTrash2 />Remove</button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="pt-4 border-t border-neutral-800 text-white space-y-3">
                      <div className="flex justify-between"><span>Subtotal</span><span>${subtotal.toFixed(2)}</span></div>
                      <div className="flex justify-between"><span>Shipping</span><span>${shipping.toFixed(2)}</span></div>
                      <div className="flex justify-between font-bold"><span>Total</span><span>${total.toFixed(2)}</span></div>
                      <button
                        onClick={() => setShowCheckout(true)}
                        className="w-full bg-amber-500 text-black py-3 rounded-lg flex justify-center items-center gap-2"
                      >
                        Proceed to Checkout <FiChevronRight />
                      </button>
                      <Link href="/shop" onClick={closeCart}>
                        <button className="w-full text-white border border-neutral-700 py-3 rounded-lg">
                          Continue Shopping
                        </button>
                      </Link>
                    </div>
                  </motion.div>
                </>
              )}
            </AnimatePresence>

            <CheckoutSidebar isOpen={showCheckout} onClose={() => setShowCheckout(false)} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
