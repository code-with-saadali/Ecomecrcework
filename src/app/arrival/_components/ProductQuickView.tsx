'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiStar, FiCheck } from 'react-icons/fi';

type Product = {
  id: number;
  title: string;
  category: string;
  price: string;
  rating: number;
  reviews: number;
  image: string;
  badge: string;
  colors: string[];
};

type Props = {
  product: Product | null;
  onClose: () => void;
};

const ProductQuickView: React.FC<Props> = ({ product, onClose }) => {
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      onClose(); // auto close after add (optional)
    }, 1500);
  };

  return (
    <AnimatePresence>
      {product && (
        <motion.div
          className="fixed inset-0 z-50 backdrop-blur-sm bg-black/50 flex justify-center items-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white rounded-2xl p-6 w-full max-w-4xl shadow-2xl relative flex flex-col md:flex-row gap-6 overflow-hidden"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-black transition"
              onClick={onClose}
              title="Close"
            >
              <FiX size={26} />
            </button>

            {/* Product Image */}
            <div className="relative w-full md:w-1/2 h-64 md:h-[440px] group overflow-hidden rounded-xl">
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* Product Details */}
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">{product.title}</h2>
                <p className="text-gray-500 mb-4">{product.category}</p>

                {/* Rating */}
                <div className="flex items-center gap-1 text-yellow-500 text-sm mb-2">
                  <FiStar className="w-4 h-4" />
                  <span>{product.rating}</span>
                  <span className="text-gray-400 ml-1">({product.reviews})</span>
                </div>

                <p className="text-xl font-bold text-gray-900 mb-6">{product.price}</p>

                {/* Colors */}
                <div className="mb-6">
                  <p className="text-sm font-medium text-gray-700 mb-2">Select Color:</p>
                  <div className="flex gap-3">
                    {product.colors.map((color, i) => (
                      <button
                        key={i}
                        onClick={() => setSelectedColor(color)}
                        className={`w-7 h-7 rounded-full ring-2 flex items-center justify-center transition-all ${
                          selectedColor === color
                            ? 'ring-black scale-110'
                            : 'ring-gray-300'
                        }`}
                        style={{ backgroundColor: color }}
                        aria-label={`Color option ${i}`}
                      >
                        {selectedColor === color && <FiCheck className="text-white text-xs" />}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Add to Cart */}
              <motion.button
                onClick={handleAddToCart}
                disabled={!selectedColor || added}
                className={`mt-auto py-3 px-5 rounded-lg font-semibold transition text-white ${
                  added
                    ? 'bg-green-600'
                    : selectedColor
                    ? 'bg-black hover:bg-gray-800'
                    : 'bg-gray-400 cursor-not-allowed'
                }`}
                whileTap={{ scale: 0.95 }}
              >
                {added ? 'Added!' : 'Add to Cart'}
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProductQuickView;
