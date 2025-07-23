import React from "react";

export const NavigationBarSection = () => {
  // Navigation items data for easy mapping
  const navItems = [
    { label: "About", width: "w-[58px]" },
    { label: "Blog", width: "w-11" },
    { label: "Help", width: "w-11" },
    { label: "Contact", width: "w-[77px]" },
  ];

  return (
    <nav className="absolute top-0 left-0 right-0 z-20 flex w-full min-h-[81px] items-center justify-between px-4 md:px-[73px] py-4 md:py-[18px] bg-white rounded-[0px_0px_26px_26px] shadow-[0px_4px_4px_#2c00ca40]">
      <img
        className="relative w-[120px] md:w-[157px] h-auto"
        alt="Logo"
        src="/figmaAssets/vector.svg"
      />

      <div className="flex items-center gap-4 md:gap-[69px] overflow-x-auto">
        {navItems.map((item, index) => (
          <button
            key={index}
            className="relative whitespace-nowrap font-sans font-medium text-[#2c00ca] text-base md:text-xl tracking-[0] leading-[normal] hover:underline transition-colors duration-200 bg-transparent border-none cursor-pointer"
            onClick={() => {
              // Add navigation logic here
              console.log(`Navigate to ${item.label}`);
            }}
          >
            {item.label}
          </button>
        ))}
      </div>
    </nav>
  );
};
