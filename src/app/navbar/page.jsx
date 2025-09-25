"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const navItems = [
  { label: "Why AiELM", href: "#" },
  { label: "How it works", href: "#" },
  { label: "Industries", href: "#" },
  { label: "Case study", href: "#" },
  { label: "Solutions", href: "#" },
  { label: "About Us", href: "#" },
];

const Navbar = () => {
  return (
    <header
      className="
        fixed top-0 left-0 z-50
        w-full
        h-[68px] 
        px-[225px] 
        bg-background/60 
        border-b border-border/20
        flex items-center justify-center
      "
    >
      {/* Inner container */}
      <div className="w-full flex items-center justify-between gap-[60px]">
        
        {/* Logo */}
        <Link href="/" className="flex items-center cursor-pointer">
          <Image
            src="/logo-option-3.png"
            alt="AiELM Logo"
            width={129}
            height={44}
          />
        </Link>

        {/* Nav Links (dynamic) */}
        <nav className="flex items-center gap-2 px-16 py-10">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="px-4 py-2 text-base rounded-md "
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Get In Touch Button */}
        <Button>Get In Touch</Button>
      </div>
    </header>
  );
};

export default Navbar;
