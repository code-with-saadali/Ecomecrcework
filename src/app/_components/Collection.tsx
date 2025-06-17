"use client";
import Image from "next/image";

const Collection = () => (
  <section className="bg-white py-20 px-6 md:px-12 lg:px-20">
    {/* Section Heading */}
    <h2 className="text-3xl font-semibold text-center mb-12">Top Collections</h2>

    {/* Top Collections Grid */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
      <div className="relative group overflow-hidden rounded-lg">
        <Image
          src="https://images.unsplash.com/photo-1603415526960-f12a9d7b0f7a?auto=format&fit=crop&w=600&q=80"
          alt="Bestseller"
          width={600}
          height={800}
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
          <p className="text-white text-xl font-medium">Bestseller&apos;s</p>
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <div className="relative group overflow-hidden rounded-lg">
          <Image
            src="https://images.unsplash.com/photo-1520975669419-f4bb0fdd7119?auto=format&fit=crop&w=600&q=80"
            alt="New Arrivals"
            width={600}
            height={400}
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
            <p className="text-white text-xl font-medium">New arrivals</p>
          </div>
        </div>
        <div className="relative group overflow-hidden rounded-lg">
          <Image
            src="https://images.unsplash.com/photo-1618354697664-256f79f2c91b?auto=format&fit=crop&w=600&q=80"
            alt="Style Essentials"
            width={600}
            height={400}
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
            <p className="text-white text-xl font-medium">Style Essentials</p>
          </div>
        </div>
      </div>
    </div>

    {/* Shop the Look */}
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
      <div className="grid grid-cols-2 gap-4">
        <Image
          src="https://images.unsplash.com/photo-1555098219-8be57c1217b7?auto=format&fit=crop&w=400&q=80"
          alt="Look 1"
          width={300}
          height={400}
          className="object-cover rounded-lg"
        />
        <Image
          src="https://images.unsplash.com/photo-1566753323558-f4e0952af115?auto=format&fit=crop&w=400&q=80"
          alt="Look 2"
          width={300}
          height={400}
          className="object-cover rounded-lg"
        />
      </div>
      <div className="text-center lg:text-left flex flex-col justify-center">
        <h3 className="text-2xl font-semibold mb-4">Shop the look</h3>
        <p className="text-gray-600 text-sm mb-6">
          Explore curated outfits to perfect your style effortlessly.
        </p>
        <p className="text-xs text-gray-500">A head to toe shopping experience</p>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {[
          "https://images.unsplash.com/photo-1618354697664-256f79f2c91b?auto=format&fit=crop&w=200&q=80",
          "https://images.unsplash.com/photo-1514996937319-344454492b37?auto=format&fit=crop&w=200&q=80",
          "https://images.unsplash.com/photo-1495121605193-b116b5b09a62?auto=format&fit=crop&w=200&q=80",
          "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=200&q=80",
        ].map((src, idx) => (
          <Image
            key={idx}
            src={src}
            alt={`Accessory ${idx + 1}`}
            width={200}
            height={200}
            className="object-cover rounded-lg"
          />
        ))}
      </div>
    </div>
  </section>
);

export default Collection;
