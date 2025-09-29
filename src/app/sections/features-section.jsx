"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const cardData = [
  {
    img: "/picture.png",
    title: "Verified Learning",
    desc: "Biometrics and identity checks ensure training credibility.",
  },
  {
    img: "/picture1.png",
    title: "AI-Driven Content",
    desc: "Adaptive, personalized learning paths are customized for every role.",
  },
  {
    img: "/picture2.png",
    title: "Real-Time Insights",
    desc: "Accelerate insights across workforce impact, not just completion.",
  },
  {
    img: "/picture3.png",
    title: "Compliance Made Easy",
    desc: "Automated regulatory updates — always audit-ready.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="w-full bg-foreground text-background py-15.5 px-6">
      <div className="mx-auto text-center">
        {/* Heading + Paragraph */}
        <div className="mt-[85px] w-[776px] mx-auto text-center">
          <h2 className="font-bold text-[38px] leading-[120%] text-secondary-foreground mb-4">
            Why leading enterprises choose{" "}
            <span className="text-primary">AiELM</span>
          </h2>

          <p className="font-normal text-[16px] leading-[24px] mr-4 text-secondary-foreground">
            Reimagine corporate training—not just completed, but optimized. AiELM isn’t just a learning
            management system. It’s your operational efficiency engine.
          </p>
        </div>


        {/* Cards */}
        <div className=" w-[1250px] h-[365px] mx-auto mt-15">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-[24px]">
            {cardData.map((item, idx) => (
              <Card
                key={idx}
                className="border-0 rounded-xl overflow-hidden flex flex-col h-[350px] w-[295px] p-0" // 👈 yahan p-0 add
                style={{
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.3) 0%, rgba(131,197,190,0.3) 100%)",
                }}
              >
                {/* Image bilkul top chipak jayegi */}
                <div className="relative w-[310px] h-[240px] overflow-hidden">
                  <Image
                    src={item.img}
                    alt={item.title || "Section image"}
                    fill
                    className="object-cover object-top"
                  />
                </div>

                {/* Padding sirf content ke liye */}
                <CardContent className="flex flex-col justify-center text-left p-4.5">
                  <h3 className="font-semibold text-background ">
                    {item.title}
                  </h3>
                  <p className="text-sm text-background/90">{item.desc}</p>
                </CardContent>
              </Card>

            ))}
          </div>
        </div>

        {/* Extra Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 items-center gap-15 max-w-[1250px] mx-auto">
          {/* Left → Heading */}
          <div className="w-[500px] h-[96px] flex flex-col text-left">
            <h3 className="font-bold text-[40px] leading-[120%] tracking-[0] text-black font-headline">
              <span>Elevate Learning.</span>
              <span className="block">Accelerate Performance.</span>
            </h3>
          </div>




          {/* Right → Paragraph + Button */}
          <div className="flex flex-col text-left space-y-6 w-[624px] h-[116px]">
            <p className="font-normal text-[17px] leading-[24px] tracking-[0px] text-black max-w-[624px]">
              Achieve total workforce alignment, proven compliance,
              and real-time productivity—powered by intelligent automation.
            </p>

            <Button className="bg-primary text-foreground px-4 py-1.5 rounded-lg font-medium text-[15px] leading-[24px] tracking-[0] w-fit">
              Request a Demo
            </Button>
          </div>
        </div>
      </div>
      {/* Extra bottom empty space */}
      <div className="h-[90px]"></div>
    </section>
  );
};

export default FeaturesSection;

