"use client";

import Image from "next/image";
import React from "react";
import {
  ctaButton,
  ctaText1,
  ctaText2,
  features,
  highlighted,
  imageAlt,
  imageSrc,
  introText,
  mainTitle,
  systemTitle,
} from "../data/case-study-mock";

const Casestudy = () => {
  return (
    <section
      id="Case-study"
      className="relative flex w-full bg-[#0A1E28] text-white py-37 overflow-visible"
    >
      {/* LEFT CONTENT */}
      <div
        className="
          relative z-10 
          ml-57
          w-[700px] 
          pt-1
          min-h-[600px] 
        "
      >
        <h2 className="text-[38px] max-lg:text-4xl font-bold leading-[1.2] mb-4">
          {mainTitle}
          <br />
          {systemTitle} <span className="text-[#4FD1C5]">{highlighted}</span>
        </h2>

        <p
          className="text-gray-300 mb-10 text-[16px] leading-[1.5]"
          dangerouslySetInnerHTML={{ __html: introText }}
        />
        {/* Features */}
        <div className="grid sm:grid-cols-2 gap-x-3 gap-y-18 mb-20">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="flex items-start gap-5">
                <Icon className="size-8 text-[#4FD1C5] shrink-0" />
                <div>
                  <h3 className="text-gray-200 font-semibold mb-3 text-[19px]">
                    {item.title}
                  </h3>
                  <p className="text-gray-200 text-[15px] leading-[1.5] tracking-[0.04em] whitespace-pre-line">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div>
          <p className="text-gray-200 text-[17px] leading-[1.4] text-bold">{ctaText1}</p>
          <p className="text-gray-200 text-[17px] leading-[1.4] text-bold">{ctaText2}</p>
          <button className="mt-6 p-2 bg-[#18a897] font-medium rounded-md transition">
            {ctaButton}
          </button>
        </div>
      </div>

      {/* RIGHT IMAGE (pinned to right edge) */}
      <div
        className="
          absolute 
          top-[63px] 
          right-0 
          bottom-0
          z-0
          w-[787px]     /* 👈 adjust right width */
          h-[1000px]     /* 👈 adjust right height */
          flex 
          justify-end     /* 👈 aligns image to right edge */
          items-center
        "
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={1500}
          height={1000}
          className="object-contain w-auto h-full rounded-md shadow-lg"
        />
      </div>
    </section>
  );
};

export default Casestudy;
