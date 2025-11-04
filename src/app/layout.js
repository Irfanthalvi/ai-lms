import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Footer from "./footer/page";
import Navbar from "./navbar/page";
import LenisSmooth from "@/components/LenisSmooth";
import AOSInit from "@/components/AOSInit";
import DynamicTitle from "./data/navbar-mock";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

export const metadata = {
  // 🌍 Base URL for your live site (important for SEO + social previews)
  metadataBase: new URL("https://ai-lms-ashy.vercel.app"),

  // 🏷️ General Meta Info
  title: "AI LMS | Learn Smarter with AI",
  description:
    "AI LMS is a modern learning management system powered by AI — designed to make learning personalized, efficient, and interactive.",

  // 🖼️ Open Graph (Facebook, LinkedIn, WhatsApp previews)
  openGraph: {
    title: "AI LMS | Learn Smarter with AI",
    description:
      "Transform your learning experience with AI-powered tools and a modern UI built with Next.js and Tailwind CSS.",
    url: "https://ai-lms-ashy.vercel.app",
    siteName: "AI LMS",
    images: [
      {
        url: "/images/favicon.png", // ✅ Preview image path (from /public)
        width: 1200,
        height: 630,
        alt: "AI LMS Logo Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // 🐦 Twitter Card Setup
  twitter: {
    card: "summary_large_image",
    title: "AI LMS | Learn Smarter with AI",
    description:
      "Learn faster with AI LMS – the future of smart education powered by AI.",
    images: ["/images/favicon.png"],
  },

  // 💠 Favicon / Icon Setup
  icons: {
    icon: "/images/favicon.png", // ✅ Will appear as tab icon
  },

  // ⚙️ Extra optional meta tags
  keywords: [
    "AI LMS",
    "Learning Management System",
    "AI Education",
    "Next.js",
    "Tailwind CSS",
    "shadcn UI",
  ],
  authors: [{ name: "AI LMS Team", url: "https://ai-lms-ashy.vercel.app" }],
  creator: "AI LMS",
  publisher: "AI LMS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Responsive meta tag */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Optional theme color for mobile browsers */}
        <meta name="theme-color" content="#0F172A" />
      </head>
      <body className={`${plusJakartaSans.variable} antialiased`}>
        {/* Smooth scroll and animation components */}
        <LenisSmooth />
        <AOSInit />
        <DynamicTitle />

        {/* Header */}
        <header>
          <Navbar />
        </header>

        {/* Main content */}
        <main>{children}</main>

        {/* Footer */}
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
