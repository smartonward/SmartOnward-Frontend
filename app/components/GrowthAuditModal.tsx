'use client';

import { useState, useEffect } from "react";
import { sendEmail } from "@/app/actions/sendEmail";

export default function GrowthAuditModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState("");

  const [selectedFocus, setSelectedFocus] = useState<string[]>([]);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener('open-audit-modal', handleOpen);
    return () => window.removeEventListener('open-audit-modal', handleOpen);
  }, []);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; }
  }, [isOpen]);

  const closeModal = () => {
    setIsOpen(false);
    window.dispatchEvent(new Event('close-audit-modal'));
  };

  if (!isOpen) return null;

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
      setTimeout(() => {
        setFormSubmitted(false);
        closeModal();
      }, 3000);
    } else {
      setFormError(result.error || "An error occurred.");
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 pt-16 pb-10">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-slate-900/40 backdrop-blur-md"
        onClick={closeModal}
      ></div>

      {/* Modal Content Wrapper */}
      <div className="relative w-full max-w-[720px] mx-auto bg-white rounded-[24px] p-6 shadow-2xl border border-slate-100 flex flex-col animate-in fade-in zoom-in-95 duration-200 overflow-y-auto max-h-[90vh] custom-scrollbar">

        {/* Step Indicator & Title */}
        <div className="mb-6 text-center">
          <h3 className="text-2xl sm:text-3xl font-black text-slate-900">Tell Us Your Goal. We'll Handle the Rest</h3>
        </div>

        <form className="flex-grow flex flex-col space-y-4" onSubmit={handleAuditSubmit}>
          {/* Hidden Inputs */}
          <input type="hidden" name="selectedFocus" value={selectedFocus.join(', ')} />

          {/* 1. What do you need? (Pills) */}
          <div className="space-y-2">
            <label className="block text-[13px] font-bold text-slate-700">What do you need?</label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {coreFocusOptions.map((option) => {
                const isSelected = selectedFocus.includes(option);
                return (
                  <button
                    key={option}
                    type="button"
                    onClick={() => toggleFocus(option)}
                    className={`px-3.5 py-2 text-[13px] font-medium rounded-full border transition-all ${isSelected
                      ? 'border-blue-500 bg-blue-50 text-blue-700 shadow-sm'
                      : 'border-slate-200 bg-white text-slate-600 hover:border-blue-300 hover:bg-slate-50'
                      }`}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
          </div>


          {/* 3. Name & Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="block text-[13px] font-bold text-slate-700">Full Name *</label>
              <input
                className="w-full px-4 h-[44px] rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 text-sm bg-slate-50 focus:bg-white transition-colors"
                name="name"
                placeholder="Alexander Vance"
                required
                type="text"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-[13px] font-bold text-slate-700">Work Email *</label>
              <input
                className="w-full px-4 h-[44px] rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 text-sm bg-slate-50 focus:bg-white transition-colors"
                name="email"
                placeholder="alex@company.com"
                required
                type="email"
              />
            </div>
          </div>

          {/* 4. Company / Website */}
          <div className="space-y-2">
            <label className="block text-[13px] font-bold text-slate-700">Company Name/ Website URL <span className="text-slate-400 font-normal">(Optional)</span></label>
            <input
              className="w-full px-4 h-[44px] rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 text-sm bg-slate-50 focus:bg-white transition-colors"
              name="website"
              placeholder="company.com"
              type="text"
            />
          </div>

          {/* 5. Details */}
          <div className="space-y-2">
            <label className="block text-[13px] font-bold text-slate-700">Brief Project Details <span className="text-slate-400 font-normal">(Optional)</span></label>
            <textarea
              name="details"
              rows={3}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 text-sm bg-slate-50 focus:bg-white transition-colors resize-none"
              placeholder="Tell us what needs to be built or upgraded..."
            ></textarea>
          </div>

          {/* 6. Submit */}
          <div className="pt-2">
            <button
              className="w-full h-[52px] rounded-xl bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed text-white font-bold text-sm tracking-wide shadow-lg shadow-blue-600/30 transition-all duration-200 flex items-center justify-center gap-2"
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

            <p className="text-center mt-4 text-[12px] text-slate-500 font-medium">
              Zero lock-in &nbsp;|&nbsp; Direct team access &nbsp;|&nbsp; Reply within 6 hours
            </p>

            <div className="text-center mt-2.5">
              <a href="#" className="inline-flex items-center justify-center gap-2 text-[13px] text-slate-600 hover:text-emerald-600 font-medium transition-colors group">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Or chat directly on WhatsApp
              </a>
            </div>
          </div>
        </form>

        {/* Overlays for Success/Error States */}
        {formSubmitted && (
          <div className="absolute inset-0 bg-white/95 backdrop-blur-sm rounded-[24px] flex flex-col items-center justify-center p-8 text-center z-20">
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
  );
}
