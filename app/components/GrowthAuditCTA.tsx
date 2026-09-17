'use client';

import { useState } from "react";
import { sendEmail } from "../actions/sendEmail";

export default function GrowthAuditCTA() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState("");

  const [selectedFocus, setSelectedFocus] = useState<string[]>([]);
  const [selectedVelocity, setSelectedVelocity] = useState<string>("Standard Sprint");

  const coreFocusOptions = [
    "Website Dev",
    "Branding & ID",
    "Video & Reels",
    "Social Media",
    "Digital Growth",
    "AI Automation"
  ];

  const toggleFocus = (option: string) => {
    setSelectedFocus(prev =>
      prev.includes(option)
        ? prev.filter(item => item !== option)
        : [...prev, option]
    );
  };

  const handleAuditSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormError("");
    setFormSubmitted(false);

    const formData = new FormData(e.currentTarget);
    const result = await sendEmail(formData);

    setIsSubmitting(false);

    if (result.success) {
      setFormSubmitted(true);
      e.currentTarget.reset();
      setSelectedFocus([]);
      setSelectedVelocity("Standard Sprint");
      setTimeout(() => setFormSubmitted(false), 5000);
    } else {
      setFormError(result.error || "An error occurred.");
    }
  };

  return (
    // DIRECT BLUEPRINT BOOKING / AUDIT
    <section className="py-24 relative overflow-hidden" id="schedule">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-4">
            Ready to engineer your <span className="text-blue-600">digital momentum</span>?
          </h2>
          <p className="text-slate-600 text-lg">
            Skip the sales fluff. Pick your objective, calculate your timeline, and receive an actionable sprint blueprint within 2 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

          {/* Left Card: Interactive Configuration */}
          <div className="bg-white rounded-[2rem] p-6 sm:p-10 shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col h-full">

            {/* Core Focus Section */}
            <div className="mb-10">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-bold">1</span>
                  <h3 className="text-sm font-bold text-slate-700 uppercase tracking-wider">Select Core Focus <span className="text-slate-400 font-normal normal-case">(Multi-Select)</span></h3>
                </div>
                <span className="text-xs font-medium text-blue-600">{selectedFocus.length} Selected</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {coreFocusOptions.map((option) => {
                  const isSelected = selectedFocus.includes(option);
                  return (
                    <button
                      key={option}
                      type="button"
                      onClick={() => toggleFocus(option)}
                      className={`px-4 py-3 text-sm font-medium rounded-xl border transition-all flex items-center justify-between ${isSelected
                        ? 'border-blue-400 bg-blue-50 text-blue-700 shadow-sm'
                        : 'border-slate-200 hover:border-blue-300 text-slate-600 hover:bg-slate-50'
                        }`}
                    >
                      {option}
                      {isSelected && (
                        <svg className="w-4 h-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Target Velocity Section */}
            <div className="mb-10">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-bold">2</span>
                  <h3 className="text-sm font-bold text-slate-700 uppercase tracking-wider">Target Velocity</h3>
                </div>
                <span className="text-xs font-medium text-slate-400">Fixed Turnaround SLA</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { name: 'Express Sprint', time: '5-7 Business Days' },
                  { name: 'Standard Sprint', time: '10-14 Business Days' },
                  { name: 'Custom Scope', time: 'Multi-Phase Roadmap' }
                ].map((velocity) => {
                  const isSelected = selectedVelocity === velocity.name;
                  return (
                    <button
                      key={velocity.name}
                      type="button"
                      onClick={() => setSelectedVelocity(velocity.name)}
                      className={`p-4 text-left rounded-xl border transition-all ${isSelected
                        ? 'border-blue-400 bg-blue-50 shadow-sm ring-1 ring-blue-400'
                        : 'border-slate-200 hover:border-blue-300 hover:bg-slate-50'
                        }`}
                    >
                      <div className={`font-bold text-sm mb-1 ${isSelected ? 'text-blue-900' : 'text-slate-800'}`}>{velocity.name}</div>
                      <div className={`text-xs ${isSelected ? 'text-blue-600' : 'text-slate-500'}`}>{velocity.time}</div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Guarantees Checklist */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 mb-6 flex-grow">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center">
                    <svg className="w-3.5 h-3.5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-sm text-slate-700"><strong className="text-slate-900">Zero Lock-In Contracts:</strong> Milestone-based sprint delivery with full IP handover.</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center">
                    <svg className="w-3.5 h-3.5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-sm text-slate-700"><strong className="text-slate-900">Direct Engineering Bridge:</strong> Dedicated private Slack & WhatsApp channel.</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center">
                    <svg className="w-3.5 h-3.5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-sm text-slate-700"><strong className="text-slate-900">Guaranteed SLA:</strong> We hit agreed sprint commitments or deliver a 100% refund.</p>
                </li>
              </ul>
            </div>

            {/* WhatsApp Link */}
            <a href="#" className="flex items-center justify-between p-4 rounded-xl border border-slate-200 hover:border-emerald-300 hover:bg-emerald-50 transition-colors group">
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <div>
                  <div className="text-sm font-bold text-slate-900">Chat Directly on WhatsApp</div>
                </div>
              </div>
              <svg className="w-5 h-5 text-slate-400 group-hover:text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>

          </div>

          {/* Right Card: Form */}
          <div className="bg-white rounded-[2rem] p-6 sm:p-10 shadow-xl shadow-slate-200/50 border border-slate-100 h-full flex flex-col relative">

            {/* Step Indicator */}
            <div className="flex items-center justify-between mb-8">
              <div>
                <p className="text-blue-600 text-xs font-bold tracking-widest uppercase mb-2">Step 3 • Discovery Protocol</p>
                <h3 className="text-2xl font-black text-slate-900">Request 30m Sprint Blueprint</h3>
              </div>
              <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>

            <form className="flex-grow flex flex-col space-y-6" onSubmit={handleAuditSubmit}>
              {/* Hidden Inputs for state sync */}
              <input type="hidden" name="selectedFocus" value={selectedFocus.join(', ')} />
              <input type="hidden" name="selectedVelocity" value={selectedVelocity} />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-2">Full Name *</label>
                  <input
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 text-sm bg-slate-50 focus:bg-white transition-colors"
                    name="name"
                    placeholder="Alexander Vance"
                    required
                    type="text"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-2">Work Email *</label>
                  <input
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 text-sm bg-slate-50 focus:bg-white transition-colors"
                    name="email"
                    placeholder="alex@company.com"
                    required
                    type="email"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-2">Company / Website URL *</label>
                  <input
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 text-sm bg-slate-50 focus:bg-white transition-colors"
                    name="website"
                    placeholder="mybrand.com"
                    required
                    type="text"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-2">Projected Budget / Scope</label>
                  <select
                    name="budget"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 text-sm bg-slate-50 focus:bg-white transition-colors text-slate-600"
                  >
                    <option>Rapid Sprint ($2.5k - $5k / ₹1.5L - ₹3L)</option>
                    <option>Standard Rollout ($5k - $10k / ₹3L - ₹6L)</option>
                    <option>Enterprise Architecture ($10k+ / ₹6L+)</option>
                  </select>
                </div>
              </div>

              <div className="flex-grow">
                <label className="block text-xs font-bold text-slate-700 mb-2">Brief Project Details & Key Bottleneck</label>
                <textarea
                  name="details"
                  rows={4}
                  className="w-full h-[120px] px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 text-sm bg-slate-50 focus:bg-white transition-colors resize-none"
                  placeholder="Tell us what needs to be built, upgraded, or automated..."
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  className="w-full py-4 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed text-white font-bold text-sm tracking-wide shadow-lg shadow-blue-600/30 transition-all duration-200 flex items-center justify-center gap-2"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Processing...' : 'Request Free 30m Sprint Blueprint'}
                  {!isSubmitting && (
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  )}
                </button>

                {/* Zero Spam Guarantee */}
                <p className="text-center mt-4 flex items-center justify-center gap-1.5 text-xs text-slate-500">
                  <span className="w-3.5 h-3.5 rounded-full bg-emerald-100 flex items-center justify-center">
                    <svg className="w-2.5 h-2.5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  Zero spam. Guaranteed response within 2 hours.
                </p>
              </div>
            </form>

            {/* Overlays for Success/Error States */}
            {formSubmitted && (
              <div className="absolute inset-0 bg-white/95 backdrop-blur-sm rounded-[2rem] flex flex-col items-center justify-center p-8 text-center z-20">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">Blueprint Reserved</h4>
                <p className="text-slate-600 text-sm">Direct calendar confirmation sent to your inbox. We look forward to speaking with you.</p>
              </div>
            )}
            {formError && (
              <div className="absolute top-6 right-6 left-6 p-4 bg-red-50 border border-red-200 rounded-xl text-center text-red-700 text-xs font-medium z-20 shadow-lg">
                ⚠ {formError}
              </div>
            )}

          </div>
        </div>
      </div>
    </section>
  );
}
