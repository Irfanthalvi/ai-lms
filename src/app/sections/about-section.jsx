"use client";

import React from "react";
import Image from "next/image";

/**
 * Accurate recreation of AiELM About Section.
 * - Backgrounds & colors preserved
 * - Last CTA card properly sized
 * - Clean responsive layout
 */

export default function AboutSection() {
    const PRIMARY = "#0F8F85";
    const SUBTEXT = "#6B7276";
    const HEADING = "#111827";

    const CTA_BG = "#0F1F1D";

    return (
        <section id="About-Us"
            style={{
                background: "rgba(224, 247, 244, 0.99)",
            }}
            className="w-full px-6 md:px-16 py-34.5 space-y-24">
            {/* Top Section - About AiELM */}
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
                <div className="-ml-2 -mt-1" >
                    <h2 className="text-[30px] md:text-[45px] font-extrabold mb-1" style={{ color: HEADING }}>
                        About <span style={{ color: PRIMARY }}>AiELM</span>
                    </h2>

                    <p className="text-[16px] mb-6 leading-[1.3] tracking-[0.019em]" style={{ color: PRIMARY, fontWeight: 600 }}>
                        AiELM is redefining workforce learning and compliance with artificial intelligence.
                    </p>

                    <p className="text-[16px] mb-5.5 leading-[1.4] text-black">
                        We believe training should be adaptive, measurable, and effortless—not static or outdated.
                        That’s why we built AiELM — a platform that combines <br /> biometrics, adaptive AI, real-time analytics,
                        and compliance automation to help organizations unlock measurable efficiency at scale.
                    </p>
                    <p className="text-black font-bold text-[16.5px]">Our mission is simple:</p>
                    <ul className="list-disc ml-6 text-[16px] text-black leading-[1.4]">
                        <li>Optimize human potential through AI-powered learning</li>
                        <li>Automate compliance so businesses stay audit-ready without manual effort</li>
                        <li>Deliver measurable outcomes that drive both individual growth and enterprise transformation</li>
                    </ul>

                    <p className="text-[16px] mt-6 text-black leading-[1.4]">
                        With a forward-looking roadmap that includes spatial computing and emotion AI, AiELM is not just keeping pace with the future of work — we’re building it.
                    </p>
                </div>
            </div>

            {/* Bottom Section - Call to Action */}
            <div className="pt-11 pb-3">
                <div className=" grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 w-[1250px] h-[476px] mx-auto">
                    {/* Left CTA card with proper height and padding */}
                    <div className="rounded-l-[3rem] overflow-hidden h-full flex items-center w-[120%]">
                        <div
                            className="w-full h-full p-8 md:p-10 rounded-2xl flex flex-col justify-center"
                            style={{ backgroundColor: CTA_BG }}
                        >
                            <h3 className="text-[42px] font-bold md:text-[45px] mb-2 text-white leading-[1.1] ml-20">
                                Ready to Elevate <br className="hidden md:block" />
                                Your Learning?
                            </h3>
                            <p className="text-[16px] mb-6 max-w-md text-gray-300 leading-[1.5] ml-20">
                                Become a pioneer in smart applied learning. Let AI drive efficiency, engagement, and compliance across your workforce—securely, flexibly, and measurably.
                            </p>
                            <button className="ml-20 w-44 px-4 py-2 bg-[#0F8F85] hover:bg-[#0c736a] text-white rounded-md text-sm font-medium transition">
                                Book Your Free Demo
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
