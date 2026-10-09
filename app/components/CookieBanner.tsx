"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  if (!showBanner) return null;

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "true");
    setShowBanner(false);
  };

  return (
    <div className="fixed bottom-4 left-4 right-4 md:right-auto md:bottom-6 md:left-6 md:max-w-[360px] bg-white border border-slate-200 rounded-2xl p-5 shadow-2xl z-[100] flex flex-col gap-3 animate-in fade-in slide-in-from-bottom-4 duration-300">
      <div className="flex items-start justify-between gap-4">
        <h3 className="font-bold text-slate-900 text-[15px]">We value your privacy</h3>
        <button onClick={() => setShowBanner(false)} className="text-slate-400 hover:text-slate-600 transition-colors shrink-0" aria-label="Close">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <p className="text-slate-600 text-[13px] leading-relaxed">
        We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. 
        <Link href="/cookie-policy" className="text-blue-600 hover:underline ml-1 font-medium">
          Cookie Policy
        </Link>
      </p>
      <div className="flex gap-2 w-full mt-2">
        <button 
          onClick={() => setShowBanner(false)}
          className="flex-1 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 py-2.5 rounded-xl text-[13px] font-bold transition-colors"
        >
          Decline
        </button>
        <button 
          onClick={acceptCookies}
          className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-xl text-[13px] font-bold transition-colors shadow-sm"
        >
          Accept
        </button>
      </div>
    </div>
  );
}
