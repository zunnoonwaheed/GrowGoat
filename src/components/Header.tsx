"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [activeLink, setActiveLink] = useState("Home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "#about", label: "About us" },
    { href: "#services", label: "Services" },
    { href: "#work", label: "Work" },
    { href: "#team", label: "Team" },
    { href: "#pricing", label: "Pricing" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? "bg-black/60 backdrop-blur-xl border-b border-white/10" 
        : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <Image
              src="/GrowGoat copy-6.png"
              alt="Grow Goat"
              width={140}
              height={40}
              className="h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation - Centered pill with blur */}
          <nav className="hidden lg:flex items-center bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-2 py-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setActiveLink(link.label)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activeLink === link.label
                    ? "bg-[#E8FF01] text-black"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center">
            <Link
              href="#contact"
              className="flex items-center gap-3 bg-[#E8FF01] text-black pl-6 pr-2 py-2 rounded-full font-medium hover:scale-105 transition-transform"
            >
              <span>Let&apos;s Collaborate</span>
              <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-[#E8FF01] -rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span
                className={`w-full h-0.5 bg-[#E8FF01] transition-all ${
                  isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`w-full h-0.5 bg-[#E8FF01] transition-all ${
                  isMobileMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`w-full h-0.5 bg-[#E8FF01] transition-all ${
                  isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-[#222]">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => {
                    setActiveLink(link.label);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    activeLink === link.label
                      ? "bg-[#E8FF01] text-black"
                      : "text-gray-400 hover:text-white hover:bg-[#111]"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="#contact"
                className="flex items-center justify-center gap-3 bg-[#E8FF01] text-black px-6 py-3 rounded-xl font-semibold mt-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span>Let&apos;s Collaborate</span>
                <svg className="w-4 h-4 -rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
