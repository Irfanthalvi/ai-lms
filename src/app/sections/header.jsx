import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const Header = () => {
  return (
    <div className="bg-chart-3 min-h-[170vh] flex flex-col items-center justify-center text-center px-6">
      {/* Heading Section */}
      <div className="w-[1312px] h-[236px] p-[40px]">
        <div className="flex flex-col items-center">
          {/* Tagline */}
          <div className="bg-primary text-secondary w-[320px] h-[28px] pr-4 pl-4 pt-[2px] pb-[2px] gap-[6px] rounded-full text-sm mb-4 flex items-center justify-center">
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
      </div>

      {/* Video Section in Card */}
      <Card className="w-[1100px] h-[680px] rounded-2xl shadow-xl overflow-hidden">
        <CardContent className="p-0 w-full h-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover rounded-2xl"
          >
            <source src="/team-work-2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </CardContent>
      </Card>


    </div>
  );
};

export default Header;
