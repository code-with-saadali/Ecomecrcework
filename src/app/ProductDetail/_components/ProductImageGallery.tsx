"use client";
import React from "react";
import Image from "next/image";

interface Props {
  selectedImage: string;
  setSelectedImage: (img: string) => void;
  isHovering: boolean;
  setIsHovering: (hover: boolean) => void;
  images: string[];
}

const ProductImageGallery: React.FC<Props> = ({
  selectedImage,
  setSelectedImage,
  isHovering,
  setIsHovering,
  images,
}) => (
  <div className="relative">
    <div
      className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-[#f5f2ed] shadow-xl border border-[#eae6e1]"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <Image
        src={selectedImage}
        alt="Ridge Knit Jacket"
        fill
        priority
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover transition-all duration-700"
        style={{ transform: isHovering ? "scale(1.03)" : "scale(1)" }}
      />
      <div className="absolute bottom-6 left-6">
        <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
          <span className="text-sm font-medium text-[#1f1f1f]">Premium Collection</span>
        </div>
      </div>
    </div>

    {/* Thumbnails */}
    <div className="flex justify-center mt-8 gap-3">
      {images.map((img, i) => (
        <button
          key={i}
          onClick={() => setSelectedImage(img)}
          className={`flex-shrink-0 transition-all duration-300 ${
            selectedImage === img ? "ring-2 ring-[#c5a47e] scale-105" : "opacity-70 hover:opacity-100"
          } rounded-lg overflow-hidden w-16 h-20 md:w-20 md:h-24`}
        >
          <Image src={img} alt={`Jacket view ${i + 1}`} width={80} height={100} className="object-cover w-full h-full" />
        </button>
      ))}
    </div>
  </div>
);

export default ProductImageGallery;