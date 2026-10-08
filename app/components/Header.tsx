"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleOpen = () => setIsModalOpen(true);
    const handleClose = () => setIsModalOpen(false);
    
    window.addEventListener('open-audit-modal', handleOpen);
    window.addEventListener('close-audit-modal', handleClose);
    
    return () => {
      window.removeEventListener('open-audit-modal', handleOpen);
      window.removeEventListener('close-audit-modal', handleClose);
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  // Transition happens over the first 800px of scrolling to make it extremely gradual
  const progress = Math.min(1, Math.max(0, scrollY / 1500));

  const currentHeight = 80 - (20 * progress); // Shrinks from 80px to 60px
  const currentWidth = `calc(100% - ${progress * 100}% + ${progress * 1024}px)`; // Interpolates from 100% down to 1024px
  const currentTop = 16 * progress; // Moves down from 0px to 16px offset
  const currentBorderRadius = 16 * progress; // Morphs from sharp 0px to a softly rounded 16px rectangle

  return (
    <header
      className={`sticky z-50 flex justify-center w-full transition-opacity duration-300 ${isModalOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
      style={{ top: `${currentTop}px` }}
    >
      <div
        className={`relative bg-white/90 backdrop-blur-lg shadow-sm flex flex-row items-center justify-between gap-4 flex-nowrap overflow-hidden transition-colors ${progress > 0 ? "border border-slate-200/80" : "border-b border-slate-200/80"
          }`}
        style={{
          width: currentWidth,
          height: `${currentHeight}px`,
          borderRadius: `${currentBorderRadius}px`,
          paddingLeft: '1.5rem',
          paddingRight: '1.5rem'
        }}
      >
        {/* Brand Logo */}
        <Link href="/" className="flex-shrink-0 flex items-center group" aria-label="SmartOnward Technologies Home">
          <img
            src="/logo-new.png"
            alt="SmartOnward Technologies Logo"
            className="logo-img group-hover:scale-105 transition-transform duration-200"
            style={{ height: "70px", width: "auto", objectFit: "contain" }}
          />
        </Link>

        <div role="navigation" className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-5 xl:gap-8 text-[13px] xl:text-sm font-bold text-slate-600 flex-shrink-0">
          <Link className="hover:text-blue-600 transition-colors" href="/">
            Home
          </Link>
          <Link className="hover:text-blue-600 transition-colors" href="/services">
            Services
          </Link>
          <Link className="hover:text-blue-600 transition-colors" href="/about">
            About
          </Link>
        </div>

        {/* Right CTA Button & Mobile Menu Toggle */}
        <div className="flex-shrink-0 flex items-center gap-3 sm:gap-4">
          <button
            className="inline-flex items-center justify-center px-5 sm:px-6 py-2 sm:py-2.5 rounded-full bg-[#2563EB] hover:bg-blue-700 text-white text-sm font-semibold shadow-md shadow-blue-500/20 hover:shadow-glow-blue transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap"
            onClick={(e) => {
              e.preventDefault();
              window.dispatchEvent(new Event('open-audit-modal'));
            }}
          >
            <span>Get Started</span>
            <span className="ml-1.5 font-bold">→</span>
          </button>

          <button
            className="lg:hidden p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-md border-b border-slate-200 px-6 py-4 space-y-4 shadow-xl">
          <div className="space-y-1">
            <Link href="/" onClick={closeMenu} className="block text-slate-800 font-semibold py-2 border-b border-slate-100">
              Home
            </Link>
            <div className="py-2 border-b border-slate-100">
              <Link href="/services" onClick={closeMenu} className="block text-slate-400 text-xs font-bold uppercase tracking-wider mb-2 hover:text-blue-600 transition-colors">
                All Services
              </Link>
              <div className="flex flex-col gap-2 pl-2">
                <Link href="/digital-marketing" onClick={closeMenu} className="block text-slate-800 font-semibold hover:text-blue-600">Digital Marketing</Link>
                <Link href="/ai-automation" onClick={closeMenu} className="block text-slate-800 font-semibold hover:text-blue-600">AI Automation</Link>
                <Link href="/branding-and-visual-design" onClick={closeMenu} className="block text-slate-800 font-semibold hover:text-blue-600">Branding & Design</Link>
                <Link href="/social-media-management" onClick={closeMenu} className="block text-slate-800 font-semibold hover:text-blue-600">Social Media Management</Link>
              </div>
            </div>
            <Link href="/#who-we-help" onClick={closeMenu} className="block text-slate-800 font-semibold py-2 border-b border-slate-100">
              Who We Help
            </Link>
            <Link href="/#deployments" onClick={closeMenu} className="block text-slate-800 font-semibold py-2 border-b border-slate-100">
              Selected Works
            </Link>
          </div>
          <Link href="/#schedule" onClick={closeMenu} className="block text-center w-full bg-blue-600 text-white font-bold py-3 rounded-xl shadow-lg shadow-blue-500/20">
            Schedule Growth Audit →
          </Link>
        </div>
      )}
    </header>
  );
}
