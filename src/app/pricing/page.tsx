"use client"
import React, { useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";

const Atropos = dynamic(() => import("atropos/react"), { ssr: false });

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const priceVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  }
};

const toggleVariants = {
  monthly: { x: 0 },
  yearly: { x: "100%" }
};

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <div className="overflow-x-hidden">
      <div className="fixed top-7 -right-9 w-1/2 h-150 bg-no-repeat bg-right-top bg-contain z-0 opacity-100" 
           style={{backgroundImage: "url('/images/asteroids.png')"}}>
      </div>
      <div className="relative w-full min-h-screen z-0 bg-[url('/images/gradient2.png')] bg-cover bg-top">
        <div className="z-20 text-6xl p-20 text-white text-center text-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Explore Our Learning <span className="font-bold"> Plans </span> & 
          </motion.div> 
          <motion.div 
            className="pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="text-[#999999]"> Transparent </span> <span className="font-bold"> Pricing </span> <span className="text-[#999999]"> Options </span>
          </motion.div>
            
          <motion.div 
            className="text-[#999999] pt-4 text-lg z-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            No hidden fees-just simple, scalable plans that grow with your goals
          </motion.div>  

          {/* monthyearbutton */}
          <motion.div 
            className="relative border-1 border-gray-500/30 items-center justify-center py-1 px-2 w-30 mt-10 text-sm bg-[#464646]/50 border-gray-300 rounded-2xl flex flex-row gap-7 mx-auto w-fit"
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
              className={`z-10 rounded-2xl px-7 py-4 cursor-pointer transition-colors duration-300 ${!isYearly ? 'text-white' : 'text-gray-400'}`}
              onClick={() => setIsYearly(false)}
            >
              Monthly
            </div>
            <div 
              className={`z-10 rounded-2xl px-7 py-4 cursor-pointer transition-colors duration-300 ${isYearly ? 'text-white' : 'text-gray-400'}`}
              onClick={() => setIsYearly(true)}
            >
              Yearly
            </div>
          </motion.div>

          <motion.div 
            className="mt-10 flex flex-row text-lg gap-10 justify-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Card 1 */}
            <motion.div variants={itemVariants} className="w-full max-w-md">
              <Atropos
                className="atropos w-full"
                rotateTouch="scroll"
                highlight={false}
              >
                <div className="atropos-scale">
                  <div className="atropos-rotate">
                    <div className="border-1 border-gray-500 w-full rounded-3xl p-6">
                      <div className="flex flex-row justify-between p-2">
                        <div className="text-lg">Explorer</div>
                        <div className="border-t-1 border-b-1 text-sm rounded-full px-3 py-1 bg-[#383633]/30">
                          Beginner
                        </div>
                      </div>

                      <div className="text-left font-bold pl-2 pt-4 text-5xl bg-gradient-to-b from-white to-[#CECACA] bg-clip-text text-transparent">
                        <AnimatePresence mode="wait">
                          <motion.span
                            key={isYearly ? "yearly-explorer" : "monthly-explorer"}
                            variants={priceVariants}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            className="inline-block"
                          >
                            ${isYearly ? '190' : '19'}
                          </motion.span>
                        </AnimatePresence>
                        <span className="font-normal text-lg">/{isYearly ? 'year' : 'month'}</span>
                      </div>
                      
                      <div className="text-lg text-left pl-2 text-[#CECACA] font-extralight pt-5">
                        For those starting their Web3 <br/>journey.
                      </div>

                      <div className="text-left pl-2 pt-8 space-y-3">
                        <div>Intro to Blockchain & Crypto</div>
                        <div>Wallet Setup & Security Basics</div>
                        <div>Beginner Community Access</div>
                        <div>Quizzes & Learning Resources</div>
                      </div>

                      <motion.div 
                        className="border-t-1 border-b-1 text-lg rounded-2xl p-4 mt-10 mb-2 mx-2 bg-gradient-to-b from-[#40FCBD]/10 via-[#33C997]/10 to-[#269670]/10 cursor-pointer"
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
            <motion.div variants={itemVariants} className="w-full max-w-md">
              <Atropos
                className="atropos w-full"
                rotateTouch="scroll"
                highlight={false}
              >
                <div className="atropos-scale">
                  <div className="atropos-rotate">
                    <div className="border-1 border-gray-500 w-full rounded-3xl bg-gradient-to-b from-[#CECACA]/50 via-[1a1a1a] to-[#2d2d2d]/50 p-6">
                      <div className="flex flex-row justify-between p-2">
                        <div className="text-lg">Builder</div>
                        <div className="border-t-1 border-b-1 text-sm rounded-full px-3 py-1 bg-[#383633]/30">
                          Intermediate
                        </div>
                      </div>

                      <div className="text-left font-bold pl-2 pt-4 bg-gradient-to-b from-white to-[#CECACA] bg-clip-text text-transparent text-5xl">
                        <AnimatePresence mode="wait">
                          <motion.span
                            key={isYearly ? "yearly-builder" : "monthly-builder"}
                            variants={priceVariants}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            className="inline-block"
                          >
                            ${isYearly ? '490' : '49'}
                          </motion.span>
                        </AnimatePresence>
                        <span className="font-normal text-lg">/{isYearly ? 'year' : 'month'}</span>
                      </div>
                      
                      <div className="text-lg text-left pl-2 text-[#CECACA] font-extralight pt-5">
                        For learners ready to apply<br/> skills and start bulding
                      </div>

                      <div className="text-left pl-2 pt-8 space-y-3">
                        <div>Everything in Explorer</div>
                        <div>Smart Contracts & DApps Basics</div>
                        <div>Access to Mentor Sessions</div>
                        <div>Certification of Completion</div>
                      </div>

                      <motion.div 
                        className="border-t-1 border-b-1 text-lg rounded-2xl p-4 mt-10 mb-2 mx-2 bg-gradient-to-b from-[#40FCBD]/40 via-[#33C997]/30 to-[#269670]/20 cursor-pointer"
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
            <motion.div variants={itemVariants} className="w-full max-w-md">
              <Atropos
                className="atropos w-full"
                rotateTouch="scroll"
                highlight={false}
              >
                <div className="atropos-scale">
                  <div className="atropos-rotate">
                    <div className="border-1 border-gray-500 w-full rounded-3xl p-6">
                      <div className="flex flex-row justify-between p-2">
                        <div className="text-lg">Innovator</div>
                        <div className="border-t-1 border-b-1 text-sm rounded-full px-3 py-1 bg-[#383633]/30">
                          Advanced
                        </div>
                      </div>

                      <div className="text-left font-bold pl-2 pt-4 bg-gradient-to-b from-white to-[#CECACA] bg-clip-text text-transparent text-5xl">
                        <AnimatePresence mode="wait">
                          <motion.span
                            key={isYearly ? "yearly-innovator" : "monthly-innovator"}
                            variants={priceVariants}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            className="inline-block"
                          >
                            ${isYearly ? '990' : '99'}
                          </motion.span>
                        </AnimatePresence>
                        <span className="font-normal text-lg">/{isYearly ? 'year' : 'month'}</span>
                      </div>
                      
                      <div className="text-lg text-left pl-2 text-[#CECACA] font-extralight pt-5">
                        For advanced learners and <br/>future Web3 leaders
                      </div>

                      <div className="text-left pl-2 pt-8 space-y-3">
                        <div>Everything in Builder</div>
                        <div>Advanced Smart Contract Dev</div>
                        <div>1:1 Mentorship & Networking</div>
                        <div>Exclusive Events</div>
                      </div>

                      <motion.div 
                        className="border-t-1 border-b-1 text-lg rounded-2xl p-4 mt-10 mb-2 mx-2 bg-gradient-to-b from-[#40FCBD]/10 via-[#33C997]/10 to-[#269670]/10 cursor-pointer"
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
    </div>
  );
}