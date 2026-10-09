"use client";

import Link from "next/link";
import GrowthAuditCTA from "../components/GrowthAuditCTA";
import Footer from "../components/Footer";

export default function BrandingAndVisualDesignPage() {
  return (
    <>
      <main className="relative z-10">
        {/* HERO SECTION */}
        <section className="relative pt-24 sm:pt-32 pb-20 md:pb-28 text-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto flex flex-col items-center">

            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-black text-slate-950 tracking-tight leading-[1.08] max-w-4xl">
              Build a brand people <span className="engineer-highlight italic">recognize</span> and <em>remember.</em>
            </h1>

            <p className="mt-8 text-lg sm:text-xl text-slate-600 max-w-2xl leading-relaxed font-medium">
              We turn ideas into distinctive brand identities that look professional, feel consistent and give your business a visual presence built for growth.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
              <a
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold shadow-lg shadow-blue-500/20 hover:shadow-glow-blue transition-all duration-200 hover:-translate-y-0.5"
                href="#schedule"
              >
                <span>Build My Brand</span>
                <span className="ml-2 font-bold text-lg">→</span>
              </a>
              <a
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white hover:bg-slate-50 text-slate-900 font-bold shadow-md border border-slate-200/80 transition-all duration-200 hover:-translate-y-0.5"
                href="#services"
              >
                Explore Services
              </a>
            </div>
          </div>
        </section>

        {/* SERVICES - WHAT WE CREATE */}
        <section className="py-24 relative" id="services">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-4">
                More than a logo. <span className="text-blue-600 italic">A complete brand.</span>
              </h2>
              <p className="text-slate-600 text-lg">
                We create the visual building blocks your business needs to look credible everywhere - online, offline and across every customer touchpoint.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: "✦",
                  title: "Logo Design",
                  desc: "Distinctive logo concepts built around your business, audience and positioning.",
                  tags: ["Concepts", "Logo Suite"]
                },
                {
                  icon: "🎨",
                  title: "Brand Identity",
                  desc: "Colors, typography, visual direction and rules that make your brand instantly recognizable.",
                  tags: ["Color", "Typography"]
                },
                {
                  icon: "📘",
                  title: "Brand Guidelines",
                  desc: "A practical guide showing exactly how your logo and visual identity should be used.",
                  tags: ["Brand Book", "Usage Rules"]
                },
                {
                  icon: "💼",
                  title: "Business Collateral",
                  desc: "Professional visiting cards, letterheads, invoices, profiles and other business essentials.",
                  tags: ["Print", "Office"]
                },
                {
                  icon: "📱",
                  title: "Social Media Design",
                  desc: "Templates and visual systems that keep your Instagram, LinkedIn and other channels consistent.",
                  tags: ["Posts", "Templates"]
                },
                {
                  icon: "🚀",
                  title: "Launch & Campaign Design",
                  desc: "Creative assets for launches, promotions, events, ads and campaigns that need attention.",
                  tags: ["Campaigns", "Ads"]
                }
              ].map((service, idx) => (
                <div key={idx} className="bg-white/60 backdrop-blur-md rounded-2xl p-8 shadow-xl shadow-slate-200/50 border border-slate-100 hover:-translate-y-1 transition-transform duration-300">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-2xl mb-6 shadow-sm border border-blue-100">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">{service.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 rounded-lg bg-slate-100 text-slate-600 text-xs font-semibold">{tag}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* VISUAL IDENTITY SYSTEM */}
        <section className="py-24 relative" id="system">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-4">
                A brand system that stays <span className="text-blue-600 italic">consistent.</span>
              </h2>
              <p className="text-slate-600 text-lg">
                Your identity should work as one connected system - not a collection of random designs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-[2rem] p-8 shadow-xl shadow-slate-200/50 border border-slate-100">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Typography Direction</h3>
                <p className="text-slate-600 mb-8">Clear type hierarchy creates personality while keeping every communication easy to read.</p>
                <div className="p-6 bg-slate-50 rounded-xl border border-slate-200">
                  <div className="text-3xl font-black text-slate-900 mb-2">Your brand, <span className="text-blue-600 italic">your voice.</span></div>
                  <div className="text-sm text-slate-500">Headlines, supporting text and calls-to-action designed to work together.</div>
                </div>
              </div>
              <div className="bg-white rounded-[2rem] p-8 shadow-xl shadow-slate-200/50 border border-slate-100">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Color Language</h3>
                <p className="text-slate-600 mb-8">A focused palette gives your business a recognizable visual signature across every platform.</p>
                <div className="flex gap-4">
                  <div className="flex-1 aspect-square rounded-xl bg-blue-600 flex items-end p-3 text-[10px] font-bold text-white uppercase tracking-wider shadow-sm">Primary</div>
                  <div className="flex-1 aspect-square rounded-xl bg-slate-900 flex items-end p-3 text-[10px] font-bold text-white uppercase tracking-wider shadow-sm">Dark</div>
                  <div className="flex-1 aspect-square rounded-xl bg-emerald-500 flex items-end p-3 text-[10px] font-bold text-white uppercase tracking-wider shadow-sm">Accent</div>
                  <div className="flex-1 aspect-square rounded-xl bg-blue-50 flex items-end p-3 text-[10px] font-bold text-blue-900 uppercase tracking-wider border border-blue-100 shadow-sm">Light</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DELIVERABLES */}
        <section className="py-24 relative" id="deliverables">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-6 leading-tight">
                  Everything you need to <span className="text-blue-600 italic">show up professionally.</span>
                </h2>
                <p className="text-slate-600 text-lg mb-8">
                  The final package can be tailored to your business and stage - from a focused logo project to a complete visual identity.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: "Logo Suite", desc: "Primary, secondary, icon formats." },
                  { title: "Brand Colors", desc: "Primary, secondary palette." },
                  { title: "Typography", desc: "Font choices and hierarchy." },
                  { title: "Guidelines", desc: "Rules for consistent use." },
                  { title: "Business Cards", desc: "Professional print-ready." },
                  { title: "Social Templates", desc: "Reusable post designs." }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-slate-200 shadow-sm">
                    <h4 className="text-slate-900 font-bold mb-1">{item.title}</h4>
                    <p className="text-xs text-slate-500">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <GrowthAuditCTA />
      </main>
      <Footer />
    </>
  );
}
