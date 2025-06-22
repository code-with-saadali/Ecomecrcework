'use client';

import React from 'react';

type Props = {
  selectedCategory: string;
  setSelectedCategory: (cat: string) => void;
  inStockOnly: boolean;
  setInStockOnly: (val: boolean) => void;
  categories: string[];
};

const ProductFilterSidebar = ({
  selectedCategory,
  setSelectedCategory,
  inStockOnly,
  setInStockOnly,
  categories,
}: Props) => (
  <aside className="border-r border-gray-100 pr-6">
    <h2 className="text-2xl font-bold mb-8 tracking-tight">Filter Products</h2>

    {/* Availability */}
    <div className="mb-10">
      <p className="text-base font-medium mb-4 text-gray-900">Availability</p>
      <label className="flex items-center gap-3 cursor-pointer group">
        <div className="relative">
          <input
            type="checkbox"
            className="sr-only"
            checked={inStockOnly}
            onChange={() => setInStockOnly(!inStockOnly)}
          />
          <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${
            inStockOnly ? 'bg-black border-black' : 'border-gray-300 group-hover:border-gray-400'
          }`}>
            {inStockOnly && (
              <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            )}
          </div>
        </div>
        <span className="text-gray-700 group-hover:text-black">In stock only</span>
      </label>
    </div>

    {/* Categories */}
    <div>
      <p className="text-base font-medium mb-4 text-gray-900">Categories</p>
      <div className="flex flex-col gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`text-left py-2 px-3 rounded-lg transition-colors ${
              selectedCategory === cat ? 'bg-black text-white font-medium' : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  </aside>
);

export default ProductFilterSidebar;
