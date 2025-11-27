"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#work", label: "Work" },
    { href: "#pricing", label: "Pricing" },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
  }, [isMobileMenuOpen]);

  const handleLinkClick = (label: string, href: string) => {
    setActiveLink(label);
    setIsMobileMenuOpen(false);
    const section = document.querySelector(href);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* HEADER */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out
          ${isScrolled
            ? "bg-black/90 shadow-md py-3 mx-4 mt-3 rounded-2xl border border-[#E8FF01]/20"
            : "bg-black/90 py-3 mx-4 mt-3 rounded-2xl border border-[#E8FF01]/20 md:bg-transparent md:shadow-none md:border-transparent md:mx-0 md:mt-0"
          }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link href="#home" className="relative z-50">
            <Image
              src="/GrowGoat copy-6.png"
              alt="Grow Goat"
              width={isScrolled ? 110 : 130}
              height={isScrolled ? 32 : 38}
              className="h-auto transition-all duration-300"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center space-x-4">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleLinkClick(link.label, link.href)}
                className={`text-sm font-medium px-3 py-2 transition-all duration-200 ${
                  activeLink === link.label
                    ? "text-[#E8FF01]"
                    : "text-gray-300 hover:text-[#E8FF01]"
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex">
            <Link href="#contact">
              <button className="bg-[#E8FF01] text-black px-6 py-2.5 rounded-full text-sm font-bold hover:bg-[#c4d900] transition-all">
                Get Started
              </button>
            </Link>
          </div>

          {/* Mobile Hamburger - Only show when menu is closed */}
          {!isMobileMenuOpen && (
            <button
              className="md:hidden flex items-center justify-center h-10 w-10"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6 text-white" />
            </button>
          )}
        </div>
      </header>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-[75vw] max-w-sm bg-white z-50 transform transition-transform duration-300 shadow-2xl
          ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* Header with close button */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <Image 
            src="/GrowGoat copy-6.png" 
            alt="Grow Goat" 
            width={100} 
            height={28}
            className="h-auto"
          />
          <button 
            onClick={() => setIsMobileMenuOpen(false)} 
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Close menu"
          >
            <X className="h-5 w-5 text-gray-600" />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col p-6 space-y-1">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleLinkClick(link.label, link.href)}
              className={`text-left px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                activeLink === link.label
                  ? "text-[#E8FF01] bg-[#E8FF01]/10"
                  : "text-gray-700 hover:text-[#E8FF01] hover:bg-gray-50"
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* CTA Button at bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-100 bg-white">
          <Link href="#contact">
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full bg-[#E8FF01] text-black py-3.5 rounded-full text-base font-bold hover:bg-[#c4d900] transition-all shadow-sm"
            >
              Get Started
            </button>
          </Link>
        </div>
      </div>

      {/* Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Header;