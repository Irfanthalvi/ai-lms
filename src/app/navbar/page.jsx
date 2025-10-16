"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const navItems = [
  { label: "Why AiELM", href: "#Why-AiELM" },
  { label: "How it works", href: "#How-it-works" },
  { label: "Industries", href: "#industries" },
  { label: "Case study", href: "#Case-study" },
  { label: "Solutions", href: "#Solutions" },
  { label: "About Us", href: "#About-Us" },
];

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 z-50 w-full h-[65px] bg-background backdrop-blur-xl border-b border-border/5 flex items-center justify-center">
      {/* Inner container */}
      <div className="w-full flex items-center justify-between gap-[60px] px-[225px]">
        {/* Logo */}
        <div className="absolute top-1/2 left-57 -translate-y-1/2" style={{ zIndex: 10 }}>
          <Link href="#hero-section" className="flex items-center cursor-pointer">
            <Image src="/logo-option-3.png" alt="AiELM Logo" width={123} height={100} />
          </Link>
        </div>

        {/* Nav Links */}
        <nav className="absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 flex space-x-4">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="px-3 text-[13.5px] tracking-[0.03em]  rounded-md "

            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Button */}
        <div className="absolute top-1/2 right-58 -translate-y-1/2">
          <a href="#contact">
            <Button href="#contact" className="text-[14px] hover:bg-accent-foreground">
              Get In Touch
            </Button>
          </a>
        </div>

      </div>
    </header>
  );
};

export default Navbar;

