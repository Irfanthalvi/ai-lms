"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Workflow,
  GraduationCap,
  ClipboardList,
  BarChart3,
  ShieldCheck,
} from "lucide-react";

// Data for cards
const firstRowCards = [
  {
    icon: <ShieldCheck className="w-6 h-6 text-black" />,
    title: "Sign In & Verify – Start Secure, Stay Secure",
    desc: "AiELM confirms identity and baseline focus through multi-modal biometrics like facial recognition, liveness checks, and behavioral patterns — ensuring training starts secure and compliant.",
    footer: "No more guessing who’s really behind the screen.",
  },
  {
    icon: <Workflow className="w-6 h-6 text-black" />,
    title: "Engage & Track",
    desc: "With eye-tracking, posture analysis, and micro-expressions, AiELM monitors attention and emotions continuously, giving a live picture of learner engagement.",
    footer: "See engagement in real time, not after the fact.",
  },
];

const secondRowCards = [
  {
    icon: <GraduationCap className="w-6 h-6 text-black" />,
    title: "Learn with Precision",
    desc: "The AI tutor dynamically adjusts pace, tone, and difficulty — turning signs of boredom, fatigue, or confusion into personalized interventions for higher retention.",
    footer: "Learning that adapts as fast as you do.",
  },
  {
    icon: <ClipboardList className="w-6 h-6 text-black" />,
    title: "View Insight",
    desc: "Dashboards transform raw data into focus scores, confidence levels, and compliance metrics, providing both learners and managers with actionable feedback.",
    footer: "Make each session count.",
  },
  {
    icon: <BarChart3 className="w-6 h-6 text-black" />,
    title: "Optimize & Scale",
    desc: "AiELM’s predictive analytics suggest personalized training paths, efficiency benchmarks, and compliance updates, scaling impact from individuals to entire teams.",
    footer: "Transform data into insights.",
  },
];

const Section2 = () => {
  return (
    <section id="How-it-works" className="relative w-full py-38 px-6 bg-gradient-to-b from-card-foreground to-card text-white overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto text-center">
        {/* Heading & Paragraph (unchanged) */}
        <h2 className="max-w-[795px] mx-auto text-[45.5px] font-bold leading-[100%] text-center mb-8">
          How it works:{" "}
          <span className="text-teal-400">From start to smart</span>
        </h2>

        <p className="max-w-[795px] mx-auto text-[16.5px] leading-relaxed text-gray-300 mb-12 text-center">
          Behind every training session, AiELM runs a powerful, intelligent workflow
          designed to verify,<br />
          adapt, measure, and optimize — all in real time. Here’s what that journey
          looks like:
        </p>

        {/* Row 1 → 2 big cards */}
        <div className="flex flex-wrap justify-center gap-[10.5px] mb-[42px]">
          {firstRowCards.map((card, index) => (
            <Card
              key={index}
              className="flex-shrink-0 w-[635px] h-[300px] rounded-[16px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] bg-gradient-to-b from-[#0A0A0A] to-[#0A0A0A] relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[rgba(0,109,119,0.15)]"></div>
              <CardContent className="relative p-8">
                <div className="w-[60px] h-[60px] flex items-center justify-center rounded-md bg-teal-500 mb-6">
                  {card.icon}
                </div>
                <h3 className="font-semibold text-xl text-white mb-3">{card.title}</h3>
                <p className="text-base text-gray-300 mb-4 leading-relaxed">{card.desc}</p>
                <p className="text-xs font-semibold text-teal-400 uppercase">{card.footer}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Row 2 → 3 smaller cards */}
        <div className="flex flex-wrap justify-center gap-[10.5px]">
          {secondRowCards.map((card, index) => (
            <Card
              key={index}
              className="flex-shrink-0 w-[409px] h-[324px] rounded-[16px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] bg-gradient-to-b from-[#0A0A0A] to-[#0A0A0A] relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[rgba(0,109,119,0.15)]"></div>
              <CardContent className="relative p-8">
                <div className="w-[60px] h-[60px] flex items-center justify-center rounded-md bg-teal-500 mb-6">
                  {card.icon}
                </div>
                <h3 className="font-semibold text-xl text-white mb-3">{card.title}</h3>
                <p className="text-base text-gray-300 mb-4 leading-relaxed">{card.desc}</p>
                <p className="text-xs font-semibold text-teal-400 uppercase">{card.footer}</p>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Section2;
