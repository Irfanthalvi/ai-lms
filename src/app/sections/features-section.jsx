"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { featuresMock } from "../data/feature-data";

const FeaturesSection = () => {
  return (
    <section className="w-full bg-foreground text-background py-16 px-6">
      <div className="mx-auto text-center">
        {/* Heading + Paragraph */}
        <div className="mt-[90px] w-[776px] mx-auto text-center">
          <h2 className="font-bold text-[38px] leading-[120%] text-secondary-foreground mb-4">
            Why leading enterprises choose <span className="text-primary">AiELM</span>
          </h2>
          <p className="font-normal text-[16px] leading-[24px] text-secondary-foreground">
            Reimagine corporate training—not just completed, but optimized. AiELM isn’t just a learning
            management system. It’s your operational efficiency engine.
          </p>
        </div>

        {/* Cards */}
        <div className="w-full max-w-[1250px] mx-auto mt-15.5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuresMock.map((item, idx) => (
            <Card
              key={idx}
              className="rounded-xl overflow-hidden flex flex-col h-[355px] w-full p-0"
              style={{
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.3) 0%, rgba(131,197,190,0.3) 100%)",
              }}
            >
              {/* Image */}
              <div className="relative w-full h-[220px] sm:h-[250px] md:h-[280px] overflow-hidden">
                <Image
                  src={item.img}
                  alt={item.title || "Section image"}
                  fill
                  className="object-cover object-center rounded"
                />
              </div>

              {/* Content */}
              <CardContent className="flex flex-col text-left p-5 relative">
                <h3 className="font-bold text-background relative top-[-15px] left-[6px]">
                  {item.title}
                </h3>
                <p className="font-semi-bold text-sm text-background/90 relative top-[-14px] left-[6px]">
                  {item.desc}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Extra Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 items-center gap-16 max-w-[1250px] mx-auto">
          {/* Left → Heading */}
          <div className="w-full md:w-[500px] flex flex-col text-left ">
            <h3 className="font-bold text-[38px] leading-[120%] tracking-[0] text-black font-headline">
              <span>Elevate Learning.</span>
              <span className="block">Accelerate Performance.</span>
            </h3>
          </div>

          {/* Right → Paragraph + Button */}
          <div className="flex flex-col text-left space-y-6 w-full relative translate-y-2">
            <p className="font-normal text-[16px] leading-[24px] text-black max-w-full">
              Achieve total workforce alignment, proven compliance,
              and real-time<br /> productivity—powered by intelligent automation.
            </p>

            <Button className="bg-primary text-foreground px-4 py-3 rounded-lg text-[14px] leading-[24px] w-[140px]">
              Request a Demo
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom spacing */}
      <div className="h-[98px]"></div>
    </section>
  );
};

export default FeaturesSection;
