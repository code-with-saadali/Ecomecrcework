"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import ProductCard, { Product } from "./ProductCard";
import ProductFilterSidebar from "./ProductFilterSidebar";
import SortSelect from "./SortSelect";
import EmptyState from "./EmptyState";
import LoadingSkeleton from "./LoadingSkeleton";

const allProducts: Product[] = [
  {
    id: 1,
    title: "Ridge Knit Jacket",
    category: "Sport Jackets",
    price: "$85.00",
    image:
      "https://ik.imagekit.io/msmrd69gi/GgklwQYSLkrkj8pzHebIfKy2Rbc.png?updatedAt=1750243916403",
    inStock: true,
  },
  {
    id: 2,
    title: "Adventure Ready Boys’ Sweater",
    category: "Sweaters",
    price: "$45.00",
    image:
      "https://ik.imagekit.io/msmrd69gi/HSXcqTyvkGjEoyK13qN4gIpaDQ.png?updatedAt=1750243900045",
    inStock: true,
  },
  {
    id: 3,
    title: "Pure Whimsy Baby Tee",
    category: "T-Shirts",
    price: "$32.00",
    image:
      "https://ik.imagekit.io/msmrd69gi/0HR0u3IgahkEj84iPfEp9Tmm0k.png?updatedAt=1750330468896",
    inStock: true,
  },
  {
    id: 4,
    title: "Performance Running Leggings",
    category: "Leggings",
    price: "$55.00",
    image:
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=500&q=80",
    inStock: false,
  },
  {
    id: 5,
    title: "Winter Hiking Boots",
    category: "Boots",
    price: "$120.00",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=500&q=80",
    inStock: true,
  },
  {
    id: 6,
    title: "Classic Ballet Flats",
    category: "Costume Shoes",
    price: "$65.00",
    image:
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=500&q=80",
    inStock: true,
  },
];

const categories = [
  "All products",
  "Sport Jackets",
  "Sweaters",
  "T-Shirts",
  "Leggings",
  "Boots",
  "Costume Shoes",
];

const sortOptions = [
  { id: "price-low", name: "Price: Low to High" },
  { id: "price-high", name: "Price: High to Low" },
  { id: "newest", name: "Newest Arrivals" },
  { id: "popular", name: "Most Popular" },
];

const ProductFilterGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState("All products");
  const [inStockOnly, setInStockOnly] = useState(true);
  const [sortOption, setSortOption] = useState("newest");
  const [searchTerm, setSearchTerm] = useState("");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  let filteredProducts = allProducts.filter((product) => {
    const categoryMatch =
      selectedCategory === "All products" ||
      product.category === selectedCategory;
    const stockMatch = inStockOnly ? product.inStock : true;
    const searchMatch = product.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    return categoryMatch && stockMatch && searchMatch;
  });

  filteredProducts = [...filteredProducts].sort((a, b) => {
    switch (sortOption) {
      case "price-low":
        return parseFloat(a.price.slice(1)) - parseFloat(b.price.slice(1));
      case "price-high":
        return parseFloat(b.price.slice(1)) - parseFloat(a.price.slice(1));
      case "newest":
        return b.id - a.id;
      default:
        return 0;
    }
  });

  const handleResetFilters = () => {
    setSelectedCategory("All products");
    setInStockOnly(true);
    setSearchTerm("");
  };

  return (
    <section className="px-4 py-16 lg:px-28 bg-white text-[#1E1E1E]">
      <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12">
        <div className="sticky top-24 h-[500px]">
          {/* Sidebar */}
          <ProductFilterSidebar
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            inStockOnly={inStockOnly}
            setInStockOnly={setInStockOnly}
            categories={categories}
          />
        </div>

        {/* Main Content */}
        <div>
          {/* Search Bar */}
          <div className="mb-6">
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full md:w-96 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">
                {selectedCategory === "All products"
                  ? "All Products"
                  : selectedCategory}
              </h1>
              <p className="text-gray-500 mt-1">
                {filteredProducts.length}{" "}
                {filteredProducts.length === 1 ? "product" : "products"}
              </p>
            </div>
            <SortSelect
              sortOption={sortOption}
              setSortOption={setSortOption}
              sortOptions={sortOptions}
            />
          </div>

          {/* Product List */}
          {!isMounted ? (
            <LoadingSkeleton />
          ) : filteredProducts.length > 0 ? (
            <motion.div
              layout
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              <AnimatePresence>
                {filteredProducts.map((product) => (
                  <motion.div
                    key={product.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <ProductCard product={product} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          ) : (
            <EmptyState onReset={handleResetFilters} />
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductFilterGrid;
