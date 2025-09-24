"use client";

import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const items = [
    {
        title: "Healthcare",
        desc: "AELEM drives efficient, adaptive learning that enhances clinical precision and patient experience.",
        note: "Compliance and care, hand in hand",
        img: "/Healthcare.png",
    },
    {
        title: "Transportation & Logistics",
        desc: "AELEM makes FMCSA & DOT audits easier, offering driver training & solutions to improve fleet performance.",
        note: "Drive compliance, safety, and efficiency",
        img: "/Transportation.png",
    },
    {
        title: "Manufacturing",
        desc: "Engagement tracking prevents accidents and inefficiencies, making safety a top metric .",
        note: "Precision meets safety",
        img: "/Manufacturing.png",
    },
    {
        title: "Finance",
        desc: "Automate updates for SEC, FINRA, GDPR, and maintain audit-proof records with AELEM’s risk management.",
        note: "Stay compliant, stay competitive",
        img: "/Finance.png",
    },
    {
        title: "Education",
        desc: "AELEM provides personalized learning, adaptive assessments, and advanced analytics for educators.",
        note: "Shape success, harness technology",
        img: "/Education.png",
    },
    {
        title: "Retail & Services",
        desc: "AELEM keeps retail teams focused on consistent execution, compliance, and customer experience standards.",
        note: "Turn compliance into service excellence",
        img: "/Services.png",
    },
];

const Section3 = () => {
    return (
        <section className="w-full bg-white py-16">
            <div className="max-w-6xl mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold leading-snug text-gray-900">
                    Built for every industry,
                    <br />
                    <span className="text-teal-600">Designed for impact</span>
                </h2>

                <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-base leading-relaxed">
                    Whether it’s healthcare, finance, manufacturing, or retail, AELEM adapts
                    to the unique compliance demands, workforce challenges, and growth
                    opportunities of your industry. Our platform ensures learning is relevant,
                    measurable, and future-proof across sectors.
                </p>

                <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {items.map((item, idx) => (
                        <Card
                            key={idx}
                            className="border-0 rounded-xl shadow-lg overflow-hidden flex flex-col h-[417px] " // total height set karo
                            style={{
                                background:
                                    "linear-gradient(180deg, rgba(255,255,255,0.3) 0%, rgba(131,197,190,0.3) 100%)",
                            }}
                        >
                            {/* Image = 70% height */}
                            <div className="relative w-full flex-[0_0_60%]">
                                <Image
                                    src={item.img}
                                    alt={item.title || "Section image"} // ✅ added alt text
                                    fill
                                    className="object-cover rounded-xl"
                                />
                            </div>

                            {/* Content = 30% height */}
                            <CardContent className="flex-[0_0_20%] flex flex-col justify-center">
                                <p className="uppercase text-[12px] font-semibold text-[#006D77] mb-1">
                                    {item.note}
                                </p>
                                <h3 className="text-[20px] font-semibold text-[#0A0A0A] mb-1">
                                    {item.title}
                                </h3>
                                <p className="text-[15px] leading-6 text-[#0A0A0A]">
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

export default Section3;
