'use client';

import React from 'react';
import Image from 'next/image';

export type Product = {
  id: number;
  title: string;
  category: string;
  price: string;
  image: string;
  inStock: boolean;
};

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="group rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300 relative">
      {!product.inStock && (
        <div className="absolute top-4 right-4 bg-gray-800 text-white text-xs px-3 py-1 rounded-full z-10">
          Out of stock
        </div>
      )}
      <div className="w-full h-[320px] bg-gray-50 relative overflow-hidden">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-contain p-6 transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-5">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-semibold line-clamp-1">{product.title}</h3>
            <p className="text-xs text-gray-500 uppercase tracking-wider mt-1">
              {product.category}
            </p>
          </div>
          <div className="text-right">
            <p className="text-base font-bold">{product.price}</p>
            {product.inStock && (
              <p className="text-xs text-green-600 mt-1">In stock</p>
            )}
          </div>
        </div>
        <div className="mt-4 flex gap-3">
          <button className="flex-1 py-2.5 text-sm bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
            Add to Cart
          </button>
          <button className="w-11 h-11 flex items-center justify-center border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
