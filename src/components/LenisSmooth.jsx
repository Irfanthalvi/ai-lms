"use client";

import { useEffect } from "react";
import { initLenis } from "@/lib/lenis";
import AOS from "aos";
import "aos/dist/aos.css";

export default function LenisSmooth() {
  useEffect(() => {
    // Initialize Lenis with better mobile scrolling
    const lenis = initLenis({
      duration: 3, // scroll speed
      easing: (t) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
      smoothTouch: true,
      touchMultiplier: 2, // mobile swipe speed
      lerp: 0.1,
    });

    // RAF loop + AOS refresh
    function raf(time) {
      lenis.raf(time);
      AOS.refresh();
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Smooth scroll with header offset
    const smoothScrollTo = (hash) => {
      const target = document.querySelector(hash);
      if (!target) return;

      const headerOffset = window.innerWidth < 768 ? 50 : 65;
      const targetPosition =
        target.getBoundingClientRect().top + window.scrollY - headerOffset;

      lenis.scrollTo(targetPosition, {
        duration: 3,
        easing: (t) => 1 - Math.pow(1 - t, 3),
      });
    };

    // Handle internal anchor links
    const handleLinkClick = (e) => {
      const href = e.currentTarget.getAttribute("href");
      if (href && href.startsWith("#")) {
        e.preventDefault();
        smoothScrollTo(href);
        window.history.pushState(null, "", href);
      }
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((link) => {
      link.addEventListener("click", handleLinkClick);
      link.addEventListener("touchend", handleLinkClick, { passive: false });
    });

    // Initialize AOS
    AOS.init({
      duration: 800,
      once: false,
      easing: "ease-out-cubic",
      mirror: true,
    });

    // Cleanup
    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", handleLinkClick);
        link.removeEventListener("touchend", handleLinkClick);
      });
      lenis.destroy();
    };
  }, []);

  return null;
}
