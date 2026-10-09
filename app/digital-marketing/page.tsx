"use client";

import Link from "next/link";
import GrowthAuditCTA from "../components/GrowthAuditCTA";
import Footer from "../components/Footer";

export default function DigitalMarketingPage() {
  return (
    <>
      <main className="relative z-10">
        {/* HERO SECTION */}
        <section className="relative pt-24 sm:pt-32 pb-20 md:pb-28 text-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto flex flex-col items-center">

            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-black text-slate-950 tracking-tight leading-[1.08] max-w-4xl">
              Turn attention into <span className="engineer-highlight italic">traffic</span>, leads and <em>growth.</em>
            </h1>

            <p className="mt-8 text-lg sm:text-xl text-slate-600 max-w-2xl leading-relaxed font-medium">
              We build digital marketing campaigns that connect the right audience with the right message - across search, social, paid advertising and content.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
              <a
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold shadow-lg shadow-blue-500/20 hover:shadow-glow-blue transition-all duration-200 hover:-translate-y-0.5"
                href="#schedule"
              >
                <span>Grow My Business</span>
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

        {/* SERVICES - WHAT WE DO */}
        <section className="py-24 relative" id="services">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-4">
                A complete digital marketing <span className="text-blue-600 italic">engine.</span>
              </h2>
              <p className="text-slate-600 text-lg">
                We combine strategy, creative, acquisition and analytics so your marketing works as one connected system instead of isolated activities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: "🔎",
                  title: "Search Engine Optimization",
                  desc: "Improve your organic visibility with technical, on-page and content-focused SEO strategies.",
                  tags: ["SEO", "Keywords"]
                },
                {
                  icon: "🎯",
                  title: "Google & Meta Ads",
                  desc: "Performance-focused paid campaigns designed around audiences, offers, landing pages and conversions.",
                  tags: ["PPC", "Meta Ads"]
                },
                {
                  icon: "📣",
                  title: "Social Media Marketing",
                  desc: "Connect your social content and campaigns to broader marketing goals, audiences and offers.",
                  tags: ["Social", "Campaigns"]
                },
                {
                  icon: "✍️",
                  title: "Content Marketing",
                  desc: "Useful, persuasive content that builds authority, attracts the right audience and supports conversion.",
                  tags: ["Blogs", "Content"]
                },
                {
                  icon: "🧲",
                  title: "Lead Generation",
                  desc: "Build acquisition journeys that turn clicks and attention into enquiries, calls, bookings and opportunities.",
                  tags: ["Leads", "Funnels"]
                },
                {
                  icon: "📊",
                  title: "Analytics & CRO",
                  desc: "Track what matters, identify drop-offs and continuously improve campaigns and conversion paths.",
                  tags: ["Analytics", "CRO"]
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
                <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-6 leading-tight">
                  We don&apos;t just run ads. We build the <span className="text-blue-600 italic">whole growth journey.</span>
                </h2>
                <p className="text-slate-600 text-lg mb-8">
                  Your marketing works better when your website, brand, content, social media, ads and AI automation work together. That&apos;s the advantage of a full-fledged agency.
                </p>
              </div>

              <div className="bg-white rounded-[2rem] p-8 shadow-xl shadow-slate-200/50 border border-slate-100">
                <div className="space-y-6">
                  {[
                    { title: "Full-funnel thinking", desc: "Awareness, consideration, leads and conversion connected together." },
                    { title: "Audience targeting", desc: "Reach the people most relevant to your business and offer." },
                    { title: "Creative + performance", desc: "Strong visuals and messaging backed by measurable outcomes." },
                    { title: "Continuous optimization", desc: "Test, learn and improve instead of setting campaigns and forgetting them." }
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

        {/* CHANNELS */}
        <section className="py-24 relative" id="channels">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-4">
                Meet your customers <span className="text-blue-600 italic">where they are.</span>
              </h2>
              <p className="text-slate-600 text-lg">
                The right mix depends on your business, audience and goals. We build channel strategies around what can actually move the needle.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: "G", title: "Google Search", desc: "Capture high-intent users actively looking for your products or services." },
                { icon: "◎", title: "Meta Ads", desc: "Reach targeted audiences across Facebook and Instagram with creative campaigns." },
                { icon: "in", title: "LinkedIn", desc: "Build B2B awareness, authority and targeted professional lead generation." },
                { icon: "✦", title: "Organic Search", desc: "Build sustainable visibility through SEO, content and useful search experiences." }
              ].map((channel, idx) => (
                <div key={idx} className="bg-white/80 backdrop-blur-md rounded-2xl p-6 border border-slate-200 shadow-sm hover:border-blue-300 transition-colors">
                  <div className="text-3xl font-black text-blue-600 mb-4">{channel.icon}</div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">{channel.title}</h4>
                  <p className="text-sm text-slate-600">{channel.desc}</p>
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
