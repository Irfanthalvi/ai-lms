"use client";

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
    <footer className="w-full bg-card text-card-foreground border-t border-border">
      <div className="max-w-[1792px] mx-auto px-[240px] py-[42px]">
        <div className="flex flex-col gap-[32px]">
          {/* ---------- Row 1: Logo + Social ---------- */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-[32px]">
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="AiELM Logo" className="h-10 w-auto" />
              <span className="text-xl font-semibold text-foreground">
                AiELM
              </span>
            </div>

            <div className="flex gap-6 text-xl text-muted-foreground">
              <a href="#" className="hover:text-foreground">
                <FaLinkedin />
              </a>
              <a href="#" className="hover:text-foreground">
                <FaInstagram />
              </a>
              <a href="#" className="hover:text-foreground">
                <FaXTwitter />
              </a>
              <a href="#" className="hover:text-foreground">
                <FaFacebook />
              </a>
            </div>
          </div>

          {/* ---------- Row 2: Links + Contact ---------- */}
          <div className="flex flex-col lg:flex-row lg:justify-between gap-[32px]">
            {/* Links */}
            <nav className="grid grid-cols-2 sm:grid-cols-4 gap-y-3 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground">
                Why AiELM
              </a>
              <a href="#" className="hover:text-foreground">
                How it works
              </a>
              <a href="#" className="hover:text-foreground">
                Industries
              </a>
              <a href="#" className="hover:text-foreground">
                Case study
              </a>
              <a href="#" className="hover:text-foreground">
                Solutions
              </a>
              <a href="#" className="hover:text-foreground">
                About Us
              </a>
              <a href="#" className="hover:text-foreground">
                Contact
              </a>
            </nav>

            {/* Contact Info */}
            <div className="flex flex-col gap-3 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <FiPhone className="text-primary" />
                <span>+1 (626) 388-8615</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <FiMail className="text-primary" />
                <span>info@aielm.com</span>
              </div>
              <div className="flex items-start gap-2 text-muted-foreground">
                <HiOutlineLocationMarker className="text-primary mt-1" />
                <span>
                  3400 North Central Expressway, Suite 110-217, Richardson,
                  Texas 75080, US.
                </span>
              </div>
            </div>
          </div>

          {/* ---------- Row 3: Divider ---------- */}
          <div className="h-px bg-border" />

          {/* ---------- Row 4: Copyright + Links ---------- */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-[32px] text-xs text-muted-foreground">
            <span>Copyright © 2025 AiELM. All rights reserved.</span>
            <div className="flex gap-6">
              <a href="#" className="hover:text-foreground">
                Terms of Service
              </a>
              <a href="#" className="hover:text-foreground">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-foreground">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
