import type { Metadata, Viewport } from "next";
import { Inter, Fira_Code, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fira-code",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-poppins",
});

export const viewport: Viewport = {
  themeColor: "#2563EB",
};

export const metadata: Metadata = {
  metadataBase: new URL('https://www.smartonward.com'),
  title: {
    default: "SmartOnward Technologies - We Engineer Momentum",
    template: "%s | SmartOnward Technologies",
  },
  description:
    "SmartOnward Technologies consolidates high-converting web architecture, viral content engines, and intelligent 24/7 AI automation into one cohesive revenue operating system.",
  openGraph: {
    title: "SmartOnward Technologies - We Engineer Momentum",
    description: "High-converting web architecture, viral content engines, and intelligent 24/7 AI automation.",
    url: "https://www.smartonward.com",
    siteName: "SmartOnward Technologies",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SmartOnward Technologies",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SmartOnward Technologies",
    description: "High-converting web architecture, viral content engines, and intelligent 24/7 AI automation.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

import Header from "./components/Header";
import AmbientBackground from "./components/AmbientBackground";
import GrowthAuditModal from "./components/GrowthAuditModal";
import CookieBanner from "./components/CookieBanner";
import Script from "next/script";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${inter.variable} ${firaCode.variable} ${poppins.variable}`}
    >
      <head>
        {/* Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-HZ5THH5NXZ" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-HZ5THH5NXZ');
            `,
          }}
        />
      </head>
      <body className="font-sans antialiased text-slate-900 selection:bg-blue-100 selection:text-blue-700 relative min-h-screen">
        <AmbientBackground />
        <Header />
        {children}
        <GrowthAuditModal />
        <CookieBanner />
      </body>
    </html>
  );
}
