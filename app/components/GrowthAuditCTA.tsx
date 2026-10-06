'use client';

export default function GrowthAuditCTA() {
  const openModal = (e: React.MouseEvent) => {
    e.preventDefault();
    window.dispatchEvent(new Event('open-audit-modal'));
  };

  return (
    // DIRECT BLUEPRINT BOOKING / AUDIT
    <section className="py-24 relative overflow-hidden" id="schedule">
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center flex flex-col items-center">
        
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight mb-6">
          Turn your digital presence into a <span className="text-blue-600 italic">revenue engine</span>
        </h2>
        <p className="text-slate-600 text-lg md:text-xl max-w-2xl mb-10">
          Stop guessing. Select your growth objectives, define your timeline, and receive an actionable, step-by-step blueprint within 24 hours.
        </p>

        <button 
          onClick={openModal}
          className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg shadow-lg shadow-blue-600/30 transition-all duration-200 hover:-translate-y-1 hover:shadow-blue-600/40 group"
        >
          <span>Request Free 30m Sprint Blueprint</span>
          <svg className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>
    </section>
  );
}
