"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMobileMenu = () => setMobileOpen(!mobileOpen);

  return (
    <header className="w-full bg-card text-foreground fixed top-0 left-0 z-50 shadow-sm">
      <div className="mx-auto flex h-[68px] max-w-[1792px] items-center justify-between px-6 lg:px-[240px]">
        {/* Left: Logo + Brand */}
        <div className="flex items-center gap-3 lg:gap-4">
          <Image
            src="/logo.png"
            alt="AiELM"
            width={36}  // adjust as per Figma
            height={36}
            priority
          />
          <div className="text-background text-[33px] leading-[40px] tracking-wide ">
            Ai
            <span className="text-primary font-semibold">ELM</span>
          </div>
        </div>

        {/* Desktop Nav + CTA */}
        <div className="hidden md:flex items-center gap-[70px]">
          <nav className="flex items-center gap-[44px] text-[16px] leading-[26px] font-normal">
            <a href="#" className="text-background hover:text-link-hover transition-colors">
              Why AiELM
            </a>
            <a href="#" className="text-background hover:text-link-hover transition-colors">
              How it works
            </a>
            <a href="#" className="text-background hover:text-link-hover transition-colors">
              Industries
            </a>
            <a href="#" className="text-background hover:text-link-hover transition-colors">
              Case study
            </a>
            <a href="#" className="text-background hover:text-link-hover transition-colors">
              Solutions
            </a>
            <a href="#" className="text-background hover:text-link-hover transition-colors">
              About Us
            </a>
          </nav>
          <button className="w-[124px] h-[44px] flex items-center justify-center rounded-md bg-primary text-primary-foreground text-[15px] leading-[24px] hover:bg-primary/90 transition">
            Get In Touch
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMobileMenu}>
            {mobileOpen ? <X size={28} className="text-foreground" /> : <Menu size={28} className="text-foreground" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background w-full py-4 px-6 shadow-lg">
          <nav className="flex flex-col gap-4 text-[16px] leading-[26px] font-normal">
            <a href="#" className="text-link hover:text-link-hover transition-colors">Why AiELM</a>
            <a href="#" className="text-link hover:text-link-hover transition-colors">How it works</a>
            <a href="#" className="text-link hover:text-link-hover transition-colors">Industries</a>
            <a href="#" className="text-link hover:text-link-hover transition-colors">Case study</a>
            <a href="#" className="text-link hover:text-link-hover transition-colors">Solutions</a>
            <a href="#" className="text-link hover:text-link-hover transition-colors">About Us</a>
          </nav>
          <button className="mt-4 w-full h-[44px] flex items-center justify-center rounded-md bg-primary text-background-foreground text-[15px] leading-[24px] hover:bg-primary/90 transition">
            Get In Touch
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
