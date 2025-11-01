"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { aielm } from "../data/why-aielm-mock";

const Whyaielm = () => {
  return (
    <section
      id="Why-AiELM"
      className="w-full bg-foreground text-background py-16 px-6"
    >
      <div className="mx-auto text-center">
        {/* Heading + Paragraph */}
        <div className="mt-[90px] w-[776px] max-md:w-[90%] mx-auto text-center">
          <h2
            data-aos="fade-up"
            data-aos-duration="1000"
            className="
      font-bold 
      text-[38px] 
      max-2xl:text-[36px]
      max-xl:text-[34px]
      max-lg:text-[32px] 
      max-md:text-[28px] 
      max-sm:text-[22px] 
      leading-[120%] 
      text-secondary-foreground 
      mb-[12px] 
      max-md:mb-[10px] 
      max-sm:mb-[8px]
    "
          >
            Why leading enterprises choose{" "}
            <span className="text-primary">AiELM</span>
          </h2>

          <p
            data-aos="fade-up"
            data-aos-duration="2000"
            className="
      font-normal 
      text-[16px] 
      max-md:text-[14.5px] 
      max-sm:text-[13.5px] 
      tracking-[0.009em] 
      text-secondary-foreground 
      leading-relaxed 
      max-w-[650px] 
      mx-auto
    "
          >
            Reimagine corporate training—not just completed, but optimized.
            AiELM isn’t just a learning management system. It’s your operational
            efficiency engine.
          </p>
        </div>

        {/* Cards */}
        <div className="w-full max-w-[1250px] mx-auto mt-15 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {aielm.map((item, idx) => (
            <Card
              data-aos="fade-up"
              data-aos-duration="2500"
              key={idx}
              className="rounded-xl overflow-hidden flex flex-col h-[358px] w-full p-0"
              style={{
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.3) 0%, rgba(131,197,190,0.3) 100%)",
              }}
            >
              {/* Image */}
              <div
                className="relative w-full h-[220px] sm:h-[250px] md:h-[280px] overflow-hidden rounded-sm group"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <Image
                  src={item.img}
                  alt={item.title || "Section image"}
                  fill
                  className="cursor-pointer object-cover object-center transition-transform duration-700 ease-out 
               group-hover:scale-110 group-hover:-translate-y-3"
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
        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className="mt-12 grid grid-cols-1 md:grid-cols-2 items-center gap-16 max-w-[1250px] mx-auto"
        >
          {/* Left → Heading */}
          <div className="w-full md:w-[500px] flex flex-col text-left ">
            <h3 className="font-bold text-[38px] max-lg:text-[30px] leading-[120%] tracking-[0] text-black font-headline">
              <span>Elevate Learning.</span>
              <span className="block">Accelerate Performance.</span>
            </h3>
          </div>

          {/* Right → Paragraph + Button */}
          <div className="flex flex-col text-left space-y-6 w-full relative translate-y-2">
            <p className="font-normal text-[16px] leading-[24px] text-black max-w-full">
              Achieve total workforce alignment, proven compliance, and
              real-time
              <br /> productivity—powered by intelligent automation.
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

export default Whyaielm;
