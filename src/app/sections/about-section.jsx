"use client";

import React from "react";
import Image from "next/image";
import { content } from "../data/about-mock";

export default function AboutSection() {
  return (
    <section
      id="About-Us"
      style={{ background: "rgba(224, 247, 244, 0.99)" }}
      className="w-full px-6 md:px-16 py-34.5 space-y-24 max-md:py-24 max-sm:py-20"
    >
      {/* === Top Section === */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 w-[1238px] max-w-full h-[452px] max-md:h-auto mx-auto">
        {/* Left Image */}
        <div className="rounded-3xl overflow-hidden w-[101.5%] max-md:w-full max-sm:w-full max-sm:rounded-xl">
          <Image
            src="/images/about-image.png"
            alt="Skyscraper building"
            width={800}
            height={400}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="-ml-2 max-md:ml-0 max-md:mt-0 max-sm:px-4">
          <h2 className="text-[30px] md:text-[45px] text-black font-extrabold mb-2 leading-tight max-md:text-[38px] max-sm:text-[28px]">
            {content.headingMain}{" "}
            <span style={{ color: "#0F8F85" }}>{content.headingHighlight}</span>
          </h2>

          <p className="text-[16px] mb-6 leading-[1.3] tracking-[0.019em] max-md:text-[15px] max-sm:text-[14px]" style={{ color: "#0F8F85", fontWeight: 600 }}>
            {content.introText}
          </p>

          <p className="text-[16px] mb-5.5 leading-[1.4] text-black max-md:text-[15px] max-sm:text-[14px]">
            {content.description}
          </p>

          <p className="text-black font-bold text-[16.5px] max-md:text-[15px] max-sm:text-[14px]">
            {content.missionTitle}
          </p>

          <ul className="list-disc ml-6 text-[16px] text-black leading-[1.4] max-md:text-[15px] max-sm:text-[14px]">
            {content.missionPoints.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>

          <p className="text-[16px] mt-6 text-black leading-[1.4] max-md:text-[15px] max-sm:text-[14px]">
            {content.closing}
          </p>
        </div>
      </div>

      {/* === CTA Section === */}
      <div className="pt-11 pb-3 max-lg:pt-45">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-[1250px] max-w-full h-[476px] max-md:h-auto mx-auto">
          {/* Left CTA card */}
          <div className="rounded-l-[3rem] overflow-hidden h-full flex items-center w-[120%] max-md:w-full max-sm:rounded-xl">
            <div className="w-full h-full p-8 md:p-10 rounded-2xl flex flex-col justify-center max-md:p-6 max-sm:p-4"
                 style={{ backgroundColor: "#0F1F1D" }}
            >
              <h3 className="text-[42px] font-bold md:text-[45px] mb-2 text-white leading-[1.1] ml-20 max-md:ml-0 max-sm:text-[28px]">
                {content.ctaHeading}
              </h3>

              <p className="text-[16px] mb-6 max-w-md text-gray-300 leading-[1.5] ml-20 max-md:ml-0 max-md:text-[15px] max-sm:text-[14px]">
                {content.ctaText}
              </p>

              <button className="ml-20 max-md:ml-0 w-44 px-4 py-2 bg-[#0F8F85] hover:bg-[#0c736a] text-white rounded-md text-sm font-medium transition max-sm:w-full">
                {content.ctaButton}
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="overflow-hidden rounded-r-[3rem] max-md:rounded-xl max-sm:mt-6">
            <Image
              src="/images/about-image2.png"
              alt="Mentor assisting student"
              width={600}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
