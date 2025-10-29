import Lenis from "@studio-freight/lenis";

let lenis;

export function initLenis() {
  if (!lenis) {
    lenis = new Lenis({
      duration: 1.6, // 🐢 slower, smoother scroll
      easing: (t) => 1 - Math.pow(1 - t, 3), // natural cubic easing
      smoothWheel: true,
      smoothTouch: true, // ✅ smoother touch scrolling on mobile
      touchMultiplier: 1.5, // optional: makes scroll feel natural on mobile
      lerp: 0.1, // optional: smooth interpolation
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }

  return lenis;
}

export function getLenis() {
  return lenis;
}
