import type { Metadata } from "next";
import { Kumbh_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ScrollProgress } from "./_components/ScrollProgress";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";

const kumbhSans = Kumbh_Sans({
  variable: "--font-kumbh-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${kumbhSans.variable} ${geistMono.variable} antialiased`}
      >
        <ScrollProgress />
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
