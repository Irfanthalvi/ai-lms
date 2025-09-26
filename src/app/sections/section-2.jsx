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

const Section2 = () => {
  return (
    <section className="relative w-full py-20 px-6 bg-gradient-to-b from-card-foreground to-card text-white overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          How it works:{" "}
          <span className="text-teal-400">From start to smart</span>
        </h2>
        <p className="max-w-3xl mx-auto text-base md:text-lg text-gray-300 mb-12">
          Behind every training session, AiELM runs a powerful, intelligent
          workflow designed to verify, adapt, measure, and optimize — all in real
          time. Here’s what that journey looks like:
        </p>

        {/* Row 1 → 2 big cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left mb-6">
          {/* Card 1 */}
          <Card className="bg-black/80 border-0 rounded-xl shadow-lg">
            <CardContent className="p-6">
              <div className="w-10 h-10 flex items-center justify-center rounded-md bg-teal-500 mb-4">
                <ShieldCheck  className="w-5 h-5 text-black" />
              </div>
              <h3 className="font-semibold text-lg text-white mb-2">
                Sign In & Verify – Start Secure, Stay Secure
              </h3>
              <p className="text-sm text-gray-300 mb-3">
                AiELM confirms identity and baseline focus through multi-modal
                biometrics like facial recognition, liveness checks, and behavioral
                patterns — ensuring training starts secure and compliant.
              </p>
              <p className="text-xs font-semibold text-teal-400 uppercase">
                No more guessing who’s really behind the screen.
              </p>
            </CardContent>
          </Card>

          {/* Card 2 */}
          <Card className="bg-black/80 border-0 rounded-xl shadow-lg">
            <CardContent className="p-6">
              <div className="w-10 h-10 flex items-center justify-center rounded-md bg-teal-500 mb-4">
                <Workflow className="w-5 h-5 text-black" />
              </div>
              <h3 className="font-semibold text-lg text-white mb-2">Engage & Track</h3>
              <p className="text-sm text-gray-300 mb-3">
                With eye-tracking, posture analysis, and micro-expressions,
                AiELM monitors attention and emotions continuously, giving a live
                picture of learner engagement.
              </p>
              <p className="text-xs font-semibold text-teal-400 uppercase">
                See engagement in real time, not after the fact.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Row 2 → 3 smaller cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {/* Card 3 */}
          <Card className="bg-black/80 border-0 rounded-xl shadow-lg">
            <CardContent className="p-6">
              <div className="w-10 h-10 flex items-center justify-center rounded-md bg-teal-500 mb-4">
                <GraduationCap className="w-5 h-5 text-black" />
              </div>
              <h3 className="font-semibold text-lg text-white mb-2">Learn with Precision</h3>
              <p className="text-sm text-gray-300 mb-3">
                The AI tutor dynamically adjusts pace, tone, and difficulty —
                turning signs of boredom, fatigue, or confusion into personalized
                interventions for higher retention.
              </p>
              <p className="text-xs font-semibold text-teal-400 uppercase">
                Learning that adapts as fast as you do.
              </p>
            </CardContent>
          </Card>

          {/* Card 4 */}
          <Card className="bg-black/80 border-0 rounded-xl shadow-lg">
            <CardContent className="p-6">
              <div className="w-10 h-10 flex items-center justify-center rounded-md bg-teal-500 mb-4">
                <ClipboardList className="w-5 h-5 text-black" />
              </div>
              <h3 className="font-semibold text-lg text-white mb-2">View Insight</h3>
              <p className="text-sm text-gray-300 mb-3">
                Dashboards transform raw data into focus scores, confidence levels,
                and compliance metrics, providing both learners and managers with
                actionable feedback.
              </p>
              <p className="text-xs font-semibold text-teal-400 uppercase">
                Make each session count.
              </p>
            </CardContent>
          </Card>

          {/* Card 5 */}
          <Card className="bg-black/80 border-0 rounded-xl shadow-lg">
            <CardContent className="p-6">
              <div className="w-10 h-10 flex items-center justify-center rounded-md bg-teal-500 mb-4">
                <BarChart3 className="w-5 h-5 text-black" />
              </div>
              <h3 className="font-semibold text-lg text-white mb-2">Optimize & Scale</h3>
              <p className="text-sm text-gray-300 mb-3">
                AiELM’s predictive analytics suggest personalized training paths,
                efficiency benchmarks, and compliance updates, scaling impact
                from individuals to entire teams.
              </p>
              <p className="text-xs font-semibold text-teal-400 uppercase">
                Transform data into insights.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Section2;
