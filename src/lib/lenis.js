import Lenis from "@studio-freight/lenis";

let lenis;

export function initLenis() {
  if (!lenis) {
    lenis = new Lenis({
      duration: 1.2,                  // smoother and faster scroll
      easing: (t) => 1 - Math.pow(1 - t, 3), // natural cubic easing
      smoothWheel: true,              // mouse scroll
      smoothTouch: true,              // mobile swipe scroll
      touchMultiplier: 2,             // mobile scroll speed
      lerp: 0.1,                      // smooth interpolation
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
