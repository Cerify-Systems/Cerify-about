import { LinkedinIcon } from "lucide-react";
import React from "react";

export const FooterSection = () => {
  // About section links data
  const aboutLinks = [
    { title: "Security Audits", href: "#" },
    { title: "Compliance Reports", href: "#" },
    { title: "API Access", href: "#" },
    { title: "Documentation", href: "#" },
  ];

  // Company section links data
  const companyLinks = [
    { title: "About", href: "#" },
    { title: "Careers", href: "#" },
    { title: "Blog", href: "#" },
    { title: "Contact", href: "#" },
  ];

  // Social media links data
  const socialLinks = [
    {
      icon: <LinkedinIcon className="w-[23.23px] h-[21.78px]" />,
      href: "#",
      alt: "LinkedIn",
    },
    {
      icon: (
        <img
          className="w-[23px] h-[23px]"
          alt="Twitter"
          src="/figmaAssets/vector-9.svg"
        />
      ),
      href: "#",
      alt: "Twitter",
    },
    {
      icon: (
        <img
          className="w-[23px] h-[21px]"
          alt="Telegram"
          src="/figmaAssets/vector-2.svg"
        />
      ),
      href: "#",
      alt: "Telegram",
    },
  ];

  return (
    <footer className="w-full bg-[#2c00ca] rounded-[30px_30px_0px_0px] overflow-hidden shadow-[0px_-10px_20px_4px_#00000033] py-16 md:py-28 px-4 md:px-20">
      <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-8 max-w-[1440px] mx-auto">
        {/* Left section with logo and social links */}
        <div className="flex flex-col items-center lg:items-start">
          <img
            className="w-[300px] md:w-[400px] h-auto"
            alt="Cerify Logo"
            src="/figmaAssets/vector-8.svg"
          />

          <p className="mt-8 max-w-[416px] font-medium text-white text-lg md:text-xl text-center lg:text-left font-['Inter',Helvetica]">
            the first AI-Powered Smart Contract Verification engine
          </p>

          <div className="flex items-center gap-7 mt-10">
            {socialLinks.map((social, index) => (
              <a
                key={`social-${index}`}
                href={social.href}
                aria-label={social.alt}
                className="text-white hover:opacity-80 transition-opacity"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Right section with navigation links */}
        <div className="flex flex-col md:flex-row gap-12 md:gap-24 text-center lg:text-left">
          {/* About section */}
          <div className="flex flex-col">
            <h3 className="font-['Inter',Helvetica] font-semibold text-white text-xl md:text-2xl mb-5">
              About
            </h3>
            <div className="flex flex-col space-y-4 md:space-y-[27px]">
              {aboutLinks.map((link, index) => (
                <a
                  key={`about-${index}`}
                  href={link.href}
                  className="font-['Inter',Helvetica] font-medium text-white text-sm md:text-base hover:underline"
                >
                  {link.title}
                </a>
              ))}
            </div>
          </div>

          {/* Company section */}
          <div className="flex flex-col">
            <h3 className="font-['Inter',Helvetica] font-semibold text-white text-xl md:text-2xl mb-5">
              Company
            </h3>
            <div className="flex flex-col space-y-4 md:space-y-[27px]">
              {companyLinks.map((link, index) => (
                <a
                  key={`company-${index}`}
                  href={link.href}
                  className="font-['Inter',Helvetica] font-medium text-white text-sm md:text-base hover:underline"
                >
                  {link.title}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
