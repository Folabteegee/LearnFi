"use client"
import Image from "next/image";
import dynamic from "next/dynamic";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Atropos = dynamic(() => import("atropos/react"), { ssr: false });

// Animation variants
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } }
};

const slideUp = {
  hidden: { y: 100, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
};

const slideInLeft = {
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
};

const slideInRight = {
  hidden: { x: 100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
};

const scaleUp = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardItem = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};

export default function Home() {
  // Refs for scroll animations
  const heroRef = useRef(null);
  const cardsRef = useRef(null);
  const testimonialRef = useRef(null);
  const ctaRef = useRef(null);
  
  // Check if elements are in view
  const heroInView = useInView(heroRef, { once: true, amount: 0.3 });
  const cardsInView = useInView(cardsRef, { once: true, amount: 0.3 });
  const testimonialInView = useInView(testimonialRef, { once: true, amount: 0.3 });
  const ctaInView = useInView(ctaRef, { once: true, amount: 0.5 });

  return (
    <div className="relative min-h-screen overflow-hidden flex flex-col">
      <div className="relative w-full min-h-screen bg-[url('/images/gradient.png')] bg-cover bg-center">
        {/* Hero Section */}
        <main ref={heroRef} className="text-white z-10 my-8 md:my-20 mx-4 md:mx-10 lg:mx-20 xl:mx-40 flex flex-col items-center">
          {/* Floating Crypto Images */}
          <div className="flex flex-col mb-6 md:mb-10 justify-between w-full max-w-5xl">
            <div className="flex justify-around px-4 md:px-0">
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={heroInView ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 1, delay: 0.2 }}
                className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24"
              >
                <Image
                  src="/images/bitcoin.png"
                  alt="bitimg"
                  width={100}
                  height={70}
                  className="w-full h-full animate-float-circle"
                />
              </motion.div>
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={heroInView ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 1, delay: 0.4 }}
                className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24"
              >
                <Image
                  src="/images/solana.png"
                  alt="solimg"
                  width={100}
                  height={70}
                  className="w-full h-full animate-float-circle"
                />
              </motion.div>
            </div>

            <div className="flex justify-center gap-10 md:gap-20 mt-4 md:mt-8">
              <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={heroInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 1, delay: 0.6 }}
                className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24"
              >
                <Image
                  src="/images/dollar.png"
                  alt="dolimg"
                  width={100}
                  height={70}
                  className="w-full h-full animate-float-circle"
                />
              </motion.div>
              <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={heroInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 1, delay: 0.8 }}
                className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24"
              >
                <Image
                  src="/images/ethereum.png"
                  alt="ethimg"
                  width={100}
                  height={70}
                  className="w-full h-full animate-float-circle"
                />
              </motion.div>
            </div>
          </div>    

          {/* Hero Text */}
          <motion.div 
            initial="hidden"
            animate={heroInView ? "visible" : ""}
            variants={fadeIn}
            className="text-center mb-8 md:mb-16 px-4"
          >
            <motion.h1 
              variants={slideUp}
              className="font-bold text-6xl mb-4"
            >
              Learn Web3. Earn Skills.
            </motion.h1>
            <motion.h2 
              variants={slideUp}
              transition={{ delay: 0.3 }}
              className="font-normal text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
            >
              Build the Future.
            </motion.h2>
          </motion.div>

         {/* Bottom Section with Images and Button */}
<div className="w-full max-w-6xl flex flex-row items-center justify-between gap-4 md:gap-12 lg:gap-20 px-4">
  {/* Left Image */}
  <motion.div 
    initial="hidden"
    animate={heroInView ? "visible" : ""}
    variants={slideInLeft}
    transition={{ delay: 0.5 }}
    className="w-20 h-16 md:w-32 md:h-24 lg:w-40 lg:h-30 xl:w-48 xl:h-36 flex justify-center flex-shrink-0"
  >
    <Image
      src="/images/record.png"
      alt="Record"
      width={200}
      height={150}
      className="w-full h-full animate-float-circle [filter:drop-shadow(0_-4px_6px_rgba(255,255,255,0.15))_drop-shadow(0_4px_6px_rgba(255,255,255,0.15))_drop-shadow(-1px_0_3px_rgba(255,255,255,0.08))_drop-shadow(1px_0_3px_rgba(255,255,255,0.08))]"
    />
  </motion.div>

  {/* Center Button */}
  <motion.button 
    initial="hidden"
    animate={heroInView ? "visible" : ""}
    variants={scaleUp}
    transition={{ delay: 0.7 }}
    whileHover={{ scale: 1.05, backgroundColor: "black" }}
    whileTap={{ scale: 0.95 }}
    onClick={() => alert("Coming soon 🚀")}
className="border font-thin text-sm border-white rounded-lg px-6 py-2 md:px-12 md:py-3 bg-[#313131] hover:bg-black transition-colors duration-200 whitespace-nowrap mx-auto cursor-not-allowed opacity-70"
  >
    Register now
  </motion.button>

  {/* Right Image */}
  <motion.div 
    initial="hidden"
    animate={heroInView ? "visible" : ""}
    variants={slideInRight}
    transition={{ delay: 0.5 }}
    className="w-20 h-16 md:w-32 md:h-24 lg:w-40 lg:h-30 xl:w-48 xl:h-36 flex justify-center flex-shrink-0"
  >
    <Image
      src="/images/ethcoins.png"
      alt="Ethereum Coins"
      width={200}
      height={150}
      className="w-full h-full animate-float-circle [filter:drop-shadow(0_-4px_6px_rgba(255,255,255,0.15))_drop-shadow(0_4px_6px_rgba(255,255,255,0.15))_drop-shadow(-1px_0_3px_rgba(255,255,255,0.08))_drop-shadow(1px_0_3px_rgba(255,255,255,0.08))]"
    />
  </motion.div>
</div>
        </main>

        {/* Hero Section 2 */}
        <motion.div 
          ref={cardsRef}
          initial="hidden"
          animate={cardsInView ? "visible" : ""}
          variants={fadeIn}
          transition={{ delay: 0.3 }}
          className="z-10 text-white text-center px-4 sm:px-6 md:px-8 lg:px-10 py-8"
        >
          <div>
            <motion.h2 
              variants={slideUp}
              className="font-light text-lg sm:text-xl md:text-2xl lg:text-3xl mx-auto max-w-4xl leading-relaxed"
            >
              A hands-on, community-driven platform to master blockchain,{" "}
              <span className="font-semibold text-2xl md:text-3xl lg:text-4xl">NFTs, DAOs, DeFi, and more.</span>
              <br className="hidden sm:block" />
              From zero to on-chain in weeks.
            </motion.h2>
          </div>

         {/* Cards */}
<motion.div 
  variants={staggerContainer}
  className=""
>
  <div className="flex flex-row gap-2 mt-10 md:mt-15 justify-center mx-20">
  {/* Card 1 */}
  <motion.div variants={cardItem} className="w-full max-w-xs mx-auto">
    <Atropos>
      <motion.div 
        whileHover={{ y: -10, transition: { duration: 0.3 } }}
        className="border-3 rounded-lg border-purple-500/30 p-4 h-full flex flex-col"
      >
        <Image
          src="/images/blockchain.png"
          alt="blkchain"
          width={250}
          height={350}
          className="flex items-center justify-center w-full h-auto"
        />
        <h1 className="pt-4 md:pt-6 text-sm md:text-lg">Blockchain <br/>Fundamentals</h1>
        <div className="pt-4 md:pt-6 mt-auto">
          <motion.button 
            whileHover={{ scale: 1.05, backgroundColor: "rgba(74, 42, 122, 0.8)" }}
            whileTap={{ scale: 0.95 }}
            className="border-1 font-light border-white rounded-lg px-3 py-1 md:px-4 md:py-2 text-xs bg-[#FC4040]/10 hover:bg-[#4a2a7a] transition-colors duration-200 whitespace-nowrap"
          >
            Explore More
          </motion.button>
        </div>
      </motion.div>
    </Atropos>
  </motion.div>

  {/* Card 2 */}
  <motion.div variants={cardItem} className="w-full max-w-xs mx-auto">
    <Atropos>
      <motion.div 
        whileHover={{ y: -10, transition: { duration: 0.3 } }}
        className="border-3 rounded-lg border-purple-500/30 p-4 h-full flex flex-col"
      >
        <Image
          src="/images/wallet.png"
          alt="walletimg"
          width={250}
          height={350}
          className="flex items-center justify-center w-full h-auto"
        />
        <h1 className="pt-4 md:pt-6 text-sm md:text-lg">Wallets&<br/> Web3 Identity</h1>
        <div className="pt-4 md:pt-6 mt-auto">
          <motion.button 
            whileHover={{ scale: 1.05, backgroundColor: "black" }}
            whileTap={{ scale: 0.95 }}
            className="border-1 font-light border-white rounded-lg px-3 py-1 md:px-4 md:py-2 text-xs bg-[#313131] hover:bg-black transition-colors duration-200 whitespace-nowrap"
          >
            Explore More
          </motion.button>
        </div>
      </motion.div>
    </Atropos>
  </motion.div>

  {/* Card 3 */}
  <motion.div variants={cardItem} className="w-full max-w-xs mx-auto">
    <Atropos>
      <motion.div 
        whileHover={{ y: -10, transition: { duration: 0.3 } }}
        className="border-3 rounded-lg border-purple-500/30 p-4 h-full flex flex-col"
      >
        <Image
          src="/images/shakes.png"
          alt="shakeimg"
          width={250}
          height={350}
          className="flex items-center justify-center w-full h-auto"
        />
        <h1 className="pt-4 md:pt-6 text-sm md:text-lg">SmartContracts <br/> 101</h1>
        <div className="pt-4 md:pt-6 mt-auto">
          <motion.button 
            whileHover={{ scale: 1.05, backgroundColor: "rgba(74, 42, 122, 0.8)" }}
            whileTap={{ scale: 0.95 }}
            className="border-1 font-light border-white rounded-lg px-3 py-1 md:px-4 md:py-2 text-xs bg-[#FC4040]/10 hover:bg-[#4a2a7a] transition-colors duration-200 whitespace-nowrap"
          >
            Explore More
          </motion.button>
        </div>
      </motion.div>
    </Atropos>
  </motion.div>
  </div>

  <div className="flex flex-row gap-2 mt-10 md:mt-15 justify-center mx-20">
  {/* Card 4 */}
  <motion.div variants={cardItem} className="w-full max-w-xs mx-auto">
    <Atropos>
      <motion.div 
        whileHover={{ y: -10, transition: { duration: 0.3 } }}
        className="border-3 rounded-lg border-purple-500/30 p-4 h-full flex flex-col"
      >
        <Image
          src="/images/nft.png"
          alt="nftimg"
          width={250}
          height={350}
          className="flex items-center justify-center w-full h-auto"
        />
        <h1 className="pt-4 md:pt-6 text-sm md:text-lg">NFTs & the Creator <br/>Economy</h1>
        <div className="pt-4 md:pt-6 mt-auto">
          <motion.button 
            whileHover={{ scale: 1.05, backgroundColor: "rgba(74, 42, 122, 0.8)" }}
            whileTap={{ scale: 0.95 }}
            className="border-1 font-light border-white rounded-lg px-3 py-1 md:px-4 md:py-2 text-xs bg-[#FC4040]/10 hover:bg-[#4a2a7a] transition-colors duration-200 whitespace-nowrap"
          >
            Explore More
          </motion.button>
        </div>
      </motion.div>
    </Atropos>
  </motion.div>

  {/* Card 5 */}
  <motion.div variants={cardItem} className="w-full max-w-xs mx-auto">
    <Atropos>
      <motion.div 
        whileHover={{ y: -10, transition: { duration: 0.3 } }}
        className="border-3 rounded-lg border-purple-500/30 p-4 h-full flex flex-col"
      >
        <Image
          src="/images/DAOs.png"
          alt="walletimg"
          width={250}
          height={350}
          className="flex items-center justify-center w-full h-auto"
        />
        <h1 className="pt-4 md:pt-6 text-sm md:text-lg">DAOs & Decentralized<br/> Governance</h1>
        <div className="pt-4 md:pt-6 mt-auto">
          <motion.button 
            whileHover={{ scale: 1.05, backgroundColor: "black" }}
            whileTap={{ scale: 0.95 }}
            className="border-1 font-light border-white rounded-lg px-3 py-1 md:px-4 md:py-2 text-xs bg-[#313131] hover:bg-black transition-colors duration-200 whitespace-nowrap"
          >
            Explore More
          </motion.button>
        </div>
      </motion.div>
    </Atropos>
  </motion.div>

  {/* Card 6 */}
  <motion.div variants={cardItem} className="w-full max-w-xs mx-auto">
    <Atropos>
      <motion.div 
        whileHover={{ y: -10, transition: { duration: 0.3 } }}
        className="border-3 rounded-lg border-purple-500/30 p-4 h-full flex flex-col"
      >
        <Image
          src="/images/DApp.png"
          alt="DAppimg"
          width={250}
          height={350}
          className="flex items-center justify-center w-full h-auto"
        />
        <h1 className="py-4 md:py-6 text-sm md:text-lg">Build Your First DApps</h1>
        <div className="pt-4 md:pt-6 mt-auto">
          <motion.button 
            whileHover={{ scale: 1.05, backgroundColor: "rgba(74, 42, 122, 0.8)" }}
            whileTap={{ scale: 0.95 }}
            className="border-1 border-white font-light rounded-lg px-3 py-1 md:px-4 md:py-2 text-xs bg-[#FC4040]/10 hover:bg-[#4a2a7a] transition-colors duration-200 whitespace-nowrap"
          >
            Explore More
          </motion.button>
        </div>
      </motion.div>
    </Atropos>
  </motion.div>
  </div>
</motion.div>
</motion.div>

{/* Build While You Learn Section - Reduced Spacing */}
<motion.div 
  initial="hidden"
  animate={cardsInView ? "visible" : ""}
  variants={fadeIn}
  transition={{ delay: 0.8 }}
  className="z-10 mt-6 md:mt-8 text-white text-center px-4 sm:px-6 lg:px-10"
>
  <motion.div 
    variants={slideUp}
    className="font-semibold text-2xl md:text-4xl lg:text-5xl"
  >
    Build While You Learn, The Web3 Way
  </motion.div>

  <motion.div 
    variants={slideUp}
    transition={{ delay: 0.3 }}
    className="pt-4 md:pt-6 text-base md:text-xl lg:text-2xl font-light max-w-5xl mx-auto leading-relaxed"
  >
    At LearnFi, we combine hands-on learning, real-world projects, and community mentorship to help you go from curious beginner to confident Web3 builder.
    Each course is crafted to give you practical skills, not just theory: so you're not just watching videos; you're writing code, minting NFTs, and voting on-chain.
  </motion.div>
</motion.div>
</div>

           {/* Testimonial Section with Images */}
           <motion.div
        initial="hidden"
        animate={testimonialInView ? "visible" : ""}
        variants={fadeIn}
        ref={testimonialRef}
        className="relative w-full bg-[url('/images/img.png')] bg-center flex flex-col mt-20 mb-20 items-center justify-center"
      >
        {/* Blurry Container - Reduced top margin */}
        <motion.div 
          variants={staggerContainer}
          className="relative z-10  bg-white/10 backdrop-blur-md border border-white/10 rounded-xl p-3 md:p-6 flex flex-row md:flex-row gap-3 md:gap-6 justify-center max-w-5xl mx-4"
        >
          {/* Image 1 */}
          <motion.div 
            variants={cardItem}
            whileHover={{ scale: 1.05 }}
            className="rounded-lg overflow-hidden w-full md:w-1/3"
          >
            <Image
              src="/images/man.png"
              alt="manimg"
              width={300}
              height={400}
              className="object-cover w-full h-auto"
            />
          </motion.div>

          {/* Image 2 */}
          <motion.div 
            variants={cardItem}
            whileHover={{ scale: 1.05 }}
            transition={{ delay: 0.2 }}
            className="rounded-lg overflow-hidden w-full md:w-1/3"
          >
            <Image
              src="/images/woman.png"
              alt="womanimg"
              width={300}
              height={400}
              className="object-cover w-full h-auto"
            />
          </motion.div>

          {/* Image 3 */}
          <motion.div 
            variants={cardItem}
            whileHover={{ scale: 1.05 }}
            transition={{ delay: 0.4 }}
            className="rounded-lg overflow-hidden w-full md:w-1/3"
          >
            <Image
              src="/images/dad.png"
              alt="dadimg"
              width={300}
              height={400}
              className="object-cover w-full h-auto"
            />
          </motion.div>
        </motion.div>

        {/* Innovators Text Below */}
        <motion.div 
          variants={slideUp}
          className="text-white text-2xl md:text-3xl lg:text-4xl mt-16 md:mt-25 font-semibold text-center px-4"
        >
          What our innovators say about us
        </motion.div>
      </motion.div>

     {/* Testimonials Grid */}
<motion.div 
  initial="hidden"
  animate={testimonialInView ? "visible" : ""}
  variants={staggerContainer}
  className="px-4 "
>
  {/* Grid: 2 per row on sm+, 3 on md+. Add placeholder to avoid single card row */}
  <div className="text-white grid grid-cols-2 md:grid-cols-3 gap-5 lg:gap-6 max-w-7xl mx-auto">
    
    {/* Card 1 */}
    <motion.div variants={cardItem} className="w-full">
      <Atropos>
        <motion.div 
          whileHover={{ y: -5 }}
          className="border border-gray-500 px-4 md:px-6 py-6 md:py-8 bg-gradient-to-r from-[#2C2A7B]/20 to-[#FFFFFF]/10 rounded-lg min-h-[320px] flex flex-col justify-between overflow-hidden"
        >
          <h3 className="text-sm leading-relaxed">
            I came in knowing nothing about Web3. Six weeks later, I deployed my first smart contract and joined a hackathon team. The hands-on quests made it all click for me.
          </h3>
          <div className="flex flex-row pt-4 md:pt-6 items-center gap-4 md:gap-6">
            <motion.div 
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-blue-700 text-sm font-bold"
            >
              I
            </motion.div>
            <div className="text-xs md:text-sm">
              <span className="font-bold">Ifeanyi M.,</span><br />
              Software Engineering Student, <br />Nigeria
            </div>
          </div>
        </motion.div>
      </Atropos>
    </motion.div>

    {/* Card 2 */}
    <motion.div variants={cardItem} className="w-full">
      <Atropos>
        <motion.div 
          whileHover={{ y: -5 }}
          className="border border-gray-500 px-4 md:px-6 py-6 md:py-8 bg-gradient-to-r from-[#2C2A7B]/20 to-[#FFFFFF]/10 rounded-lg min-h-[320px] flex flex-col justify-between overflow-hidden"
        >
          <h3 className="text-sm leading-relaxed">
            This platform helped me mint my first NFT and actually understand the tech behind it. It's more than just hype — I finally feel like I belong in Web3.
          </h3>
          <div className="flex flex-row pt-4 md:pt-6 items-center gap-4 md:gap-6">
            <motion.div 
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-blue-700 text-sm font-bold"
            >
              A
            </motion.div>
            <div className="text-xs md:text-sm">
              <span className="font-bold">Aisha K.,</span><br />
              Digital Artist & Illustrator, <br />Nigeria
            </div>
          </div>
        </motion.div>
      </Atropos>
    </motion.div>

    {/* Card 3 */}
    <motion.div variants={cardItem} className="w-full">
      <Atropos>
        <motion.div 
          whileHover={{ y: -5 }}
          className="border border-gray-500 px-4 md:px-6 py-6 md:py-8 bg-gradient-to-r from-[#2C2A7B]/20 to-[#FFFFFF]/10 rounded-lg min-h-[320px] flex flex-col justify-between overflow-hidden"
        >
          <h3 className="text-sm leading-relaxed">
            After working in finance for 10 years, I was looking to pivot. The DeFi module was a game changer — clear, practical, and actually fun to learn. Now I'm contributing to a DAO treasury team.
          </h3>
          <div className="flex flex-row pt-4 md:pt-6 items-center gap-4 md:gap-6">
            <motion.div 
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-blue-700 text-sm font-bold"
            >
              D
            </motion.div>
            <div className="text-xs md:text-sm">
              <span className="font-bold">Daniel O.,</span><br />
              Ex-Traditional Finance, <br />Now Web3 Contributor, <br />Nigeria
            </div>
          </div>
        </motion.div>
      </Atropos>
    </motion.div>

    {/* Card 4 */}
    <motion.div variants={cardItem} className="w-full">
      <Atropos>
        <motion.div 
          whileHover={{ y: -5 }}
          className="border border-gray-500 px-4 md:px-6 py-6 md:py-8 bg-gradient-to-r from-[#2C2A7B]/20 to-[#FFFFFF]/10 rounded-lg min-h-[320px] flex flex-col justify-between overflow-hidden"
        >
          <h3 className="text-sm leading-relaxed">
            As a passionate developer, I started exploring the potential of blockchain technology in Africa. I collaborate with local startups to create impactful decentralized solutions that address real-world challenges.
          </h3>
          <div className="flex flex-row pt-4 md:pt-6 items-center gap-4 md:gap-6">
            <motion.div 
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-blue-700 text-sm font-bold"
            >
              K
            </motion.div>
            <div className="text-xs md:text-sm">
              <span className="font-bold">Kwame A.,</span><br />
              Software Developer, <br />Ghana
            </div>
          </div>
        </motion.div>
      </Atropos>
    </motion.div>

    {/* Card 5 */}
    <motion.div variants={cardItem} className="w-full">
      <Atropos>
        <motion.div 
          whileHover={{ y: -5 }}
          className="border border-gray-500 px-4 md:px-6 py-6 md:py-8 bg-gradient-to-r from-[#2C2A7B]/20 to-[#FFFFFF]/10 rounded-lg min-h-[320px] flex flex-col justify-between overflow-hidden"
        >
          <h3 className="text-sm leading-relaxed">
            With a background in finance, I recognized the disruptive power of blockchain in enhancing transparency and security. Now, I help organizations in Kenya transition to blockchain-based financial systems.
          </h3>
          <div className="flex flex-row pt-4 md:pt-6 items-center gap-4 md:gap-6">
            <motion.div 
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-blue-700 text-sm font-bold"
            >
              A
            </motion.div>
            <div className="text-xs md:text-sm">
              <span className="font-bold">Amina J.,</span><br />
              Financial Consultant, <br />Kenya
            </div>
          </div>
        </motion.div>
      </Atropos>
    </motion.div>

    {/* Card 6 */}
    <motion.div variants={cardItem} className="w-full">
      <Atropos>
        <motion.div 
          whileHover={{ y: -5 }}
          className="border border-gray-500 px-4 md:px-6 py-6 md:py-8 bg-gradient-to-r from-[#2C2A7B]/20 to-[#FFFFFF]/10 rounded-lg min-h-[320px] flex flex-col justify-between overflow-hidden"
        >
          <h3 className="text-sm leading-relaxed">
            After attending a blockchain conference in South Africa, I became inspired to leverage technology for social change. I actively engage in projects that promote digital literacy and financial inclusion among marginalized communities.
          </h3>
          <div className="flex flex-row pt-4 md:pt-6 items-center gap-4 md:gap-6">
            <motion.div 
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-blue-700 text-sm font-bold"
            >
              S
            </motion.div>
            <div className="text-xs md:text-sm">
              <span className="font-bold">Sipho M.,</span><br />
              Community Organizer, <br />South Africa
            </div>
          </div>
        </motion.div>
      </Atropos>
    </motion.div>

    {/* Card 7 */}
    <motion.div variants={cardItem} className="w-full">
      <Atropos>
        <motion.div 
          whileHover={{ y: -5 }}
          className="border border-gray-500 px-4 md:px-6 py-6 md:py-8 bg-gradient-to-r from-[#2C2A7B]/20 to-[#FFFFFF]/10 rounded-lg min-h-[320px] flex flex-col justify-between overflow-hidden"
        >
          <h3 className="text-sm leading-relaxed">
            Having always been intrigued by the possibilities of cryptocurrency, I dove deep into the world of smart contracts. The mentorship I received was invaluable, and now I'm developing tools that empower others to navigate this landscape safely and effectively.
          </h3>
          <div className="flex flex-row pt-4 md:pt-6 items-center gap-4 md:gap-6">
            <motion.div 
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-blue-700 text-sm font-bold"
            >
              L
            </motion.div>
            <div className="text-xs md:text-sm">
              <span className="font-bold">Lola T.,</span><br />
              Blockchain Developer, <br />Nigeria
            </div>
          </div>
        </motion.div>
      </Atropos>
    </motion.div>

    {/* Card 8 */}
    <motion.div variants={cardItem} className="w-full">
      <Atropos>
        <motion.div 
          whileHover={{ y: -5 }}
          className="border border-gray-500 px-4 md:px-6 py-6 md:py-8 bg-gradient-to-r from-[#2C2A7B]/20 to-[#FFFFFF]/10 rounded-lg min-h-[320px] flex flex-col justify-between overflow-hidden"
        >
          <h3 className="text-sm leading-relaxed">
            The immersive workshops taught me how to harness blockchain for real-world applications. I'm now building a platform focused on sustainable agricultural practices using decentralized tech.
          </h3>
          <div className="flex flex-row pt-4 md:pt-6 items-center gap-4 md:gap-6">
            <motion.div 
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-blue-700 text-sm font-bold"
            >
              E
            </motion.div>
            <div className="text-xs md:text-sm">
              <span className="font-bold">Ewan S.,</span><br />
              Agri-Tech Innovator, <br />Kenya
            </div>
          </div>
        </motion.div>
      </Atropos>
    </motion.div>

    {/* Card 9 */}
    <motion.div variants={cardItem} className="w-full">
      <Atropos>
        <motion.div 
          whileHover={{ y: -5 }}
          className="border border-gray-500 px-4 md:px-6 py-6 md:py-8 bg-gradient-to-r from-[#2C2A7B]/20 to-[#FFFFFF]/10 rounded-lg min-h-[320px] flex flex-col justify-between overflow-hidden"
        >
          <h3 className="text-sm leading-relaxed">
            Inspired by the potential of NFTs, I've launched a project that connects artists with collectors, promoting indigenous art from across the continent. It's fulfilling to see culture and technology intertwine.
          </h3>
          <div className="flex flex-row pt-4 md:pt-6 items-center gap-4 md:gap-6">
            <motion.div 
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-blue-700 text-sm font-bold"
            >
              C
            </motion.div>
            <div className="text-xs md:text-sm">
              <span className="font-bold">Chidi N.,</span><br />
              Cultural Entrepreneur, <br />Nigeria
            </div>
          </div>
        </motion.div>
      </Atropos>
    </motion.div>

    {/* Placeholder Card (Hidden on md and up) */}
    <div className="hidden md:block"></div>
    <div className="hidden md:block"></div>
    {/* We add two hidden placeholders to keep grid balanced only on small screens */}
    {/* But we only need one extra card → so just one placeholder */}
    <motion.div 
      variants={cardItem} 
      className="w-full opacity-0 pointer-events-none select-none"
      aria-hidden="true"
    >
      <div className="h-0 invisible">Placeholder</div>
    </motion.div>

  </div>
</motion.div>

      {/* CTA Section */}
      <motion.div 
        ref={ctaRef}
        initial="hidden"
        animate={ctaInView ? "visible" : ""}
        variants={fadeIn}
        className="relative z-10 -mt-10 md:-mt-15 pt-32 md:pt-40 bg-[#171717]"
      >
        <div className="text-white">
          <div className="relative w-full min-h-[40vh] md:min-h-[33vh] flex flex-col items-center justify-center py-20 md:py-30 mx-auto max-w-full">
            {/* Background image with brightness */}
            <div className="absolute inset-0 bg-[url('/images/mechanics.png')] bg-cover bg-center brightness-30"></div>
            
            {/* Content */}
            <motion.h1 
              variants={slideUp}
              className="relative z-10 text-white text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium text-center px-4"
            >
              Web3 Isn't the Future. It's Now.
            </motion.h1>
            <motion.p 
              variants={slideUp}
              transition={{ delay: 0.2 }}
              className="relative z-10 text-white font-extralight pt-2 text-xl md:text-2xl lg:text-3xl mt-2 md:mt-4 text-center px-4"
            >
              Start learning today and build what's next
            </motion.p>
            <div className="pt-4 md:pt-5">
              <motion.button 
                variants={scaleUp}
                transition={{ delay: 0.4 }}
                whileHover={{ scale: 1.05, backgroundColor: "rgba(89, 64, 252, 1)" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => alert("Coming soon 🚀")}
                className="relative z-10 mt-4 md:mt-6 bg-[#5940FC]/80 border-white border-1 text-white px-6 md:px-10 py-3 md:py-4 rounded-xl cursor-not-allowed font-semibold text-sm md:text-base"
              >
                Start Learning
              </motion.button>
            </div>
            <div className="h-10"></div>
          </div>
        </div>
      </motion.div>

      {/* Footer Section */}
      <motion.div 
        initial="hidden"
        animate={ctaInView ? "visible" : ""}
        variants={fadeIn}
        transition={{ delay: 0.6 }}
        className="bg-[#171717] z-10 text-white pt-40 md:pt-50 pb-10 md:pb-20 -mt-5 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto w-full">
          {/* Top Row */}
          <div className="flex flex-col md:flex-row justify-between items-start px-4 md:px-10 w-full gap-8 md:gap-0">
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
                    animate={{ opacity: 1, x: 0 }}
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
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="pt-8 text-gray-400 pl-4 md:pl-10 text-xs md:text-sm mt-8 md:mt-0"
          >
            <p>{new Date().getFullYear()} @ All rights reserved LearnFi</p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}