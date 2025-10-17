"use client";

import React from "react";
import Image from "next/image";
import { content } from "../data/about-mock";

export default function AboutSection() {

  return (
    <section
      id="About-Us"
      style={{
        background: "rgba(224, 247, 244, 0.99)",
      }}
      className="w-full px-6 md:px-16 py-34.5 space-y-24"
    >
      {/* === Top Section === */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20  w-[1238px] h-[452px] mx-auto">
        {/* Left Image */}
        <div className="rounded-3xl overflow-hidden w-[101.5%]">
          <Image
            src="/images/about-image.png"
            alt="Skyscraper building"
            width={800}
            height={400}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="-ml-2 -mt-1">
          <h2
            className="text-[30px] md:text-[45px] font-extrabold mb-1"
            style={{ color: "#111827" }}
          >
            {content.headingMain}{" "}
            <span style={{ color: "#0F8F85" }}>{content.headingHighlight}</span>
          </h2>

          <p
            className="text-[16px] mb-6 leading-[1.3] tracking-[0.019em]"
            style={{ color: "#0F8F85", fontWeight: 600 }}
          >
            {content.introText}
          </p>

          <p className="text-[16px] mb-5.5 leading-[1.4] text-black">
            {content.description}
          </p>

          <p className="text-black font-bold text-[16.5px]">
            {content.missionTitle}
          </p>

          <ul className="list-disc ml-6 text-[16px] text-black leading-[1.4]">
            {content.missionPoints.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>

          <p className="text-[16px] mt-6 text-black leading-[1.4]">
            {content.closing}
          </p>
        </div>
      </div>

      {/* === CTA Section === */}
      <div className="pt-11 pb-3">
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 w-[1250px] h-[476px] mx-auto">
          {/* Left CTA card */}
          <div className="rounded-l-[3rem] overflow-hidden h-full flex items-center w-[120%]">
            <div
              className="w-full h-full p-8 md:p-10 rounded-2xl flex flex-col justify-center"
              style={{ backgroundColor: "#0F1F1D" }}
            >
              <h3 className="text-[42px] font-bold md:text-[45px] mb-2 text-white leading-[1.1] ml-20">
                {content.ctaHeading}
              </h3>

              <p className="text-[16px] mb-6 max-w-md text-gray-300 leading-[1.5] ml-20">
                {content.ctaText}
              </p>

              <button className="ml-20 w-44 px-4 py-2 bg-[#0F8F85] hover:bg-[#0c736a] text-white rounded-md text-sm font-medium transition">
                {content.ctaButton}
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="overflow-hidden rounded-r-[3rem]">
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
