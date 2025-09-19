"use client";

import Image from "next/image";
import React from "react";
import {
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaXTwitter,
} from "react-icons/fa6";
import { FiPhone, FiMail } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";

const Footer = () => {
  return (
    <footer className="w-full bg-card text-card-foreground">
      <div className="max-w-[1892px] mx-auto lg:pl-[240px] py-9 space-y-8">
        {/* ===== Row 1: Logo + Navigation ===== */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 lg:gap-0">
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="AiELM" width={36} height={36} priority />
            <div className="text-primary-foreground text-[24px] leading-[32px] font-normal">
              Ai
              <span className="text-accent font-semibold">ELM</span>
            </div>
          </div>

          <nav className="flex flex-wrap gap-4 lg:gap-8 text-sm text-muted">
            <a href="#" className="hover:text-primary transition-colors">Why AiELM</a>
            <a href="#" className="hover:text-primary transition-colors">How it works</a>
            <a href="#" className="hover:text-primary transition-colors">Industries</a>
            <a href="#" className="hover:text-primary transition-colors">Case study</a>
            <a href="#" className="hover:text-primary transition-colors">Solutions</a>
            <a href="#" className="hover:text-primary transition-colors">About Us</a>
            <a href="#" className="hover:text-primary transition-colors">Contact</a>
          </nav>
        </div>

        {/* ===== Row 2: Social icons + Contact ===== */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 lg:gap-0">
          {/* Social icons */}
          <div className="flex gap-5 text-xl text-primary">
            <a href="#" className="hover:text-muted transition-colors"><FaLinkedin /></a>
            <a href="#" className="hover:text-muted transition-colors"><FaInstagram /></a>
            <a href="#" className="hover:text-muted transition-colors"><FaXTwitter /></a>
            <a href="#" className="hover:text-muted transition-colors"><FaFacebook /></a>
          </div>

          {/* Contact info */}
          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 lg:gap-10 text-sm text-muted">
            <div className="flex items-center gap-2">
              <FiPhone className="text-primary shrink-0" />
              <span>+1 (626) 388-8615</span>
            </div>
            <div className="flex items-center gap-2">
              <FiMail className="text-primary shrink-0" />
              <span>info@aielm.com</span>
            </div>
            <div className="flex items-center gap-2">
              <HiOutlineLocationMarker className="text-primary shrink-0" />
              <span>
                3400 North Central Expressway, Suite 110-217, Richardson, Texas 75080, US.
              </span>
            </div>
          </div>
        </div>

        {/* ===== Row 3: Divider ===== */}
        <div className="h-px bg-border" />

        {/* ===== Row 4: Copyright + Links ===== */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-0 text-xs text-muted">
          <span>Copyright © 2025 AiELM. All rights reserved.</span>
          <div className="flex flex-wrap gap-4 lg:gap-6">
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
