import React from "react";

export const RoadMapSection = () => {
  // Roadmap data matching the image
  const roadmapItems = [
    {
      date: "July 2025",
      content: [
        "Launch beta with 7-parameter detection + Cerify certification",
        "Beta onboarding for developers and early DeFi projects",
      ],
      position: "top"
    },
    {
      date: "Q3 2025",
      content: [
        "Add detection for remaining 7 parameters",
        "Launch regulatory compliance mapping (MiCA + FIT21 + India sandbox)",
        "Design Cerify Badge Registry + Validator Portal",
      ],
      position: "bottom"
    },
    {
      date: "Q4 2025",
      content: [
        "Auto-patching engine goes live",
        "Launch enterprise SLA-based security dashboard",
        "First enterprise integrations + VC co-certification pilots",
      ],
      position: "bottom"
    },
  ];

  return (
    <section className="relative w-full py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="text-left mb-16 font-['Atkinson_Hyperlegible',Helvetica] font-bold text-[#2c00ca] text-2xl md:text-4xl tracking-[0] leading-[normal]">
          ROAD MAP<br />SNAPSHOT
        </h2>

        {/* Mobile: Vertical timeline */}
        <div className="md:hidden space-y-8">
          {roadmapItems.map((item, index) => (
            <div key={`roadmap-mobile-${index}`} className="relative">
              {/* Timeline dot */}
              <div className="absolute left-4 top-8 w-4 h-4 bg-[#2c00ca] rounded-full"></div>
              {/* Timeline line */}
              {index < roadmapItems.length - 1 && (
                <div className="absolute left-[23px] top-16 w-0.5 h-20 bg-gray-300"></div>
              )}
              {/* Content card */}
              <div className="ml-12">
                <div className="bg-[#2c00ca] text-white px-4 py-2 rounded-lg mb-4 inline-block">
                  <span className="font-['Inter',Helvetica] font-bold text-sm">
                    {item.date}
                  </span>
                </div>
                <div className="bg-white border-2 border-[#e5e7eb] rounded-lg shadow-sm p-4">
                  {item.content.map((text, idx) => (
                    <p key={idx} className="font-['Inter',Helvetica] font-normal text-[#2c00ca] text-sm mb-2 last:mb-0">
                      • {text}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: Horizontal timeline matching the image design */}
        <div className="hidden md:block relative overflow-visible">
          <div className="relative h-[600px] mx-auto" style={{ maxWidth: '1200px' }}>
            {/* Main timeline line - dotted */}
            <div className="absolute top-1/2 left-[10%] right-[10%] h-0.5 transform -translate-y-1/2">
              <div className="w-full h-full border-t-2 border-dotted border-gray-400"></div>
            </div>

            {/* Starting point */}
            <div className="absolute top-1/2 left-[8%] transform -translate-y-1/2">
              <div className="flex flex-col items-center">
                <div className="text-[#2c00ca] text-sm font-['Inter',Helvetica] font-normal mb-4 text-center whitespace-nowrap">
                  Start of an idea
                </div>
                <div className="w-6 h-6 bg-[#2c00ca] rounded-full"></div>
              </div>
            </div>

            {/* July 2025 - Top position */}
            <div className="absolute top-1/2 left-[35%] transform -translate-x-1/2 -translate-y-1/2">
              {/* Timeline dot */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-[#2c00ca] rounded-full z-10"></div>

              {/* Content positioned above */}
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-64">
                {/* Connector line */}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0.5 h-6 bg-gray-400"></div>

                {/* Date badge */}
                <div className="bg-[#2c00ca] text-white px-6 py-3 rounded-lg mb-4 text-center">
                  <span className="font-['Inter',Helvetica] font-bold text-base">
                    July 2025
                  </span>
                </div>

                {/* Content card */}
                <div className="bg-white border-2 border-gray-200 rounded-lg shadow-lg p-6">
                  <p className="font-['Inter',Helvetica] font-normal text-[#2c00ca] text-sm mb-3">
                    • Launch beta with 7-parameter detection + Cerify certification
                  </p>
                  <p className="font-['Inter',Helvetica] font-normal text-[#2c00ca] text-sm">
                    • Beta onboarding for developers and early DeFi projects
                  </p>
                </div>
              </div>
            </div>

            {/* Q3 2025 - Bottom position */}
            <div className="absolute top-1/2 left-[60%] transform -translate-x-1/2 -translate-y-1/2">
              {/* Timeline dot with circle indicator */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white border-4 border-[#2c00ca] rounded-full z-10">
                <div className="w-full h-full bg-[#2c00ca] rounded-full scale-50"></div>
              </div>

              {/* Content positioned below */}
              <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-64">
                {/* Connector line */}
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 w-0.5 h-6 bg-gray-400"></div>

                {/* Date badge */}
                <div className="bg-[#2c00ca] text-white px-6 py-3 rounded-lg mb-4 text-center">
                  <span className="font-['Inter',Helvetica] font-bold text-base">
                    Q3 2025
                  </span>
                </div>

                {/* Content card */}
                <div className="bg-white border-2 border-gray-200 rounded-lg shadow-lg p-6">
                  <p className="font-['Inter',Helvetica] font-normal text-[#2c00ca] text-sm mb-3">
                    • Add detection for remaining 7 parameters
                  </p>
                  <p className="font-['Inter',Helvetica] font-normal text-[#2c00ca] text-sm mb-3">
                    • Launch regulatory compliance mapping (MiCA + FIT21 + India sandbox)
                  </p>
                  <p className="font-['Inter',Helvetica] font-normal text-[#2c00ca] text-sm">
                    • Design Cerify Badge Registry + Validator Portal
                  </p>
                </div>
              </div>
            </div>

            {/* Q4 2025 - Bottom position */}
            <div className="absolute top-1/2 left-[85%] transform -translate-x-1/2 -translate-y-1/2">
              {/* Timeline dot with circle indicator */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white border-4 border-[#2c00ca] rounded-full z-10">
                <div className="w-full h-full bg-[#2c00ca] rounded-full scale-50"></div>
              </div>

              {/* Content positioned below */}
              <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-64">
                {/* Connector line */}
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 w-0.5 h-6 bg-gray-400"></div>

                {/* Date badge */}
                <div className="bg-[#2c00ca] text-white px-6 py-3 rounded-lg mb-4 text-center">
                  <span className="font-['Inter',Helvetica] font-bold text-base">
                    Q4 2025
                  </span>
                </div>

                {/* Content card */}
                <div className="bg-white border-2 border-gray-200 rounded-lg shadow-lg p-6">
                  <p className="font-['Inter',Helvetica] font-normal text-[#2c00ca] text-sm mb-3">
                    • Auto-patching engine goes live
                  </p>
                  <p className="font-['Inter',Helvetica] font-normal text-[#2c00ca] text-sm mb-3">
                    • Launch enterprise SLA-based security dashboard
                  </p>
                  <p className="font-['Inter',Helvetica] font-normal text-[#2c00ca] text-sm">
                    • First enterprise integrations + VC co-certification pilots
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
