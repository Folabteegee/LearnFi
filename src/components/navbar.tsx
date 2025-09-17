"use client";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // SSR placeholder (not fixed to avoid hydration mismatch)
  if (!isMounted) {
    return (
      <>
        <nav className="relative z-50 border border-white/20 backdrop-blur-lg bg-[#313131] mx-4 md:mx-20 rounded-xl p-3 md:p-5 shadow-2xl">
          <div className="text-white text-sm font-extralight flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Simple static version for SSR */}
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 md:w-8 md:h-8 bg-gray-400 rounded-full animate-pulse"></div>
              <span className="text-base md:text-lg font-light">LearnFi</span>
            </div>
            <div className="hidden md:flex gap-4 md:gap-8">
              {["Home", "Program", "Pricing", "About"].map((item) => (
                <div
                  key={item}
                  className="h-6 w-16 bg-gray-400 rounded animate-pulse"
                ></div>
              ))}
            </div>
            <div className="hidden md:block border border-white rounded-lg px-4 py-2 md:px-5 md:py-2 text-xs md:text-sm bg-[#2A0134]/30">
              Register now
            </div>
            <div className="md:hidden w-6 h-6 bg-gray-400 rounded"></div>
          </div>
        </nav>
        {/* Spacer */}
        <div className="h-20 md:h-24"></div>
      </>
    );
  }

  return (
    <>
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 border border-white/20 backdrop-blur-lg bg-[#313131]/50 mx-4 md:mx-20 mt-4 md:mt-8 rounded-xl p-3 md:p-5 shadow-2xl"
      >
        <div className="text-white text-sm font-extralight flex flex-row items-center justify-between">
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

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex gap-4 md:gap-8 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Link
                href="/"
                className={`hover:text-purple-300 transition-colors ${
                  pathname === "/" ? "text-purple-400 font-medium" : ""
                }`}
              >
                Home
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Link
                href="/pricing"
                className={`hover:text-purple-300 transition-colors ${
                  pathname === "/pricing"
                    ? "text-purple-400 font-medium"
                    : ""
                }`}
              >
                Pricing
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <a href="#about" className="hover:text-purple-300 transition-colors">
                About Us
              </a>
            </motion.div>
          </div>

          {/* Desktop Register Button */}
          <motion.button
            whileHover={{
              scale: 1.05,
              backgroundColor: "rgba(74, 42, 122, 0.8)",
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => alert("Coming soon 🚀")}
            className="hidden md:block border border-white cursor-not-allowed rounded-lg px-4 py-2 md:px-5 md:py-2 text-xs md:text-sm bg-[#2A0134]/30 hover:bg-[#4a2a7a] transition-colors duration-200 whitespace-nowrap"
          >
            Register now
          </motion.button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </motion.nav>

      {/* Spacer to prevent overlap */}
      <div className="h-20 md:h-24"></div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed md:hidden z-40 top-20 left-0 right-0 bg-[#313131]/95 backdrop-blur-lg mx-4 rounded-xl overflow-hidden"
          >
            <div className="flex flex-col p-5 space-y-4 text-white">
              <Link
                href="/"
                className={`py-2 px-4 rounded-lg hover:bg-white/10 transition-colors ${
                  pathname === "/" ? "bg-white/10 text-purple-400" : ""
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>

              <Link
                href="/pricing"
                className={`py-2 px-4 rounded-lg hover:bg-white/10 transition-colors ${
                  pathname === "/pricing"
                    ? "bg-white/10 text-purple-400"
                    : ""
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </Link>

              <a
                href="#about"
                className="py-2 px-4 rounded-lg hover:bg-white/10 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </a>

              <motion.button
                whileHover={{
                  scale: 1.02,
                  backgroundColor: "rgba(74, 42, 122, 0.8)",
                }}
                whileTap={{ scale: 0.98 }}
                className="border border-white rounded-lg py-3 px-4 text-sm bg-[#2A0134]/30 hover:bg-[#4a2a7a] transition-colors duration-200 mt-4"
                onClick={() => alert("Coming soon 🚀")}
                
              >
                Register now
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
