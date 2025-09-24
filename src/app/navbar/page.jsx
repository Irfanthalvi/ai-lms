"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
<header
  className="
    fixed top-0 left-0 z-50
    w-full
    h-[57px] 
    border-b border-border 
    px-[205px] py-[12px] 
    bg-[#1C1917D9]/85 
    backdrop-blur-[24px] 
    flex items-center justify-center
  "
>
  {/* Inner container */}
  <div className="w-full h-[40px] flex items-center justify-between gap-[60px]">
    
    {/* Logo */}
  <div className="flex items-center gap-2 w-fit h-fit cursor-pointer">
  <Image 
    src="/logo-option-3.png" 
    alt="AiELM Logo" 
    width={110} 
    height={110} 
  />
</div>


    {/* Nav Links */}
    <nav className="flex items-center gap-[35px] ">
      <a href="#" className="text-secoundary hover:text-link-hover transition-colors text-[14px]">Why AiELM</a>
      <a href="#" className="text-secoundary hover:text-link-hover transition-colors text-[14px]">How it works</a>
      <a href="#" className="text-secoundary hover:text-link-hover transition-colors text-[14px]">Industries</a>
      <a href="#" className="text-secoundary hover:text-link-hover transition-colors text-[14px]">Case study</a>
      <a href="#" className="text-secoundary hover:text-link-hover transition-colors text-[14px]">Solutions</a>
      <a href="#" className="text-secoundary hover:text-link-hover transition-colors text-[14px]">About Us</a>
    </nav>

    {/* Get In Touch Button */}
    <Button>
      Get In Touch
    </Button>
  </div>
</header>



  );
};

export default Navbar;
