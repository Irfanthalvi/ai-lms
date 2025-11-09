'use client';

import React from 'react';
import Image from 'next/image';
import {
  bgImage,
  tagline,
  title1,
  title2,
  videoSrc,
} from '../data/hero-section-mock';

const Header = () => {
  return (
    <div
      id="hero-section"
      className="
        relative bg-card flex flex-col items-center justify-center text-center pb-24
        max-xl:pb-20 max-lg:pb-16 max-md:pb-12 max-sm:pb-10
      "
    >
      <div className="pt-38 max-xl:pt-32 max-lg:pt-28 max-md:pt-20 max-sm:pt-16">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={bgImage}
            alt="Background pattern"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            quality={100}
            className="pointer-events-none"
            priority
          />
        </div>

        {/* Tagline */}
        <div
          className="
            w-[1312px] h-[220px] flex flex-col items-center gap-[33.5px] z-10 transform translate-y-7
            max-2xl:w-[1150px] max-xl:w-[950px] max-lg:w-[700px] max-md:w-[90%] max-sm:w-[95%]
            max-2xl:h-[200px] max-xl:h-[180px] max-lg:h-auto
            max-xl:gap-[28px] max-lg:gap-[22px] max-md:gap-[18px] max-sm:gap-[14px]
            max-md:translate-y-5 max-sm:translate-y-4
          "
        >
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="
              bg-primary text-accent w-[305px] text-sm tracking-wide py-1 rounded-full flex items-center justify-center mb-[1.5px]
              max-xl:w-[270px] max-lg:w-[230px] max-md:w-[200px] max-sm:w-[170px]
              max-lg:text-[13px] max-md:text-[12px] max-sm:text-[8px]
            "
          >
            {tagline}
          </div>

          <h1
            data-aos="fade-up"
            data-aos-duration="1500"
            className="
              w-[830px] h-[95px] font-bold text-[45px] leading-[100%] tracking-[0.009em] text-center text-secondary mx-auto
              max-2xl:w-[750px] max-xl:w-[650px] max-lg:w-[520px] max-md:w-[90%] max-sm:w-[95%]
              max-2xl:text-[40px] max-xl:text-[36px] max-lg:text-[30px] max-md:text-[26px] max-sm:text-[22px]
              max-md:leading-[110%] max-sm:leading-[115%]
            "
          >
            {title1} <br /> {title2}
          </h1>
        </div>

        {/* Video */}
        <div
          data-aos="fade-up"
          data-aos-duration="2000"
          className="
            w-full h-screen flex items-center justify-center z-10 transform translate-y-9
            max-2xl:h-[850px] max-xl:h-[700px] max-lg:h-[600px] max-md:h-[500px] max-sm:h-[350px]
            max-md:translate-y-7 max-sm:translate-y-5
          "
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="
              w-[1250px] h-[703px] rounded-4xl object-cover z-10
              max-2xl:w-[1050px] max-2xl:h-[600px]
              max-xl:w-[900px] max-xl:h-[500px]
              max-lg:w-[700px] max-lg:h-[400px]
              max-md:w-[90%] max-md:h-[300px]
              max-sm:w-[95%] max-sm:h-[230px]
            "
          >
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default Header;
