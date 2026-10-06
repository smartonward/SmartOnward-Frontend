"use client";

import Link from "next/link";
import GrowthAuditCTA from "../components/GrowthAuditCTA";
import Footer from "../components/Footer";

export default function AIAutomationPage() {
  return (
    <>
      <main className="relative z-10">
        {/* HERO SECTION */}
        <section className="relative pt-24 sm:pt-32 pb-20 md:pb-28 text-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto flex flex-col items-center">

            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-black text-slate-950 tracking-tight leading-[1.08] max-w-4xl">
              Work smarter with <span className="text-blue-600 italic">AI-powered</span> systems that run for you.
            </h1>

            <p className="mt-8 text-lg sm:text-xl text-slate-600 max-w-2xl leading-relaxed font-medium">
              We automate repetitive work, connect your tools and build AI-powered workflows that help your team respond faster, save time and focus on higher-value work.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
              <a
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold shadow-lg shadow-blue-500/20 hover:shadow-glow-blue transition-all duration-200 hover:-translate-y-0.5"
                href="#schedule"
              >
                <span>Automate My Business</span>
                <span className="ml-2 font-bold text-lg">→</span>
              </a>
              <a
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white hover:bg-slate-50 text-slate-900 font-bold shadow-md border border-slate-200/80 transition-all duration-200 hover:-translate-y-0.5"
                href="#services"
              >
                Explore Solutions
              </a>
            </div>

            <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm font-semibold text-slate-500">
              <div className="flex items-center gap-2"><span className="text-emerald-500">✓</span> Custom workflows</div>
              <div className="flex items-center gap-2"><span className="text-emerald-500">✓</span> AI integrated</div>
              <div className="flex items-center gap-2"><span className="text-emerald-500">✓</span> Built around your process</div>
            </div>
          </div>
        </section>

        {/* SERVICES - WHAT WE AUTOMATE */}
        <section className="py-24 relative" id="services">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="text-blue-600 text-xs font-bold tracking-widest uppercase mb-3">What We Automate</p>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-4">
                Turn repetitive work into <span className="text-blue-600 italic">smart systems.</span>
              </h2>
              <p className="text-slate-600 text-lg">
                We identify where time is being lost and design practical AI and automation workflows around the way your business actually operates.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: "🤖",
                  title: "AI Agents & Assistants",
                  desc: "Custom AI agents that answer questions, qualify leads, retrieve information and support your team.",
                  tags: ["AI Agent", "LLM"]
                },
                {
                  icon: "💬",
                  title: "AI Chatbots",
                  desc: "Website and messaging assistants that engage visitors, answer FAQs and capture opportunities 24/7.",
                  tags: ["Website", "WhatsApp"]
                },
                {
                  icon: "⚙️",
                  title: "Business Process Automation",
                  desc: "Automate repetitive tasks across leads, operations, notifications, approvals and internal workflows.",
                  tags: ["Workflows", "Operations"]
                },
                {
                  icon: "🔗",
                  title: "API & Tool Integration",
                  desc: "Connect your CRM, website, forms, spreadsheets, communication tools and business software.",
                  tags: ["API", "Integrations"]
                },
                {
                  icon: "📩",
                  title: "Lead Automation",
                  desc: "Capture, qualify, route and follow up with leads automatically so opportunities don't sit unanswered.",
                  tags: ["CRM", "Follow-up"]
                },
                {
                  icon: "📊",
                  title: "Reporting Automation",
                  desc: "Collect data and generate recurring reports, summaries and alerts without manual spreadsheet work.",
                  tags: ["Reports", "Dashboards"]
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
                  We don&apos;t add AI because it&apos;s trendy. We use it where it can create <span className="text-blue-600 italic">real leverage.</span>
                </h2>
                <p className="text-slate-600 text-lg mb-8">
                  As a full-fledged agency, we can connect your automation with your website, marketing, social media, CRM and customer journey — creating one connected digital system.
                </p>
              </div>

              <div className="bg-white rounded-[2rem] p-8 shadow-xl shadow-slate-200/50 border border-slate-100">
                <div className="space-y-6">
                  {[
                    { title: "Business-first approach", desc: "We start with your process and pain points, not a technology checklist." },
                    { title: "Human + AI workflows", desc: "Automate the repetitive parts while keeping people in control of important decisions." },
                    { title: "Connected systems", desc: "Move information between tools without repetitive copy-paste work." },
                    { title: "Scalable setup", desc: "Build a foundation that can grow as your team and processes evolve." }
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

        <GrowthAuditCTA />
      </main>
      <Footer />
    </>
  );
}
