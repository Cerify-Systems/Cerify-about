import React from "react";
import { Card, CardContent } from "../components/ui/card";
import { FooterSection } from "./sections/FooterSection";
import { NavigationBarSection } from "./sections/NavigationBarSection";
import { RoadMapSection } from "./sections/RoadMapSection";
import { StorySection } from "./sections/StorySection";

export const AboutPage = () => {
  // Team members data
  const teamMembers = [
    {
      name: "Subodh Sharma",
      role: "Founder & Principal Architect",
      image: "/figmaAssets/mask-group.png",
    },
    {
      name: "Dr. Nilam Kaushik",
      role: "Co-Founder and Lead Strategist",
      image: "/figmaAssets/mask-group-1.png",
    },
    {
      name: "Debashish Sakunia",
      role: "Managing Director",
      image: "/figmaAssets/mask-group-2.png",
    },
    {
      name: "Avni Bakshi",
      role: "Business Head & Founding Team Member",
      image: "/figmaAssets/mask-group-3.png",
    },
  ];

  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white overflow-hidden w-full max-w-[1440px] relative">
        {/* Hero Section with Navigation */}
        <section className="relative w-full h-[500px] md:h-[600px] lg:h-[478px] overflow-hidden">
          <div className="absolute w-full h-full top-0 left-0 bg-gradient-to-br from-[#2C00CA] via-[#4A90E2] via-[#5BB8E8] to-[#3DFE90]" />

          {/* Decorative geometric elements - brighter green with more spread */}
          <div className="absolute w-4 h-4 md:w-[20px] md:h-[20px] top-[60px] right-12 md:top-[90px] md:right-16 bg-[#3dfe90] rounded-sm rotate-45 opacity-80" />
          <div className="absolute w-3 h-3 md:w-[16px] md:h-[16px] top-[120px] right-32 md:top-[150px] md:right-40 bg-[#3dfe90] rounded-sm rotate-45 opacity-70" />
          <div className="absolute w-5 h-5 md:w-[24px] md:h-[24px] top-[180px] right-8 md:top-[220px] md:right-12 bg-[#3dfe90] rounded-sm rotate-45 opacity-90" />
          <div className="absolute w-3 h-3 md:w-[18px] md:h-[18px] top-[240px] right-28 md:top-[280px] md:right-36 bg-[#3dfe90] rounded-sm rotate-45 opacity-60" />
          <div className="absolute w-4 h-4 md:w-[22px] md:h-[22px] top-[300px] right-16 md:top-[340px] md:right-20 bg-[#3dfe90] rounded-sm rotate-45 opacity-85" />
          <div className="absolute w-6 h-6 md:w-[28px] md:h-[28px] top-[340px] right-4 md:top-[380px] md:right-8 bg-[#3dfe90] rounded-sm rotate-45 opacity-95" />
          
          {/* Additional scattered elements for depth */}
          <div className="absolute w-2 h-2 md:w-[12px] md:h-[12px] top-[100px] right-20 md:top-[130px] md:right-24 bg-[#60e3ff] rounded-sm rotate-45 opacity-40" />
          <div className="absolute w-3 h-3 md:w-[14px] md:h-[14px] top-[200px] right-44 md:top-[240px] md:right-52 bg-[#60e3ff] rounded-sm rotate-45 opacity-50" />
          <div className="absolute w-2 h-2 md:w-[10px] md:h-[10px] top-[280px] right-40 md:top-[320px] md:right-48 bg-[#60e3ff] rounded-sm rotate-45 opacity-35" />

          {/* Union images - fixed positioning with proper Tailwind classes */}
          <img
            className="absolute w-[50px] h-[48px] md:w-[74px] md:h-[71px] top-[320px] md:top-[394px] right-[4px] md:right-[84px]"
            alt="Union"
            src="/figmaAssets/union.png"
          />
          <img
            className="absolute w-[16px] h-[17px] md:w-[24px] md:h-[25px] top-[280px] md:top-[417px] right-[240px] md:right-[469px]"
            alt="Union"
            src="/figmaAssets/union-1.png"
          />
          <img
            className="absolute w-[16px] h-[17px] md:w-[24px] md:h-[25px] top-[40px] md:top-[61px] right-[200px] md:right-[415px]"
            alt="Union"
            src="/figmaAssets/union-2.png"
          />
          <img
            className="absolute w-[16px] h-[17px] md:w-[24px] md:h-[25px] top-[200px] md:top-[306px] right-[100px] md:right-[217px]"
            alt="Union"
            src="/figmaAssets/union-3.png"
          />
          <img
            className="absolute w-[16px] h-[17px] md:w-[24px] md:h-[25px] top-[80px] md:top-[110px] left-[20px] md:left-[77px]"
            alt="Union"
            src="/figmaAssets/union-4.png"
          />
          <img
            className="absolute w-[25px] h-[24px] md:w-[37px] md:h-[36px] top-[100px] md:top-[123px] left-[8px] md:left-[31px]"
            alt="Union"
            src="/figmaAssets/union-5.png"
          />

          <div className="absolute bottom-12 md:bottom-20 left-4 md:left-[77px] right-4 md:right-auto md:w-[674px] font-sans font-normal text-white text-sm md:text-lg tracking-[0] leading-5 md:leading-7 z-10">
            Building the global trust layer for smart contracts — where every
            deployment is secure, certified, and compliant by default.
          </div>

          <div className="absolute bottom-24 md:bottom-32 left-4 md:left-[77px] right-4 md:right-auto md:w-[445px] font-bold text-white text-2xl md:text-5xl lg:text-6xl tracking-[0] leading-tight md:leading-[normal] z-10">
            ABOUT CERIFY
          </div>

          <NavigationBarSection />
        </section>

        {/* Vision & Mission Section */}
        <section className="relative w-full mt-8 md:mt-16 px-4 md:px-20 flex flex-col gap-8 md:gap-12">
          <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-12">
            <h2 className="w-full md:w-[132px] font-['Atkinson_Hyperlegible',Helvetica] font-bold text-[#2c00ca] text-2xl md:text-4xl leading-[normal]">
              VISION
            </h2>
            <p className="w-full max-w-[1080px] font-['Inter',Helvetica] font-normal text-gray-600 text-base md:text-lg leading-6 md:leading-[25px]">
              is to become the global trust layer for smart contracts — where
              every deployment is secure, certified, and compliant by default.
            </p>
          </div>

          <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-12">
            <h2 className="w-full md:w-[162px] font-['Atkinson_Hyperlegible',Helvetica] font-bold text-[#2c00ca] text-2xl md:text-4xl leading-[normal]">
              MISSION
            </h2>
            <p className="w-full max-w-[1080px] font-['Inter',Helvetica] font-normal text-gray-600 text-base md:text-lg leading-6 md:leading-[25px]">
              is to empower builders, enterprises, and institutions with
              AI-native tooling that not only detects vulnerabilities but also
              drives automated remediation and real-time compliance — making
              Web3 safer and more scalable for everyone.
            </p>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="relative w-full py-16 mt-8 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 md:px-8">
            <h2 className="text-center mb-12 font-['Atkinson_Hyperlegible',Helvetica] font-bold text-[#2c00ca] text-2xl md:text-4xl tracking-[0] leading-[normal]">
              OUR STORY
            </h2>

            <Card className="bg-white rounded-[15px] shadow-[0px_4px_4px_#00000040] mx-auto max-w-4xl">
              <CardContent className="p-6 md:p-12 space-y-8">
                <p className="font-['Inter',Helvetica] font-normal text-gray-600 text-base md:text-lg tracking-[0] leading-6 md:leading-[25px]">
                  Smart contract security is broken. Audits are time-consuming,
                  expensive, and static. As Web3 adoption accelerates across DeFi,
                  NFT platforms, stablecoins, and institutional ecosystems,
                  traditional security approaches fall short.
                </p>

                <div className="my-8">
                  <StorySection />
                </div>

                <p className="font-['Inter',Helvetica] font-normal text-gray-600 text-base md:text-lg tracking-[0] leading-6 md:leading-[25px]">
                  Our AI-powered auditing engine is designed to evaluate smart
                  contracts against a comprehensive 14- parameter security model.
                  In its current release, Cerify delivers high-precision detection
                  for 7 of these parameters on Solidity contracts. Roadmap
                  milestones include broader language support (Vyper, Kotlin),
                  full parameter coverage, and AI-led vulnerability remediation.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Built for Developers, Designed for Compliance Section */}
        <section className="relative w-full py-16 mt-8 bg-blue-50 border border-blue-100">
          <div className="max-w-6xl mx-auto px-4 md:px-8">
            <h2 className="text-center mb-12 font-['Atkinson_Hyperlegible',Helvetica] font-bold text-[#2c00ca] text-2xl md:text-4xl text-center tracking-[0] leading-8 md:leading-10">
              BUILT FOR DEVELOPERS, DESIGNED FOR COMPLIANCE
            </h2>

            <div className="flex flex-col md:flex-row gap-8 md:gap-16">
              <div className="flex-1 space-y-8">
                <p className="font-['Inter',Helvetica] font-normal text-gray-600 text-base md:text-lg tracking-[0] leading-6 md:leading-[25px]">
                  Security is only half the equation. As regulations evolve across the 
                  globe — from MiCA in the EU to FIT21 in the US and sandbox 
                  guidelines in India — compliance is becoming critical.
                </p>

                <div className="bg-gradient-to-r from-green-50 to-purple-50 p-6 rounded-lg border border-purple-100">
                  <p className="font-['Inter',Helvetica] font-medium text-[#2c00ca] text-base md:text-lg">
                    Cerify is building not just for technical correctness, but for regulatory 
                    readiness.
                  </p>
                </div>

                <p className="font-['Inter',Helvetica] font-normal text-gray-600 text-base md:text-lg tracking-[0] leading-6 md:leading-[25px]">
                  We're mapping audit outputs to regulatory frameworks, so that 
                  every certified smart contract isn't just safe — it's prepared for 
                  scrutiny by financial institutions, VCs, and policy bodies.
                </p>
              </div>

              <div className="flex-1 flex flex-col justify-center space-y-8">
                <div className="flex items-center gap-4 bg-white p-6 rounded-lg shadow-sm">
                  <div className="text-[#2c00ca] text-2xl">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m9 9 6 6"></path>
                      <path d="m15 9-6 6"></path>
                      <circle cx="12" cy="12" r="10"></circle>
                    </svg>
                  </div>
                  <span className="font-['Inter',Helvetica] font-medium text-gray-800">
                    MiCA Compliance (EU)
                  </span>
                </div>

                <div className="flex items-center gap-4 bg-white p-6 rounded-lg shadow-sm">
                  <div className="text-[#2c00ca] text-2xl">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                      <path d="M9 9h6v6H9z"></path>
                    </svg>
                  </div>
                  <span className="font-['Inter',Helvetica] font-medium text-gray-800">
                    FIT21 Framework (US)
                  </span>
                </div>

                <div className="flex items-center gap-4 bg-white p-6 rounded-lg shadow-sm">
                  <div className="text-[#2c00ca] text-2xl">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 8V7c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v1"></path>
                      <path d="M3 8h18v9c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V8Z"></path>
                      <path d="M12 12a2 2 0 0 0-2 2v2h4v-2a2 2 0 0 0-2-2Z"></path>
                    </svg>
                  </div>
                  <span className="font-['Inter',Helvetica] font-medium text-gray-800">
                    India Sandbox Guidelines
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why We're Built To Solve This Section */}
        <section className="relative w-full py-16 mt-8 bg-white">
          <div className="max-w-6xl mx-auto px-4 md:px-8">
            <h2 className="text-center mb-12 font-['Atkinson_Hyperlegible',Helvetica] font-bold text-[#2c00ca] text-2xl md:text-4xl text-center tracking-[0] leading-8 md:leading-10">
              WHY WE'RE BUILT TO SOLVE THIS
            </h2>

            <div className="flex justify-center">
              <img
                className="w-full max-w-4xl h-auto rounded-lg"
                alt="Why we're built to solve this"
                src="/figmaAssets/div.png"
              />
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="relative w-full mt-8 pt-16 pb-24">
          <div className="max-w-6xl mx-auto px-4 md:px-8">
            <h2 className="text-center mb-16 font-['Atkinson_Hyperlegible',Helvetica] font-bold text-[#2c00ca] text-2xl md:text-4xl tracking-[0] leading-[normal]">
              THE TEAM BEHIND
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 justify-items-center">
              {teamMembers.map((member, index) => (
                <div
                  key={`team-member-${index}`}
                  className="w-full max-w-[270px] h-[345px] relative rounded-[20px] overflow-hidden"
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${member.image})` }}
                  />
                  <div className="absolute inset-0 rounded-[20px] bg-[linear-gradient(180deg,rgba(44,0,202,0.1)_0%,rgba(44,0,202,0.5)_50%,rgba(44,0,202,1)_100%)]" />
                  <div className="absolute bottom-[55px] left-0 right-0 text-center">
                    <h3 className="font-['Inter',Helvetica] font-semibold text-white text-xl md:text-2xl tracking-[0] leading-[normal] px-2">
                      {member.name}
                    </h3>
                  </div>
                  <div className="absolute bottom-[25px] left-0 right-0 text-center">
                    <p className="font-['Inter',Helvetica] font-medium text-white text-xs md:text-sm tracking-[0] leading-[normal] px-4">
                      {member.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Road Map Section */}
        <RoadMapSection />

        {/* Footer Section */}
        <FooterSection />
      </div>
    </div>
  );
};
