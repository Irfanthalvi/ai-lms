"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { navItems } from "../data/navbar-mock";
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetTitle } from "@/components/ui/sheet";
import { X } from "lucide-react";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 z-50 w-full h-[65px] bg-background backdrop-blur-xl border-b border-border/5 flex items-center justify-center">
      {/* ✅ Match Footer width system */}
      <div className="mx-auto w-[1650px] max-w-full px-2 lg:px-[190px] flex items-center justify-between gap-[60px] relative">

        {/* Logo */}
        <div className="absolute top-1/2 left-[190px] -translate-y-1/2 z-10 max-2xl:left-[120px] max-xl:left-[80px] max-lg:left-[40px] max-md:left-[25px] max-sm:left-[15px] max-[425px]:left-[10px]">
          <Link href="#hero-section" className="flex items-center cursor-pointer">
            <Image
              src="/images/header-footer-logo.png"
              alt="AiELM Logo"
              width={123}
              height={100}
              className="max-sm:w-[90px] max-sm:h-auto max-[425px]:w-[80px]"
            />
          </Link>
        </div>

        {/* Nav Links */}
        <nav className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex space-x-4 hidden max-xl:hidden xl:flex">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="px-3 text-[13.5px] tracking-[0.03em] rounded-md"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Button */}
        <div className="absolute top-1/2 right-[190px] -translate-y-1/2 hidden max-xl:hidden xl:block max-2xl:right-[120px] max-xl:right-[80px] max-lg:right-[40px] max-md:right-[25px] max-sm:right-[15px] max-[425px]:right-[10px]">
          <Link href="#contact">
            <Button className="text-[14px] hover:bg-accent-foreground whitespace-nowrap">
              Get In Touch
            </Button>
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className="absolute top-1/2 right-4 -translate-y-1/2 xl:hidden max-sm:right-[10px] max-[425px]:right-[6px]">
          <Sheet>
            <SheetTrigger asChild>
              <Button className="px-4 py-2 text-sm max-sm:px-3 max-sm:py-1.5 max-[425px]:text-xs">
                Menu
              </Button>
            </SheetTrigger>

            <SheetContent side="top" className="p-6 max-sm:p-4 max-[425px]:p-3">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>

              <div className="flex justify-between items-center mb-6 max-sm:mb-4 max-[425px]:mb-3">
                <Image
                  src="/images/header-footer-logo.png"
                  alt="AiELM Logo"
                  width={100}
                  height={80}
                  className="max-sm:w-[85px] max-[425px]:w-[75px]"
                />
                <SheetClose asChild>
                  <Button variant="ghost" size="icon" className="max-sm:w-8 max-sm:h-8">
                    <X size={18} />
                  </Button>
                </SheetClose>
              </div>

              <nav className="flex flex-col space-y-4 max-sm:space-y-3 max-[425px]:space-y-2.5">
                {navItems.map((item, index) => (
                  <Link key={index} href={item.href}>
                    <SheetClose asChild>
                      <Button
                        variant="ghost"
                        className="w-full justify-start text-[14px] max-sm:text-[13px] max-[425px]:text-[12.5px]"
                      >
                        {item.label}
                      </Button>
                    </SheetClose>
                  </Link>
                ))}
              </nav>

              <div className="mt-6 max-sm:mt-4">
                <Link href="#contact">
                  <SheetClose asChild>
                    <Button className="w-full text-[14px] max-sm:text-[13px] max-[425px]:text-[12.5px]">
                      Get In Touch
                    </Button>
                  </SheetClose>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
