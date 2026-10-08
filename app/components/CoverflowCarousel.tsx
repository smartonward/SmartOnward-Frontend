import React from "react";

const cards = [
  { icon: "🚀", title: "Startups", desc: "Build your brand and digital foundation from the ground up." },
  { icon: "📈", title: "Growing Businesses", desc: "Upgrade your presence, marketing and customer acquisition." },
  { icon: "🏪", title: "Local Businesses", desc: "Get discovered, generate enquiries and automate customer interactions." },
  { icon: "🛍️", title: "D2C & Brands", desc: "Build content, campaigns and digital experiences around your customers." },
  { icon: "💼", title: "Professionals", desc: "Build authority through websites, branding and consistent content." }
];

export default function CoverflowCarousel() {
  // Duplicate the array to create the seamless looping effect
  const duplicatedCards = [...cards, ...cards, ...cards];

  return (
    <>
      <div className="w-full max-w-7xl mx-auto py-12 overflow-hidden relative">
        <div className="flex flex-nowrap items-stretch gap-6 w-max animate-infinite-scroll hover:[animation-play-state:paused] pl-4 sm:pl-6">
          {duplicatedCards.map((card, i) => (
            <div
              key={i}
              className="shrink-0 w-[280px] sm:w-[300px] bg-white/90 backdrop-blur-md border border-slate-200/80 rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-start min-h-[220px]"
            >
              <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center text-3xl select-none">
                {card.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2 font-sans">{card.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
        
        {/* Subtle fade gradients on the edges for a smoother look */}
        <div className="absolute top-0 left-0 bottom-0 w-8 sm:w-24 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 bottom-0 w-8 sm:w-24 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none"></div>
      </div>
    </>
  );
}
