"use client";
import { motion, AnimatePresence } from "framer-motion";
import { FiX } from "react-icons/fi";

interface CheckoutSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CheckoutSidebar({
  isOpen,
  onClose,
}: CheckoutSidebarProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/60 z-[10000]"
            onClick={(e) => e.target === e.currentTarget && onClose()}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.div
            className="fixed top-0 right-0 w-full sm:w-[500px] h-full bg-white z-[10001] p-6 flex flex-col"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-neutral-800">
                Checkout
              </h2>
              <button onClick={onClose}>
                <FiX size={22} className="text-neutral-700" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto text-neutral-700">
              <p className="text-sm">
                This is your checkout area. You can add forms, shipping, payment
                etc.
              </p>
            </div>
            <button
              onClick={onClose}
              className="mt-6 bg-neutral-900 hover:bg-neutral-800 text-white py-3 rounded-lg"
            >
              Close
            </button>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
