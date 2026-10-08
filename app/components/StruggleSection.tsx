import React from 'react';
import Link from 'next/link';

export default function StruggleSection() {
  return (
    <section className="relative w-full max-w-7xl mx-auto px-6 pt-8 pb-8 sm:pt-12 sm:pb-12 flex flex-col items-center">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">

        <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-6 leading-tight">
          3 things <span className="text-blue-600 italic">holding your business</span> back.
        </h2>
        <p className="text-lg sm:text-xl text-slate-600">
          Most businesses lose clients to three simple problems. Here is how we fix each one.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-12">
        {/* Card 1 */}
        <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm flex flex-col h-full hover:shadow-lg transition-shadow duration-300">
          <div className="flex items-center justify-between mb-8">
            <span className="text-red-600 text-sm font-bold flex items-center">
              Problem 1
            </span>
          </div>
          
          <h3 className="text-2xl font-bold text-slate-900 mb-3">Your website looks old or confusing.</h3>
          <p className="text-slate-500 mb-8 flex-grow">
            Visitors land, don't trust what they see, and click away in seconds.
          </p>

          <div className="bg-slate-50 rounded-2xl p-5 mb-8 border border-slate-100">
            <div className="flex flex-col gap-2 mb-4">
              <span className="w-fit px-2.5 py-1 rounded-md bg-red-100 text-red-700 text-[10px] font-bold uppercase tracking-wider">Before</span>
              <span className="text-sm text-slate-600 leading-snug">Confusing, slow & hard to navigate</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="w-fit px-2.5 py-1 rounded-md bg-green-100 text-green-700 text-[10px] font-bold uppercase tracking-wider">With SmartOnward Technologies</span>
              <span className="text-sm font-medium text-slate-800 leading-snug">Modern, fast & mobile-friendly</span>
            </div>
          </div>

          <p className="text-sm text-slate-600">
            <strong className="text-blue-600 font-bold">Our Fix:</strong> We build you a crisp, clean website that makes customers trust you instantly.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm flex flex-col h-full hover:shadow-lg transition-shadow duration-300">
          <div className="flex items-center justify-between mb-8">
            <span className="text-red-600 text-sm font-bold flex items-center">
              Problem 2
            </span>
          </div>
          
          <h3 className="text-2xl font-bold text-slate-900 mb-3">No time to post or run ads.</h3>
          <p className="text-slate-500 mb-8 flex-grow">
            Social pages sit empty because you are too busy running daily business.
          </p>

          <div className="bg-slate-50 rounded-2xl p-5 mb-8 border border-slate-100">
            <div className="flex flex-col gap-2 mb-4">
              <span className="w-fit px-2.5 py-1 rounded-md bg-red-100 text-red-700 text-[10px] font-bold uppercase tracking-wider">Before</span>
              <span className="text-sm text-slate-600 leading-snug">Weeks without posting or leads</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="w-fit px-2.5 py-1 rounded-md bg-green-100 text-green-700 text-[10px] font-bold uppercase tracking-wider">With SmartOnward Technologies</span>
              <span className="text-sm font-medium text-slate-800 leading-snug">Done-for-you reels & targeted ads</span>
            </div>
          </div>

          <p className="text-sm text-slate-600">
            <strong className="text-blue-600 font-bold">Our Fix:</strong> We create your reels, graphics, and ads so customers keep finding you.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm flex flex-col h-full hover:shadow-lg transition-shadow duration-300">
          <div className="flex items-center justify-between mb-8">
            <span className="text-red-600 text-sm font-bold flex items-center">
              Problem 3
            </span>
          </div>
          
          <h3 className="text-2xl font-bold text-slate-900 mb-3">Replying to leads too late.</h3>
          <p className="text-slate-500 mb-8 flex-grow">
            When a customer asks a question, waiting hours means they hire someone else.
          </p>

          <div className="bg-slate-50 rounded-2xl p-5 mb-8 border border-slate-100">
            <div className="flex flex-col gap-2 mb-4">
              <span className="w-fit px-2.5 py-1 rounded-md bg-red-100 text-red-700 text-[10px] font-bold uppercase tracking-wider">Before</span>
              <span className="text-sm text-slate-600 leading-snug">4+ hour delay or missed calls</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="w-fit px-2.5 py-1 rounded-md bg-green-100 text-green-700 text-[10px] font-bold uppercase tracking-wider">With SmartOnward Technologies</span>
              <span className="text-sm font-medium text-slate-800 leading-snug">Instant WhatsApp reply in seconds</span>
            </div>
          </div>

          <p className="text-sm text-slate-600">
            <strong className="text-blue-600 font-bold">Our Fix:</strong> Our WhatsApp system answers instantly, answers basic questions, and books calls 24/7.
          </p>
        </div>
      </div>

      {/* Bottom CTA Box */}
      <div className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-10 w-full flex flex-col lg:flex-row items-center justify-between gap-8 shadow-sm">
        <div className="max-w-2xl text-center lg:text-left">
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
            Get all 3 solved together — with one reliable team instead of juggling multiple freelancers.
          </h3>
          <p className="text-slate-500">
            No communication chaos. A single predictable sprint with guaranteed delivery.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
          <Link 
            href="/#contact"
            className="w-full sm:w-auto px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all flex items-center justify-center gap-2 shadow-sm"
          >
            Get a Free Website & Growth Review <span aria-hidden="true">&rarr;</span>
          </Link>
          <a 
            href="https://wa.me/YOUR_NUMBER"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3.5 bg-white border border-slate-200 hover:border-slate-300 text-slate-700 font-semibold rounded-xl transition-all flex items-center justify-center gap-2.5 shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            Chat with Us on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
