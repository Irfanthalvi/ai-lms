import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <div className="relative bg-card min-h-[170vh] flex flex-col items-center justify-center text-center">
      
      {/* Background pattern image */}
      <div className="absolute inset-0 -z-10 w-full h-full">
        <Image
          src="/patterns.png"
          alt="Background Patterns"
          fill
          style={{ objectFit: "cover" }}
          quality={100}
          className="pointer-events-none"
        />
      </div>

      {/* Tagline */}
      <div className="w-[1312px] h-[236px] flex flex-col items-center gap-[36px] mt-10 z-10">
        <div className="bg-primary text-secondary w-[320px] rounded-full flex items-center justify-center">
          World’s Best, AI-First Learning Platform
        </div>

        {/* Heading */}
        <h1
          style={{ fontFamily: "var(--headline-font-family)" }}
          className="w-[830px] h-[96px] font-bold text-[48px] leading-[100%] text-center text-secondary mx-auto"
        >
          Optimizing Workforce Efficiency <br /> with Intelligent Learning
        </h1>
      </div>

      {/* Video Section */}
      <div className="w-full h-screen flex items-center justify-center z-10">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-[1250px] h-[700px] rounded-4xl object-cover"
        >
          <source src="/team-work-2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Header;
