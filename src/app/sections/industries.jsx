"use client";

import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const items = [
    {
        title: "Healthcare",
        desc: "AiELM offers secure, adaptive learning that enhances clinical precision and patient experience.",
        note: "Compliance and care, hand in hand.",
        img: "/Healthcare.png",
    },
    {
        title: "Transportation & Logistics",
        desc: "AiELM meets FMCSA and DOT rules, offering driver training & analytics to improve fleet performance.",
        note: "Drive compliance, safety, and efficiency forward.",
        img: "/Transportation.png",
    },
    {
        title: "Manufacturing",
        desc: "Engagement tracking prevents accidents and inefficiencies, while training adapts to needs.",
        note: "Safer teams, smarter operations.",
        img: "/Manufacturing.png",
    },
    {
        title: "Finance",
        desc: "Automate updates for SEC, FINRA, GDPR, and empower teams with fraud detection and risk management.",
        note: "Stay compliant. Stay competitive.",
        img: "/Finance.png",
    },
    {
        title: "Education",
        desc: "AiELM offers personalized learning, adaptive assessments, and analytics to enhance student outcomes and efficiency.",
        note: "Shaping smarter learning for tomorrow.",
        img: "/Education.png",
    },
    {
        title: "Retail & Services",
        desc: "Provide teams with training focused on emotional intelligence, including seasonal modules on trends and challenges, plus compliance onboarding.",
        note: "Turn customer interactions into brand loyalty.",
        img: "/Services.png",
    },
];

const Industries = () => {
    return (
        <section id="industries" className="w-full bg-white py-39">
            <div className="px-4 text-center">
                <h2 className="text-[43.5px] font-bold leading-[1.01] tracking-wide text-gray-900">
                    Built for every industry,
                    <br />
                    <span className="text-teal-700">Designed for impact</span>
                </h2>

                <p className="mt-10 text-black text-[17px] leading-[1.3] -tracking-[0.021em]">
                    Whether it’s healthcare, finance, manufacturing, or retail, AELEM adapts
                    to the unique compliance <br />demands, workforce challenges, and growth
                    opportunities of your industry. Our platform ensures<br /> learning is relevant,
                    measurable, and future-proof across sectors.
                </p>

                <div className="mt-9.5 max-w-[1250px] mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {items.map((item, idx) => (
                        <Card
                            key={idx}
                            className="border-0 rounded-xl shadow-lg overflow-hidden flex flex-col"
                            style={{
                                height: "427px",  // total card height
                                width: "100%",    // full width of the grid cell
                                background: "linear-gradient(180deg, rgba(255,255,255,0.3) 0%, rgba(131,197,190,0.3) 100%)",
                            }}
                        >
                            {/* Image section: 60% of card height */}
                            <div className="relative w-full" style={{ height: "60%" }}>
                                <Image
                                    src={item.img}
                                    alt={item.title || "Section image"}
                                    fill
                                    className="object-cover rounded-sm"
                                />
                            </div>

                            {/* Content section: 40% of card height */}
                            <CardContent style={{ height: "40%" }} className="flex flex-col justify-start p-4">
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
