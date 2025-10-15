"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { firstRowCards, secondRowCards } from "../data/how-it-works-mock";

const HowItWorks = () => {
  return (
    <section id="How-it-works" className="relative w-full py-20 px-6 bg-gradient-to-b from-card-foreground to-card text-white overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20 pointer-events-none" />

      <div className="relative mx-auto text-center mt-16">
        {/* Heading */}
        <h2 className="text-2xl md:text-[46px] font-bold mb-7">
          How it works: <span className="text-teal-400">From start to smart</span>
        </h2>
        <p className="mx-auto text-base md:text-[16.5px] text-gray-300 mb-14">
          Behind every training session,AiELM runs a powerful, intelligent
          workflow designed to verify,<br /> adapt, measure, and optimize — all in real
          time. Here’s what that journey looks like:
        </p>
        {/* Row 1 → 2 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-[38px] text-left mb-8 max-w-[1250px] mx-auto">
          {firstRowCards.map((card, index) => (
            <Card
              key={index}
              className="bg-black/80 border-0 rounded-xl w-[605px] h-[285px] pl-1.5 pt-7.5"
            >
              <CardContent className=" flex flex-col items-start justify-center text-start">
                <div className="size-10.5 flex items-center justify-center rounded-[8px] bg-teal-400 mb-6">
                  {card.icon}
                </div>
                <h3 className="font-semibold text-[23px] tracking-normal text-white pb-3">{card.title}</h3>
                <p className="text-[14px] text-gray-300 leading-relaxed tracking-[0.013em] pb-6">{card.desc}</p>
                <p className="text-sm font-semibold text-teal-400 uppercase hover:underline tracking-[0.032em] ">
                  {card.footer}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Row 2 → 3 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-[38px] text-left max-w-[1250px] mx-auto mb-[72px] pt-2">
          {secondRowCards.map((card, index) => (
            <Card
              key={index}
              className="bg-black/80 border-0 rounded-xl w-[390px] h-[310px] pl-2 pt-8"
            >
              <CardContent className="flex flex-col items-start justify-center text-start">
                <div className="size-10 flex items-center justify-center rounded-md bg-teal-500 mb-5.5">
                  {card.icon}
                </div>
                <h3 className="font-semibold text-[22px] text-white pb-3.5">{card.title}</h3>
                <p className="text-sm text-gray-300 leading-relaxed pb-6">{card.desc}</p>
                <p className="text-sm font-semibold text-teal-400 uppercase hover:underline ">
                  {card.footer}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;
