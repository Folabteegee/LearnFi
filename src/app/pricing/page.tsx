"use client"
import React, { useRef, useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { motion, AnimatePresence, useInView } from "framer-motion";

const Atropos = dynamic(() => import("atropos/react"), { ssr: false });

// Animation variants
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

const priceVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
};

const toggleVariants = {
  monthly: { x: 0 },
  yearly: { x: "100%" },
};

const slideInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
};

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);
  const ctaRef = useRef(null);
  const ctaInView = useInView(ctaRef, { once: true, amount: 0.5 });

  return (
    <div className="overflow-x-hidden">
      {/* Background graphics */}
      <div
        className="fixed top-7 -right-9 w-1/2 h-150 bg-no-repeat bg-right-top bg-contain z-0 opacity-100"
        style={{ backgroundImage: "url('/images/asteroids.png')" }}
      />
      <div className="relative w-full min-h-screen z-0 bg-[url('/images/gradient2.png')] bg-cover bg-top">
        <div className="z-20 px-4 sm:px-8 md:px-12 lg:px-20 py-20 text-white text-center">
          {/* Title */}
          <motion.div
            className="text-4xl sm:text-5xl md:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Explore Our Learning <span className="font-bold">Plans</span> &
          </motion.div>
          <motion.div
            className="pt-0 sm:pt-4 text-4xl sm:text-5xl md:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="text-[#999999]">Transparent</span>{" "}
            <span className="font-bold">Pricing</span>{" "}
            <span className="text-[#999999]">Options</span>
          </motion.div>

          {/* Subtitle */}
          <motion.div
            className="text-[#999999] pt-4 text-base sm:text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            No hidden fees — just simple, scalable plans that grow with your
            goals
          </motion.div>

          {/* Toggle Button */}
          <motion.div
            className="relative border border-gray-500/30 items-center justify-center py-1 px-2 mt-10 text-sm bg-[#464646]/50 rounded-2xl flex flex-row gap-7 mx-auto w-fit"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <motion.div
              className="absolute left-1 top-1 h-[calc(100%-8px)] w-[calc(50%-8px)] bg-[#168523] rounded-2xl"
              animate={isYearly ? "yearly" : "monthly"}
              variants={toggleVariants}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
            />
            <div
              className={`z-10 rounded-2xl px-4 sm:px-7 py-2 sm:py-4 cursor-pointer transition-colors duration-300 ${
                !isYearly ? "text-white" : "text-gray-400"
              }`}
              onClick={() => setIsYearly(false)}
            >
              Monthly
            </div>
            <div
              className={`z-10 rounded-2xl px-4 sm:px-7 py-2 sm:py-4 cursor-pointer transition-colors duration-300 ${
                isYearly ? "text-white" : "text-gray-400"
              }`}
              onClick={() => setIsYearly(true)}
            >
              Yearly
            </div>
          </motion.div>

          {/* Pricing Cards */}
          <motion.div
            className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-stretch"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Card 1 */}
            <motion.div variants={itemVariants} className="w-full max-w-md mx-auto">
              <Atropos className="atropos w-full" rotateTouch="scroll-x" highlight={false}>
                <div className="atropos-scale">
                  <div className="atropos-rotate">
                    <div className="border border-gray-500 w-full rounded-3xl p-6 flex flex-col h-full">
                      <div className="flex flex-row justify-between p-2">
                        <div className="text-lg">Explorer</div>
                        <div className="border-b-1 border-t-1 text-sm rounded-full px-3 py-1 bg-[#383633]/30">
                          Beginner
                        </div>
                      </div>

                      <div className="text-left font-bold pl-2 pt-4 text-4xl sm:text-5xl bg-gradient-to-b from-white to-[#CECACA] bg-clip-text text-transparent">
                        <AnimatePresence mode="wait">
                          <motion.span
                            key={isYearly ? "yearly-explorer" : "monthly-explorer"}
                            variants={priceVariants}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            className="inline-block"
                          >
                            ${isYearly ? "190" : "19"}
                          </motion.span>
                        </AnimatePresence>
                        <span className="font-normal text-base sm:text-lg">
                          /{isYearly ? "year" : "month"}
                        </span>
                      </div>

                      <div className="text-lg text-left pl-2 text-[#CECACA] font-extralight pt-5">
                        For those starting their Web3 <br /> journey.
                      </div>

                      <div className="text-left pl-2 pt-8 space-y-3 flex-1">
                        <div>Intro to Blockchain & Crypto</div>
                        <div>Wallet Setup & Security Basics</div>
                        <div>Beginner Community Access</div>
                        <div>Quizzes & Learning Resources</div>
                      </div>

                      <motion.div
                        className=" border-b-1 border-t-1 text-lg rounded-2xl p-4 mt-10 mb-2 mx-2 bg-gradient-to-b from-[#40FCBD]/10 via-[#33C997]/10 to-[#269670]/10 cursor-pointer text-center"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Sign Up With Explorer
                      </motion.div>
                    </div>
                  </div>
                </div>
              </Atropos>
            </motion.div>

            {/* Card 2 */}
            <motion.div variants={itemVariants} className="w-full max-w-md mx-auto">
              <Atropos className="atropos w-full" rotateTouch="scroll-x" highlight={false}>
                <div className="atropos-scale">
                  <div className="atropos-rotate">
                    <div className="border border-gray-500 w-full rounded-3xl bg-gradient-to-b from-[#CECACA]/50 via-[#1a1a1a] to-[#2d2d2d]/50 p-6 flex flex-col h-full">
                      <div className="flex flex-row justify-between p-2">
                        <div className="text-lg">Builder</div>
                        <div className="border-b-1 border-t-1 text-sm rounded-full px-3 py-1 bg-[#383633]/30">
                          Intermediate
                        </div>
                      </div>

                      <div className="text-left font-bold pl-2 pt-4 text-4xl sm:text-5xl bg-gradient-to-b from-white to-[#CECACA] bg-clip-text text-transparent">
                        <AnimatePresence mode="wait">
                          <motion.span
                            key={isYearly ? "yearly-builder" : "monthly-builder"}
                            variants={priceVariants}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            className="inline-block"
                          >
                            ${isYearly ? "490" : "49"}
                          </motion.span>
                        </AnimatePresence>
                        <span className="font-normal text-base sm:text-lg">
                          /{isYearly ? "year" : "month"}
                        </span>
                      </div>

                      <div className="text-lg text-left pl-2 text-[#CECACA] font-extralight pt-5">
                        For learners ready to apply <br /> skills and start building
                      </div>

                      <div className="text-left pl-2 pt-8 space-y-3 flex-1">
                        <div>Everything in Explorer</div>
                        <div>Smart Contracts & DApps Basics</div>
                        <div>Access to Mentor Sessions</div>
                        <div>Certification of Completion</div>
                      </div>

                      <motion.div
                        className="border-b-1 border-t-1 text-lg rounded-2xl p-4 mt-10 mb-2 mx-2 bg-gradient-to-b from-[#40FCBD]/40 via-[#33C997]/30 to-[#269670]/20 cursor-pointer text-center"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Sign Up With Builder
                      </motion.div>
                    </div>
                  </div>
                </div>
              </Atropos>
            </motion.div>

            {/* Card 3 */}
            <motion.div variants={itemVariants} className="w-full max-w-md mx-auto">
              <Atropos className="atropos w-full" rotateTouch="scroll-x" highlight={false}>
                <div className="atropos-scale">
                  <div className="atropos-rotate">
                    <div className="border border-gray-500 w-full rounded-3xl p-6 flex flex-col h-full">
                      <div className="flex flex-row justify-between p-2">
                        <div className="text-lg">Innovator</div>
                        <div className="border-b-1 border-t-1 text-sm rounded-full px-3 py-1 bg-[#383633]/30">
                          Advanced
                        </div>
                      </div>

                      <div className="text-left font-bold pl-2 pt-4 text-4xl sm:text-5xl bg-gradient-to-b from-white to-[#CECACA] bg-clip-text text-transparent">
                        <AnimatePresence mode="wait">
                          <motion.span
                            key={isYearly ? "yearly-innovator" : "monthly-innovator"}
                            variants={priceVariants}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            className="inline-block"
                          >
                            ${isYearly ? "990" : "99"}
                          </motion.span>
                        </AnimatePresence>
                        <span className="font-normal text-base sm:text-lg">
                          /{isYearly ? "year" : "month"}
                        </span>
                      </div>

                      <div className="text-lg text-left pl-2 text-[#CECACA] font-extralight pt-5">
                        For advanced learners and <br /> future Web3 leaders
                      </div>

                      <div className="text-left pl-2 pt-8 space-y-3 flex-1">
                        <div>Everything in Builder</div>
                        <div>Advanced Smart Contract Dev</div>
                        <div>1:1 Mentorship & Networking</div>
                        <div>Exclusive Events</div>
                      </div>

                      <motion.div
                        className="border-b-1 border-t-1 text-lg rounded-2xl p-4 mt-10 mb-2 mx-2 bg-gradient-to-b from-[#40FCBD]/10 via-[#33C997]/10 to-[#269670]/10 cursor-pointer text-center"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Sign Up With Innovator
                      </motion.div>
                    </div>
                  </div>
                </div>
              </Atropos>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Footer Section - Full width, no padding/margin restrictions */}
      <div ref={ctaRef} className="w-full mt-40 bg-[#171717]">
        <motion.div 
          initial="hidden"
          animate={ctaInView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.8 }}
          className="w-full bg-[#171717] text-white pt-10 pb-10"
        >
          <div className="w-full">
            {/* Top Row */}
            <div className="flex flex-col md:flex-row justify-between items-start w-full gap-8 md:gap-0 px-4 md:px-10">
              {/* Left Column - LearnFi Logo */}
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2"
              >
                <Image
                  src="/images/Lofi.png"
                  alt="LearnFi Logo"
                  width={30}
                  height={30}
                  className="w-6 h-6 md:w-8 md:h-8"
                />
                <span className="text-base md:text-lg font-light">LearnFi</span>
              </motion.div>
              
              {/* Right Column - Explore Submenu */}
              <motion.div
                variants={slideInRight}
                initial="hidden"
                animate={ctaInView ? "visible" : "hidden"}
                transition={{ duration: 0.6 }}
                className="w-full md:w-auto"
              >
                <h3 className="text-lg font-medium mb-4">Explore</h3>
                <ul className="space-y-3">
                  {[
                    "Blockchain Basics",
                    "Decentralized Applications (dApps)",
                    "Smart Contracts Explained",
                    "Cryptocurrency Fundamentals",
                    "Web3 and the Future of the Internet"
                  ].map((item, index) => (
                    <motion.li 
                      key={item}
                      initial={{ opacity: 0, x: 20 }}
                      animate={ctaInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                      transition={{ delay: 0.1 * index }}
                      whileHover={{ x: 5, color: "#fff" }}
                      className="text-gray-300 hover:text-white cursor-pointer text-sm md:text-base"
                    >
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>      

            {/* Bottom Border */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={ctaInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 1 }}
              className="pt-8 text-gray-400 text-xs md:text-sm mt-8"
            >
              <p className="pl-10">{new Date().getFullYear()} @ All rights reserved LearnFi</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}