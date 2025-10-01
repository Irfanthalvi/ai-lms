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
        <Link href="#hero-section" className="flex items-center cursor-pointer">
          <Image
            src="/logo-option-3.png"
            alt="AiELM Logo"
            width={129}
            height={44}
          />
        </Link>

        {/* Nav Links (dynamic) */}
        <nav className="flex items-center mt-[-1px] mr-[13px] space-x-2">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="px-4 py-2 text-[14.5px] rounded-md"
              style={{ wordSpacing: "0.1em" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Button className="text-[14px] mt-[-1px] hover:bg-accent-foreground">
          Get In Touch
        </Button>

      </div>
    </header>
  );
};

export default Navbar;
