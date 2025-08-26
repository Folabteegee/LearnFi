"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Don't render anything during SSR to prevent hydration issues
  if (!isMounted) {
    return (
      <nav className="relative z-10 border border-white/20 backdrop-blur-lg bg-[#313131] mt-4 md:mt-12 mx-4 md:mx-20 rounded-xl p-3 md:p-5 shadow-2xl">
        <div className="text-white text-sm font-extralight flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Simple static version for SSR */}
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 md:w-8 md:h-8 bg-gray-400 rounded-full animate-pulse"></div>
            <span className="text-base md:text-lg font-light">LearnFi</span>
          </div>
          <div className="flex gap-4 md:gap-8">
            {["Home", "Program", "Pricing", "About"].map((item) => (
              <div key={item} className="h-6 w-16 bg-gray-400 rounded animate-pulse"></div>
            ))}
          </div>
          <div className="border border-white rounded-lg px-4 py-2 md:px-5 md:py-2 text-xs md:text-sm bg-[#2A0134]/30">
            Register now
          </div>
        </div>
      </nav>
    );
  }

  return (
    <motion.nav 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="relative z-10 border border-white/20 backdrop-blur-lg bg-[#313131]/50 mt-4 md:mt-12 mx-4 md:mx-20 rounded-xl p-3 md:p-5 shadow-2xl"
    >
      <div className="text-white text-sm font-extralight flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 cursor-pointer"
          >
            <Image
              src="/images/Lofi.png"
              alt="LearnFi Logo"
              width={30}
              height={30}
              className="w-6 h-6 md:w-8 md:h-8"
              priority
            />
            <span className="text-base md:text-lg font-light">LearnFi</span>
          </motion.div>
        </Link>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Link 
              href="/" 
              className={`hover:text-purple-300 transition-colors ${pathname === "/" ? "text-purple-400 font-medium" : ""}`}
            >
              Home
            </Link>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <a 
              href="#program" 
              className="hover:text-purple-300 transition-colors"
            >
              Program
            </a>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Link 
              href="/pricing" 
              className={`hover:text-purple-300 transition-colors ${pathname === "/pricing" ? "text-purple-400 font-medium" : ""}`}
            >
              Pricing
            </Link>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <a 
              href="#about" 
              className="hover:text-purple-300 transition-colors"
            >
              About
            </a>
          </motion.div>
        </div>

        {/* Register Button */}
        <motion.button 
          whileHover={{ scale: 1.05, backgroundColor: "rgba(74, 42, 122, 0.8)" }}
          whileTap={{ scale: 0.95 }}
          className="border border-white rounded-lg px-4 py-2 md:px-5 md:py-2 text-xs md:text-sm bg-[#2A0134]/30 hover:bg-[#4a2a7a] transition-colors duration-200 whitespace-nowrap"
        >
          Register now
        </motion.button>
      </div>
    </motion.nav>
  );
}