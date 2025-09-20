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
    <footer className="w-full bg-card text-foreground text-[14px] leading-[11px]">
      <div className="mx-auto max-w-[1500px] px-2 lg:px-[190px] py-6 space-y-10">
        {/* === Row 1: Logo + Nav === */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="AiELM" width={36} height={36} priority />
            <div className="text-secondary font-normal text-[28px] leading-[36px]">
              Ai<span className="text-primary-foreground font-semibold">ELM</span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap gap-6 lg:gap-8 font-normal text-secondary">
            <a href="#" className="hover:text-primary transition-colors text-[14px]">Why AiELM</a>
            <a href="#" className="hover:text-primary transition-colors text-[14px]">How it works</a>
            <a href="#" className="hover:text-primary transition-colors text-[14px]">Industries</a>
            <a href="#" className="hover:text-primary transition-colors text-[14px]">Case study</a>
            <a href="#" className="hover:text-primary transition-colors text-[14px]">Solutions</a>
            <a href="#" className="hover:text-primary transition-colors text-[14px]">About Us</a>
            <a href="#" className="hover:text-primary transition-colors text-[14px]">Contact</a>
          </nav>
        </div>

        {/* === Row 2: Social + Contact === */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          {/* Social icons */}
          <div className="flex gap-6 text-xl text-primary-foreground">
            <a href="#" className="hover:text-secondary transition-colors text-[22px]"><FaLinkedin /></a>
            <a href="#" className="hover:text-secondary transition-colors text-[22px]"><FaInstagram /></a>
            <a href="#" className="hover:text-secondary transition-colors text-[22px]"><FaXTwitter /></a>
            <a href="#" className="hover:text-secondary transition-colors text-[22px]"><FaFacebook /></a>
          </div>

          {/* Contact */}
          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-6 lg:gap-10 text-secondary">
            <div className="flex items-center gap-2">
              <FiPhone className="text-primary-foreground shrink-0 text-[14px]" />
              <span>+1 (626) 388-8615</span>
            </div>
            <div className="flex items-center gap-2">
              <FiMail className="text-primary-foreground shrink-0 text-[14px]" />
              <span>info@aielm.com</span>
            </div>
            <div className="flex items-center gap-2">
              <HiOutlineLocationMarker className="text-primary-foreground shrink-0 text-[14px]" />
              <span>
                3400 North Central Expressway, Suite 110-217, Richardson, Texas 75080, US.
              </span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-border" />

        {/* === Row 3: Copyright === */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 text-secondary text-[14px]">
          <span>Copyright © 2025 AiELM. All rights reserved.</span>
          <div className="flex flex-wrap gap-6 lg:gap-8">
            <a href="#" className="hover:text-primary transition-colors text-[14px]">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors text-[14px]">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors text-[14px]">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
