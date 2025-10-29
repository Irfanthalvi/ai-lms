"use client";

import { useEffect } from "react";
import { initLenis } from "@/lib/lenis";

export default function LenisSmooth() {
  useEffect(() => {
    const lenis = initLenis();

    // Start Lenis requestAnimationFrame loop
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Smooth scroll logic
    const smoothScrollTo = (hash) => {
      const target = document.querySelector(hash);
      if (!target) return;

      const headerOffset = 80; // adjust if navbar height changes
      const targetPosition =
        target.getBoundingClientRect().top + window.scrollY - headerOffset;

      lenis.scrollTo(targetPosition, {
        duration: 1.8,
        easing: (t) => 1 - Math.pow(1 - t, 3),
      });
    };

    // Unified click handler
    const handleLinkClick = (e) => {
      const href = e.currentTarget.getAttribute("href");

      if (href && href.startsWith("#")) {
        e.preventDefault(); // stop default jump
        smoothScrollTo(href);

        // update URL hash (so refresh keeps position)
        window.history.pushState(null, "", href);
      }
    };

    // Select all internal links (works for all screen sizes)
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach((link) => {
      // for desktop & mobile
      link.addEventListener("click", handleLinkClick);
      link.addEventListener("touchend", handleLinkClick, { passive: false });
    });

    // cleanup on unmount
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
