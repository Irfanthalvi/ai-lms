 import {
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaXTwitter,
} from "react-icons/fa6";
import { FiPhone, FiMail } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";
 
 // ✅ Dynamic Data
 export const navLinks = [
    "Why AiELM",
    "How it works",
    "Industries",
    "Case study",
    "Solutions",
    "About Us",
    "Contact",
  ];

 export const socialLinks = [
    { icon: <FaLinkedin />, href: "#" },
    { icon: <FaInstagram />, href: "#" },
    { icon: <FaXTwitter />, href: "#" },
    { icon: <FaFacebook />, href: "#" },
  ];

 
 export const contactInfo = [
    { icon: <FiPhone />, text: "+1 (626) 388-8615" },
    { icon: <FiMail />, text: "info@aielm.com" },
    {
      icon: <HiOutlineLocationMarker />,
      text: "3400 North Central Expressway, Suite 110-217, Richardson, Texas 75080, US.",
    },
  ];

 
 export const policyLinks = [
    { label: "Terms of Service", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Sitemap", href: "#" },
  ];
