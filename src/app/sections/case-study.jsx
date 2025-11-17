'use client';

import Image from 'next/image';
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
} from '../data/case-study-mock';
import { Button } from '@/components/ui/button';

const Casestudy = () => {
  return (
    <section
      id="Case-study"
      className="
        relative flex w-full bg-linear-to-b from-card-foreground to-card text-foreground py-37 overflow-visible   max-lg:flex-col-reverse "
    >
      {/* RIGHT IMAGE */}
      <div
        className="
          absolute  top-[63px]  max-xl:-top-15  right-0 bottom-0 z-0 flex  justify-end items-center  w-[787px]   h-[1000px]
          max-2xl:w-[650px]  max-xl:w-[530px]  max-lg:static max-lg:w-full  max-lg:h-auto max-md:static  max-md:w-full
          max-md:h-auto  max-sm:static"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={1500}
          height={1000}
          className="
            object-contain  w-auto  h-full  rounded-md shadow-lg max-lg:h-auto max-lg:rounded-none max-md:h-auto"
        />
      </div>

      {/* LEFT CONTENT */}
      <div
        className="
          relative z-10  ml-35 w-[700px]  pt-1 min-h-[600px] max-2xl:ml-36 max-xl:ml-2 max-lg:ml-20
          max-md:ml-12 max-md:w-[90%]
        "
      >
        {/* Heading */}
        <h2
          data-aos="fade-up"
          data-aos-duration="1000"
          className="text-[38px] max-2xl:text-[32px] max-xl:text-[28px] max-lg:text-[26px] max-md:text-[24px]
           max-sm:text-[15px] pl-1 font-bold leading-[1.2] mb-4"
        >
          {mainTitle}
          <br />
          {systemTitle} <span className="text-accent">{highlighted}</span>
        </h2>

        {/* Intro Text */}
        <p
          className="
             text-foreground 
             pl-1 
             mb-10  
             text-[16px]  
             tracking-[0.01em] 
             leading-[1.4] 
             whitespace-pre-line
             max-xl:text-[12px] 
             max-lg:text-[13.5px] 
             max-md:text-[13px] 
             max-sm:text-[6px]
             "
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          {introText}
        </p>

        {/* Features */}
        <div
          className="
            grid  sm:grid-cols-2   gap-x-2  gap-y-16  mb-20 max-2xl:gap-x-5 max-xl:gap-x-0 max-lg:gap-x-2 max-md:gap-x-1.5 
            max-sm:grid-cols-1 max-sm:gap-y-10
          "
        >
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-duration="2000"
                className="
                  flex  items-start  gap-6.5 max-xl:gap-2   max-lg:gap-3  max-md:gap-2.5
                "
              >
                <Icon className="size-8 text-accent shrink-0 max-xl:size-4 max-lg:size-6 max-md:size-5 max-sm:size-5" />
                <div>
                  <h3
                    className="
                      text-foreground font-semibold  mb-3.5  text-[19px] max-xl:text-[12px] max-lg:text-[16px]
                      max-md:text-[15px] max-sm:text-[14px]
                    "
                  >
                    {item.title}
                  </h3>
                  <p
                    className="
                      text-foreground  text-[16px] leading-normal tracking-[0.02em] whitespace-pre-line 
                      max-xl:text-[9px]  max-lg:text-[13px] max-md:text-[12.5px] max-sm:leading-[1.6]
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
        <div
          className="text-foreground"
          data-aos="fade-up"
          data-aos-duration="2500"
        >
          <p
            className="
              text-[17px] leading-[1.4] font-semibold  max-xl:text-[12px] max-lg:text-[14px] max-md:text-[13.5px]
              max-sm:text-[5px]
            "
          >
            {ctaText1}
          </p>
          <p
            className="
              text-[17px] leading-[1.4] font-semibold mt-1 max-xl:text-[12px] max-lg:text-[14px]  max-md:text-[13.5px]
              max-sm:text-[5px]
            "
          >
            {ctaText2}
          </p>

          <Button
            className="
              mt-6  px-6  py-2.5 max-lg:mb-10bg-[#18a897]  hover:bg-accent text-foreground  text-[15px] 
              font-medium  rounded-md transition-all duration-300  shadow-md  max-md:mt-4  max-md:px-5  max-md:py-2
            "
          >
            {ctaButton}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Casestudy;
