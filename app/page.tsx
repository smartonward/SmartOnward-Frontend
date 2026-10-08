"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import GrowthAuditCTA from "./components/GrowthAuditCTA";

import Footer from "./components/Footer";
import CoverflowCarousel from "./components/CoverflowCarousel";
import StruggleSection from "./components/StruggleSection";

export default function Home() {
  const [activeEngine, setActiveEngine] = useState<"web" | "grow" | "auto">("web");

  // Ambient background moved to layout.tsx via AmbientBackground.tsx




  return (
    <>
      {/* Ambient Background Layer is now rendered in layout.tsx */}


      {/* MAIN CONTENT */}
      <main className="relative z-10">


        {/* HERO SECTION */}
        <section className="relative pt-16 sm:pt-24 pb-20 md:pb-28 text-center px-4 sm:px-6 lg:px-8" id="home">
          <div className="max-w-5xl mx-auto flex flex-col items-center">


            {/* Main Display Headline */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-black text-slate-950 tracking-tight leading-[1.08] max-w-4xl">
              We don&apos;t just market your brand.
              <br />
              We <span className="engineer-highlight italic">engineer</span> its momentum.
            </h1>

            {/* Subtitle */}
            <p className="mt-8 text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl leading-relaxed font-normal">
              SmartOnward Technologies consolidates high-converting web architecture, viral content engines, and intelligent 24/7 AI automation into one cohesive revenue operating system-replacing fragmented agencies and manual friction.
            </p>

            {/* CTA Action Row */}
            <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
              <button
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl bg-blue-600 text-white font-semibold text-base shadow-lg shadow-blue-600/30 hover:bg-blue-700 hover:shadow-blue-600/40 hover:-translate-y-0.5 transition-all duration-200"
                onClick={(e) => {
                  e.preventDefault();
                  window.dispatchEvent(new Event('open-audit-modal'));
                }}
              >
                <span>Schedule Growth Audit (Free 30m Blueprint)</span>
                <span className="ml-2 text-lg">→</span>
              </button>
            </div>

            {/* Floating Stat Capsule Bar */}
            <div className="mt-16 w-full max-w-4xl mx-auto bg-white/80 border border-white/60 rounded-3xl shadow-pill p-6 sm:p-8 backdrop-blur-md">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 lg:gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-200/60 w-full">
                {/* Stat 1 */}
                <div className="flex flex-col items-center justify-center text-center px-2 lg:px-4">
                  <span className="text-3xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight font-sans whitespace-nowrap">50+</span>
                  <span className="text-[10px] sm:text-xs font-semibold text-slate-500 mt-1.5 uppercase tracking-widest font-mono whitespace-nowrap">
                    Brands Scaled
                  </span>
                </div>
                {/* Stat 2 */}
                <div className="flex flex-col items-center justify-center text-center px-2 lg:px-4 pt-4 md:pt-0">
                  <span className="text-3xl sm:text-3xl lg:text-4xl font-black text-emerald-500 tracking-tight font-sans whitespace-nowrap">24/7</span>
                  <span className="text-[10px] sm:text-xs font-semibold text-slate-500 mt-1.5 uppercase tracking-widest font-mono whitespace-nowrap">
                    AI Automations
                  </span>
                </div>
                {/* Stat 3 */}
                <div className="flex flex-col items-center justify-center text-center px-2 lg:px-4 pt-4 md:pt-0">
                  <span className="text-3xl sm:text-3xl lg:text-4xl font-black text-blue-600 tracking-tight font-sans whitespace-nowrap">5–15 Days</span>
                  <span className="text-[10px] sm:text-xs font-semibold text-slate-500 mt-1.5 uppercase tracking-widest font-mono whitespace-nowrap">
                    To Production
                  </span>
                </div>
                {/* Stat 4 */}
                <div className="flex flex-col items-center justify-center text-center px-2 lg:px-4 pt-4 md:pt-0">
                  <span className="text-3xl sm:text-3xl lg:text-4xl font-black text-blue-600 tracking-tight font-sans whitespace-nowrap">100%</span>
                  <span className="text-[10px] sm:text-xs font-semibold text-slate-500 mt-1.5 uppercase tracking-widest font-mono whitespace-nowrap">
                    In-House Team
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CORE SERVICES SECTION (6 CARDS WITH DIRECT LINKS) */}
        <section className="py-24 relative" id="services">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight leading-tight">
                All your needs under <span className="text-blue-600 italic">one roof</span>
              </h2>
              <p className="mt-4 text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
                From building your digital presence to growing your audience and automating everyday work, SmartOnward Technologies brings the right capabilities together under one roof.
              </p>
            </div>

            {/* 6 Core Services Expanding Accordion */}
            <div className="flex flex-col lg:flex-row -space-y-4 lg:space-y-0 lg:-space-x-6 h-auto lg:h-[450px] w-full px-4 lg:px-8">

              {/* Card 01: Website Development */}
              <Link
                href="/website-development"
                className="group relative flex-1 lg:hover:flex-[4] transition-all duration-500 ease-out overflow-hidden bg-white/95 backdrop-blur-md rounded-3xl shadow-xl lg:shadow-[-15px_0_30px_-10px_rgba(0,0,0,0.1)] hover:shadow-2xl flex flex-col min-h-[120px] lg:min-h-0 z-10 hover:z-30 origin-left"
              >
                {/* Collapsed State (Visible by default, fades out on hover) */}
                <div className="absolute inset-0 lg:w-full p-5 lg:p-8 flex flex-row lg:flex-col items-center lg:items-center justify-between z-10 transition-opacity duration-300 group-hover:opacity-0 bg-slate-50/50 lg:bg-transparent">
                  <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-xl bg-blue-50 flex flex-shrink-0 items-center justify-center text-blue-600 border border-blue-100/80 lg:mb-6">
                    <svg className="w-6 h-6 lg:w-7 lg:h-7" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                      <rect height="14" rx="2" width="18" x="3" y="4" />
                      <path d="M7 8h.01M10 8h.01M13 8h.01" />
                      <rect height="9" rx="1.5" width="5" x="16" y="11" />
                    </svg>
                  </div>
                  <span className="hidden lg:flex flex-1 items-center justify-center -rotate-180 [writing-mode:vertical-rl] text-xl font-bold text-slate-800 tracking-wider whitespace-nowrap">
                    Website Development
                  </span>
                  <span className="lg:hidden text-lg font-bold text-slate-800 ml-4 flex-1">Website Development</span>
                  <span className="mt-auto inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-50 text-blue-600 font-mono font-bold text-xs border border-blue-100/80">
                    01
                  </span>
                </div>

                {/* Expanded State (Hidden by default, fades in on hover) */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 p-6 lg:p-10 flex flex-col justify-between z-20 bg-white w-full lg:min-w-[450px]">
                  <div className="absolute -right-10 -bottom-10 w-44 h-44 bg-blue-100/40 rounded-full blur-2xl pointer-events-none group-hover:scale-125 transition-transform duration-500" />
                  <div className="relative z-10">
                    <div className="flex items-center justify-end mb-8">
                      <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-50 text-blue-600 font-mono font-bold text-sm border border-blue-100/80">
                        01
                      </span>
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-black text-slate-900 tracking-tight whitespace-nowrap">Website Development</h3>
                    <p className="text-base text-slate-600 mt-4 leading-relaxed whitespace-normal max-w-sm">
                      Fast, responsive websites and landing pages that make your value clear and turn visits into action.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-8 max-w-sm">
                      <span className="px-3 py-1.5 rounded-full text-xs font-semibold bg-blue-50 text-blue-600 border border-blue-100">Business Websites</span>
                      <span className="px-3 py-1.5 rounded-full text-xs font-semibold bg-blue-50 text-blue-600 border border-blue-100">Landing Pages</span>
                      <span className="px-3 py-1.5 rounded-full text-xs font-semibold bg-blue-50 text-blue-600 border border-blue-100">UI/UX</span>
                      <span className="px-3 py-1.5 rounded-full text-xs font-semibold bg-blue-50 text-blue-600 border border-blue-100">SEO Ready</span>
                    </div>
                  </div>
                  <div className="pt-6 border-t border-slate-100 relative z-10 mt-auto">
                    <span className="inline-flex items-center text-sm font-bold text-blue-600 hover:text-blue-700 group-hover:translate-x-2 transition-transform">
                      <span>Explore Service</span>
                      <span className="ml-2">→</span>
                    </span>
                  </div>
                </div>
              </Link>

              {/* Card 02: Branding & Visual Design */}
              <Link
                href="/branding-and-visual-design"
                className="group relative flex-1 lg:hover:flex-[4] transition-all duration-500 ease-out overflow-hidden bg-white/95 backdrop-blur-md rounded-3xl shadow-xl lg:shadow-[-15px_0_30px_-10px_rgba(0,0,0,0.1)] hover:shadow-2xl flex flex-col min-h-[120px] lg:min-h-0 z-10 hover:z-30 origin-left"
              >
                <div className="absolute inset-0 lg:w-full p-5 lg:p-8 flex flex-row lg:flex-col items-center lg:items-center justify-between z-10 transition-opacity duration-300 group-hover:opacity-0 bg-slate-50/50 lg:bg-transparent">
                  <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-xl bg-emerald-50 flex flex-shrink-0 items-center justify-center text-emerald-600 border border-emerald-100/80 lg:mb-6">
                    <svg className="w-6 h-6 lg:w-7 lg:h-7" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                      <path d="M4 6h16M4 12h10M4 18h6" />
                      <path d="M17 14l3-3m0 0l3 3m-3-3v8" />
                    </svg>
                  </div>
                  <span className="hidden lg:flex flex-1 items-center justify-center -rotate-180 [writing-mode:vertical-rl] text-xl font-bold text-slate-800 tracking-wider whitespace-nowrap">
                    Branding & Design
                  </span>
                  <span className="lg:hidden text-lg font-bold text-slate-800 ml-4 flex-1">Branding & Design</span>
                  <span className="mt-auto inline-flex items-center justify-center w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 font-mono font-bold text-xs border border-emerald-100/80">
                    02
                  </span>
                </div>

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 p-6 lg:p-10 flex flex-col justify-between z-20 bg-white w-full lg:min-w-[450px]">
                  <div className="absolute -right-10 -bottom-10 w-44 h-44 bg-emerald-100/40 rounded-full blur-2xl pointer-events-none group-hover:scale-125 transition-transform duration-500" />
                  <div className="relative z-10">
                    <div className="flex items-center justify-end mb-8">
                      <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 font-mono font-bold text-sm border border-emerald-100/80">
                        02
                      </span>
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-black text-slate-900 tracking-tight whitespace-nowrap">Branding & Design</h3>
                    <p className="text-base text-slate-600 mt-4 leading-relaxed whitespace-normal max-w-sm">
                      Build a recognizable identity with logo systems, brand guidelines and professional business collateral.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-8 max-w-sm">
                      <span className="px-3 py-1.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-100">Logo Design</span>
                      <span className="px-3 py-1.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-100">Brand Identity</span>
                      <span className="px-3 py-1.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-100">Pitch Decks</span>
                      <span className="px-3 py-1.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-100">Collateral</span>
                    </div>
                  </div>
                  <div className="pt-6 border-t border-slate-100 relative z-10 mt-auto">
                    <span className="inline-flex items-center text-sm font-bold text-emerald-600 hover:text-emerald-700 group-hover:translate-x-2 transition-transform">
                      <span>Explore Service</span>
                      <span className="ml-2">→</span>
                    </span>
                  </div>
                </div>
              </Link>

              {/* Card 03: Video & Reels */}
              <Link
                href="/video-and-reels"
                className="group relative flex-1 lg:hover:flex-[4] transition-all duration-500 ease-out overflow-hidden bg-white/95 backdrop-blur-md rounded-3xl shadow-xl lg:shadow-[-15px_0_30px_-10px_rgba(0,0,0,0.1)] hover:shadow-2xl flex flex-col min-h-[120px] lg:min-h-0 z-10 hover:z-30 origin-left"
              >
                <div className="absolute inset-0 lg:w-full p-5 lg:p-8 flex flex-row lg:flex-col items-center lg:items-center justify-between z-10 transition-opacity duration-300 group-hover:opacity-0 bg-slate-50/50 lg:bg-transparent">
                  <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-xl bg-purple-50 flex flex-shrink-0 items-center justify-center text-purple-600 border border-purple-100/80 lg:mb-6">
                    <svg className="w-6 h-6 lg:w-7 lg:h-7" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                      <rect height="12" rx="2" width="16" x="2" y="5" />
                      <path d="M9 9l5 2.5-5 2.5V9z" />
                      <rect height="7" rx="1.5" width="8" x="14" y="12" />
                    </svg>
                  </div>
                  <span className="hidden lg:flex flex-1 items-center justify-center -rotate-180 [writing-mode:vertical-rl] text-xl font-bold text-slate-800 tracking-wider whitespace-nowrap">
                    Video & Reels
                  </span>
                  <span className="lg:hidden text-lg font-bold text-slate-800 ml-4 flex-1">Video & Reels</span>
                  <span className="mt-auto inline-flex items-center justify-center w-8 h-8 rounded-full bg-purple-50 text-purple-600 font-mono font-bold text-xs border border-purple-100/80">
                    03
                  </span>
                </div>

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 p-6 lg:p-10 flex flex-col justify-between z-20 bg-white w-full lg:min-w-[450px]">
                  <div className="absolute -right-10 -bottom-10 w-44 h-44 bg-purple-100/40 rounded-full blur-2xl pointer-events-none group-hover:scale-125 transition-transform duration-500" />
                  <div className="relative z-10">
                    <div className="flex items-center justify-end mb-8">
                      <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-purple-50 text-purple-600 font-mono font-bold text-sm border border-purple-100/80">
                        03
                      </span>
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-black text-slate-900 tracking-tight whitespace-nowrap">Video & Reels</h3>
                    <p className="text-base text-slate-600 mt-4 leading-relaxed whitespace-normal max-w-sm">
                      Create attention-grabbing short-form content, promotional videos, product videos and AI-assisted creative.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-8 max-w-sm">
                      <span className="px-3 py-1.5 rounded-full text-xs font-semibold bg-purple-50 text-purple-700 border border-purple-100">Reels</span>
                      <span className="px-3 py-1.5 rounded-full text-xs font-semibold bg-purple-50 text-purple-700 border border-purple-100">Promotional Videos</span>
                      <span className="px-3 py-1.5 rounded-full text-xs font-semibold bg-purple-50 text-purple-700 border border-purple-100">AI Video</span>
                      <span className="px-3 py-1.5 rounded-full text-xs font-semibold bg-purple-50 text-purple-700 border border-purple-100">Editing</span>
                    </div>
                  </div>
                  <div className="pt-6 border-t border-slate-100 relative z-10 mt-auto">
                    <span className="inline-flex items-center text-sm font-bold text-purple-600 hover:text-purple-700 group-hover:translate-x-2 transition-transform">
                      <span>Explore Service</span>
                      <span className="ml-2">→</span>
                    </span>
                  </div>
                </div>
              </Link>

              {/* Card 04: Social Media Management */}
              <Link
                href="/social-media-management"
                className="group relative flex-1 lg:hover:flex-[4] transition-all duration-500 ease-out overflow-hidden bg-white/95 backdrop-blur-md rounded-3xl shadow-xl lg:shadow-[-15px_0_30px_-10px_rgba(0,0,0,0.1)] hover:shadow-2xl flex flex-col min-h-[120px] lg:min-h-0 z-10 hover:z-30 origin-left"
              >
                <div className="absolute inset-0 lg:w-full p-5 lg:p-8 flex flex-row lg:flex-col items-center lg:items-center justify-between z-10 transition-opacity duration-300 group-hover:opacity-0 bg-slate-50/50 lg:bg-transparent">
                  <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-xl bg-orange-50 flex flex-shrink-0 items-center justify-center text-orange-600 border border-orange-100/80 lg:mb-6">
                    <svg className="w-6 h-6 lg:w-7 lg:h-7" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                      <rect height="16" rx="3" width="10" x="5" y="4" />
                      <path d="M14 9h6a2 2 0 012 2v4a2 2 0 01-2 2h-6" />
                      <path d="M9 16h2" />
                    </svg>
                  </div>
                  <span className="hidden lg:flex flex-1 items-center justify-center -rotate-180 [writing-mode:vertical-rl] text-xl font-bold text-slate-800 tracking-wider whitespace-nowrap">
                    Social Media
                  </span>
                  <span className="lg:hidden text-lg font-bold text-slate-800 ml-4 flex-1">Social Media</span>
                  <span className="mt-auto inline-flex items-center justify-center w-8 h-8 rounded-full bg-orange-50 text-orange-600 font-mono font-bold text-xs border border-orange-100/80">
                    04
                  </span>
                </div>

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 p-6 lg:p-10 flex flex-col justify-between z-20 bg-white w-full lg:min-w-[450px]">
                  <div className="absolute -right-10 -bottom-10 w-44 h-44 bg-orange-100/40 rounded-full blur-2xl pointer-events-none group-hover:scale-125 transition-transform duration-500" />
                  <div className="relative z-10">
                    <div className="flex items-center justify-end mb-8">
                      <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-orange-50 text-orange-600 font-mono font-bold text-sm border border-orange-100/80">
                        04
                      </span>
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-black text-slate-900 tracking-tight whitespace-nowrap">Social Media</h3>
                    <p className="text-base text-slate-600 mt-4 leading-relaxed whitespace-normal max-w-sm">
                      Stay visible with strategic calendars, posts, reels and community-focused content across key platforms.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-8 max-w-sm">
                      <span className="px-3 py-1.5 rounded-full text-xs font-semibold bg-orange-50 text-orange-700 border border-orange-100">Content Strategy</span>
                      <span className="px-3 py-1.5 rounded-full text-xs font-semibold bg-orange-50 text-orange-700 border border-orange-100">Post Creation</span>
                      <span className="px-3 py-1.5 rounded-full text-xs font-semibold bg-orange-50 text-orange-700 border border-orange-100">Growth</span>
                      <span className="px-3 py-1.5 rounded-full text-xs font-semibold bg-orange-50 text-orange-700 border border-orange-100">Analytics</span>
                    </div>
                  </div>
                  <div className="pt-6 border-t border-slate-100 relative z-10 mt-auto">
                    <span className="inline-flex items-center text-sm font-bold text-orange-600 hover:text-orange-700 group-hover:translate-x-2 transition-transform">
                      <span>Explore Service</span>
                      <span className="ml-2">→</span>
                    </span>
                  </div>
                </div>
              </Link>

              {/* Card 05: Digital Marketing */}
              <Link
                href="/digital-marketing"
                className="group relative flex-1 lg:hover:flex-[4] transition-all duration-500 ease-out overflow-hidden bg-white/95 backdrop-blur-md rounded-3xl shadow-xl lg:shadow-[-15px_0_30px_-10px_rgba(0,0,0,0.1)] hover:shadow-2xl flex flex-col min-h-[120px] lg:min-h-0 z-10 hover:z-30 origin-left"
              >
                <div className="absolute inset-0 lg:w-full p-5 lg:p-8 flex flex-row lg:flex-col items-center lg:items-center justify-between z-10 transition-opacity duration-300 group-hover:opacity-0 bg-slate-50/50 lg:bg-transparent">
                  <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-xl bg-cyan-50 flex flex-shrink-0 items-center justify-center text-cyan-600 border border-cyan-100/80 lg:mb-6">
                    <svg className="w-6 h-6 lg:w-7 lg:h-7" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                      <circle cx="11" cy="11" r="7" />
                      <circle cx="11" cy="11" r="3" />
                      <path d="M16 6l5-5m0 0h-4m4 0v4" />
                      <path d="M18 17v4M21 15v6" />
                    </svg>
                  </div>
                  <span className="hidden lg:flex flex-1 items-center justify-center -rotate-180 [writing-mode:vertical-rl] text-xl font-bold text-slate-800 tracking-wider whitespace-nowrap">
                    Digital Marketing
                  </span>
                  <span className="lg:hidden text-lg font-bold text-slate-800 ml-4 flex-1">Digital Marketing</span>
                  <span className="mt-auto inline-flex items-center justify-center w-8 h-8 rounded-full bg-cyan-50 text-cyan-600 font-mono font-bold text-xs border border-cyan-100/80">
                    05
                  </span>
                </div>

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 p-6 lg:p-10 flex flex-col justify-between z-20 bg-white w-full lg:min-w-[450px]">
                  <div className="absolute -right-10 -bottom-10 w-44 h-44 bg-cyan-100/40 rounded-full blur-2xl pointer-events-none group-hover:scale-125 transition-transform duration-500" />
                  <div className="relative z-10">
                    <div className="flex items-center justify-end mb-8">
                      <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-cyan-50 text-cyan-600 font-mono font-bold text-sm border border-cyan-100/80">
                        05
                      </span>
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-black text-slate-900 tracking-tight whitespace-nowrap">Digital Marketing</h3>
                    <p className="text-base text-slate-600 mt-4 leading-relaxed whitespace-normal max-w-sm">
                      Reach the right audience through Google Ads, Meta Ads, SEO and lead-generation campaigns built around goals.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-8 max-w-sm">
                      <span className="px-3 py-1.5 rounded-full text-xs font-semibold bg-cyan-50 text-cyan-700 border border-cyan-100">Google Ads</span>
                      <span className="px-3 py-1.5 rounded-full text-xs font-semibold bg-cyan-50 text-cyan-700 border border-cyan-100">Meta Ads</span>
                      <span className="px-3 py-1.5 rounded-full text-xs font-semibold bg-cyan-50 text-cyan-700 border border-cyan-100">SEO</span>
                      <span className="px-3 py-1.5 rounded-full text-xs font-semibold bg-cyan-50 text-cyan-700 border border-cyan-100">Lead Generation</span>
                    </div>
                  </div>
                  <div className="pt-6 border-t border-slate-100 relative z-10 mt-auto">
                    <span className="inline-flex items-center text-sm font-bold text-cyan-600 hover:text-cyan-700 group-hover:translate-x-2 transition-transform">
                      <span>Explore Service</span>
                      <span className="ml-2">→</span>
                    </span>
                  </div>
                </div>
              </Link>

              {/* Card 06: AI Automation */}
              <Link
                href="/ai-automation"
                className="group relative flex-1 lg:hover:flex-[4] transition-all duration-500 ease-out overflow-hidden bg-white/95 backdrop-blur-md rounded-3xl border border-slate-200/80 hover:border-emerald-500 shadow-xl lg:shadow-[-15px_0_30px_-10px_rgba(0,0,0,0.1)] hover:shadow-2xl flex flex-col min-h-[120px] lg:min-h-0 z-10 hover:z-30 origin-left"
              >
                <div className="absolute inset-0 lg:w-full p-5 lg:p-8 flex flex-row lg:flex-col items-center lg:items-center justify-between z-10 transition-opacity duration-300 group-hover:opacity-0 bg-slate-50/50 lg:bg-transparent">
                  <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-xl bg-emerald-50 flex flex-shrink-0 items-center justify-center text-emerald-600 border border-emerald-100/80 lg:mb-6">
                    <svg className="w-6 h-6 lg:w-7 lg:h-7" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                      <rect height="10" rx="2" width="14" x="5" y="7" />
                      <circle cx="9" cy="11" r="1" />
                      <circle cx="15" cy="11" r="1" />
                      <path d="M10 14h4M12 4v3M2 11h3M19 11h3" />
                      <path d="M16 19l2 2 4-4" />
                    </svg>
                  </div>
                  <span className="hidden lg:flex flex-1 items-center justify-center -rotate-180 [writing-mode:vertical-rl] text-xl font-bold text-slate-800 tracking-wider whitespace-nowrap">
                    AI Automation
                  </span>
                  <span className="lg:hidden text-lg font-bold text-slate-800 ml-4 flex-1">AI Automation</span>
                  <span className="mt-auto inline-flex items-center justify-center w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 font-mono font-bold text-xs border border-emerald-100/80">
                    06
                  </span>
                </div>

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 p-6 lg:p-10 flex flex-col justify-between z-20 bg-white w-full lg:min-w-[450px]">
                  <div className="absolute -right-10 -bottom-10 w-44 h-44 bg-emerald-100/40 rounded-full blur-2xl pointer-events-none group-hover:scale-125 transition-transform duration-500" />
                  <div className="relative z-10">
                    <div className="flex items-center justify-end mb-8">
                      <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 font-mono font-bold text-sm border border-emerald-100/80">
                        06
                      </span>
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-black text-slate-900 tracking-tight whitespace-nowrap">AI Automation</h3>
                    <p className="text-base text-slate-600 mt-4 leading-relaxed whitespace-normal max-w-sm">
                      Reduce repetitive work with AI agents, chatbots, WhatsApp workflows, automated follow-ups and smart systems.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-8 max-w-sm">
                      <span className="px-3 py-1.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-100">Chatbots</span>
                      <span className="px-3 py-1.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-100">AI Agents</span>
                      <span className="px-3 py-1.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-100">WhatsApp</span>
                      <span className="px-3 py-1.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-100">Workflows</span>
                    </div>
                  </div>
                  <div className="pt-6 border-t border-slate-100 relative z-10 mt-auto">
                    <span className="inline-flex items-center text-sm font-bold text-emerald-600 hover:text-emerald-700 group-hover:translate-x-2 transition-transform">
                      <span>Explore Service</span>
                      <span className="ml-2">→</span>
                    </span>
                  </div>
                </div>
              </Link>
            </div>

            {/* Bottom Multi-Service Banner */}
            <div className="mt-14 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 rounded-2xl p-6 sm:p-8 text-white shadow-xl shadow-blue-500/15 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center text-2xl shrink-0">
                  ⚡
                </div>
                <div>
                  <h4 className="text-lg font-bold">Need more than one service?</h4>
                  <p className="text-sm text-blue-100 mt-1 max-w-2xl">
                    We can combine web, branding, content, marketing and automation into one connected growth project.
                  </p>
                </div>
              </div>
              <a
                className="shrink-0 inline-flex items-center px-6 py-3.5 rounded-xl bg-white text-blue-600 font-bold text-sm shadow-md hover:bg-blue-50 transition-all duration-200 hover:-translate-y-0.5"
                href="#schedule"
              >
                <span>Build My Growth System</span>
                <span className="ml-1.5">→</span>
              </a>
            </div>
          </div>
        </section>


        {/* 3 THINGS HOLDING YOUR BUSINESS BACK */}
        <StruggleSection />

        {/* SPEED MATRIX / VELOCITY BLUEPRINT */}
        <section className="py-24 relative" id="speed-matrix">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                Why We Ship in 5–15 Days, Not 6 Months
              </h2>
              <p className="text-slate-600 text-base mt-3">
                Traditional agencies pad hours with bureaucratic review cycles. SmartOnward Technologies works like a high-performance software engineering sprint.
              </p>
            </div>

            {/* Sprint Visual Timeline */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {/* Phase 1 */}
              <div className="bg-white/80 backdrop-blur-md p-5 rounded-xl border border-white/60 shadow-sm hover:border-blue-400 transition-all">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold text-blue-600">DAYS 01–02</span>
                  <span className="w-2 h-2 rounded-full bg-blue-500" />
                </div>
                <h4 className="font-bold text-slate-900 text-base">Friction Audit</h4>
                <p className="text-xs text-slate-500 mt-2">
                  Full teardown of conversion bottlenecks, offer framing, and attribution leaks.
                </p>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center text-[11px] font-mono text-slate-400">
                  Deliverable: Growth Blueprint
                </div>
              </div>

              {/* Phase 2 */}
              <div className="bg-white/80 backdrop-blur-md p-5 rounded-xl border border-white/60 shadow-sm hover:border-blue-400 transition-all">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold text-blue-600">DAYS 03–04</span>
                  <span className="w-2 h-2 rounded-full bg-blue-500" />
                </div>
                <h4 className="font-bold text-slate-900 text-base">System Schematic</h4>
                <p className="text-xs text-slate-500 mt-2">
                  Wireframes, conversion psychology paths, and technical database models locked.
                </p>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center text-[11px] font-mono text-slate-400">
                  Deliverable: Clickable Prototype
                </div>
              </div>

              {/* Phase 3 */}
              <div className="bg-white/80 backdrop-blur-md p-5 rounded-xl border-2 border-blue-500 shadow-md relative">
                <div className="absolute -top-3 left-4 bg-blue-600 text-white text-[10px] font-mono font-bold px-2 py-0.5 rounded uppercase">
                  Core Engineering
                </div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold text-blue-600">DAYS 05–10</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                </div>
                <h4 className="font-bold text-slate-900 text-base">Production Build</h4>
                <p className="text-xs text-slate-500 mt-2">
                  Headless frontend development, high-speed CDN assets, API integrations, and webhook setup.
                </p>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center text-[11px] font-mono text-emerald-600 font-semibold">
                  Deliverable: Staging Deployment
                </div>
              </div>

              {/* Phase 4 */}
              <div className="bg-white/80 backdrop-blur-md p-5 rounded-xl border border-white/60 shadow-sm hover:border-blue-400 transition-all">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold text-blue-600">DAYS 11–12</span>
                  <span className="w-2 h-2 rounded-full bg-blue-500" />
                </div>
                <h4 className="font-bold text-slate-900 text-base">Telemetry QA</h4>
                <p className="text-xs text-slate-500 mt-2">
                  End-to-end stress testing, synthetic form checkouts, and pixel attribution audit.
                </p>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center text-[11px] font-mono text-slate-400">
                  Deliverable: 100% Quality Score
                </div>
              </div>

              {/* Phase 5 */}
              <div className="bg-white/80 backdrop-blur-md p-5 rounded-xl border border-white/60 shadow-sm hover:border-blue-400 transition-all">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold text-emerald-600">DAYS 13–15</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                </div>
                <h4 className="font-bold text-slate-900 text-base">Live Scale</h4>
                <p className="text-xs text-slate-500 mt-2">
                  Domain cutover, automated ad flywheels launched, and live lead alerts switched on.
                </p>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center text-[11px] font-mono text-blue-600 font-semibold">
                  Deliverable: Active Revenue Pipeline
                </div>
              </div>
            </div>

            {/* Comparative Efficiency Meter */}
            <div className="mt-12 bg-white/80 backdrop-blur-md rounded-xl border border-white/60 p-6 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 font-bold text-xl">
                  ⚡
                </div>
                <div>
                  <h5 className="font-bold text-slate-900 text-sm sm:text-base">Guaranteed Turnaround SLA</h5>
                  <p className="text-xs text-slate-500">Every deployment is bound by our strict written timeline warranty.</p>
                </div>
              </div>
              <div className="flex items-center space-x-6">
                <div className="text-right">
                  <div className="text-xs font-mono text-slate-400 uppercase">Legacy Agency SLA</div>
                  <div className="font-mono font-bold text-slate-400 line-through">60–120 Days</div>
                </div>
                <div className="h-8 w-px bg-slate-200" />
                <div className="text-right">
                  <div className="text-xs font-mono text-blue-600 uppercase font-semibold">SmartOnward Technologies SLA</div>
                  <div className="font-mono font-bold text-xl text-blue-600">5–15 Days Max</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* HOW WE WORK / PROCESS */}
        <section className="py-24 bg-white/60 backdrop-blur-md border-y border-slate-200/80 relative" id="process">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
                From idea to <span className="text-blue-600 italic">impact.</span>
              </h2>
              <p className="mt-6 text-sm sm:text-base text-slate-500 leading-relaxed max-w-2xl mx-auto">
                A clear, structured process so you know what is happening, why it matters and what comes next.
              </p>
            </div>

            <div className="relative max-w-6xl mx-auto">
              <style>{`
                @keyframes dashLine {
                  to { stroke-dashoffset: -32; }
                }
                .animate-dash-line {
                  animation: dashLine 2s linear infinite;
                }
                @keyframes bgSlide {
                  to { background-position: 0 16px; }
                }
                .animate-bg-slide {
                  animation: bgSlide 1s linear infinite;
                }
              `}</style>

              {/* SVG Zig-Zag Line for Desktop */}
              <div className="hidden md:block absolute top-0 left-0 w-full h-[240px] z-0">
                <svg className="w-full h-full" viewBox="0 0 1200 240" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#2563eb" />
                      <stop offset="50%" stopColor="#a855f7" />
                      <stop offset="100%" stopColor="#10b981" />
                    </linearGradient>
                  </defs>

                  {/* Background Track */}
                  <path
                    d="M 100 32 L 300 208 L 500 32 L 700 208 L 900 32 L 1100 208"
                    fill="none"
                    stroke="#e2e8f0"
                    strokeWidth="2"
                    strokeDasharray="6 6"
                  />

                  {/* Moving Gradient Line */}
                  <path
                    d="M 100 32 L 300 208 L 500 32 L 700 208 L 900 32 L 1100 208"
                    fill="none"
                    stroke="url(#pathGradient)"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeDasharray="150 1500"
                  >
                    <animate
                      attributeName="stroke-dashoffset"
                      from="150"
                      to="-1332"
                      dur="3s"
                      repeatCount="indefinite"
                    />
                  </path>
                </svg>
              </div>

              {/* Vertical Line for Mobile (Moving) */}
              <div
                className="md:hidden absolute left-1/2 top-8 bottom-8 w-[2px] -translate-x-1/2 z-0 animate-bg-slide opacity-50"
                style={{ backgroundImage: 'linear-gradient(to bottom, #94a3b8 50%, transparent 50%)', backgroundSize: '2px 16px' }}
              ></div>

              <div className="flex flex-col md:flex-row justify-between relative z-10 gap-10 md:gap-4 md:h-[240px]">
                {/* Step 1 (Odd: Circle Top, Text Bottom) */}
                <div className="flex flex-col justify-between items-center text-center w-full md:w-1/6 h-full">
                  <div className="w-[72px] h-[72px] rounded-full bg-blue-600 text-white flex flex-col items-center justify-center shadow-lg shadow-blue-600/20 shrink-0 relative z-10 mb-5 md:mb-0">
                    <span className="text-[10px] font-black leading-none tracking-tight">Discover</span>
                  </div>
                  <div className="bg-white/80 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none p-4 md:p-0 rounded-2xl shadow-sm md:shadow-none border border-slate-100 md:border-transparent w-full mt-auto">
                    <h3 className="text-[15px] font-black text-slate-900 mb-2">Understand</h3>
                    <p className="text-[13px] text-slate-500 leading-relaxed px-2">Goals, audience, offer &amp; current challenges.</p>
                  </div>
                </div>

                {/* Step 2 (Even: Text Top, Circle Bottom) */}
                <div className="flex flex-col md:flex-col-reverse justify-between items-center text-center w-full md:w-1/6 h-full">
                  <div className="w-[72px] h-[72px] rounded-full bg-[#009b9f] text-white flex flex-col items-center justify-center shadow-lg shadow-teal-500/20 shrink-0 relative z-10 mb-5 md:mb-0 md:mt-0">
                    <span className="text-[10px] font-black leading-none tracking-tight">Strategize</span>
                  </div>
                  <div className="bg-white/80 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none p-4 md:p-0 rounded-2xl shadow-sm md:shadow-none border border-slate-100 md:border-transparent w-full mb-auto">
                    <h3 className="text-[15px] font-black text-slate-900 mb-2">Plan</h3>
                    <p className="text-[13px] text-slate-500 leading-relaxed px-2">The right roadmap for your business.</p>
                  </div>
                </div>

                {/* Step 3 (Odd: Circle Top, Text Bottom) */}
                <div className="flex flex-col justify-between items-center text-center w-full md:w-1/6 h-full">
                  <div className="w-[72px] h-[72px] rounded-full bg-purple-500 text-white flex flex-col items-center justify-center shadow-lg shadow-purple-500/20 shrink-0 relative z-10 mb-5 md:mb-0">
                    <span className="text-[10px] font-black leading-none tracking-tight">Build</span>
                  </div>
                  <div className="bg-white/80 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none p-4 md:p-0 rounded-2xl shadow-sm md:shadow-none border border-slate-100 md:border-transparent w-full mt-auto">
                    <h3 className="text-[15px] font-black text-slate-900 mb-2">Create</h3>
                    <p className="text-[13px] text-slate-500 leading-relaxed px-2">Design, content, technology &amp; systems.</p>
                  </div>
                </div>

                {/* Step 4 (Even: Text Top, Circle Bottom) */}
                <div className="flex flex-col md:flex-col-reverse justify-between items-center text-center w-full md:w-1/6 h-full">
                  <div className="w-[72px] h-[72px] rounded-full bg-amber-500 text-white flex flex-col items-center justify-center shadow-lg shadow-amber-500/20 shrink-0 relative z-10 mb-5 md:mb-0 md:mt-0">
                    <span className="text-[10px] font-black leading-none tracking-tight">Launch</span>
                  </div>
                  <div className="bg-white/80 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none p-4 md:p-0 rounded-2xl shadow-sm md:shadow-none border border-slate-100 md:border-transparent w-full mb-auto">
                    <h3 className="text-[15px] font-black text-slate-900 mb-2">Activate</h3>
                    <p className="text-[13px] text-slate-500 leading-relaxed px-2">Connect tools, publish assets &amp; go live.</p>
                  </div>
                </div>

                {/* Step 5 (Odd: Circle Top, Text Bottom) */}
                <div className="flex flex-col justify-between items-center text-center w-full md:w-1/6 h-full">
                  <div className="w-[72px] h-[72px] rounded-full bg-emerald-500 text-white flex flex-col items-center justify-center shadow-lg shadow-emerald-500/20 shrink-0 relative z-10 mb-5 md:mb-0">
                    <span className="text-[10px] font-black leading-none tracking-tight">Optimize</span>
                  </div>
                  <div className="bg-white/80 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none p-4 md:p-0 rounded-2xl shadow-sm md:shadow-none border border-slate-100 md:border-transparent w-full mt-auto">
                    <h3 className="text-[15px] font-black text-slate-900 mb-2">Improve</h3>
                    <p className="text-[13px] text-slate-500 leading-relaxed px-2">Review performance and refine what matters.</p>
                  </div>
                </div>

                {/* Step 6 (Even: Text Top, Circle Bottom) */}
                <div className="flex flex-col md:flex-col-reverse justify-between items-center text-center w-full md:w-1/6 h-full">
                  <div className="w-[72px] h-[72px] rounded-full bg-green-600 text-white flex flex-col items-center justify-center shadow-lg shadow-green-600/20 shrink-0 relative z-10 mb-5 md:mb-0 md:mt-0">
                    <span className="text-[10px] font-black leading-none tracking-tight">Grow</span>
                  </div>
                  <div className="bg-white/80 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none p-4 md:p-0 rounded-2xl shadow-sm md:shadow-none border border-slate-100 md:border-transparent w-full mb-auto">
                    <h3 className="text-[15px] font-black text-slate-900 mb-2">Move onward</h3>
                    <p className="text-[13px] text-slate-500 leading-relaxed px-2">Keep improving your digital engine.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* PHASE CARDS (Accordion layout) */}
            <div className="mt-24 relative z-10 flex flex-col lg:flex-row -space-y-4 lg:space-y-0 lg:-space-x-6 h-auto lg:h-[420px] w-full px-4 lg:px-8 max-w-7xl mx-auto">

              {/* Card 1: Discover */}
              <div className="group relative flex-1 lg:hover:flex-[4] transition-all duration-500 ease-out overflow-hidden bg-white/95 backdrop-blur-md rounded-3xl shadow-xl lg:shadow-[-15px_0_30px_-10px_rgba(0,0,0,0.1)] hover:shadow-2xl flex flex-col min-h-[120px] lg:min-h-0 z-10 hover:z-30 origin-left">
                <div className="absolute inset-0 lg:w-full p-5 lg:p-8 flex flex-row lg:flex-col items-center lg:items-center justify-between z-10 transition-opacity duration-300 group-hover:opacity-0 bg-slate-50/50 lg:bg-transparent">
                  <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-xl bg-blue-50 flex flex-shrink-0 items-center justify-center text-blue-600 border border-blue-100/80 lg:mb-6">
                    <svg className="w-6 h-6 lg:w-7 lg:h-7" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                  </div>
                  <span className="hidden lg:flex flex-1 items-center justify-center -rotate-180 [writing-mode:vertical-rl] text-xl font-bold text-slate-800 tracking-wider whitespace-nowrap">
                    Discover
                  </span>
                  <span className="lg:hidden text-lg font-bold text-slate-800 ml-4 flex-1">Discover</span>
                  <span className="mt-auto inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-50 text-blue-600 font-mono font-bold text-xs border border-blue-100/80">
                    01
                  </span>
                </div>

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 p-6 lg:p-10 flex flex-col justify-between z-20 bg-white w-full lg:min-w-[450px]">
                  <div className="absolute -right-10 -bottom-10 w-44 h-44 bg-blue-100/40 rounded-full blur-2xl pointer-events-none group-hover:scale-125 transition-transform duration-500" />
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex items-center justify-end mb-8">
                      <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-50 text-blue-600 font-mono font-bold text-sm border border-blue-100/80">
                        01
                      </span>
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-black text-slate-900 tracking-tight whitespace-nowrap mb-2">
                      Discover <span className="font-normal text-slate-400">/ Understand</span>
                    </h3>
                    <p className="text-base text-slate-500 leading-relaxed mb-6 whitespace-normal max-w-sm">
                      Goals, audience, offer &amp; current bottlenecks. We extract deep requirements and isolate the core growth drivers.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-8 max-w-sm">
                      <span className="px-2.5 py-1.5 bg-slate-50 border border-slate-100 text-slate-500 rounded text-xs font-semibold">Fact-find Audit</span>
                      <span className="px-2.5 py-1.5 bg-slate-50 border border-slate-100 text-slate-500 rounded text-xs font-semibold">Target Persona</span>
                      <span className="px-2.5 py-1.5 bg-slate-50 border border-slate-100 text-slate-500 rounded text-xs font-semibold">CPI Baseline</span>
                    </div>
                    <div className="mt-auto pt-6 border-t border-slate-100 flex items-center justify-between text-xs font-mono relative z-10">
                      <span className="text-slate-400">Sync: 60m Discovery Call</span>
                      <span className="text-blue-600 font-bold">SLA: 48h</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2: Strategize */}
              <div className="group relative flex-1 lg:hover:flex-[4] transition-all duration-500 ease-out overflow-hidden bg-white/95 backdrop-blur-md rounded-3xl shadow-xl lg:shadow-[-15px_0_30px_-10px_rgba(0,0,0,0.1)] hover:shadow-2xl flex flex-col min-h-[120px] lg:min-h-0 z-10 hover:z-30 origin-left">
                <div className="absolute inset-0 lg:w-full p-5 lg:p-8 flex flex-row lg:flex-col items-center lg:items-center justify-between z-10 transition-opacity duration-300 group-hover:opacity-0 bg-slate-50/50 lg:bg-transparent">
                  <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-xl bg-teal-50 flex flex-shrink-0 items-center justify-center text-teal-600 border border-teal-100/80 lg:mb-6">
                    <svg className="w-6 h-6 lg:w-7 lg:h-7" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                  </div>
                  <span className="hidden lg:flex flex-1 items-center justify-center -rotate-180 [writing-mode:vertical-rl] text-xl font-bold text-slate-800 tracking-wider whitespace-nowrap">
                    Strategize
                  </span>
                  <span className="lg:hidden text-lg font-bold text-slate-800 ml-4 flex-1">Strategize</span>
                  <span className="mt-auto inline-flex items-center justify-center w-8 h-8 rounded-full bg-teal-50 text-teal-600 font-mono font-bold text-xs border border-teal-100/80">
                    02
                  </span>
                </div>

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 p-6 lg:p-10 flex flex-col justify-between z-20 bg-white w-full lg:min-w-[450px]">
                  <div className="absolute -right-10 -bottom-10 w-44 h-44 bg-teal-100/40 rounded-full blur-2xl pointer-events-none group-hover:scale-125 transition-transform duration-500" />
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex items-center justify-end mb-8">
                      <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-teal-50 text-teal-600 font-mono font-bold text-sm border border-teal-100/80">
                        02
                      </span>
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-black text-slate-900 tracking-tight whitespace-nowrap mb-2">
                      Strategize <span className="font-normal text-slate-400">/ Plan</span>
                    </h3>
                    <p className="text-base text-slate-500 leading-relaxed mb-6 whitespace-normal max-w-sm">
                      The right roadmap for your business. Architecture blueprints, scope containment, sprint timeline &amp; tech selection.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-8 max-w-sm">
                      <span className="px-2.5 py-1.5 bg-slate-50 border border-slate-100 text-slate-500 rounded text-xs font-semibold">Tech Architecture</span>
                      <span className="px-2.5 py-1.5 bg-slate-50 border border-slate-100 text-slate-500 rounded text-xs font-semibold">Sitemap Tree</span>
                      <span className="px-2.5 py-1.5 bg-slate-50 border border-slate-100 text-slate-500 rounded text-xs font-semibold">Sprint Scope SLA</span>
                    </div>
                    <div className="mt-auto pt-6 border-t border-slate-100 flex items-center justify-between text-xs font-mono relative z-10">
                      <span className="text-slate-400">Async Loom Blueprint</span>
                      <span className="text-[#009b9f] font-bold">SLA: 48h</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 3: Build */}
              <div className="group relative flex-1 lg:hover:flex-[4] transition-all duration-500 ease-out overflow-hidden bg-white/95 backdrop-blur-md rounded-3xl shadow-xl lg:shadow-[-15px_0_30px_-10px_rgba(0,0,0,0.1)] hover:shadow-2xl flex flex-col min-h-[120px] lg:min-h-0 z-10 hover:z-30 origin-left">
                <div className="absolute inset-0 lg:w-full p-5 lg:p-8 flex flex-row lg:flex-col items-center lg:items-center justify-between z-10 transition-opacity duration-300 group-hover:opacity-0 bg-slate-50/50 lg:bg-transparent">
                  <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-xl bg-purple-50 flex flex-shrink-0 items-center justify-center text-purple-600 border border-purple-100/80 lg:mb-6">
                    <svg className="w-6 h-6 lg:w-7 lg:h-7" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
                  </div>
                  <span className="hidden lg:flex flex-1 items-center justify-center -rotate-180 [writing-mode:vertical-rl] text-xl font-bold text-slate-800 tracking-wider whitespace-nowrap">
                    Build
                  </span>
                  <span className="lg:hidden text-lg font-bold text-slate-800 ml-4 flex-1">Build</span>
                  <span className="mt-auto inline-flex items-center justify-center w-8 h-8 rounded-full bg-purple-50 text-purple-600 font-mono font-bold text-xs border border-purple-100/80">
                    03
                  </span>
                </div>

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 p-6 lg:p-10 flex flex-col justify-between z-20 bg-white w-full lg:min-w-[450px]">
                  <div className="absolute -right-10 -bottom-10 w-44 h-44 bg-purple-100/40 rounded-full blur-2xl pointer-events-none group-hover:scale-125 transition-transform duration-500" />
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex items-center justify-end mb-8">
                      <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-purple-50 text-purple-600 font-mono font-bold text-sm border border-purple-100/80">
                        03
                      </span>
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-black text-slate-900 tracking-tight whitespace-nowrap mb-2">
                      Build <span className="font-normal text-slate-400">/ Create</span>
                    </h3>
                    <p className="text-base text-slate-500 leading-relaxed mb-6 whitespace-normal max-w-sm">
                      Design, content, technology &amp; systems. Ultra-responsive frontends, integrated automations, and polished UI design.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-8 max-w-sm">
                      <span className="px-2.5 py-1.5 bg-slate-50 border border-slate-100 text-slate-500 rounded text-xs font-semibold">Tailwind / React</span>
                      <span className="px-2.5 py-1.5 bg-slate-50 border border-slate-100 text-slate-500 rounded text-xs font-semibold">Figma System</span>
                      <span className="px-2.5 py-1.5 bg-purple-50 border border-purple-100 text-purple-700 rounded text-xs font-semibold">Copy &amp; Assets</span>
                    </div>
                    <div className="mt-auto pt-6 border-t border-slate-100 flex items-center justify-between text-xs font-mono relative z-10">
                      <span className="text-slate-400">Staging Preview URL</span>
                      <span className="text-purple-600 font-bold">SLA: 5 Days</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 4: Launch */}
              <div className="group relative flex-1 lg:hover:flex-[4] transition-all duration-500 ease-out overflow-hidden bg-white/95 backdrop-blur-md rounded-3xl shadow-xl lg:shadow-[-15px_0_30px_-10px_rgba(0,0,0,0.1)] hover:shadow-2xl flex flex-col min-h-[120px] lg:min-h-0 z-10 hover:z-30 origin-left">
                <div className="absolute inset-0 lg:w-full p-5 lg:p-8 flex flex-row lg:flex-col items-center lg:items-center justify-between z-10 transition-opacity duration-300 group-hover:opacity-0 bg-slate-50/50 lg:bg-transparent">
                  <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-xl bg-amber-50 flex flex-shrink-0 items-center justify-center text-amber-600 border border-amber-100/80 lg:mb-6">
                    <svg className="w-6 h-6 lg:w-7 lg:h-7" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                  </div>
                  <span className="hidden lg:flex flex-1 items-center justify-center -rotate-180 [writing-mode:vertical-rl] text-xl font-bold text-slate-800 tracking-wider whitespace-nowrap">
                    Launch
                  </span>
                  <span className="lg:hidden text-lg font-bold text-slate-800 ml-4 flex-1">Launch</span>
                  <span className="mt-auto inline-flex items-center justify-center w-8 h-8 rounded-full bg-amber-50 text-amber-600 font-mono font-bold text-xs border border-amber-100/80">
                    04
                  </span>
                </div>

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 p-6 lg:p-10 flex flex-col justify-between z-20 bg-white w-full lg:min-w-[450px]">
                  <div className="absolute -right-10 -bottom-10 w-44 h-44 bg-amber-100/40 rounded-full blur-2xl pointer-events-none group-hover:scale-125 transition-transform duration-500" />
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex items-center justify-end mb-8">
                      <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-amber-50 text-amber-600 font-mono font-bold text-sm border border-amber-100/80">
                        04
                      </span>
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-black text-slate-900 tracking-tight whitespace-nowrap mb-2">
                      Launch <span className="font-normal text-slate-400">/ Activate</span>
                    </h3>
                    <p className="text-base text-slate-500 leading-relaxed mb-6 whitespace-normal max-w-sm">
                      Connect tools, publish assets &amp; go live. Domain verification, payment gateways, CRM integrations, and SSL provisioning.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-8 max-w-sm">
                      <span className="px-2.5 py-1.5 bg-slate-50 border border-slate-100 text-slate-500 rounded text-xs font-semibold">Live Webhooks</span>
                      <span className="px-2.5 py-1.5 bg-slate-50 border border-slate-100 text-slate-500 rounded text-xs font-semibold">DNS Config</span>
                      <span className="px-2.5 py-1.5 bg-amber-50 border border-amber-100 text-amber-700 rounded text-xs font-semibold">Production QA</span>
                    </div>
                    <div className="mt-auto pt-6 border-t border-slate-100 flex items-center justify-between text-xs font-mono relative z-10">
                      <span className="text-slate-400">Zero-Downtime Push</span>
                      <span className="text-amber-600 font-bold">SLA: 24h</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 5: Optimize */}
              <div className="group relative flex-1 lg:hover:flex-[4] transition-all duration-500 ease-out overflow-hidden bg-white/95 backdrop-blur-md rounded-3xl shadow-xl lg:shadow-[-15px_0_30px_-10px_rgba(0,0,0,0.1)] hover:shadow-2xl flex flex-col min-h-[120px] lg:min-h-0 z-10 hover:z-30 origin-left">
                <div className="absolute inset-0 lg:w-full p-5 lg:p-8 flex flex-row lg:flex-col items-center lg:items-center justify-between z-10 transition-opacity duration-300 group-hover:opacity-0 bg-slate-50/50 lg:bg-transparent">
                  <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-xl bg-emerald-50 flex flex-shrink-0 items-center justify-center text-emerald-600 border border-emerald-100/80 lg:mb-6">
                    <svg className="w-6 h-6 lg:w-7 lg:h-7" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" /><path strokeLinecap="round" strokeLinejoin="round" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" /></svg>
                  </div>
                  <span className="hidden lg:flex flex-1 items-center justify-center -rotate-180 [writing-mode:vertical-rl] text-xl font-bold text-slate-800 tracking-wider whitespace-nowrap">
                    Optimize
                  </span>
                  <span className="lg:hidden text-lg font-bold text-slate-800 ml-4 flex-1">Optimize</span>
                  <span className="mt-auto inline-flex items-center justify-center w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 font-mono font-bold text-xs border border-emerald-100/80">
                    05
                  </span>
                </div>

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 p-6 lg:p-10 flex flex-col justify-between z-20 bg-white w-full lg:min-w-[450px]">
                  <div className="absolute -right-10 -bottom-10 w-44 h-44 bg-emerald-100/40 rounded-full blur-2xl pointer-events-none group-hover:scale-125 transition-transform duration-500" />
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex items-center justify-end mb-8">
                      <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 font-mono font-bold text-sm border border-emerald-100/80">
                        05
                      </span>
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-black text-slate-900 tracking-tight whitespace-nowrap mb-2">
                      Optimize <span className="font-normal text-slate-400">/ Improve</span>
                    </h3>
                    <p className="text-base text-slate-500 leading-relaxed mb-6 whitespace-normal max-w-sm">
                      Review real user performance and refine what matters. Heat maps, page speed telemetry, conversion rate optimization.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-8 max-w-sm">
                      <span className="px-2.5 py-1.5 bg-slate-50 border border-slate-100 text-slate-500 rounded text-xs font-semibold">GA4 Telemetry</span>
                      <span className="px-2.5 py-1.5 bg-slate-50 border border-slate-100 text-slate-500 rounded text-xs font-semibold">Core Web Vitals</span>
                      <span className="px-2.5 py-1.5 bg-emerald-50 border border-emerald-100 text-emerald-700 rounded text-xs font-semibold">A/B Testing</span>
                    </div>
                    <div className="mt-auto pt-6 border-t border-slate-100 flex items-center justify-between text-xs font-mono relative z-10">
                      <span className="text-slate-400">Weekly Heatmap Log</span>
                      <span className="text-emerald-600 font-bold">SLA: 72h</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 6: Grow */}
              <div className="group relative flex-1 lg:hover:flex-[4] transition-all duration-500 ease-out overflow-hidden bg-white/95 backdrop-blur-md rounded-3xl shadow-xl lg:shadow-[-15px_0_30px_-10px_rgba(0,0,0,0.1)] hover:shadow-2xl flex flex-col min-h-[120px] lg:min-h-0 z-10 hover:z-30 origin-left">
                <div className="absolute inset-0 lg:w-full p-5 lg:p-8 flex flex-row lg:flex-col items-center lg:items-center justify-between z-10 transition-opacity duration-300 group-hover:opacity-0 bg-slate-50/50 lg:bg-transparent">
                  <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-xl bg-green-50 flex flex-shrink-0 items-center justify-center text-green-600 border border-green-100/80 lg:mb-6">
                    <svg className="w-6 h-6 lg:w-7 lg:h-7" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                  </div>
                  <span className="hidden lg:flex flex-1 items-center justify-center -rotate-180 [writing-mode:vertical-rl] text-xl font-bold text-slate-800 tracking-wider whitespace-nowrap">
                    Grow
                  </span>
                  <span className="lg:hidden text-lg font-bold text-slate-800 ml-4 flex-1">Grow</span>
                  <span className="mt-auto inline-flex items-center justify-center w-8 h-8 rounded-full bg-green-50 text-green-600 font-mono font-bold text-xs border border-green-100/80">
                    06
                  </span>
                </div>

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 p-6 lg:p-10 flex flex-col justify-between z-20 bg-white w-full lg:min-w-[450px]">
                  <div className="absolute -right-10 -bottom-10 w-44 h-44 bg-green-100/40 rounded-full blur-2xl pointer-events-none group-hover:scale-125 transition-transform duration-500" />
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex items-center justify-end mb-8">
                      <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-green-50 text-green-600 font-mono font-bold text-sm border border-green-100/80">
                        06
                      </span>
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-black text-slate-900 tracking-tight whitespace-nowrap mb-2">
                      Grow <span className="font-normal text-slate-400">/ Move onward</span>
                    </h3>
                    <p className="text-base text-slate-500 leading-relaxed mb-6 whitespace-normal max-w-sm">
                      Keep improving your digital engine. Feature iteration, autonomous marketing funnels, and continuous performance boosts.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-8 max-w-sm">
                      <span className="px-2.5 py-1.5 bg-slate-50 border border-slate-100 text-slate-500 rounded text-xs font-semibold">Growth Flywheel</span>
                      <span className="px-2.5 py-1.5 bg-slate-50 border border-slate-100 text-slate-500 rounded text-xs font-semibold">SEO Moats</span>
                      <span className="px-2.5 py-1.5 bg-green-50 border border-green-100 text-green-700 rounded text-xs font-semibold">Monthly Iteration</span>
                    </div>
                    <div className="mt-auto pt-6 border-t border-slate-100 flex items-center justify-between text-xs font-mono relative z-10">
                      <span className="text-slate-400">Bi-Weekly Sync</span>
                      <span className="text-green-600 font-bold">Routine / Scale</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* WHO WE HELP */}
        <section className="py-24 relative" id="who-we-help">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight leading-tight">
                Built for businesses ready to <span className="text-blue-600 italic">move forward.</span>
              </h2>
              <p className="mt-4 text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
                Whether you are starting from scratch or improving an existing digital presence, we adapt the solution to where your business is today.
              </p>
            </div>

            {/* 3D Coverflow Carousel */}
            <CoverflowCarousel />
          </div>
        </section>

        {/* WHAT WE BUILD SECTION */}
        <section className="py-24 bg-white/60 backdrop-blur-md border-y border-slate-200/80 relative" id="capabilities">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
                From digital presence to <span className="text-blue-600 italic">business systems.</span>
              </h2>
              <p className="mt-6 text-sm sm:text-[15px] text-slate-500 max-w-2xl mx-auto leading-relaxed">
                Our work is designed to solve practical business needs - not simply to add another digital asset.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Card 1 */}
              <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.03)] relative overflow-hidden group hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300">
                <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-blue-50/80 rounded-full blur-2xl group-hover:bg-blue-100/80 transition-colors duration-500" />
                <div className="relative z-10">
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-3 tracking-tight">
                    Websites that explain and convert.
                  </h3>
                  <p className="text-[13px] sm:text-sm text-slate-500 leading-relaxed mb-8 max-w-md">
                    Business websites, landing pages and UI/UX experiences that make your offer easy to understand and easy to act on.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-slate-50 border border-slate-100 text-slate-600 rounded-full text-[10px] sm:text-[11px] font-bold tracking-wide">Business Websites</span>
                    <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-slate-50 border border-slate-100 text-slate-600 rounded-full text-[10px] sm:text-[11px] font-bold tracking-wide">Landing Pages</span>
                    <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-slate-50 border border-slate-100 text-slate-600 rounded-full text-[10px] sm:text-[11px] font-bold tracking-wide">UI/UX</span>
                    <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-slate-50 border border-slate-100 text-slate-600 rounded-full text-[10px] sm:text-[11px] font-bold tracking-wide">SEO Ready</span>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.03)] relative overflow-hidden group hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300">
                <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-blue-50/80 rounded-full blur-2xl group-hover:bg-blue-100/80 transition-colors duration-500" />
                <div className="relative z-10">
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-3 tracking-tight">
                    A brand people can recognize.
                  </h3>
                  <p className="text-[13px] sm:text-sm text-slate-500 leading-relaxed mb-8 max-w-md">
                    Visual identity, social content, reels and marketing assets that create consistency across every customer touchpoint.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-slate-50 border border-slate-100 text-slate-600 rounded-full text-[10px] sm:text-[11px] font-bold tracking-wide">Brand Identity</span>
                    <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-slate-50 border border-slate-100 text-slate-600 rounded-full text-[10px] sm:text-[11px] font-bold tracking-wide">Reels</span>
                    <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-slate-50 border border-slate-100 text-slate-600 rounded-full text-[10px] sm:text-[11px] font-bold tracking-wide">Social Content</span>
                    <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-slate-50 border border-slate-100 text-slate-600 rounded-full text-[10px] sm:text-[11px] font-bold tracking-wide">Creative</span>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.03)] relative overflow-hidden group hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300">
                <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-blue-50/80 rounded-full blur-2xl group-hover:bg-blue-100/80 transition-colors duration-500" />
                <div className="relative z-10">
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-3 tracking-tight">
                    Marketing that has a job to do.
                  </h3>
                  <p className="text-[13px] sm:text-sm text-slate-500 leading-relaxed mb-8 max-w-md">
                    Search, paid campaigns, social media and lead-generation systems built around visibility, enquiries and measurable goals.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-slate-50 border border-slate-100 text-slate-600 rounded-full text-[10px] sm:text-[11px] font-bold tracking-wide">Google Ads</span>
                    <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-slate-50 border border-slate-100 text-slate-600 rounded-full text-[10px] sm:text-[11px] font-bold tracking-wide">Meta Ads</span>
                    <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-slate-50 border border-slate-100 text-slate-600 rounded-full text-[10px] sm:text-[11px] font-bold tracking-wide">SEO</span>
                    <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-slate-50 border border-slate-100 text-slate-600 rounded-full text-[10px] sm:text-[11px] font-bold tracking-wide">Lead Generation</span>
                  </div>
                </div>
              </div>

              {/* Card 4 */}
              <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.03)] relative overflow-hidden group hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300">
                <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-blue-50/80 rounded-full blur-2xl group-hover:bg-blue-100/80 transition-colors duration-500" />
                <div className="relative z-10">
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-3 tracking-tight">
                    Systems that work while you focus on business.
                  </h3>
                  <p className="text-[13px] sm:text-sm text-slate-500 leading-relaxed mb-8 max-w-md">
                    AI agents, chatbots, WhatsApp workflows and automated follow-ups that reduce manual work and improve response time.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-slate-50 border border-slate-100 text-slate-600 rounded-full text-[10px] sm:text-[11px] font-bold tracking-wide">AI Agents</span>
                    <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-slate-50 border border-slate-100 text-slate-600 rounded-full text-[10px] sm:text-[11px] font-bold tracking-wide">Chatbots</span>
                    <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-slate-50 border border-slate-100 text-slate-600 rounded-full text-[10px] sm:text-[11px] font-bold tracking-wide">WhatsApp</span>
                    <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-slate-50 border border-slate-100 text-slate-600 rounded-full text-[10px] sm:text-[11px] font-bold tracking-wide">Workflows</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Note */}
            <div className="mt-6 border border-slate-200/80 rounded-2xl p-4 sm:p-6 bg-white/70 backdrop-blur-md text-center shadow-sm">
              <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                <strong className="text-slate-900 font-bold">Looking for something specific?</strong> SmartOnward Technologies can combine multiple capabilities into one project - for example, a new website + brand identity + content system + lead-generation setup + AI chatbot.
              </p>
            </div>
          </div>
        </section>

        <GrowthAuditCTA />
      </main>

      <Footer />
    </>
  );
}
