"use client";

import { Image } from "lucide-react";
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
      <div className="max-w-[1792px] mx-auto px-6 lg:px-24 py-12 space-y-8">
        {/* ===== Row 1: Logo + Navigation ===== */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="AiELM" width={28} height={28} />
            <div className="text-primary-foreground">
              Ai
              <span className="font-semibold text-chart-2">ELM</span>
            </div>
          </div>

          <nav className="flex gap-8 text-sm text-muted">
            <a href="#" className="hover:text-primary">
              Why AiELM
            </a>
            <a href="#" className="hover:text-primary">
              How it works
            </a>
            <a href="#" className="hover:text-primary">
              Industries
            </a>
            <a href="#" className="hover:text-primary">
              Case study
            </a>
            <a href="#" className="hover:text-primary">
              Solutions
            </a>
            <a href="#" className="hover:text-primary">
              About Us
            </a>
            <a href="#" className="hover:text-primary">
              Contact
            </a>
          </nav>
        </div>

        {/* ===== Row 2: Social icons + Contact ===== */}
        <div className="flex items-center justify-between">
          {/* Social icons */}
          <div className="flex gap-5 text-xl text-primary">
            <a href="#" className="hover:text-muted">
              <FaLinkedin />
            </a>
            <a href="#" className="hover:text-muted">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-muted">
              <FaXTwitter />
            </a>
            <a href="#" className="hover:text-muted">
              <FaFacebook />
            </a>
          </div>

          {/* Contact info */}
          <div className="flex items-center gap-10 text-sm text-muted">
            <div className="flex items-center gap-2">
              <FiPhone className="text-primary" />
              <span>+1 (626) 388-8615</span>
            </div>
            <div className="flex items-center gap-2">
              <FiMail className="text-primary" />
              <span>info@aielm.com</span>
            </div>
            <div className="flex items-center gap-2">
              <HiOutlineLocationMarker className="text-primary shrink-0" />
              <span>
                3400 North Central Expressway, Suite 110-217, Richardson, Texas
                75080, US.
              </span>
            </div>
          </div>
        </div>

        {/* ===== Row 3: Divider ===== */}
        <div className="h-px bg-border" />

        {/* ===== Row 4: Copyright + Links ===== */}
        <div className="flex items-center justify-between text-xs text-muted">
          <span>Copyright © 2025 AiELM. All rights reserved.</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary">
              Terms of Service
            </a>
            <a href="#" className="hover:text-primary">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
