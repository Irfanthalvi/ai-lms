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
      className="
        relative 
        flex 
        w-full 
        bg-[#0A1E28] 
        text-white 
        py-37 
        overflow-visible 
        max-lg:flex-col-reverse
      "
    >
      {/* RIGHT IMAGE */}
      <div
        className="
          absolute 
          top-[63px]
          max-xl:-top-15
          right-0 
          bottom-0
          z-0
          flex 
          justify-end    
          items-center
          w-[787px] 
          h-[1000px]
          max-2xl:w-[650px]
          max-xl:w-[530px] 
          max-lg:static
          max-lg:w-full 
          max-lg:h-auto
          max-md:static
          max-md:w-full
          max-md:h-auto
          max-sm:static
        "
        data-aos="fade-left"
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={1500}
          height={1000}
          className="
            object-contain 
            w-auto 
            h-full 
            rounded-md 
            shadow-lg 
            max-lg:h-auto 
            max-lg:rounded-none
            max-md:h-auto
          "
        />
      </div>

      {/* LEFT CONTENT */}
      <div
        className="
          relative z-10 
          ml-56
          w-[700px] 
          pt-1
          min-h-[600px] 
          max-2xl:ml-36
          max-xl:ml-2
          max-lg:ml-20
          max-md:ml-12
          max-md:w-[90%]
        "
      >
        {/* Heading */}
        <h2
          data-aos="fade-down"
          className="text-[38px] max-2xl:text-[32px] max-xl:text-[28px] max-lg:text-[26px] max-md:text-[24px] max-sm:text-[22px] pl-1 font-bold leading-[1.2] mb-4"
        >
          {mainTitle}
          <br />
          {systemTitle} <span className="text-[#4FD1C5]">{highlighted}</span>
        </h2>

        {/* Intro Text */}
        <p
          className="
            text-gray-300 
            pl-1
            mb-10 
            text-[16px] 
            tracking-[0.01em]
            leading-[1.4]
            max-xl:text-[12px] 
            max-lg:text-[13.5px] 
            max-md:text-[13px]
            max-sm:text-[12.5px]
          "
          dangerouslySetInnerHTML={{ __html: introText }}
          data-aos="fade-right"
        />

        {/* Features */}
        <div
          className="
            grid 
            sm:grid-cols-2 
            gap-x-2 
            gap-y-16 
            mb-20
            max-2xl:gap-x-5
            max-xl:gap-x-0
            max-lg:gap-x-2 
            max-md:gap-x-1.5 
            max-sm:grid-cols-1 
            max-sm:gap-y-10
          "
        >
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="
                  flex 
                  items-start 
                  gap-6.5
                  max-xl:gap-2 
                  max-lg:gap-3 
                  max-md:gap-2.5
                "
              >
                <Icon
                  data-aos="zoom-in-up"
                  className="size-8 text-[#4FD1C5] shrink-0 max-xl:size-4 max-lg:size-6 max-md:size-5 max-sm:size-5"
                />
                <div>
                  <h3
                    data-aos="fade-left"
                    className="
                      text-gray-200 
                      font-semibold 
                      mb-3.5 
                      text-[19px]
                      max-xl:text-[12px]
                      max-lg:text-[16px]
                      max-md:text-[15px]
                      max-sm:text-[14px]
                    "
                  >
                    {item.title}
                  </h3>
                  <p
                    data-aos="fade-right"
                    className="
                      text-gray-300 
                      text-[16px] 
                      leading-[1.5] 
                      tracking-[0.02em]
                      whitespace-pre-line 
                      max-xl:text-[9px] 
                      max-lg:text-[13px] 
                      max-md:text-[12.5px] 
                      max-sm:leading-[1.6]
                    "
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-gray-200">
          <p
            className="
              text-[17px] 
              leading-[1.4] 
              font-semibold 
              max-xl:text-[12px] 
              max-lg:text-[14px] 
              max-md:text-[13.5px]
              max-sm:text-[8px]
            "
            data-aos="fade-right"
          >
            {ctaText1}
          </p>
          <p
            className="
              text-[17px] 
              leading-[1.4] 
              font-semibold 
              mt-1
              max-xl:text-[12px] 
              max-lg:text-[14px] 
              max-md:text-[13.5px]
              max-sm:text-[8px]
            "
            data-aos="fade-left"
          >
            {ctaText2}
          </p>

          <button
            data-aos="fade-up"
            className="
              mt-6 
              px-6 
              py-2.5 
              max-lg:mb-10
              bg-[#18a897] 
              hover:bg-[#139183]
              text-white 
              text-[15px] 
              font-medium 
              rounded-md 
              transition-all 
              duration-300 
              shadow-md 
              max-md:mt-4 
              max-md:px-5 
              max-md:py-2
            "
          >
            {ctaButton}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Casestudy;
