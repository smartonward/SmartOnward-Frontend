import React from "react";
import Link from "next/link";

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-white pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        <h1 className="text-4xl sm:text-5xl font-black text-slate-900 mb-8">
          Terms of Service
        </h1>
        <div className="prose prose-slate prose-lg max-w-none text-slate-600 space-y-6">
          <p className="font-bold">Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>

          <p>
            Welcome to SmartOnward Technologies! These terms and conditions outline the rules and regulations for the use of SmartOnward Technologies&apos;s Website, located at smartonward.com.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">1. Acceptance of Terms</h2>
          <p>
            By accessing this website we assume you accept these terms and conditions. Do not continue to use SmartOnward Technologies if you do not agree to take all of the terms and conditions stated on this page.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">2. License</h2>
          <p>
            Unless otherwise stated, SmartOnward Technologies and/or its licensors own the intellectual property rights for all material on SmartOnward Technologies. All intellectual property rights are reserved. You may access this from SmartOnward Technologies for your own personal use subjected to restrictions set in these terms and conditions.
          </p>
          <p>You must not:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Republish material from SmartOnward Technologies</li>
            <li>Sell, rent or sub-license material from SmartOnward Technologies</li>
            <li>Reproduce, duplicate or copy material from SmartOnward Technologies</li>
            <li>Redistribute content from SmartOnward Technologies</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">3. User Comments</h2>
          <p>
            Parts of this website offer an opportunity for users to post and exchange opinions and information in certain areas of the website. SmartOnward Technologies does not filter, edit, publish or review Comments prior to their presence on the website. Comments do not reflect the views and opinions of SmartOnward Technologies, its agents and/or affiliates.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">4. Limitation of Liability</h2>
          <p>
            In no event shall SmartOnward Technologies, nor any of its officers, directors and employees, be held liable for anything arising out of or in any way connected with your use of this Website whether such liability is under contract. SmartOnward Technologies, including its officers, directors and employees shall not be held liable for any indirect, consequential or special liability arising out of or in any way related to your use of this Website.
          </p>

          <div className="pt-12 mt-12 border-t border-slate-200">
            <Link href="/" className="text-blue-600 font-bold hover:underline">← Back to Home</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
