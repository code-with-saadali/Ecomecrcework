"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { FiMenu, FiX } from "react-icons/fi";

const navItems = ["Home", "New Arrival", "Mens", "Womens", "Shop", "Contact"];

const navItemVariants: Variants = {
  hidden: { opacity: 0, y: -10 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.08,
      type: "spring",
      stiffness: 180,
    },
  }),
};

const dropdownVariants: Variants = {
  hidden: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.25,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: {
      duration: 0.2,
      ease: "easeIn",
    },
  },
};

export default function Navbar() {
  const [isHomeHovered, setIsHomeHovered] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowNavbar(
        currentScrollY < lastScrollY.current || currentScrollY < 10
      );
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: showNavbar ? 0 : -100 }}
      transition={{ duration: 0.4, ease: [0.33, 1, 0.68, 1] }}
      className="text-white fixed top-0 w-full z-[10000] shadow bg-white/90"
    >
      <motion.div
        className="w-full px-5 lg:px-24 mx-auto py-4 flex items-center justify-between z-50 text-[#323232] relative"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        {/* Logo */}
        <motion.div
          className="text-3xl font-serif italic text-black tracking-tight"
          whileHover={{ scale: 1.07 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          KnitKnot
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-14 max-lg:gap-8 text-[16px] font-medium">
          {navItems.map((item, index) => (
            <motion.div
              key={index}
              className="relative group cursor-pointer flex items-center gap-1"
              custom={index}
              initial="hidden"
              animate="visible"
              variants={navItemVariants}
              whileHover={{ y: -2 }}
              onMouseEnter={() => item === "Home" && setIsHomeHovered(true)}
              onMouseLeave={() => item === "Home" && setIsHomeHovered(false)}
            >
              {item}
              {item === "Home" && <IoIosArrowDown size={17} />}

              <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[#242424] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

              {item === "Home" && (
                <AnimatePresence>
                  {isHomeHovered && (
                    <motion.div
                      className="absolute top-full mt-3 w-48 bg-[#EDEBE5] shadow-md py-6 px-4 text-[16px] flex flex-col gap-2 z-40"
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      variants={dropdownVariants}
                    >
                      <div className="hover:text-black transition duration-200 border-b border-gray-300 pb-2 cursor-pointer">
                        Home 1
                      </div>
                      <div className="hover:text-black transition duration-200 cursor-pointer">
                        Home 2
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </motion.div>
          ))}
        </div>

        <div className="flex items-center gap-6">
          <motion.div
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="cursor-pointer"
          >
            <FaSearch size={18} />
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.95 }}
            className="relative cursor-pointer"
          >
            <FaShoppingCart size={20} />
          </motion.div>

          {/* Mobile Menu Toggle */}
          <div
            className="md:hidden cursor-pointer"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-[100%] left-0 w-full bg-white flex flex-col items-center gap-5 py-10 text-[16px] font-medium z-40"
            >
              <div className="flex flex-col gap-2 items-center">
                <div className="cursor-pointer hover:text-black">Home 1</div>
                <div className="cursor-pointer hover:text-black">Home 2</div>
              </div>
              {navItems
                .filter((item) => item !== "Home")
                .map((item, index) => (
                  <div key={index} className="cursor-pointer hover:text-black">
                    {item}
                  </div>
                ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.nav>
  );
}
