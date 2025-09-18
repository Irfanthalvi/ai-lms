"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-card text-foreground backdrop-blur-xl border-b border-border shadow-sm">
      <div className="mx-auto flex h-14 max-w-screen-xl items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="AiELM" width={28} height={28} />
          <div className="text-primary-foreground">
            Ai
            <span className="font-semibold text-chart-2">ELM</span>
          </div>
        </Link>

        {/* Navigation links */}
        <NavigationMenu className="hidden md:block">
          <NavigationMenuList className="gap-6 text-sm text-muted">
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="#">Why AiELM</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="#">How it works</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="#">Industries</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="#">Case study</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="#">Solutions</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="#">About Us</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="#">Contact</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* CTA Button */}
        <Button className="hidden md:inline-flex bg-primary text-primary-foreground hover:bg-primary/90">
          Get In Touch
        </Button>
      </div>
    </header>
  );
};

export default Navbar;
