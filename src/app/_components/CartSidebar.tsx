"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiX,
  FiShoppingBag,
  FiChevronRight,
  FiEdit2,
  FiTrash2,
} from "react-icons/fi";
import Image from "next/image";
import CheckoutSidebar from "./CheckoutSidebar";
import Link from "next/link";

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CartItem {
  id: number;
  name: string;
  price: number;
  qty: number;
  color: string;
  size: string;
  image: string;
  material?: string;
}

const dummyCartItems: CartItem[] = [
  {
    id: 1,
    name: "Premium Merino Wool Coat",
    price: 249,
    qty: 1,
    color: "Charcoal",
    size: "M",
    material: "100% Merino Wool",
    image:
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=300&h=300&q=80",
  },
  {
    id: 2,
    name: "Luxury Silk Blend Blouse",
    price: 129,
    qty: 2,
    color: "Ivory",
    size: "S",
    material: "Silk & Cotton Blend",
    image:
      "https://images.unsplash.com/photo-1585155770447-2f66e2a397b5?auto=format&fit=crop&w=300&h=300&q=80",
  },
];

export default function CartSidebar({ isOpen, onClose }: CartSidebarProps) {
  const [showCheckout, setShowCheckout] = useState(false);

  const subtotal = dummyCartItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );
  const shipping = 9.99;
  const taxRate = 0.08;
  const tax = subtotal * taxRate;
  const total = subtotal + shipping + tax;

  return (
    <>
      <AnimatePresence>
        {isOpen && !showCheckout && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => {
                if (e.target === e.currentTarget) onClose();
              }}
              className="fixed inset-0 bg-black/70 backdrop-blur-md z-[10000]"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
              className="fixed right-0 top-0 h-full w-full sm:w-[450px] bg-neutral-900 z-[10001] flex flex-col"
            >
              {/* HEADER */}
              <div className="p-5 border-b border-neutral-800">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <FiShoppingBag className="text-amber-400 text-xl" />
                    <h2 className="text-xl text-white">Shopping Bag</h2>
                    <span className="bg-amber-500 text-black text-xs px-2 py-1 rounded-full">
                      {dummyCartItems.length} items
                    </span>
                  </div>
                  <button onClick={onClose}>
                    <FiX className="text-white text-xl" />
                  </button>
                </div>
              </div>

              {/* ITEMS */}
              <div className="flex-1 overflow-y-auto p-5 space-y-6">
                {dummyCartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4 border-b border-neutral-700 pb-4"
                  >
                    <div className="relative w-24 h-24">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover rounded-lg border border-neutral-700"
                      />
                      <span className="absolute -top-2 -right-2 bg-amber-500 text-black w-6 h-6 flex items-center justify-center rounded-full text-xs">
                        {item.qty}
                      </span>
                    </div>
                    <div className="flex-1 text-white">
                      <p className="font-medium text-sm">{item.name}</p>
                      <p className="text-xs text-neutral-400 mt-1">
                        {item.material}
                      </p>
                      <div className="flex gap-2 text-xs mt-2">
                        <span className="border px-2 py-0.5 rounded-md border-neutral-600">
                          Color: {item.color}
                        </span>
                        <span className="border px-2 py-0.5 rounded-md border-neutral-600">
                          Size: {item.size}
                        </span>
                      </div>
                      <p className="text-sm mt-2 text-neutral-400">
                        ${item.price.toFixed(2)} × {item.qty}
                      </p>
                      <div className="flex gap-4 mt-3 text-xs">
                        <button className="text-amber-400 flex items-center gap-1">
                          <FiEdit2 /> Edit
                        </button>
                        <button className="text-rose-500 flex items-center gap-1">
                          <FiTrash2 /> Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* FOOTER */}
              <div className="p-5 border-t border-neutral-800 space-y-3">
                <div className="flex justify-between text-sm text-white">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm text-white">
                  <span>Shipping</span>
                  <span>${shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-white font-medium text-base">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <button
                  onClick={() => setShowCheckout(true)}
                  className="w-full mt-4 bg-amber-500 hover:bg-amber-600 text-black font-semibold py-3 rounded-lg flex items-center justify-center gap-2 transition-all"
                >
                  Proceed to Checkout <FiChevronRight />
                </button>
                <Link href="/shop">
                  <button
                  onClick={onClose}
                  className="w-full border border-neutral-700 text-white hover:bg-neutral-800 py-3 rounded-lg cursor-pointer"
                >
                  Continue Shopping
                </button>
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <CheckoutSidebar
        isOpen={showCheckout}
        onClose={() => setShowCheckout(false)}
      />
    </>
  );
}
