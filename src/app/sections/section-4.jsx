"use client";

import Image from "next/image";
import React from "react";
import { ShieldCheck, Cpu, Settings, BarChart3 } from "lucide-react"; // icons

const Section4 = () => {
  return (
    <section className="w-full bg-[#0A1E28] text-white py-10 ">
      <div className=" mx-auto grid grid-cols-1 lg:grid-cols-2 items-center pl-55">

        {/* LEFT CONTENT */}
        <div className=" w-[700px] pr-20">
          {/* Heading */}
          <h2 className="text-3xl lg:text-4xl font-bold leading-snug mb-6">
            Building Smarter Compliance {" "}
            Systems:<span className="text-[#4FD1C5]">AiELM in Action with DQid</span>
          </h2>

          {/* Intro paragraph */}
          <p className="text-gray-300 mb-10 text-[15px] leading-relaxed">
            DQid partnered with AiELM to build an English Language Proficiency & Compliance
            System that delivers AI-powered testing, real-time scoring, and automated certification
            to help fleets stay compliant and operational.
          </p>

          {/* Features grid */}
          <div className="grid sm:grid-cols-2 gap-8 mb-10">
            {/* Feature 1 */}
            <div>
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-6 h-6 text-[#4FD1C5] shrink-0" />
                <div>
                  <h3 className="text-white font-semibold mb-1 text-lg">
                    The Compliance Challenge
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    CVSA rules require drivers to show English proficiency in reading and conversations.
                    Fleets risk costly penalties without a scalable solution.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div>
              <div className="flex items-start gap-3">
                <Cpu className="w-6 h-6 text-[#4FD1C5] shrink-0" />
                <div>
                  <h3 className="text-white font-semibold mb-1 text-lg">
                    The AI-Powered Solution
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    DQid’s ELP, powered by AiELM, replicates roadside testing with adaptive assessments.
                    Drivers complete tests on mobile for consistency and compliance.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 3 */}
            <div>
              <div className="flex items-start gap-3">
                <Settings className="w-6 h-6 text-[#4FD1C5] shrink-0" />
                <div>
                  <h3 className="text-white font-semibold mb-1 text-lg">
                    Streamlined Operations
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    The system sends results digitally, tracks completions, and generates secure certificates automatically.
                    Compliance is transparent and easy to manage.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 4 */}
            <div>
              <div className="flex items-start gap-3">
                <BarChart3 className="w-6 h-6 text-[#4FD1C5] shrink-0" />
                <div>
                  <h3 className="text-white font-semibold mb-1 text-lg">
                    Measurable Impact
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    The ELD test helps fleets reduce violations, lower risks, and enhance driver awareness.
                    AiELM simplifies compliance for a smarter experience.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div>
            <p className="text-gray-300">See how AiELM can future-proof your compliance strategy, streamline training, and</p>
            <p className="text-gray-300">unlock measurable workforce efficiency across your organization.
            </p>
            <button className="mt-6 px-6 py-3 bg-[#4FD1C5] text-black font-medium rounded-md hover:bg-[#38B2A4] transition">
              Request a Demo
            </button>
          </div>
        </div>

        {/* RIGHT CONTENT (flush to right edge) */}
        {/* RIGHT CONTENT */}
        <div className="flex justify-end items-center w-full lg:static lg:translate-y-0 absolute right-0 top-1/2 -translate-y-1/2">
          <div className="w-[900px] h-[900px] overflow-hidden flex justify-end">
            <Image
              src="/Case-Study.png"
              alt="Dashboard, Certificate and Mobile"
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

export default Section4;
