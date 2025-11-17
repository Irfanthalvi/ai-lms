'use client';

import React from 'react';
import { CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import {
  cards,
  description1,
  description2,
  features,
  highlight,
  icons,
  mainTitle,
} from '../data/solution-mock';

export default function SolutionSection() {
  return (
    <section
      className="w-full bg-foreground px-6 md:px-16 py-38 max-xl:py-32 max-lg:py-28 max-md:py-24 max-sm:py-20"
      id="Solutions"
    >
      {/* Heading Section */}
      <div className="max-w-4xl mx-auto text-center">
        <h2
          data-aos="fade-up"
          data-aos-duration="1000"
          className="text-[26px] md:text-[38px] font-extrabold text-background leading-[1.15] 
          max-md:text-[32px] max-sm:text-[28px]"
        >
          {mainTitle} <p className="text-accent">{highlight}</p>
        </h2>
        <p
          data-aos="fade-up"
          data-aos-duration="1500"
          className="mt-3.5 text-[18px] md:text-[16px] mx-auto max-w-[680px] text-background 
          max-md:text-[15px] max-sm:text-[14px] leading-relaxed"
        >
          {description1}
          <br />
          {description2}
        </p>
      </div>

      {/* === Dynamic Cards === */}
      <div
        className="w-[1250px] max-w-full mx-auto mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8
       max-2xl:w-[1100px] max-xl:w-[950px] max-lg:w-[700px] max-md:w-[90%] max-sm:w-[95%]"
      >
        {cards.map((item, i) => {
          const Icon = icons[item.icon];
          return (
            <Card
              key={i}
              className="rounded-2xl h-[296px] w-[390px] border border-transparent bg-foreground
                max-2xl:w-[350px] max-2xl:h-[280px]
                max-xl:w-[306px] max-xl:h-[300px]
                max-lg:w-full max-lg:h-auto
              "
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <CardContent className="p-4 md:p-4">
                <div className="flex flex-col items-center">
                  <div className="size-10 rounded-sm flex items-center justify-center mb-10 bg-accent max-lg:mb-6">
                    <Icon className="size-5 text-foreground" />
                  </div>

                  <h3
                    className="text-[22px] md:text-[23px] font-semibold mb-2 text-background
                    max-xl:text-[21px] max-lg:text-[19px] max-md:text-[18px] max-sm:text-[16px]
                  "
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-[14px] text-center mb-5 max-w-[320px] leading-relaxed text-background
                      max-xl:text-[13px] max-lg:text-[12px] max-md:text-[12px] max-sm:text-[11px] max-sm:mb-4
                    "
                    dangerouslySetInnerHTML={{ __html: item.desc }}
                  />
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* === Dynamic Features Row === */}
      <div
        data-aos="fade-up"
        data-aos-duration="2500"
        className="w-[1250px] max-w-full mx-auto mt-15.5 mb-2 grid grid-cols-1 md:grid-cols-3 gap-6 
        md:gap-8 max-2xl:w-[1100px] max-xl:w-[950px] max-lg:w-[700px] max-md:w-[90%] max-sm:w-[95%]"
      >
        {features.map((feature, i) => (
          <div key={i} className="flex items-start gap-3 max-sm:gap-2">
            <div className="w-8 h-8 rounded-full flex items-center justify-center mt-1 max-sm:w-6 max-sm:h-6">
              <CheckCircle className="w-5 h-5 text-accent max-sm:w-4 max-sm:h-4" />
            </div>
            <div className="w-full">
              <p
                className="text-[18px] leading-snug text-background max-xl:text-[16px] max-lg:text-[15px] 
                max-md:text-[14px] max-sm:text-[13px]"
                dangerouslySetInnerHTML={{
                  __html: `<span class='font-semibold text-accent'>${feature.label}</span> ${feature.desc}`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
