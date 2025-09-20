"use client";

import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
<header className="w-full bg-card text-foreground sticky top-0 left-0 z-50 border-b border-border h-[60px] px-8">
      
      {/* Logo */}
      <div className="absolute left-50 top-1/2 -translate-y-1/2 cursor-pointer">
        <div className="flex items-center gap-2">
          <Image src="/logo.png" alt="AiELM" width={20} height={30} priority />
          <div className="text-secoundary text-[33px]">
            Ai<span className="text-primary-foreground">ELM</span>
          </div>
        </div>
      </div>

      {/* Nav Links */}
      <nav className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-9">
        <a href="#" className="text-secoundary hover:text-link-hover transition-colors text-[14px]">How it works</a>
        <a href="#" className="text-secoundary hover:text-link-hover transition-colors text-[14px]">Industries</a>
        <a href="#" className="text-secoundary hover:text-link-hover transition-colors text-[14px]">Why AiELM</a>
        <a href="#" className="text-secoundary hover:text-link-hover transition-colors text-[14px]">Case study</a>
        <a href="#" className="text-secoundary hover:text-link-hover transition-colors text-[14px]">Solutions</a>
        <a href="#" className="text-secoundary hover:text-link-hover transition-colors text-[14px]">About Us</a>
      </nav>

      {/* Get In Touch Button */}
      <div className="absolute right-50 top-1/2 -translate-y-1/2">
        <button className="w-[110px]  h-[36px] flex items-center justify-center rounded-md bg-primary-foreground text-secoundary text-[14px] hover:bg-primary/90 transition">
          Get In Touch
        </button>
      </div>

    </header>
  );
};

export default Navbar;
