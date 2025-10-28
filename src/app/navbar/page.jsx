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
      <div className="w-full flex items-center justify-between gap-[60px] px-[225px] relative">
        {/* Logo */}
        <div className="absolute top-1/2 left-57 max-xl:left-5 max-sm:hidden -translate-y-1/2 z-10">
          <Link href="#hero-section" className="flex items-center cursor-pointer">
            <Image src="/images/header-footer-logo.png" alt="AiELM Logo" width={123} height={100} />
          </Link>
        </div>

        {/* Nav Links - visible only on xl and above */}
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

        {/* Button - visible only on xl and above */}
        <div className="absolute top-1/2 right-58 -translate-y-1/2 hidden max-xl:hidden xl:block">
          <Link href="#contact">
            <Button className="text-[14px] hover:bg-accent-foreground">Get In Touch</Button>
          </Link>
        </div>

        {/* Mobile Sheet Trigger - visible below xl */}
        <div className="absolute top-1/2 right-4 -translate-y-1/2 xl:hidden max-[425px]:mr-12">
          <Sheet>
            <SheetTrigger asChild>
              <Button className="max-sm:">Menu</Button>
            </SheetTrigger>

            <SheetContent side="top" className="p-6">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>

              <div className="flex justify-between items-center mb-6">
                <Image src="/images/header-footer-logo.png" alt="AiELM Logo" width={100} height={80} />
                <SheetClose asChild>
                  <Button variant="ghost">
                    <X size={20} />
                  </Button>
                </SheetClose>
              </div>

              <nav className="flex flex-col space-y-4">
                {navItems.map((item, index) => (
                  <Link key={index} href={item.href}>
                    <SheetClose asChild>
                      <Button variant="ghost" className="w-full justify-start">
                        {item.label}
                      </Button>
                    </SheetClose>
                  </Link>
                ))}
              </nav>

              <div className="mt-6">
                <Link href="#contact">
                  <SheetClose asChild>
                    <Button className="w-full">Get In Touch</Button>
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
