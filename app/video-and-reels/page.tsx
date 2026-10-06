"use client";

import Link from "next/link";
import GrowthAuditCTA from "../components/GrowthAuditCTA";
import Footer from "../components/Footer";

export default function VideoAndReelsPage() {
  return (
    <>
      <main className="relative z-10">
        {/* HERO SECTION */}
        <section className="relative pt-24 sm:pt-32 pb-20 md:pb-28 text-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50/50 border border-blue-100 text-blue-600 text-xs font-bold tracking-wide uppercase mb-8 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
              Video &amp; Reels
            </div>
            
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-black text-slate-950 tracking-tight leading-[1.08] max-w-4xl">
              Content that makes people <span className="text-blue-600 italic">stop</span>, <em>watch</em> and remember.
            </h1>
            
            <p className="mt-8 text-lg sm:text-xl text-slate-600 max-w-2xl leading-relaxed font-medium">
              We create scroll-stopping videos, Reels and short-form content that bring your brand to life, communicate your message and keep your audience engaged.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
              <a
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold shadow-lg shadow-blue-500/20 hover:shadow-glow-blue transition-all duration-200 hover:-translate-y-0.5"
                href="#schedule"
              >
                <span>Create My Content</span>
                <span className="ml-2 font-bold text-lg">→</span>
              </a>
              <a
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white hover:bg-slate-50 text-slate-900 font-bold shadow-md border border-slate-200/80 transition-all duration-200 hover:-translate-y-0.5"
                href="#services"
              >
                Explore Services
              </a>
            </div>

            <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm font-semibold text-slate-500">
              <div className="flex items-center gap-2"><span className="text-emerald-500">✓</span> Short-form focused</div>
              <div className="flex items-center gap-2"><span className="text-emerald-500">✓</span> Brand aligned</div>
              <div className="flex items-center gap-2"><span className="text-emerald-500">✓</span> Platform ready</div>
            </div>
          </div>
        </section>

        {/* SERVICES - WHAT WE CREATE */}
        <section className="py-24 relative" id="services">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="text-blue-600 text-xs font-bold tracking-widest uppercase mb-3">What We Create</p>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-4">
                From one Reel to a <span className="text-blue-600 italic">complete content system.</span>
              </h2>
              <p className="text-slate-600 text-lg">
                As a full-fledged digital agency, we connect video with your branding, social media and marketing goals — not just random content.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: "🎬",
                  title: "Reels & Short Videos",
                  desc: "Fast-paced, engaging vertical videos designed for Instagram, YouTube Shorts and other short-form platforms.",
                  tags: ["Reels", "Shorts"]
                },
                {
                  icon: "🤳",
                  title: "UGC Content",
                  desc: "Natural, relatable product and service videos designed to feel authentic while staying aligned with your brand.",
                  tags: ["UGC", "Product"]
                },
                {
                  icon: "🤖",
                  title: "AI Video Creation",
                  desc: "AI-assisted visuals, avatars, voiceovers and creative concepts that help you produce content faster.",
                  tags: ["AI", "Voiceover"]
                },
                {
                  icon: "✂️",
                  title: "Video Editing",
                  desc: "Professional cuts, captions, transitions, sound design, pacing and visual polish for your existing footage.",
                  tags: ["Editing", "Captions"]
                },
                {
                  icon: "📦",
                  title: "Product Videos",
                  desc: "Creative demonstrations, product showcases and promotional videos that make your offering easier to understand.",
                  tags: ["Products", "Ads"]
                },
                {
                  icon: "📣",
                  title: "Ad Creatives",
                  desc: "Performance-minded video creatives built around hooks, offers and calls-to-action for digital campaigns.",
                  tags: ["Meta Ads", "Campaigns"]
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

        {/* WHY US */}
        <section className="py-24 relative" id="why">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-blue-600 text-xs font-bold tracking-widest uppercase mb-3">Why SmartOnward</p>
                <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-6 leading-tight">
                  We don&apos;t create videos just to <span className="text-blue-600 italic">fill your feed.</span>
                </h2>
                <p className="text-slate-600 text-lg mb-8">
                  We create content with a purpose — attention, awareness, engagement, leads or sales. And because we&apos;re a full-service agency, your video can work with your website, brand identity, social strategy and campaigns.
                </p>
              </div>

              <div className="bg-white rounded-[2rem] p-8 shadow-xl shadow-slate-200/50 border border-slate-100">
                <div className="space-y-6">
                  {[
                    { title: "Strong hooks", desc: "Openings designed to earn attention in the first seconds." },
                    { title: "Brand consistency", desc: "Visual style, colors and messaging aligned with your identity." },
                    { title: "Platform-native", desc: "Formats and pacing adapted for where the content is published." },
                    { title: "Repurposable", desc: "One core idea can become multiple useful content assets." }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center flex-shrink-0 border border-emerald-100">
                        <span className="text-emerald-500 font-bold text-sm">✓</span>
                      </div>
                      <div>
                        <h4 className="text-slate-900 font-bold mb-1">{item.title}</h4>
                        <p className="text-sm text-slate-600">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FORMATS */}
        <section className="py-24 relative" id="formats">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="text-blue-600 text-xs font-bold tracking-widest uppercase mb-3">Content Formats</p>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-4">
                One idea. <span className="text-blue-600 italic">Multiple ways to show it.</span>
              </h2>
              <p className="text-slate-600 text-lg">
                We can create content in the formats your audience already consumes — while keeping your visual identity consistent.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { shape: "9:16 REEL", title: "Instagram Reels", desc: "Vertical short-form videos built for fast attention and engagement." },
                { shape: "1:1 SQUARE", title: "Social Video", desc: "Square creative for feeds, product communication and social campaigns." },
                { shape: "16:9 VIDEO", title: "YouTube & Web", desc: "Landscape content for YouTube, websites, presentations and longer stories." },
                { shape: "9:16 STORY", title: "Stories & Ads", desc: "Quick vertical creatives for stories, promotions and paid campaigns." }
              ].map((format, idx) => (
                <div key={idx} className="bg-white/80 backdrop-blur-md rounded-2xl p-6 border border-slate-200 shadow-sm hover:border-blue-300 transition-colors text-center">
                  <div className="text-xs font-bold text-blue-600 bg-blue-50 rounded-lg py-4 mb-4 uppercase tracking-wider">{format.shape}</div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">{format.title}</h4>
                  <p className="text-sm text-slate-600">{format.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <GrowthAuditCTA />
      </main>
      <Footer />
    </>
  );
}
