import type { Metadata, Viewport } from "next";
import { Inter, Fira_Code, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-inter",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
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
  title: "SmartOnward - We Engineer Momentum | Autonomous Growth & Web Architecture",
  description:
    "SmartOnward consolidates high-converting web architecture, viral content engines, and intelligent 24/7 AI automation into one cohesive revenue operating system.",
};

import Header from "./components/Header";
import AmbientBackground from "./components/AmbientBackground";
import GrowthAuditModal from "./components/GrowthAuditModal";

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
      <body className="font-sans antialiased text-slate-900 selection:bg-blue-100 selection:text-blue-700 relative min-h-screen">
        <AmbientBackground />
        <Header />
        {children}
        <GrowthAuditModal />
      </body>
    </html>
  );
}
