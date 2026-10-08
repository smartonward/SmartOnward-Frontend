"use client";

import Link from "next/link";
import Footer from "../components/Footer";
import GrowthAuditCTA from "../components/GrowthAuditCTA";

const services = [
  {
    title: "Website Development",
    href: "/website-development",
    description: "High-performance, headless web architecture that drives conversions and scales effortlessly.",
    icon: (
      <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    badge: "Core Service",
  },
  {
    title: "Branding & Visual Design",
    href: "/branding-and-visual-design",
    description: "Strategic brand identities and UI/UX design that build trust and command authority.",
    icon: (
      <svg className="w-8 h-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
  },
  {
    title: "Digital Marketing",
    href: "/digital-marketing",
    description: "Data-driven campaigns, SEO, and paid media that capture market share and maximize ROI.",
    icon: (
      <svg className="w-8 h-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    badge: "Growth",
  },
  {
    title: "Social Media Management",
    href: "/social-media-management",
    description: "Comprehensive social strategy, content planning, and community management that builds loyal audiences.",
    icon: (
      <svg className="w-8 h-8 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
      </svg>
    ),
  },
  {
    title: "Video & Reels",
    href: "/video-and-reels",
    description: "High-impact short-form content, viral hooks, and professional video production tailored for modern platforms.",
    icon: (
      <svg className="w-8 h-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "AI Automation",
    href: "/ai-automation",
    description: "Custom AI agents, intelligent chatbots, and workflow automation that scale your operations seamlessly.",
    icon: (
      <svg className="w-8 h-8 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    badge: "Trending",
  },
];

export default function ServicesPage() {
  return (
    <>
      <main className="relative z-10 w-full min-h-screen">
        {/* HERO SECTION */}
        <section className="relative pt-32 pb-20 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto flex flex-col items-center">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-500/20 blur-[120px] rounded-full pointer-events-none" />
          
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-slate-950 tracking-tight leading-[1.1] max-w-4xl relative z-10">
            Complete Digital <br className="hidden sm:block" /> <span className="engineer-highlight italic">Growth Architecture</span>
          </h1>

          <p className="mt-8 text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed font-medium relative z-10">
            We don&apos;t just provide services; we build interconnected systems. From stunning visual identities to intelligent AI workflows, our capabilities are designed to scale your business.
          </p>
        </section>

        {/* SERVICES GRID */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative z-10 w-full border-t border-slate-100">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight mb-4">
                Our Capabilities
              </h2>
              <p className="text-slate-500 text-lg max-w-2xl mx-auto font-medium">
                Explore our comprehensive suite of digital services engineered for momentum and sustainable growth.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Link key={index} href={service.href} className="group flex h-full">
                  <div className="bg-slate-50 rounded-[32px] p-10 sm:p-12 border border-slate-100 shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden flex flex-col w-full">
                    {/* Hover Glow */}
                    <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-colors duration-500 pointer-events-none" />
                    
                    <div className="flex items-center justify-between mb-8 relative z-10">
                      <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center border border-slate-100 group-hover:scale-110 transition-transform duration-300">
                        {service.icon}
                      </div>
                      {service.badge && (
                        <span className="px-3 py-1.5 bg-blue-100 text-blue-700 text-xs font-bold rounded-full tracking-wide">
                          {service.badge}
                        </span>
                      )}
                    </div>
                    
                    <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight relative z-10 group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-slate-500 leading-relaxed font-medium mb-10 flex-grow relative z-10">
                      {service.description}
                    </p>
                    
                    <div className="mt-auto flex items-center text-sm font-bold text-blue-600 group-hover:text-blue-700 relative z-10">
                      <span>Explore Service</span>
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>
                </Link>
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
