"use client";

import Image from "next/image";
import React from "react";
import { contactInfo, navLinks, policyLinks, socialLinks } from "../data/footer-mock";

export default function Footer() {
  return (
    <footer className="w-full bg-background text-[14px]">
      <div className="mx-auto w-[1650px] max-w-full px-2 lg:px-[190px] py-6 space-y-10">
        {/* === Row 1: Logo + Nav === */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 max-md:gap-4 max-sm:gap-3">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Image
              src="/images/header-footer-logo.png"
              alt="AiELM Logo"
              width={110}
              height={110}
            />
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap gap-6 lg:gap-8 font-normal text-secondary max-md:gap-4 max-sm:gap-2">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="hover:text-primary transition-colors text-[14px] max-sm:text-[8px]"
              >
                {link}
              </a>
            ))}
          </nav>
        </div>

        {/* === Row 2: Social + Contact === */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 max-md:gap-4 max-sm:gap-3">
          {/* Social icons */}
          <div className="flex gap-6 text-xl text-primary-foreground max-sm:gap-5">
            {socialLinks.map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                className="hover:text-secondary transition-colors text-[22px] max-sm:text-[18px] "
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Contact */}
          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-6 lg:gap-10 max-sm:gap-2 text-secondary">
            {contactInfo.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 max-sm:items-start">
                <span className="text-primary-foreground shrink-0 text-[14px] max-sm:text-[12px]">
                  {item.icon}
                </span>
                <span className="max-sm:text-[8px]">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border bg-border" />

        {/* === Row 3: Copyright === */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 pb-6 text-secondary text-[13px] max-sm:text-[11px] max-md:gap-3">
          <span  className="max-sm:text-[11px]">Copyright © {new Date().getFullYear()} AiELM. All rights reserved.</span>
          <div  className="flex flex-wrap gap-6 lg:gap-8 max-sm:gap-4">
            {policyLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="transition-colors text-[13px] max-sm:text-[11px]"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
