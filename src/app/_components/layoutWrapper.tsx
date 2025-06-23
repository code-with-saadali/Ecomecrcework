"use client";

import { useState } from "react";
import { ScrollProgress } from "./ScrollProgress";
import Navbar from "./Navbar";
import CartSidebar from "./CartSidebar";
import Footer from "./Footer";


export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <>
      <ScrollProgress />
      <Navbar onCartOpen={() => setIsCartOpen(true)} />
      {children}
      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <Footer />
    </>
  );
}
