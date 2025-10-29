"use client";

import { useEffect } from "react";
import { initLenis } from "@/lib/lenis";
import AOS from "aos";
import "aos/dist/aos.css";

export default function LenisSmooth() {
  useEffect(() => {
    const lenis = initLenis({ smoothTouch: true });

    // RAF loop + AOS refresh
    function raf(time) {
      lenis.raf(time);
      AOS.refresh(); // scroll pe animations refresh
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Smooth scroll with header offset
    const smoothScrollTo = (hash) => {
      const target = document.querySelector(hash);
      if (!target) return;

      let headerOffset = window.innerWidth < 768 ? 50 : 65;
      const targetPosition =
        target.getBoundingClientRect().top + window.scrollY - headerOffset;

      lenis.scrollTo(targetPosition, {
        duration: 1.5,
        easing: (t) => 1 - Math.pow(1 - t, 3),
      });
    };

    // Anchor link clicks
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

    // AOS init
    AOS.init({
      duration: 800,
      once: false,      // har scroll pe animate ho
      easing: "ease-out-cubic",
      mirror: true,     // scroll up pe bhi animate
    });

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
