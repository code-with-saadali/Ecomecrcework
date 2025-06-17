"use client";

import Link from "next/link";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#EDEBE5] text-[#1e1e1e] pt-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Subscribe */}
        <div className="md:col-span-1">
          <h2 className="text-lg font-semibold mb-2">Subscribe to get 10% OFF</h2>
          <p className="text-sm text-gray-600 mb-4">Subscribe for store updates and discounts.</p>
          <form className="flex items-center bg-white rounded-full overflow-hidden shadow max-w-sm">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 text-sm text-black focus:outline-none"
            />
            <button
              type="submit"
              className="px-4 py-2 text-gray-700 hover:text-black"
            >
              →
            </button>
          </form>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-sm font-semibold mb-3">Quick links</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li><Link href="/" className="hover:underline">Home</Link></li>
            <li><Link href="/story" className="hover:underline">Story</Link></li>
            <li><Link href="/shop" className="hover:underline">Shop</Link></li>
            <li><Link href="/testimonials" className="hover:underline">Testimonials</Link></li>
            <li><Link href="/blog" className="hover:underline">Blog</Link></li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-sm font-semibold mb-3">Categories</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li><Link href="/collections/bestsellers" className="hover:underline">Bestseller&apos;s</Link></li>
            <li><Link href="/collections/men" className="hover:underline">Men’s</Link></li>
            <li><Link href="/collections/new" className="hover:underline">New Arrival</Link></li>
            <li><Link href="/collections/style-essentials" className="hover:underline">Style Essentials</Link></li>
            <li><Link href="/collections/summer" className="hover:underline">Summer Collection</Link></li>
          </ul>
        </div>

        {/* Customer Care */}
        <div>
          <h3 className="text-sm font-semibold mb-3">Customer Care</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li><Link href="/terms" className="hover:underline">Terms & Conditions</Link></li>
            <li><Link href="/returns" className="hover:underline">Shipping & Returns</Link></li>
            <li><Link href="/faq" className="hover:underline">FAQ</Link></li>
            <li><Link href="/contact" className="hover:underline">Contact</Link></li>
            <li><Link href="/404" className="hover:underline">404</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-300 mt-16 py-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
        <p>© Framerify {new Date().getFullYear()} KnitKnot. All Rights Reserved.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="p-2 bg-white rounded-full text-gray-800 hover:text-black transition">
            <FaFacebookF />
          </a>
          <a href="#" className="p-2 bg-white rounded-full text-gray-800 hover:text-black transition">
            <FaInstagram />
          </a>
          <a href="#" className="p-2 bg-white rounded-full text-gray-800 hover:text-black transition">
            <FaXTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
