"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

interface NavbarProps {
  siteName: string;
  links: Array<{
    label: string;
    href: string;
  }>;
  cta: {
    label: string;
    href: string;
  };
}

export default function Navbar({ siteName, links, cta }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg shadow-[#111111]/5 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-[1314px] mx-auto px-4 sm:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/logo/Logo.png"
              alt={siteName}
              width={150}
              height={60}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="text-[#111111]/70 hover:text-[#FA6E21] font-medium transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FA6E21] group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href={cta.href}
              className="inline-flex items-center gap-2 px-8 py-2.5 bg-[#f75800] text-white font-semibold rounded-[3rem] hover:bg-[#FA6E21] transition-all duration-300 shadow-lg shadow-[#f75800]/20"
            >
              {cta.label}
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-[#FA6E21]/10 transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-[#111111]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2 animate-fade-in bg-white rounded-2xl p-4 shadow-lg border border-[#FA6E21]/10">
            {links.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="block px-4 py-2 text-[#111111]/70 hover:text-[#FA6E21] hover:bg-[#FA6E21]/5 rounded-lg font-medium transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={cta.href}
              className="block px-4 py-2.5 bg-[#f75800] text-white font-semibold rounded-[3rem] text-center mt-4 hover:bg-[#FA6E21] transition-all duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {cta.label}
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
