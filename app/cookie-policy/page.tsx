import React from "react";
import Link from "next/link";

export default function CookiePolicy() {
  return (
    <main className="min-h-screen bg-white pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        <h1 className="text-4xl sm:text-5xl font-black text-slate-900 mb-8">
          Cookie Policy
        </h1>
        <div className="prose prose-slate prose-lg max-w-none text-slate-600 space-y-6">
          <p className="font-bold">Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>

          <p>
            This is the Cookie Policy for SmartOnward Technologies, accessible from smartonward.com.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">1. What Are Cookies</h2>
          <p>
            As is common practice with almost all professional websites this site uses cookies, which are tiny files that are downloaded to your computer, to improve your experience. This page describes what information they gather, how we use it and why we sometimes need to store these cookies. We will also share how you can prevent these cookies from being stored however this may downgrade or &apos;break&apos; certain elements of the sites functionality.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">2. How We Use Cookies</h2>
          <p>
            We use cookies for a variety of reasons detailed below. Unfortunately in most cases there are no industry standard options for disabling cookies without completely disabling the functionality and features they add to this site. It is recommended that you leave on all cookies if you are not sure whether you need them or not in case they are used to provide a service that you use.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">3. Disabling Cookies</h2>
          <p>
            You can prevent the setting of cookies by adjusting the settings on your browser (see your browser Help for how to do this). Be aware that disabling cookies will affect the functionality of this and many other websites that you visit. Disabling cookies will usually result in also disabling certain functionality and features of the this site. Therefore it is recommended that you do not disable cookies.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">4. The Cookies We Set</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Site preferences cookies:</strong> In order to provide you with a great experience on this site we provide the functionality to set your preferences for how this site runs when you use it. In order to remember your preferences we need to set cookies so that this information can be called whenever you interact with a page is affected by your preferences.
            </li>
            <li>
              <strong>Forms related cookies:</strong> When you submit data to through a form such as those found on contact pages or comment forms cookies may be set to remember your user details for future correspondence.
            </li>
          </ul>

          <div className="pt-12 mt-12 border-t border-slate-200">
            <Link href="/" className="text-blue-600 font-bold hover:underline">← Back to Home</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
