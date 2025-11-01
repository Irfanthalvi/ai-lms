"use client";

import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { items } from "../data/industries-mock";

const Industries = () => {
  return (
    <section id="industries" className="w-full bg-white py-39">
      <div className="px-4 text-center">
        <h2
          data-aos="fade-up"
          data-aos-duration="1000"
          className="text-[43.5px] font-bold leading-[1.01] tracking-wide text-gray-900"
        >
          Built for every industry,
          <br />
          <span className="text-teal-700">
            Designed for impact
          </span>
        </h2>

        <p
          data-aos="fade-up"
          data-aos-duration="1500"
          className="mt-10 text-black text-[17px] leading-[1.3] -tracking-[0.021em]"
        >
          Whether it’s healthcare, finance, manufacturing, or retail, AELEM
          adapts to the unique compliance <br />
          demands, workforce challenges, and growth opportunities of your
          industry. Our platform ensures
          <br /> learning is relevant, measurable, and future-proof across
          sectors.
        </p>

        <div className="mt-9.5 max-w-[1250px] mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, idx) => (
            <Card
              key={idx}
              className="border-0 rounded-xl shadow-lg overflow-hidden flex flex-col"
              style={{
                height: "427px", // total card height
                width: "100%", // full width of the grid cell
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.3) 0%, rgba(131,197,190,0.3) 100%)",
              }}
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <div
                className="relative w-full overflow-hidden rounded-sm group"
                style={{ height: "60%" }}
                data-aos="zoom-in-up" // scroll animation
                data-aos-once="true" // animate once on scroll (optional)
              >
                <Image
                  src={item.img}
                  alt={item.title || "Section image"}
                  fill
                  className="cursor-pointer object-cover transition-transform duration-700 ease-out 
               group-hover:scale-110 group-hover:-translate-y-3 rounded-sm"
                />
              </div>

              {/* Content section: 40% of card height */}
              <CardContent
                style={{ height: "40%" }}
                className="flex flex-col justify-start p-4"
              >
                <p className="uppercase text-[12px] font-semibold text-[#006D77] mb-1">
                  {item.note}
                </p>
                <h3 className="text-[20px] font-semibold text-[#0A0A0A] mb-1">
                  {item.title}
                </h3>
                <p className="text-[14px] text-left text-[#0A0A0A] leading-6">
                  {item.desc}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
