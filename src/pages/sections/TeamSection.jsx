import React from "react";
import { Card, CardContent } from "../../components/ui/card";

export const TeamSection = () => {
  // Feature card data
  const featureCards = [
    {
      id: "1",
      title: "Multi-Parameter Detection Engine",
      description:
        "Currently supports 7/14 key audit parameters — expanding weekly",
      position: "col-start-1 row-start-1",
    },
    {
      id: "2",
      title: "Real-Time Patch Generation (Coming Q4 2025)",
      description:
        "Automated secure code suggestions tailored to flagged vulnerabilities",
      position: "col-start-2 row-start-1",
    },
    {
      id: "3",
      title: "Compliance Layer Built-In",
      description:
        "Alignment with global regulations (MiCA, CFTC, FIT21, RBI Sandbox)",
      position: "col-start-1 row-start-2",
    },
    {
      id: "4",
      title: "Instant Trust Badge",
      description:
        "Publicly verifiable certification that shows your contract is Cerify-approved",
      position: "col-start-2 row-start-2",
    },
  ];

  return (
    <section className="w-full py-16">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-[#2c00ca] font-['Atkinson_Hyperlegible',Helvetica] mb-12 text-center">
          WHAT MAKES CERIFY UNIQUE
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featureCards.map((card) => (
            <Card
              key={card.id}
              className={`relative overflow-hidden rounded-[26px] shadow-[0px_6px_4px_#00000040] ${card.position}`}
            >
              <div className="absolute inset-0 bg-[#05b3f1]">
                <div className="h-full w-full bg-[linear-gradient(90deg,rgba(61,254,144,0.6)_0%,rgba(33,0,151,0.51)_64%,rgba(22,0,100,1)_100%)]" />
              </div>

              <CardContent className="relative h-[305px] flex flex-row p-6">
                <div className="font-['Atkinson_Hyperlegible',Helvetica] font-normal text-white text-[270px] leading-none self-start">
                  {card.id}
                </div>

                <div className="flex flex-col justify-center ml-8 max-w-[309px]">
                  <h3 className="font-['Inter',Helvetica] font-semibold text-white text-2xl mb-6">
                    {card.title}
                  </h3>
                  <p className="font-['Inter',Helvetica] font-normal text-white text-base">
                    {card.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
