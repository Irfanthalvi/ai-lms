// app/components/SolutionSection.tsx
"use client";

import React from "react";
import { ShieldCheck, Eye, Server, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

/**
 * Pixel-oriented recreation of the provided Figma screenshot.
 * - Uses explicit hex colors to match the screenshot.
 * - Keeps a fixed desktop visual while remaining responsive.
 * - Uses shadcn Card + lucide icons. Ensure those packages exist in your project.
 *
 * Usage:
 *  <SolutionSection />
 *
 * Tailwind: This relies purely on Tailwind utility classes. No extra CSS files required.
 */

export default function SolutionSection() {
  // Colors picked to visually match the screenshot
  const PRIMARY = "#0F8F85"; // teal/green used for icons & small accents
  const ICON_BG = "#EAF9F7"; // pale mint square behind icon
  const CARD_BG = "#F6FBFA"; // very pale mint card background
  const SUBTEXT = "#6B7276"; // muted paragraph color
  const HEADING = "#111827"; // almost-black for headings

  return (
    <section className="w-full bg-white px-6 md:px-16 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <h2
          className="text-[26px] md:text-[30px] font-extrabold"
          style={{ color: HEADING, lineHeight: "1.05" }}
        >
          Packed with Innovation,{" "}
          <p style={{ color: PRIMARY }}>Powered by AiELM</p>
        </h2>

        <p
          className="mt-3 text-[13px] md:text-sm mx-auto max-w-[680px]"
          style={{ color: SUBTEXT }}
        >
          AiELM brings together cutting-edge AI capabilities that transform
          compliance, training, and workflow efficiency.
        </p>
      </div>

      {/* Cards Row */}
      <div className="max-w-6xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {/* Card 1 */}
        <Card
          className="rounded-2xl shadow-sm border border-transparent"
          style={{ backgroundColor: CARD_BG }}
        >
          <CardContent className="p-7 md:p-8">
            <div className="flex flex-col items-center">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{ backgroundColor: ICON_BG }}
              >
                <ShieldCheck className="w-5 h-5" style={{ color: PRIMARY }} />
              </div>

              <h3
                className="text-sm md:text-[16px] font-semibold mb-2"
                style={{ color: HEADING }}
              >
                AI-Speech Recognition
              </h3>

              <p
                className="text-[12.5px] text-center mb-5 max-w-[250px] leading-relaxed"
                style={{ color: SUBTEXT }}
              >
                Built-in speech recognition enables real-time language
                understanding, machine learning, and interactive transcription
                for next-level automation.
              </p>

            </div>
          </CardContent>
        </Card>

        {/* Card 2 */}
        <Card
          className="rounded-2xl shadow-sm border border-transparent"
          style={{ backgroundColor: CARD_BG }}
        >
          <CardContent className="p-7 md:p-8">
            <div className="flex flex-col items-center">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{ backgroundColor: ICON_BG }}
              >
                <Eye className="w-5 h-5" style={{ color: PRIMARY }} />
              </div>

              <h3
                className="text-sm md:text-[16px] font-semibold mb-2"
                style={{ color: HEADING }}
              >
                Vision Capabilities
              </h3>

              <p
                className="text-[12.5px] text-center mb-5 max-w-[250px] leading-relaxed"
                style={{ color: SUBTEXT }}
              >
                Through facial recognition, eye-tracking, and deep-scene
                awareness, AiELM understands workflows and ensures visual
                intelligence integration.
              </p>

            </div>
          </CardContent>
        </Card>

        {/* Card 3 */}
        <Card
          className="rounded-2xl shadow-sm border border-transparent"
          style={{ backgroundColor: CARD_BG }}
        >
          <CardContent className="p-7 md:p-8">
            <div className="flex flex-col items-center">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{ backgroundColor: ICON_BG }}
              >
                <Server className="w-5 h-5" style={{ color: PRIMARY }} />
              </div>

              <h3
                className="text-sm md:text-[16px] font-semibold mb-2"
                style={{ color: HEADING }}
              >
                Seamless API Integrations
              </h3>

              <p
                className="text-[12.5px] text-center mb-5 max-w-[250px] leading-relaxed"
                style={{ color: SUBTEXT }}
              >
                AiELM connects effortlessly with HRIS, CRM, LMS, and other
                enterprise systems, ensuring automation across diverse workflows.
              </p>

            </div>
          </CardContent>
        </Card>
      </div>

      {/* Lower mini features row - matches the three small rows in screenshot */}
      <div className="max-w-6xl mx-auto mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        <div className="flex items-start gap-3">
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center mt-1"
            style={{ backgroundColor: "transparent" }}
          >
            <CheckCircle className="w-5 h-5" style={{ color: PRIMARY }} />
          </div>

              <div className="w-full">
                <p className="text-[13px] leading-snug" style={{ color: SUBTEXT }}>
                  <span className="font-semibold" style={{ color: PRIMARY }}>
                    Trusted Authentication:
                  </span>{" "}
                  With multi-modal biometrics and continuous identity checks,
                  AiELM guarantees workflow learning assurance that meets the
                  compliance standards.
                </p>
              </div>
        </div>

        <div className="flex items-start gap-3">
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center mt-1"
            style={{ backgroundColor: "transparent" }}
          >
            <CheckCircle className="w-5 h-5" style={{ color: PRIMARY }} />
          </div>

              <div className="w-full">
                <p className="text-[13px] leading-snug" style={{ color: SUBTEXT }}>
                  <span className="font-semibold" style={{ color: PRIMARY }}>
                    Real-Time Data:
                  </span>{" "}
                  AiELM captures and processes data live, delivering instant
                  calibration, compliance alerts, and actionable insights when
                  you need them most.
                </p>
              </div>
        </div>

        <div className="flex items-start gap-3">
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center mt-1"
            style={{ backgroundColor: "transparent" }}
          >
            <CheckCircle className="w-5 h-5" style={{ color: PRIMARY }} />
          </div>

              <div className="w-full">
                <p className="text-[13px] leading-snug" style={{ color: SUBTEXT }}>
                  <span className="font-semibold" style={{ color: PRIMARY }}>
                    Predictive Analytics:
                  </span>{" "}
                  Powered by AI models, AiELM predicts training outcomes,
                  workflow risks, and compliance variations, turning learning
                  into a strategic advantage.
                </p>
              </div>
        </div>
      </div>
    </section>
  );
}
