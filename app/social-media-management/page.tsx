"use client";

import Link from "next/link";
import GrowthAuditCTA from "../components/GrowthAuditCTA";
import Footer from "../components/Footer";

export default function SocialMediaManagementPage() {
  return (
    <>
      <main className="relative z-10">
        {/* HERO SECTION */}
        <section className="relative pt-24 sm:pt-32 pb-20 md:pb-28 text-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto flex flex-col items-center">

            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-black text-slate-950 tracking-tight leading-[1.08] max-w-4xl">
              Don&apos;t just <span className="text-blue-600 italic">post.</span> Build a social presence people <em>remember.</em>
            </h1>

            <p className="mt-8 text-lg sm:text-xl text-slate-600 max-w-2xl leading-relaxed font-medium">
              We plan, create, publish and optimize social content that keeps your brand visible, consistent and connected with the people you want to reach.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
              <a
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold shadow-lg shadow-blue-500/20 hover:shadow-glow-blue transition-all duration-200 hover:-translate-y-0.5"
                href="#schedule"
              >
                <span>Grow My Social Media</span>
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
              <div className="flex items-center gap-2"><span className="text-emerald-500">✓</span> Strategy-led</div>
              <div className="flex items-center gap-2"><span className="text-emerald-500">✓</span> Consistent content</div>
              <div className="flex items-center gap-2"><span className="text-emerald-500">✓</span> Monthly planning</div>
            </div>
          </div>
        </section>

        {/* SERVICES - WHAT WE MANAGE */}
        <section className="py-24 relative" id="services">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="text-blue-600 text-xs font-bold tracking-widest uppercase mb-3">What We Manage</p>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-4">
                Your social media, <span className="text-blue-600 italic">handled end-to-end.</span>
              </h2>
              <p className="text-slate-600 text-lg">
                From strategy and content creation to publishing and reporting, we take care of the work required to build a professional and active social presence.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: "🧭",
                  title: "Social Media Strategy",
                  desc: "Clear content pillars, audience direction, posting strategy and goals designed around your business.",
                  tags: ["Strategy", "Content Pillars"]
                },
                {
                  icon: "🎨",
                  title: "Content Creation",
                  desc: "Branded posts, carousels, graphics and creative concepts that keep your feed visually consistent.",
                  tags: ["Posts", "Carousels"]
                },
                {
                  icon: "🎬",
                  title: "Reels & Short Videos",
                  desc: "Scroll-stopping short-form content designed to increase reach, attention and engagement.",
                  tags: ["Reels", "Shorts"]
                },
                {
                  icon: "📅",
                  title: "Content Calendar",
                  desc: "Monthly planning so every post has a purpose and your brand stays consistently active.",
                  tags: ["Monthly Plan", "Scheduling"]
                },
                {
                  icon: "💬",
                  title: "Community Management",
                  desc: "Help manage comments, messages and audience interactions so your brand stays responsive.",
                  tags: ["Comments", "DMs"]
                },
                {
                  icon: "📊",
                  title: "Analytics & Reporting",
                  desc: "Monthly insights covering content performance, audience growth and what to improve next.",
                  tags: ["Insights", "Reports"]
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
        <section className="py-24 relative" id="strategy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-blue-600 text-xs font-bold tracking-widest uppercase mb-3">Why SmartOnward</p>
                <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-6 leading-tight">
                  We don&apos;t chase vanity metrics. We build a social presence that supports your <span className="text-blue-600 italic">business.</span>
                </h2>
                <p className="text-slate-600 text-lg mb-8">
                  Because we&apos;re a full-fledged agency, social media can connect directly with your branding, website, video content, digital marketing and AI-powered workflows.
                </p>
              </div>

              <div className="bg-white rounded-[2rem] p-8 shadow-xl shadow-slate-200/50 border border-slate-100">
                <div className="space-y-6">
                  {[
                    { title: "Brand consistency", desc: "Every visual and caption follows a clear brand direction." },
                    { title: "Content with purpose", desc: "Posts are planned around awareness, trust, engagement or action." },
                    { title: "Audience focused", desc: "Content is created for the people you actually want to attract." },
                    { title: "Consistent publishing", desc: "A reliable calendar keeps your business visible over time." }
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

        {/* PLATFORMS */}
        <section className="py-24 relative" id="platforms">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="text-blue-600 text-xs font-bold tracking-widest uppercase mb-3">Platforms</p>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-4">
                One strategy, <span className="text-blue-600 italic">multiple channels.</span>
              </h2>
              <p className="text-slate-600 text-lg">
                We adapt your content to the platforms where your audience spends time, while keeping your brand recognizable everywhere.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: "◎", title: "Instagram", desc: "Posts, Reels, Stories, carousels and community engagement." },
                { icon: "f", title: "Facebook", desc: "Business content, campaigns, community and lead-focused posts." },
                { icon: "in", title: "LinkedIn", desc: "Professional content, founder branding and B2B communication." },
                { icon: "▶", title: "YouTube", desc: "Shorts, video content and channel-focused creative assets." }
              ].map((platform, idx) => (
                <div key={idx} className="bg-white/80 backdrop-blur-md rounded-2xl p-6 border border-slate-200 shadow-sm hover:border-blue-300 transition-colors text-center">
                  <div className="text-4xl font-black text-blue-600 mb-4">{platform.icon}</div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">{platform.title}</h4>
                  <p className="text-sm text-slate-600">{platform.desc}</p>
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
