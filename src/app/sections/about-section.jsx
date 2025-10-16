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
            className="w-full px-6 md:px-16 py-20 space-y-24">
            {/* Top Section - About AiELM */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center border border-black">
                {/* Left Image */}
                <div className="rounded-xl overflow-hidden">
                    <Image
                        src="/1ad212b8-b77b-4add-8b22-39e1c9d47bc9.png"
                        alt="Skyscraper building"
                        width={600}
                        height={400}
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Right Content */}
                <div>
                    <h2 className="text-[26px] md:text-[30px] font-extrabold mb-3" style={{ color: HEADING }}>
                        About <span style={{ color: PRIMARY }}>AiELM</span>
                    </h2>

                    <p className="text-sm mb-4" style={{ color: SUBTEXT }}>
                        <span style={{ color: PRIMARY, fontWeight: 600 }}>AiELM</span> is redefining workforce learning and compliance with artificial intelligence.
                    </p>

                    <p className="text-sm mb-4" style={{ color: SUBTEXT }}>
                        We believe training should be adaptive, measurable, and effortless—not static or outdated.
                        That’s why we built AiELM — a platform that combines biometrics, adaptive AI, real-time analytics,
                        and compliance automation to help organizations unlock measurable efficiency at scale.
                    </p>

                    <ul className="list-disc ml-6 text-sm space-y-2" style={{ color: SUBTEXT }}>
                        <li>Optimize human potential through AI-powered learning</li>
                        <li>Automate compliance so businesses stay audit-ready without manual effort</li>
                        <li>Deliver measurable outcomes that drive both individual growth and enterprise transformation</li>
                    </ul>

                    <p className="text-sm mt-4" style={{ color: SUBTEXT }}>
                        With a forward-looking roadmap that includes spatial computing and emotion AI, AiELM is not just keeping pace with the future of work — we’re building it.
                    </p>
                </div>
            </div>

            {/* Bottom Section - Call to Action */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">
                {/* Left CTA card with proper height and padding */}
                <div className="rounded-xl overflow-hidden h-full flex items-center">
                    <div
                        className="w-full h-full p-8 md:p-10 rounded-2xl flex flex-col justify-center"
                        style={{ backgroundColor: CTA_BG }}
                    >
                        <h3 className="text-[22px] md:text-[26px] font-bold mb-4 text-white leading-tight">
                            Ready to Elevate <br className="hidden md:block" />
                            Your Learning?
                        </h3>
                        <p className="text-sm mb-6 max-w-md text-gray-300 leading-relaxed">
                            Become a pioneer in smart applied learning. Let AI drive efficiency, engagement, and compliance across your workforce—securely, flexibly, and measurably.
                        </p>
                        <button className="px-4 py-2 bg-[#0F8F85] hover:bg-[#0c736a] text-white rounded-md text-sm font-medium transition">
                            Book Your Free Demo
                        </button>
                    </div>
                </div>

                {/* Right Image */}
                <div className="rounded-xl overflow-hidden">
                    <Image
                        src="/learning-mentor.png"
                        alt="Mentor assisting student"
                        width={600}
                        height={400}
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </section>
    );
}
