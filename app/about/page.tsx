"use client";

import Link from "next/link";
import Footer from "../components/Footer";

export default function AboutPage() {
  return (
    <>
      <main className="relative z-10 w-full">

        {/* HERO SECTION */}
        <section className="relative pt-24 sm:pt-32 pb-20 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto flex flex-col items-center">

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-slate-950 tracking-tight leading-[1.1] max-w-4xl">
            We help businesses <br className="hidden sm:block" /> <span className="engineer-highlight italic">move forward</span> with <br className="hidden sm:block" /> smarter digital solutions.
          </h1>

          <p className="mt-8 text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed font-medium">
            SmartOnward is a digital growth and technology company combining web development, branding, marketing, content and AI automation to help businesses build, grow and operate better.
          </p>
        </section>

        {/* WHY SMARTONWARD EXISTS */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative z-10 w-full">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
              <div className="lg:col-span-4">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.15]">
                  Why SmartOnward <br /><span className="text-blue-600 italic">exists</span>
                </h2>
              </div>
              <div className="lg:col-span-8 lg:pl-10 space-y-6 text-sm sm:text-base text-slate-600 leading-relaxed font-medium pt-2">
                <p>
                  Growing a business has meant juggling a web developer who doesn&apos;t understand marketing, an agency that doesn&apos;t understand operations, and tools that don&apos;t talk to each other. The result is <span className="font-black text-slate-900">disconnected systems, wasted budget and lost momentum.</span>
                </p>
                <p>
                  SmartOnward brings strategy, creative, technology and automation together in one connected team, so businesses move faster with one clear plan.
                </p>
                <div className="border-l-[3px] border-blue-600 pl-4 py-1 mt-6">
                  <p className="text-blue-600 font-bold text-base">We built SmartOnward to fix this.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SIX WAYS WE HELP YOU GROW */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 relative z-10 w-full">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-16">
              Six ways we help you <span className="text-blue-600 italic">grow</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 text-left">
              {/* Website Development */}
              <div className="bg-white rounded-[20px] p-6 shadow-sm border border-slate-100 flex items-start gap-5 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-[14px] bg-blue-50 flex flex-shrink-0 items-center justify-center text-blue-600">
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" /></svg>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm mb-1">Website Development</h3>
                  <p className="text-slate-500 text-xs font-medium">Websites and landing pages</p>
                </div>
              </div>

              {/* Branding */}
              <div className="bg-white rounded-[20px] p-6 shadow-sm border border-slate-100 flex items-start gap-5 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-[14px] bg-emerald-50 flex flex-shrink-0 items-center justify-center text-emerald-600">
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09l2.846.813-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" /></svg>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm mb-1">Branding</h3>
                  <p className="text-slate-500 text-xs font-medium">Identity and visual design</p>
                </div>
              </div>

              {/* Content & Video */}
              <div className="bg-white rounded-[20px] p-6 shadow-sm border border-slate-100 flex items-start gap-5 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-[14px] bg-blue-50 flex flex-shrink-0 items-center justify-center text-blue-600">
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" /></svg>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm mb-1">Content &amp; Video</h3>
                  <p className="text-slate-500 text-xs font-medium">Reels, promos and AI video</p>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-white rounded-[20px] p-6 shadow-sm border border-slate-100 flex items-start gap-5 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-[14px] bg-emerald-50 flex flex-shrink-0 items-center justify-center text-emerald-600">
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" /></svg>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm mb-1">Social Media</h3>
                  <p className="text-slate-500 text-xs font-medium">Planning, creative and posting</p>
                </div>
              </div>

              {/* Digital Marketing */}
              <div className="bg-white rounded-[20px] p-6 shadow-sm border border-slate-100 flex items-start gap-5 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-[14px] bg-blue-50 flex flex-shrink-0 items-center justify-center text-blue-600">
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" /></svg>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm mb-1">Digital Marketing</h3>
                  <p className="text-slate-500 text-xs font-medium">Campaigns and lead generation</p>
                </div>
              </div>

              {/* AI Automation */}
              <div className="bg-white rounded-[20px] p-6 shadow-sm border border-slate-100 flex items-start gap-5 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-[14px] bg-emerald-50 flex flex-shrink-0 items-center justify-center text-emerald-600">
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm mb-1">AI Automation</h3>
                  <p className="text-slate-500 text-xs font-medium">Workflows and chatbots</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* THREE REASONS CLIENTS CHOOSE US (Dark section) */}
        <section className="py-24 relative overflow-hidden bg-slate-900">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-600/30 blur-[100px] rounded-full pointer-events-none" />
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-16">
              Three reasons clients <span className="text-emerald-400 italic">choose us</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-md rounded-[20px] p-8 lg:p-10 text-left hover:bg-white/[0.12] transition-colors shadow-lg">
                <div className="w-10 h-10 rounded-full bg-emerald-400 flex items-center justify-center text-slate-900 font-black text-sm mb-6">1</div>
                <h3 className="text-white font-bold text-lg mb-2">One connected partner</h3>
                <p className="text-slate-300 text-sm leading-relaxed font-medium">Strategy, creative, technology and growth under one roof.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-[20px] p-8 lg:p-10 text-left hover:bg-white/[0.12] transition-colors shadow-lg">
                <div className="w-10 h-10 rounded-full bg-emerald-400 flex items-center justify-center text-slate-900 font-black text-sm mb-6">2</div>
                <h3 className="text-white font-bold text-lg mb-2">Built around outcomes</h3>
                <p className="text-slate-300 text-sm leading-relaxed font-medium">Focused on business growth, not just delivering assets.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-[20px] p-8 lg:p-10 text-left hover:bg-white/[0.12] transition-colors shadow-lg">
                <div className="w-10 h-10 rounded-full bg-emerald-400 flex items-center justify-center text-slate-900 font-black text-sm mb-6">3</div>
                <h3 className="text-white font-bold text-lg mb-2">Technology-led</h3>
                <p className="text-slate-300 text-sm leading-relaxed font-medium">Using automation and AI where it genuinely improves efficiency.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CUSTOM CTA (Ready to move onward?) */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-[1000px] mx-auto mb-20 relative z-10">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight mb-6 leading-tight">
              Ready to move <span className="text-emerald-600 italic">onward?</span>
            </h2>
            <p className="text-slate-600 text-lg sm:text-xl font-medium mb-10">
              Let&apos;s build what&apos;s next.
            </p>
            <button
              onClick={() => window.dispatchEvent(new Event('open-audit-modal'))}
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-sm shadow-lg shadow-emerald-500/20 transition-all duration-200 hover:-translate-y-0.5"
            >
              Start a conversation &rarr;
            </button>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
