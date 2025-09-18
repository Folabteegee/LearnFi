"use client";

import React, { useRef } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { motion, useInView, Variants } from "framer-motion";

const Atropos = dynamic(() => import("atropos/react"), { ssr: false });

// ✅ Typed animation variants
const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } },
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

const slideInRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

export default function AboutUs() {
  const teamRef = useRef<HTMLDivElement | null>(null);
  const missionRef = useRef<HTMLDivElement | null>(null);
  const valuesRef = useRef<HTMLDivElement | null>(null);
  const ctaRef = useRef<HTMLDivElement | null>(null);

  const teamInView = useInView(teamRef, { once: true, amount: 0.3 });
  const missionInView = useInView(missionRef, { once: true, amount: 0.3 });
  const valuesInView = useInView(valuesRef, { once: true, amount: 0.3 });
  const ctaInView = useInView(ctaRef, { once: true, amount: 0.5 });

  const teamMembers = [
    {
      name: "Alex Johnson",
      role: "Founder & CEO",
      bio: "Former blockchain developer with 8+ years in the space",
    },
    {
      name: "Maria Chen",
      role: "Head of Education",
      bio: "Curriculum designer and former university lecturer",
    },
    {
      name: "David Smith",
      role: "Lead Developer",
      bio: "Full-stack developer specializing in Web3 technologies",
    },
    {
      name: "Sarah Williams",
      role: "Community Manager",
      bio: "Building and nurturing our global learner community",
    },
  ];

  const values = [
    {
      title: "Accessibility",
      description:
        "We break down complex Web3 concepts into approachable learning experiences for everyone.",
      icon: "🔓",
    },
    {
      title: "Innovation",
      description:
        "We stay at the forefront of Web3 developments to provide the most relevant education.",
      icon: "💡",
    },
    {
      title: "Community",
      description:
        "We believe learning happens best together, supported by peers and mentors.",
      icon: "👥",
    },
  ];

  return (
    <div className="overflow-x-hidden">
      {/* Background graphics */}
      <div
        className="fixed top-7 -right-9 w-1/2 h-150 bg-no-repeat bg-right-top bg-contain z-0 opacity-100"
        style={{ backgroundImage: "url('/images/asteroids.png')" }}
      />

      <div className="relative w-full min-h-screen z-0 bg-[url('/images/gradient2.png')] bg-cover bg-top">
        <div className="z-20 px-4 sm:px-8 md:px-12 lg:px-20 py-20 text-white">
          {/* Hero Section */}
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              About <span className="font-bold">LearnFi</span>
            </motion.h1>

            <motion.h2
              className="pt-4 text-xl sm:text-2xl text-[#999999]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Empowering the next generation of Web3 innovators
            </motion.h2>

            <motion.p
              className="pt-6 text-[#CECACA] max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              LearnFi is on a mission to democratize Web3 education, making
              blockchain technology accessible to everyone regardless of their
              background or experience level.
            </motion.p>
          </div>

          {/* Mission Section */}
          <motion.div
            ref={missionRef}
            className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
            initial="hidden"
            animate={missionInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
              <p className="text-[#CECACA] mb-6">
                We believe that understanding Web3 technologies shouldn&apos;t
                be limited to developers and technical experts. Our platform
                breaks down complex concepts into digestible learning paths that
                empower anyone to participate in the decentralized future.
              </p>
              <p className="text-[#CECACA]">
                From blockchain fundamentals to advanced smart contract
                development, we provide the tools, resources, and community
                support needed to thrive in the rapidly evolving Web3 ecosystem.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex justify-center"
            >
              <Atropos
                className="atropos w-full max-w-md"
                rotateTouch="scroll-x"
                highlight={false}
              >
                <div className="atropos-scale">
                  <div className="atropos-rotate">
                    <div className="border border-gray-500 rounded-3xl p-6 h-full bg-gradient-to-b from-[#CECACA]/10 to-[#2d2d2d]/30">
                      <div className="text-2xl font-bold mb-4">2023 Impact</div>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span>Students Educated</span>
                          <span className="font-bold text-xl">25,000+</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>Completion Rate</span>
                          <span className="font-bold text-xl">89%</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>Countries Reached</span>
                          <span className="font-bold text-xl">120+</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>Partner Projects</span>
                          <span className="font-bold text-xl">50+</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Atropos>
            </motion.div>
          </motion.div>

          {/* Values Section */}
          <motion.div
            ref={valuesRef}
            className="mt-20"
            initial="hidden"
            animate={valuesInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <motion.h3
              className="text-3xl font-bold text-center mb-16"
              variants={itemVariants}
            >
              Our Values
            </motion.h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="text-center"
                >
                  <Atropos
                    className="atropos w-full"
                    rotateTouch="scroll-x"
                    highlight={false}
                  >
                    <div className="atropos-scale">
                      <div className="atropos-rotate">
                        <div className="border border-gray-500 rounded-3xl p-6 h-full bg-gradient-to-b from-[#CECACA]/5 to-[#2d2d2d]/20">
                          <div className="text-4xl mb-4">{value.icon}</div>
                          <h4 className="text-xl font-bold mb-4">
                            {value.title}
                          </h4>
                          <p className="text-[#CECACA]">{value.description}</p>
                        </div>
                      </div>
                    </div>
                  </Atropos>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Team Section */}
          <motion.div
            ref={teamRef}
            className="mt-20"
            initial="hidden"
            animate={teamInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <motion.h3
              className="text-3xl font-bold text-center mb-16"
              variants={itemVariants}
            >
              Our Team
            </motion.h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="text-center"
                >
                  <Atropos
                    className="atropos w-full"
                    rotateTouch="scroll-x"
                    highlight={false}
                  >
                    <div className="atropos-scale">
                      <div className="atropos-rotate">
                        <div className="border border-gray-500 rounded-3xl p-6 h-full bg-gradient-to-b from-[#CECACA]/5 to-[#2d2d2d]/20">
                          <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#40FCBD] to-[#269670] flex items-center justify-center text-2xl">
                            {member.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </div>
                          <h4 className="text-xl font-bold">{member.name}</h4>
                          <p className="text-[#40FCBD] mb-3">{member.role}</p>
                          <p className="text-[#CECACA] text-sm">
                            {member.bio}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Atropos>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer Section */}
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
                    "Web3 and the Future of the Internet",
                  ].map((item, index) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: 20 }}
                      animate={
                        ctaInView
                          ? { opacity: 1, x: 0 }
                          : { opacity: 0, x: 20 }
                      }
                      transition={{ delay: 0.1 * index }}
                      whileHover={{ x: 5 }}
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
              <p className="pl-10">
                {new Date().getFullYear()} @ All rights reserved LearnFi
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
