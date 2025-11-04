"use client";
import { useEffect } from "react";

export const navItems = [
  { label: "Why AiELM", href: "#Why-AiELM" },
  { label: "How it works", href: "#How-it-works" },
  { label: "Industries", href: "#industries" },
  { label: "Case study", href: "#Case-study" },
  { label: "Solutions", href: "#Solutions" },
  { label: "About Us", href: "#About-Us" },
];

const sections = [
  {
    id: "Why-AiELM",
    title: "Why AiELM | AI LMS",
    description:
      "Discover why AiELM stands out as an intelligent learning management system.",
  },
  {
    id: "How-it-works",
    title: "How It Works | AI LMS",
    description:
      "Learn how AiELM automates and enhances your learning processes using AI.",
  },
  {
    id: "industries",
    title: "Industries | AI LMS",
    description:
      "Explore industries that benefit from AiELM’s adaptive learning solutions.",
  },
  {
    id: "Case-study",
    title: "Case Study | AI LMS",
    description:
      "See real-world success stories powered by AiELM’s AI-driven LMS platform.",
  },
  {
    id: "Solutions",
    title: "Solutions | AI LMS",
    description:
      "Browse our AI-based LMS solutions tailored to your organization’s needs.",
  },
  {
    id: "About-Us",
    title: "About Us | AI LMS",
    description:
      "Learn more about AiELM’s mission, values, and innovation in learning.",
  },
];

export default function DynamicTitle() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const defaultTitle = "AI LMS";
    const defaultDescription =
      "AI-powered learning management system for modern education and enterprise training.";

    const metaTag =
      document.querySelector("meta[name='description']") ||
      (() => {
        const tag = document.createElement("meta");
        tag.name = "description";
        document.head.appendChild(tag);
        return tag;
      })();

    let timeout;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const matched = sections.find(
              (section) => section.id === entry.target.id,
            );

            if (matched) {
              clearTimeout(timeout);
              timeout = setTimeout(() => {
                document.title = matched.title;
                metaTag.content = matched.description;
              }, 120);
            }
          }
        });
      },
      { threshold: 0.4 }, // 40% of section visible triggers title change
    );

    // Observe each section element
    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    // Fallback for when no section is visible
    const handleScroll = () => {
      const visible = sections.some(
        (s) =>
          document.getElementById(s.id)?.getBoundingClientRect().top <
          window.innerHeight,
      );
      if (!visible) {
        document.title = defaultTitle;
        metaTag.content = defaultDescription;
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeout);
    };
  }, []);

  return null;
}
