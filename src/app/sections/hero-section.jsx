import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <div id="hero-section" className="relative bg-card  flex flex-col items-center justify-center text-center pb-24">
      <div className=" pt-38">
        {/* Background pattern image */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/patterns.png"
            alt="Background pattern"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
            quality={100}
            className="pointer-events-none"
            priority
          />
        </div>

        {/* Tagline */}
        <div className="w-[1312px] h-[220px] flex flex-col items-center gap-[33.5px] z-10 transform translate-y-7">
          <div className="bg-primary text-accent w-[305px] text-sm tracking-wide py-1 rounded-full flex items-center justify-center mb-[1.5px]">
            World’s Best, AI-First Learning Platform
          </div>

          <h1 className="w-[830px] h-[95px] font-bold text-[45px] leading-[100%] tracking-[0.009em] text-center text-secondary mx-auto">
            Optimizing Workforce Efficiency <br /> with Intelligent Learning
          </h1>
        </div>

        {/* Video Section */}
        <div className="w-full h-screen flex items-center justify-center z-10 transform translate-y-9">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-[1250px] h-[703px] rounded-4xl object-cover z-10"
          >
            <source src="/team-work-2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default Header;
