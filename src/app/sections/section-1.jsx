"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

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

const Section1 = () => {
  return (
    <section className="w-full bg-foreground text-background py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-2xl md:text-4xl font-bold mb-3">
          Why leading enterprises choose{" "}
          <span className="text-primary">AiELM</span>
        </h2>

        <p className="max-w-3xl mx-auto text-base md:text-lg text-background/80">
          Reimagine corporate training—not just completed, but optimized.
          AiELM isn’t just a learning management system; it’s your operational
          efficiency engine.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {cardData.map((item, idx) => (
            <Card
              key={idx}
              className="border-0 rounded-xl shadow-lg overflow-hidden flex flex-col h-[350px] " // total height set karo
              style={{
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.3) 0%, rgba(131,197,190,0.3) 100%)",
              }}
            >
              <div className="relative w-full flex-[0_0_65%]">
                <Image
                  src={item.img}
                  alt={item.title || "Section image"} // ✅ added alt text
                  fill
                  className="object-cover rounded-xl"
                />

              </div>

              <CardContent className="flex-[0_0_10%] flex flex-col justify-center">
                <h3 className="font-semibold text-background mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-background/90">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Extra Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 items-start gap-8">
          {/* Left → Heading */}
          <div className="flex flex-col text-left">
            <h3 className="text-2xl md:text-3xl font-bold">
              Scale your workforce learning with intelligence
            </h3>
          </div>

          {/* Right → Paragraph + Button */}
          <div className="flex flex-col text-left">
            <p className="text-base text-background/70 max-w-lg mb-4">
              AiELM empowers enterprises to move beyond just training. It
              transforms skills into measurable outcomes that drive performance.
            </p>
            <button className="bg-primary-foreground text-secondary px-6 py-2 rounded-lg font-medium hover:bg-primary/90 w-fit">
              Explore More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;
