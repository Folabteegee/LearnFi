import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden flex flex-col">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-black to-[#2C2A7B] animate-gradient-shift"></div>
      <div className="absolute inset-0 backdrop-blur-sm bg-gradient-to-b from-transparent via-black/20 to-black animate-pulse"></div>

      {/* Navigation Bar */}
      <nav className="relative z-10 border border-white/20 backdrop-blur-lg bg-[#313131] mt-4 md:mt-12 mx-4 md:mx-20 rounded-xl p-3 md:p-5 shadow-2xl">
        <div className="text-white text-sm font-extralight flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Image
              src="/images/Lofi.png"
              alt="LearnFi Logo"
              width={30}
              height={30}
              className="w-6 h-6 md:w-8 md:h-8"
            />
            <span className="text-base md:text-lg font-light">LearnFi</span>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 lg:gap-20">
            <a href="#" className="hover:text-purple-300 transition-colors">Home</a>
            <a href="#" className="hover:text-purple-300 transition-colors">Program</a>
            <a href="#" className="hover:text-purple-300 transition-colors">Pricing</a>
            <a href="#" className="hover:text-purple-300 transition-colors">About</a>
          </div>

          {/* Register Button */}
          <button className="border-1 border-white rounded-lg px-4 py-2 md:px-5 md:py-2 text-xs md:text-sm bg-[#3e236e] hover:bg-[#4a2a7a] transition-colors duration-200 whitespace-nowrap">
            Register now
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="text-white z-10 my-8 md:my-20 mx-4 md:mx-10 lg:mx-20 xl:mx-40 flex flex-col items-center">
        {/* Floating Crypto Icons */}
        {/* <div className="w-full max-w-4xl mb-8 md:mb-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="flex justify-center">
            <Image
              src="/images/bitcoin.png"
              alt="Bitcoin"
              width={80}
              height={56}
              className="w-16 h-auto md:w-20 animate-float-circle"
            />
          </div>
          <div className="flex justify-center">
            <Image
              src="/images/solana.png"
              alt="Solana"
              width={80}
              height={56}
              className="w-16 h-auto md:w-20 animate-float-circle"
            />
          </div>
          <div className="flex justify-center">
            <Image
              src="/images/dollar.png"
              alt="Dollar"
              width={80}
              height={56}
              className="w-16 h-auto md:w-20 animate-float-circle"
            />
          </div>
          <div className="flex justify-center">
            <Image
              src="/images/ethereum.png"
              alt="Ethereum"
              width={80}
              height={56}
              className="w-16 h-auto md:w-20 animate-float-circle"
            />
          </div>
        </div> */}
        <div className=" flex flex-col mb-10  justify-between">
          <div className="flex mx-45 justify-between">
            <Image
              src="/images/bitcoin.png"
              alt="bitimg"
              width={100}
              height={70}
              className="animate-float-circle"
            />
            <Image
              src="/images/solana.png"
              alt="solimg"
              width={100}
              height={70}
              className="animate-float-circle"
            />
          </div>

          <div className="flex mx-80 gap-20 justify-around">
            <Image
              src="/images/dollar.png"
              alt="dolimg"
              width={100}
              height={70}
              className="animate-float-circle"
            />
            <Image
              src="/images/ethereum.png"
              alt="ethimg"
              width={100}
              height={70}
              className="animate-float-circle"
            />
          </div>
        </div>    

        {/* Hero Text */}
        <div className="text-center mb-8 md:mb-16">
          <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-4">
            Learn Web3. Earn Skills.
          </h1>
          <h2 className="font-normal text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
            Build the Future.
          </h2>
        </div>

        {/* Bottom Section with Images and Button */}
        <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 lg:gap-20 px-4">
          {/* Left Image */}
          <div className="w-32 h-24 md:w-40 md:h-30 lg:w-48 lg:h-36 xl:w-56 xl:h-42 flex justify-center">
            <Image
              src="/images/record.png"
              alt="Record"
              width={200}
              height={150}
              className="w-full h-full animate-float-circle [filter:drop-shadow(0_-4px_6px_rgba(255,255,255,0.15))_drop-shadow(0_4px_6px_rgba(255,255,255,0.15))_drop-shadow(-1px_0_3px_rgba(255,255,255,0.08))_drop-shadow(1px_0_3px_rgba(255,255,255,0.08))]"
            />
          </div>

          {/* Center Button */}
          <button className="border font-thin text-sm border-white rounded-lg px-8 py-3 md:px-12 md:py-3 bg-[#313131] hover:bg-black transition-colors duration-200 whitespace-nowrap -mt-30">
            Register now
          </button>

          {/* Right Image */}
          <div className="w-32 h-24 md:w-40 md:h-30 lg:w-48 lg:h-36 xl:w-56 xl:h-42 flex justify-center">
            <Image
              src="/images/ethcoins.png"
              alt="Ethereum Coins"
              width={200}
              height={150}
              className="w-full h-full animate-float-circle [filter:drop-shadow(0_-4px_6px_rgba(255,255,255,0.15))_drop-shadow(0_4px_6px_rgba(255,255,255,0.15))_drop-shadow(-1px_0_3px_rgba(255,255,255,0.08))_drop-shadow(1px_0_3px_rgba(255,255,255,0.08))]"
            />
          </div>
        </div>
      </main>

{/* Herosection 2   */}
<div className="z-10 text-white text-center px-4 sm:px-6 md:px-8 lg:px-10 py-8">
  <div>
  <h2 className="font-light text-xl sm:text-2xl md:text-3xl mx-auto max-w-4xl leading-relaxed">
    A hands-on, community-driven platform to master blockchain,{" "}
    <span className="font-semibold text-4xl">NFTs, DAOs, DeFi, and more.</span>
    <br className="hidden sm:block" />
    From zero to on-chain in weeks.
  </h2>
  </div>

{/* cards   */}
  <div className="flex flex-row mt-15 mx-40 items-center justify-around">

    {/* card1   */}
<div className="border-2 rounded-lg border-purple-500 p-4">
<Image
              src="/images/blockchain.png"
              alt="blkchain"
              width={250}
              height={350}
              className="flex items-center justify-center"
            />
            <h1 className="pt-6">
Blockchain <br/>Fundamentals
</h1>
<div className="pt-6">  <button className="border-1 font-thin  border-white rounded-lg px-4 py-2 md:px-5 md:py-2 text-xs md:text-sm bg-[#3e236e] hover:bg-[#4a2a7a] transition-colors duration-200 whitespace-nowrap">
            Explore more
          </button></div>
</div>

{/* card2   */}
<div className="border-2 rounded-lg border-purple-500 p-4">
<Image
              src="/images/wallet.png"
              alt="walletimg"
              width={250}
              height={350}
              className="flex items-center justify-center"
            />
            <h1 className="pt-6">
Wallets&<br/> Web3 Identity
</h1>
<div className="pt-6">  <button className="border-1 font-thin  border-white rounded-lg px-4 py-2 md:px-5 md:py-2 text-xs md:text-sm  bg-[#313131] hover:bg-black transition-colors duration-200 whitespace-nowrap">
            Explore more
          </button></div>
</div>

{/* card3   */}
<div className="border-2 rounded-lg border-purple-500 p-4">
<Image
              src="/images/shakes.png"
              alt="shakeimg"
              width={250}
              height={350}
              className="flex items-center justify-center"
            />
            <h1 className="pt-6">
Smart Contracts <br/> 101

</h1>
<div className="pt-6">
<button className="border-1 font-thin border-white rounded-lg px-4 py-2 md:px-5 md:py-2 text-xs md:text-sm bg-[#3e236e] hover:bg-[#4a2a7a] transition-colors duration-200 whitespace-nowrap">
            Explore more
          </button>
</div>
</div>
  </div>



{/* cards 4 to 6   */}

  <div className="flex flex-row mt-15 mx-40 items-center justify-around">

{/* card4   */}
<div className="border-2 rounded-lg border-purple-500 p-4">
<Image
          src="/images/nft.png"
          alt="nftimg"
          width={250}
          height={350}
          className="flex items-center justify-center"
        />
        <h1 className="pt-6">
NFTs & the Creator <br/>Economy
</h1>
<div className="pt-6">  <button className="border-1 font-thin  border-white rounded-lg px-4 py-2 md:px-5 md:py-2 text-xs md:text-sm bg-[#3e236e] hover:bg-[#4a2a7a] transition-colors duration-200 whitespace-nowrap">
        Explore more
      </button></div>
</div>

{/* card5   */}
<div className="border-2 rounded-lg border-purple-500 p-4">
<Image
          src="/images/DAOs.png"
          alt="walletimg"
          width={250}
          height={350}
          className="flex items-center justify-center"
        />
        <h1 className="pt-6">
DAOs & Decentralized<br/> Governance
</h1>
<div className="pt-6">  <button className="border-1 font-thin  border-white rounded-lg px-4 py-2 md:px-5 md:py-2 text-xs md:text-sm  bg-[#313131] hover:bg-black transition-colors duration-200 whitespace-nowrap">
        Explore more
      </button></div>
</div>

{/* card6   */}
<div className="border-2 rounded-lg border-purple-500 p-4">
<Image
          src="/images/DApp.png"
          alt="DAppimg"
          width={250}
          height={350}
          className="flex items-center justify-center"
        />
        <h1 className="py-6">
Build Your First DApps

</h1>
<div className="pt-6">
<button className="border-1 border-white font-thin  rounded-lg px-4 py-2 md:px-5 md:py-2 text-xs md:text-sm bg-[#3e236e] hover:bg-[#4a2a7a] transition-colors duration-200 whitespace-nowrap">
        Explore more
      </button>
</div>
</div>
</div>

</div>

<div className="z-10 mt-15 text-white text-center px-4 sm:px-6 md:px-8 lg:px-10 py-8">
<div className="font-semibold text-5xl">
Build While You Learn, The Web3 Way
</div>

<div className="pt-10 text-2xl font-light">
At LearnFi, we combine hands-on learning, real-world projects, and community mentorship to <br/>help you go from curious beginner to confident Web3 builder.<br/>
Each course is crafted to give you practical skills, not just theory: so you're not just watching <br/>videos; you're writing code, minting NFTs, and voting on-chain.
</div>
</div>

<div
  className="relative w-screen min-h-screen 
             bg-[url('/images/img.png')] bg-cover bg-center 
             flex flex-col items-center justify-center py-30"
>
  {/* Blurry Container */}
  <div className="relative z-10 -mt-25 bg-white/10 backdrop-blur-md border border-white/10 rounded-xl p-6 flex gap-6">
    
    {/* Image 1 */}
    <div className="rounded-lg overflow-hidden">
      <Image
        src="/images/man.png"
        alt="manimg"
        width={300}
        height={400}
        className="object-cover"
      />
    </div>

    {/* Image 2 */}
    <div className="rounded-lg overflow-hidden">
      <Image
        src="/images/woman.png"
        alt="womanimg"
        width={300}
        height={400}
        className="object-cover"
      />
    </div>

    {/* Image 3 */}
    <div className="rounded-lg overflow-hidden">
      <Image
        src="/images/dad.png"
        alt="dadimg"
        width={300}
        height={400}
        className="object-cover"
      />
    </div>
  </div>

  {/* Innovators Text Below */}
  <div className="text-white text-4xl  mt-25 font-semibold">
    What our innovators say about us
  </div>





</div>


<div className="flex flex-col gap-30 z-10 -mt-40 w-full bg-[#171717] py-16">
  {/* testimonies row 1 */}
  <div className="text-white flex px-40 flex-row gap-5">
    {/* Card 1 */}
    <div className="border border-gray-500 px-6 py-8 rounded-lg">
      <h3>
        I came in knowing nothing about Web3. Six weeks later, I deployed my first smart contract
        and joined a hackathon team. The hands-on quests made it all click for me
      </h3>
      <div className="flex flex-row pt-20 items-center gap-6">
        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-700 text-sm font-bold">
          I
        </div>
        <div className="text-sm">
          <span className="font-bold">Ifeanyi M.,</span><br />
          Software Engineering Student, <br />Nigeria
        </div>
      </div>
    </div>

    {/* Card 2 */}
    <div className="border border-gray-500 px-6 py-8 rounded-lg">
      <h3>
      This platform helped me mint my first NFT and actually understand the tech behind it. It’s more than just hype — I finally feel like I belong in Web3.
      </h3>
      <div className="flex flex-row pt-20 items-center gap-6">
        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-700 text-sm font-bold">
          A
        </div>
        <div className="text-sm">
          <span className="font-bold">Aisha K.,</span><br />
Digital Artist & Illustrator
 <br />Nigeria
        </div>
      </div>
    </div>

    {/* Card 3 */}
    <div className="border border-gray-500 px-6 py-8 rounded-lg">
      <h3>
      After working in finance for 10 years, I was looking to pivot. The DeFi module was a game changer — clear, practical, and actually fun to learn. Now I’m contributing to a DAO treasury team.
      </h3>
      <div className="flex flex-row pt-20 items-center gap-6">
        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-700 text-sm font-bold">
          D
        </div>
        <div className="text-sm">
          <span className="font-bold">Daniel O.</span><br />
          
Ex-Traditional Finance, <br/> Now Web3 Contributor <br />Nigeria
        </div>
      </div>
    </div>
  </div>

  {/* testimonies row 2 */}
  <div className="text-white flex -mt-25 px-40 flex-row gap-5">
    {/* Card 4 */}
    <div className="border border-gray-500 px-6 py-8 rounded-lg">
      <h3>
      As a passionate developer, I started exploring the potential of blockchain technology in Africa. I collaborate with local startups to create impactful decentralized solutions that address real-world challenges.
      </h3>
      <div className="flex flex-row pt-20 items-center gap-6">
        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-700 text-sm font-bold">
          K
        </div>
        <div className="text-sm">
          <span className="font-bold">Kwame A.,</span><br />
          Software Developer, <br />Ghana
        </div>
      </div>
    </div>

    {/* Card 5 */}
    <div className="border border-gray-500 px-6 py-8 rounded-lg">
      <h3>
      With a background in finance, I recognized the disruptive power of blockchain in enhancing transparency and security. Now, I help organizations in Kenya transition to blockchain-based financial systems.
      </h3>
      <div className="flex flex-row pt-20 items-center gap-6">
        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-700 text-sm font-bold">
          I
        </div>
        <div className="text-sm">
          <span className="font-bold">Ifeanyi M.,</span><br />
          Software Engineering Student, <br />Nigeria
        </div>
      </div>
    </div>

    {/* Card 6 */}
    <div className="border border-gray-500 px-6 py-8 rounded-lg">
      <h3>
      After attending a blockchain conference in South Africa, I became inspired to leverage technology for social change. I actively engage in projects that promote digital literacy and financial inclusion among marginalized communities.
      </h3>
      <div className="flex flex-row pt-20 items-center gap-6">
        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-700 text-sm font-bold">
          I
        </div>
        <div className="text-sm">
          <span className="font-bold">Ifeanyi M.,</span><br />
          Software Engineering Student, <br />Nigeria
        </div>
      </div>
    </div>
  </div>

  {/* testimonies row 3 */}
  <div className="text-white flex -mt-25 px-40 flex-row gap-5">
    {/* Card 7 */}
    <div className="border border-gray-500 px-6 py-8 rounded-lg">
      <h3>
      Having always been intrigued by the possibilities of cryptocurrency, I dove deep into the world of smart contracts. The mentorship I received was invaluable, and now I’m developing tools that empower others to navigate this landscape safely and effectively.
      </h3>
      <div className="flex flex-row pt-20 items-center gap-6">
        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-700 text-sm font-bold">
          I
        </div>
        <div className="text-sm">
          <span className="font-bold">Ifeanyi M.,</span><br />
          Software Engineering Student, <br />Nigeria
        </div>
      </div>
    </div>

    {/* Card 8 */}
    <div className="border border-gray-500 px-6 py-8 rounded-lg">
      <h3>
        I came in knowing nothing about Web3. Six weeks later, I deployed my first smart contract
        and joined a hackathon team. The hands-on quests made it all click for me
      </h3>
      <div className="flex flex-row pt-20 items-center gap-6">
        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-700 text-sm font-bold">
          I
        </div>
        <div className="text-sm">
          <span className="font-bold">Ifeanyi M.,</span><br />
          Software Engineering Student, <br />Nigeria
        </div>
      </div>
    </div>

    {/* Card 9 */}
    <div className="border border-gray-500  bg-gradient-to-br from-[#2C2A7B80] to-[#FFFFFF]  px-6 py-8 rounded-lg">
      <h3>
        I came in knowing nothing about Web3. Six weeks later, I deployed my first smart contract
        and joined a hackathon team. The hands-on quests made it all click for me
      </h3>
      <div className="flex flex-row pt-20 items-center gap-6">
        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-700 text-sm font-bold">
          I
        </div>
        <div className="text-sm">
          <span className="font-bold">Ifeanyi M.,</span><br />
          Software Engineering Student, <br />Nigeria
        </div>
      </div>
    </div>
  </div>
</div>





    </div>
  );
} 