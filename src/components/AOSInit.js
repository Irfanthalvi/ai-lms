'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function AOSInit() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false, // 🔹 animate every time element enters viewport
      easing: 'ease-out-cubic',
      mirror: true, // 🔹 animate when scrolling up as well
    });
  }, []);

  return null;
}
