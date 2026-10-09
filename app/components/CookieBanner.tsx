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
    <div className="fixed bottom-0 left-0 right-0 bg-[#111111] border-t border-gray-800 p-4 md:p-6 z-[100] flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="text-gray-300 text-sm md:text-base">
        We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking "Accept", you consent to our use of cookies. 
        <Link href="/cookie-policy" className="text-blue-500 hover:underline ml-2">
          Read More
        </Link>
      </div>
      <div className="flex gap-4 shrink-0">
        <button 
          onClick={() => setShowBanner(false)}
          className="bg-transparent border border-gray-600 hover:bg-gray-800 text-white px-6 py-2 rounded-full font-medium transition-colors"
        >
          Decline
        </button>
        <button 
          onClick={acceptCookies}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-medium transition-colors"
        >
          Accept
        </button>
      </div>
    </div>
  );
}
