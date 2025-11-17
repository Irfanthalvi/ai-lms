'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { firstRowCards, secondRowCards } from '../data/how-it-works-mock';

const HowItWorks = () => {
  return (
    <section
      id="How-it-works"
      className="relative w-full py-20 px-6 bg-linear-to-b from-card-foreground to-card text-foreground overflow-hidden"
    >
      {/* Background grid */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20 pointer-events-none" />

      <div className="relative mx-auto text-center mt-16">
        {/* Heading */}
        <h2
          data-aos="fade-up"
          data-aos-duration="1000"
          className="text-2xl md:text-[46px] font-bold mb-7"
        >
          How it works: <span className="text-accent">From start to smart</span>
        </h2>

        <p
          data-aos="fade-up"
          data-aos-duration="1500"
          className="mx-auto text-base md:text-[16.5px] text-foreground mb-14 leading-relaxed"
        >
          Behind every training session, AiELM runs a powerful, intelligent
          workflow designed to verify,
          <br /> adapt, measure, and optimize — all in real time. Here’s what
          that journey looks like:
        </p>

        {/* Row 1 → 2 cards */}
        <div
          data-aos="fade-up"
          data-aos-duration="2000"
          className="
            grid grid-cols-1 sm:grid-cols-2 gap-[38px] text-left mb-8 
            max-w-[1250px] mx-auto
          "
        >
          {firstRowCards.map((card, index) => (
            <Card
              key={index}
              className="
                bg-background/80 border-0 rounded-xl 
                w-[605px] h-[285px] pl-1.5 pt-7.5
                max-2xl:w-[550px] max-2xl:h-[260px]
                max-xl:w-[480px] max-xl:h-[290px]
                max-lg:w-full max-lg:h-auto
              "
            >
              <CardContent className="flex flex-col items-start justify-center text-start">
                <div className="size-10.5 flex items-center justify-center rounded-lg bg-accent mb-6">
                  {card.icon}
                </div>
                <h3 className="font-semibold text-[23px] tracking-normal text-foreground pb-3 max-xl:text-[20px] max-lg:text-[18px]">
                  {card.title}
                </h3>
                <p className="text-[14px] text-foreground leading-relaxed tracking-[0.013em] pb-6 max-lg:text-[13px]">
                  {card.desc}
                </p>
                <p className="text-sm font-semibold text-accent uppercase hover:underline tracking-[0.032em]">
                  {card.footer}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Row 2 → 3 cards */}
        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className="
            grid grid-cols-1 sm:grid-cols-3 gap-[38px] text-left 
            max-w-[1250px] mx-auto mb-[72px] pt-2
          "
        >
          {secondRowCards.map((card, index) => (
            <Card
              key={index}
              className="
                bg-background/80 border-0 rounded-xl 
                w-[390px] h-[310px] pl-2 pt-8
                max-2xl:w-[350px] max-2xl:h-[285px]
                max-xl:w-[320px] max-xl:h-80
                max-lg:w-full max-lg:h-auto
              "
            >
              <CardContent className="flex flex-col items-start justify-center text-start">
                <div className="size-10 flex items-center justify-center rounded-md bg-accent mb-5.5">
                  {card.icon}
                </div>
                <h3 className="font-semibold text-[22px] text-foreground pb-3.5 max-xl:text-[20px] max-lg:text-[18px]">
                  {card.title}
                </h3>
                <p className="text-sm text-foreground leading-relaxed pb-6 max-lg:text-[13px]">
                  {card.desc}
                </p>
                <p className="text-sm font-semibold text-accent uppercase hover:underline">
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
