"use client";

import { useEffect } from "react";
import { initLenis } from "@/lib/lenis";
import AOS from "aos";
import "aos/dist/aos.css";

export default function LenisSmooth() {
  useEffect(() => {
    const lenis = initLenis({
      smoothTouch: true, // mobile swipe scroll enabled
    });

    // Lenis RAF loop
    function raf(time) {
      lenis.raf(time);
      AOS.refresh(); // AOS update on scroll
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Smooth scroll with correct header offset
    const smoothScrollTo = (hash) => {
      const target = document.querySelector(hash);
      if (!target) return;

      let headerOffset = 65; // adjust: navbar height
      if (window.innerWidth < 768) {
        headerOffset = 50; // mobile header height
      }

      const targetPosition =
        target.getBoundingClientRect().top + window.scrollY - headerOffset;

      lenis.scrollTo(targetPosition, {
        duration: 1.5,
        easing: (t) => 1 - Math.pow(1 - t, 3),
      });
    };

    // Handle all internal link clicks
    const handleLinkClick = (e) => {
      const href = e.currentTarget.getAttribute("href");
      if (href && href.startsWith("#")) {
        e.preventDefault();
        smoothScrollTo(href);
        window.history.pushState(null, "", href);
      }
    };

    // Attach event listeners
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((link) => {
      link.addEventListener("click", handleLinkClick);
      link.addEventListener("touchend", handleLinkClick, { passive: false });
    });

    // AOS init
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
