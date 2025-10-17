// app/components/SolutionSection.tsx
"use client";

import React from "react";
import { ShieldCheck, Eye, Server, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

// Icon mapping for flexible rendering
const icons = {
  ShieldCheck,
  Eye,
  Server,
  CheckCircle,
};

export default function SolutionSection() {
  // === Dynamic Data ===
  const mainTitle = "Packed with Innovation,";
  const highlight = "Powered by AiELM";
  const description1 =
    "AiELM brings together cutting-edge AI capabilities that transform compliance,";
  const description2 = "training, and workflow efficiency.";


  const cards = [
    {
      icon: "ShieldCheck",
      title: "AI-Speech Recognition",
      desc: "Built-in speech recognition enables real-time language understanding, machine learning, and interactive transcription for next-level automation.",
    },
    {
      icon: "Eye",
      title: "Vision Capabilities",
      desc: "Through facial recognition, eye-tracking, and deep-scene awareness, AiELM understands workflows and ensures visual intelligence integration.",
    },
    {
      icon: "Server",
      title: "Seamless API Integrations",
      desc: "AiELM connects effortlessly with HRIS, CRM, LMS, and other enterprise systems, ensuring automation across diverse workflows.",
    },
  ];

  const features = [
    {
      label: "Trusted Authentication:",
      desc: "With multi- modal biometrics and continuous  identity checks, AiELM guarantees workflow learning assurance that meets the compliance standards.",
    },
    {
      label: "Real-Time Data:",
      desc: "AiELM captures and processes data live, delivering instant calibration, compliance alerts, and actionable insights when you need them most.",
    },
    {
      label: "Predictive Analytics:",
      desc: "Powered by AI models, AiELM predicts training outcomes, workflow risks, and compliance variations, turning learning into a strategic advantage.",
    },
  ];

  return (
    <section id="Solutions" className="w-full bg-white px-6 md:px-16 py-38">
      {/* Heading Section */}
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-[26px] md:text-[38px] font-extrabold text-[#111827] leading-[1.15]">
          {mainTitle} <p className="text-[#0F8F85]">{highlight}</p>
        </h2>
        <p className="mt-3.5 text-[18px] md:text-[16px] mx-auto max-w-[680px] text-black">
          {description1}
          <br />
          {description2}
        </p>

      </div>

      {/* === Dynamic Cards === */}
      <div className="w-[1250px] mx-auto mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {cards.map((item, i) => {
          const Icon = icons[item.icon];
          return (
            <Card
              key={i}
              className="rounded-2xl h-[296px] w-[390px] shadow-sm border border-transparent bg-[#eefcf9]"
            >
              <CardContent className="p-4 md:p-4">
                <div className="flex flex-col items-center">
                  <div className="size-10 rounded-sm flex items-center justify-center mb-10 bg-[#0c796c]">
                    <Icon className="size-5 text-white" />
                  </div>

                  <h3 className="text-[22px] md:text-[23px] font-semibold mb-2 text-[#111827]">
                    {item.title}
                  </h3>
                  <p className="text-[14px] text-center mb-5 max-w-[320px] leading-relaxed text-[#0b0b0b]">
                    {item.desc}
                  </p>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* === Dynamic Features Row === */}
      <div className="w-[1250px] mx-auto mt-15.5 mb-2 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {features.map((feature, i) => (
          <div key={i} className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full flex items-center justify-center mt-1">
              <CheckCircle className="w-5 h-5 text-[#0F8F85]" />
            </div>
            <div className="w-full">
              <p className="text-[18px] leading-snug text-[#020202]">
                <span className="font-semibold text-[#0F8F85]">
                  {feature.label}
                </span>{" "}
                {feature.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
