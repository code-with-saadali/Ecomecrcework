"use client";
import Image from "next/image";
import Link from "next/link";

const collections = [
  {
    src: "https://ik.imagekit.io/msmrd69gi/collection1.png?updatedAt=1750233626491",
    label: "Bestseller's",
  },
  {
    src: "https://ik.imagekit.io/msmrd69gi/collection2.png?updatedAt=1750234061623",
    label: "New Arrivals",
  },
  {
    src: "https://ik.imagekit.io/msmrd69gi/collection3.png?updatedAt=1750234169908",
    label: "Editor’s Pick",
  },
];

const Collection = () => {
  return (
    <section className="bg-white py-20 px-5 lg:px-32 space-y-20">
      {/* Section Heading */}
      <h2 className="text-4xl font-bold text-center text-gray-900">
        Top Collections
      </h2>

      {/* Top Collections Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Large Image */}
        <div className="relative group overflow-hidden rounded-xl shadow-lg h-[480px] md:h-auto">
          <Image
            src={collections[0].src}
            alt={collections[0].label}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm flex flex-col items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition duration-700">
            <p className="text-white text-3xl font-semibold tracking-wide drop-shadow">
              {collections[0].label}
            </p>
            <Link
              href="/products"
              className="px-6 py-2 rounded-full text-white bg-white/20 border border-white hover:bg-white hover:text-black transition duration-300"
            >
              View All Products
            </Link>
          </div>
        </div>

        {/* Two Smaller Images */}
        <div className="flex flex-col gap-10">
          {collections.slice(1).map((item, i) => (
            <div
              key={i}
              className="relative group h-[240px] md:h-[360px] overflow-hidden rounded-xl shadow-lg"
            >
              <Image
                src={item.src}
                alt={item.label}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 backdrop-blur-sm flex flex-col items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition duration-700">
                <p className="text-white text-2xl font-semibold tracking-wide drop-shadow">
                  {item.label}
                </p>
                <Link
                  href="/products"
                  className="px-5 py-2 rounded-full text-white bg-white/20 border border-white hover:bg-white hover:text-black transition duration-300"
                >
                  View All Products
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Shop the Look Section */}
      <div className="flex flex-col lg:flex-row gap-16">
        {/* Left Images */}
        <div className="flex w-full lg:w-1/2 gap-6">
          <div className="w-1/2">
            <Image
              src="https://ik.imagekit.io/msmrd69gi/Ll5ELvHpyRhf1NImYk8jPusN8wM.png?updatedAt=1750236606642"
              alt="Model 1"
              width={600}
              height={800}
              className="object-cover w-full rounded-lg"
            />
          </div>

          <div className="lg:w-1/2 w-full">
            <Image
              src="https://ik.imagekit.io/msmrd69gi/67cgu47p3XalCphUtWTA797M0S8.png?updatedAt=1750236813918"
              alt="Model 2"
              width={600}
              height={800}
              className="object-cover w-full rounded-lg"
            />
            <p className="text-gray-700 text-center text-lg mt-4">
              A head-to-toe shopping experience
            </p>
          </div>
        </div>

        {/* Right Text + Thumbnails */}
        <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6">
          <h3 className="text-[45px] font-bold text-gray-900">Shop the Look</h3>
          <p className="text-gray-600 text-lg">
            Explore curated outfits to perfect your style effortlessly.
          </p>

          {/* Small Thumbnails */}
          <div className="grid grid-cols-2 gap-4">
            {[
              "https://ik.imagekit.io/msmrd69gi/JCdo1Zbx2D3DK5rP3VlCsAvGdsc.png?updatedAt=1750238614768",
              "https://ik.imagekit.io/msmrd69gi/Xo2m9b4aLPmQuWOGJhTprctJcn4.png?updatedAt=1750238789682",
              "https://ik.imagekit.io/msmrd69gi/CbLmh411PekZOY4hSBq1q3UFcE.png?updatedAt=1750238843982",
              "https://ik.imagekit.io/msmrd69gi/QOQznmgVNN2dBIaCveRf29Zcc4.png?updatedAt=1750238882573",
            ].map((src, i) => (
              <Image
                key={i}
                src={src}
                alt={`Look ${i + 1}`}
                width={180}
                height={180}
                className="rounded-lg shadow-md object-cover w-full"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collection;
