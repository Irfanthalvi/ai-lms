"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { navItems } from "../data/navbar-mock";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetTitle,
} from "@/components/ui/sheet";
import { X } from "lucide-react";
import { getLenis } from "@/lib/lenis";

const Navbar = () => {
  const handleScroll = (href) => {
    const target = document.querySelector(href);
    if (target) {
      const lenis = getLenis(); // your global Lenis instance
      const headerOffset = 80; // adjust based on navbar height
      const targetPosition =
        target.getBoundingClientRect().top + window.scrollY - headerOffset;

      lenis?.scrollTo(targetPosition, { duration: 1.6 });
    }
  };

  return (
    <header className="fixed top-0 left-0 z-50 w-full h-[65px] bg-background backdrop-blur-xl border-b border-border/5 flex items-center justify-center">
      <div className="w-full flex items-center justify-between gap-[60px] px-[225px] relative max-xl:px-[100px] max-lg:px-[60px] max-md:px-[30px] max-sm:px-4">
        {/* Logo */}
        <div className="absolute top-1/2 left-57 max-xl:left-5 max-sm:static max-sm:translate-y-0 max-sm:flex max-sm:items-center -translate-y-1/2 z-10">
          <Link
            href="#hero-section"
            onClick={() => handleScroll("#hero-section")}
          >
            <Image
              src="/images/header-footer-logo.png"
              alt="AiELM Logo"
              width={120}
              height={100}
              className="max-sm:w-[90px] h-auto"
            />
          </Link>
        </div>

        {/* Nav Links - xl+ */}
        <nav className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex space-x-4 hidden max-xl:hidden xl:flex">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              onClick={() => handleScroll(item.href)}
              className="px-3 text-[13.5px] tracking-[0.03em] rounded-md"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Button - xl+ */}
        <div className="absolute top-1/2 right-58 -translate-y-1/2 hidden max-xl:hidden xl:block">
          <Link href="#contact" onClick={() => handleScroll("#contact")}>
            <Button className="text-[14px] hover:bg-accent-foreground">
              Get In Touch
            </Button>
          </Link>
        </div>

        {/* Mobile Sheet Trigger - <xl */}
        <div className="absolute top-1/2 right-4 -translate-y-1/2 xl:hidden max-sm:right-2">
          <Sheet>
            <SheetTrigger asChild>
              <Button className="text-[13px] px-4 py-2 max-sm:px-3 max-sm:py-1">
                Menu
              </Button>
            </SheetTrigger>

            <SheetContent
              side="left" // 🔹 change from "top" to "left"
              className="p-6 w-full max-w-full" // adjust width as needed
            >
              {" "}
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <div className="flex justify-between items-center mb-6">
                <Image
                  src="/images/header-footer-logo.png"
                  alt="AiELM Logo"
                  width={100}
                  height={80}
                />
                <SheetClose asChild>
                  <Button variant="ghost">
                    <X size={20} />
                  </Button>
                </SheetClose>
              </div>
              <nav className="flex flex-col space-y-4">
                {navItems.map((item, index) => (
                  <SheetClose key={index} asChild>
                    <Button
                      variant="ghost"
                      className="w-full justify-start text-[14px]"
                      onClick={() => handleScroll(item.href)}
                    >
                      {item.label}
                    </Button>
                  </SheetClose>
                ))}
              </nav>
              <div className="mt-6">
                <SheetClose asChild>
                  <Button
                    className="w-full text-[14px]"
                    onClick={() => handleScroll("#contact")}
                  >
                    Get In Touch
                  </Button>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
