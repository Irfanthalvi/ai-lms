import {
  Workflow,
  GraduationCap,
  ClipboardList,
  BarChart3,
  ShieldCheck,
} from "lucide-react";

export const firstRowCards = [
  {
    icon: <ShieldCheck className="size-5 text-black" />,
    title: "Sign In & Verify – Start Secure, Stay Secure",
    desc: "AiELM confirms identity and baseline focus through multi-modal biometrics like facial recognition, liveness checks, and behavioral patterns — ensuring training starts secure and compliant.",
    footer: "No more guessing who’s really behind the screen.",
  },
  {
    icon: <Workflow className="size-5 text-black" />,
    title: "Engage & Track",
    desc: "With eye-tracking, posture analysis, and micro-expressions, AiELM monitors attention and emotions continuously, giving a live live picture of learner engagement.",
    footer: "See engagement in real time, not after the fact.",
  },
];

export const secondRowCards = [
  {
    icon: <GraduationCap className="size-5 text-black" />,
    title: "Learn with Precision",
    desc: "The AI tutor dynamically adjusts pace, tone, and difficulty — turning signs of boredom, fatigue, or confusion into personalized interventions for higher retention.",
    footer: "Learning that adapts as fast as you do.",
  },
  {
    icon: <ClipboardList className="size-5 text-black" />,
    title: "View Insight",
    desc: "Dashboards transform raw data into focus scores, confidence levels, and compliance metrics, providing both learners and managers with actionable feedback.",
    footer: "Make each session count.",
  },
  {
    icon: <BarChart3 className="size-5 text-black" />,
    title: "Optimize & Scale",
    desc: "AiELM’s predictive analytics suggest personalized training paths, efficiency benchmarks, and compliance updates, scaling impact from individuals to entire teams.",
    footer: "Transform data into insights.",
  },
];