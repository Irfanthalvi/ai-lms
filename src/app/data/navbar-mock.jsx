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
  { id: "Why-AiELM", title: "Why AiELM | AI LMS" },
  { id: "How-it-works", title: "How It Works | AI LMS" },
  { id: "industries", title: "Industries | AI LMS" },
  { id: "Case-study", title: "Case Study | AI LMS" },
  { id: "Solutions", title: "Solutions | AI LMS" },
  { id: "About-Us", title: "About Us | AI LMS" },
];

export default function DynamicTitle() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const matched = sections.find(
              (section) => section.id === entry.target.id,
            );
            if (matched) document.title = matched.title;
          }
        });
      },
      {
        threshold: 0.4, // when 40% of section is visible
      },
    );

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
