"use client";

import Image from "next/image";
import React from "react";
import { ctaButton, ctaText1, ctaText2, features, highlighted, imageAlt, imageSrc, introText, mainTitle } from "../data/case-study-mock";

const Casestudy = () => {


  return (
    <section id="Case-study" className="w-full bg-[#0A1E28] text-white py-10">
      <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 items-center pl-55">
        {/* LEFT CONTENT */}
        <div className="w-[700px] pr-20">
          <h2 className="text-3xl lg:text-4xl font-bold leading-snug mb-6">
            {mainTitle} <span className="text-[#4FD1C5]">{highlighted}</span>
          </h2>

          <p className="text-gray-300 mb-10 text-[15px] leading-relaxed">
            {introText}
          </p>

          {/* Features */}
          <div className="grid sm:grid-cols-2 gap-8 mb-10">
            {features.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="flex items-start gap-3">
                  <Icon className="w-6 h-6 text-[#4FD1C5] shrink-0" />
                  <div>
                    <h3 className="text-white font-semibold mb-1 text-lg">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div>
            <p className="text-gray-300">{ctaText1}</p>
            <p className="text-gray-300">{ctaText2}</p>
            <button className="mt-6 px-6 py-3 bg-[#4FD1C5] text-black font-medium rounded-md hover:bg-[#38B2A4] transition">
              {ctaButton}
            </button>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex justify-end items-center w-full lg:static lg:translate-y-0 absolute right-0 top-1/2 -translate-y-1/2">
          <div className="w-[900px] h-[900px] overflow-hidden flex justify-end max-xl:hidden">
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={900}
              height={800}
              className="object-contain rounded-md shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Casestudy;
