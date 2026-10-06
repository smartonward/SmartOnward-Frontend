"use client";

import Link from "next/link";
import GrowthAuditCTA from "../components/GrowthAuditCTA";
import Footer from "../components/Footer";

export default function WebsiteDevelopmentPage() {
  return (
    <>
      <main className="relative z-10">
        {/* HERO SECTION */}
        <section className="relative pt-24 sm:pt-32 pb-20 md:pb-28 text-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto flex flex-col items-center">

            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-black text-slate-950 tracking-tight leading-[1.08] max-w-4xl">
              Websites built to <span className="text-blue-600 italic">look great</span> and <em>grow your business.</em>
            </h1>

            <p className="mt-8 text-lg sm:text-xl text-slate-600 max-w-2xl leading-relaxed font-medium">
              We design and develop fast, modern, conversion-focused websites that make your brand look credible, communicate your value and turn visitors into customers.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
              <a
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold shadow-lg shadow-blue-500/20 hover:shadow-glow-blue transition-all duration-200 hover:-translate-y-0.5"
                href="#schedule"
              >
                <span>Build My Website</span>
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

        {/* SERVICES - WHAT WE BUILD */}
        <section className="pt-8 pb-24 relative" id="services">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-4">
                Everything your <span className="text-blue-600 italic">website needs</span>
              </h2>
              <p className="text-slate-600 text-lg">
                From a professional business presence to a complete digital experience, our full-service approach covers strategy, design, development and launch.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: "🌐",
                  title: "Business Websites",
                  desc: "Professional websites designed to establish trust, explain your services and generate enquiries.",
                  tags: ["3–5 Pages", "Responsive"]
                },
                {
                  icon: "🛍️",
                  title: "E-Commerce Websites",
                  desc: "Product-focused online stores with clean shopping experiences and conversion-friendly layouts.",
                  tags: ["Products", "Checkout"]
                },
                {
                  icon: "🎯",
                  title: "Landing Pages",
                  desc: "Focused campaign pages built around one goal — leads, bookings, sales or registrations.",
                  tags: ["High Conversion", "Ads Ready"]
                },
                {
                  icon: "🎨",
                  title: "UI/UX Design",
                  desc: "Modern interfaces with thoughtful layouts, hierarchy and user journeys that make websites easier to use.",
                  tags: ["Figma", "UX Flow"]
                },
                {
                  icon: "🤖",
                  title: "AI & Chatbot Integration",
                  desc: "Connect your website with AI assistants, lead capture, WhatsApp and automated customer support.",
                  tags: ["AI", "Chatbot"]
                },
                {
                  icon: "📈",
                  title: "SEO & Analytics",
                  desc: "Technical foundations, Search Console, Analytics and on-page essentials so your website is ready to grow.",
                  tags: ["SEO", "Analytics"]
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
        <section className="py-24 relative" id="value">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-blue-600 text-xs font-bold tracking-widest uppercase mb-3">Why SmartOnward</p>
                <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-6 leading-tight">
                  We don&apos;t just build a website. We build your <span className="text-blue-600 italic">digital presence.</span>
                </h2>
                <p className="text-slate-600 text-lg mb-8">
                  As a full-fledged digital agency, we can connect your website with branding, content, social media, digital marketing and AI automation — so everything works together.
                </p>
              </div>

              <div className="bg-white rounded-[2rem] p-8 shadow-xl shadow-slate-200/50 border border-slate-100">
                <div className="space-y-6">
                  {[
                    { title: "Conversion-focused", desc: "Clear calls-to-action and journeys designed around business goals." },
                    { title: "Mobile-first", desc: "Clean experiences across phones, tablets and desktops." },
                    { title: "Performance-minded", desc: "Lightweight layouts and optimized assets for faster loading." },
                    { title: "Brand consistent", desc: "Your colors, voice and identity carried throughout the site." },
                    { title: "Easy to scale", desc: "Built with room for new pages, integrations and campaigns." }
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

        {/* TECHNOLOGY */}
        <section className="py-24 relative bg-slate-50/50" id="technology">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-blue-600 text-xs font-bold tracking-widest uppercase mb-3">Technology</p>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-4">
              Built with the <span className="text-blue-600 italic">right tools</span>
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto mb-12">
              We choose the technology based on your business, budget, timeline and future requirements.
            </p>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {[
                "HTML5", "CSS3", "JavaScript", "React", "Next.js", "WordPress",
                "Shopify", "Webflow", "Node.js", "PHP", "API Integration",
                "AI Integration", "WhatsApp"
              ].map((tech) => (
                <span key={tech} className="px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-700 font-medium shadow-sm hover:border-blue-300 hover:text-blue-700 transition-colors">
                  {tech}
                </span>
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
