"use client"
import React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";

const Atropos = dynamic(() => import("atropos/react"), { ssr: false });

export default function Pricing() {
  return (
    <div className="overflow-x-hidden">
      <div className="fixed top-7 -right-9 w-1/2 h-150 bg-no-repeat bg-right-top bg-contain z-0 opacity-100" 
           style={{backgroundImage: "url('/images/asteroids.png')"}}>
      </div>
      <div className="relative w-full min-h-screen z-0 bg-[url('/images/gradient2.png')] bg-cover bg-top">
        <div className="z-20 text-6xl p-20 text-white text-center text-4xl">
          <div>
            Explore Our Learning <span className="font-bold"> Plans </span> & 
          </div> 
          <div className="pt-4">
            <span className="text-[#999999]"> Transparent </span> <span className="font-bold"> Pricing </span> <span className="text-[#999999]"> Options </span>
          </div>
            
          <div className="text-[#999999] pt-4 text-lg z-20" >
            No hidden fees-just simple, scalable plans that grow with your goals
          </div>  

          {/* monthyearbutton   */}
          <div className="border-1 border-gray-500/30 items-center justify-center py-1 px-2 w-30 mt-10 text-sm bg-[#464646]/50 border-gray-300 rounded-2xl flex flex-row gap-7 mx-auto w-fit">
            <div className="bg-[#168523] hover:bg-[#269670] rounded-2xl px-7 py-4">Monthly</div>
            <div className="px-8 py-4">Yearly</div>
          </div>

          <div className="mt-10 flex flex-row text-lg gap-10 justify-center">
            {/* Card 1 */}
            <Atropos
              className="atropos w-full max-w-md"
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
                      $19<span className="font-normal text-lg">/month</span>
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

                    <div className="border-t-1 border-b-1 text-lg rounded-2xl p-4 mt-10 mb-2 mx-2 bg-gradient-to-b from-[#40FCBD]/10 via-[#33C997]/10 to-[#269670]/10 cursor-pointer">
                      Sign Up With Explorer
                    </div>
                  </div>
                </div>
              </div>
            </Atropos>

            {/* Card 2 */}
            <Atropos
              className="atropos w-full max-w-md"
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
                      $49<span className="font-normal text-lg">/month</span>
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

                    <div className="border-t-1 border-b-1 text-lg rounded-2xl p-4 mt-10 mb-2 mx-2 bg-gradient-to-b from-[#40FCBD]/40 via-[#33C997]/30 to-[#269670]/20 cursor-pointer">
                      Sign Up With Builder
                    </div>
                  </div>
                </div>
              </div>
            </Atropos>

            {/* Card 3 */}
            <Atropos
              className="atropos w-full max-w-md"
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
                      $99<span className="font-normal text-lg">/month</span>
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

                    <div className="border-t-1 border-b-1 text-lg rounded-2xl p-4 mt-10 mb-2 mx-2 bg-gradient-to-b from-[#40FCBD]/10 via-[#33C997]/10 to-[#269670]/10 cursor-pointer">
                      Sign Up With Innovator
                    </div>
                  </div>
                </div>
              </div>
            </Atropos>
          </div>
        </div>
      </div>  
    </div>
  );
}