import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

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
  title: "SmartOnward — Digital Growth & Automation Agency",
  description:
    "SmartOnward is a digital growth and automation agency helping businesses build their digital presence, grow customer reach and automate repetitive work.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.variable}>
      <head>
        <style
          dangerouslySetInnerHTML={{
            __html: `
              /* Critical Anti-FOUC rules */
              html { font-family: 'Poppins', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; }
              body { margin: 0; padding: 0; background: #fff; color: #0F172A; }
              img { max-width: 100%; height: auto; }
              .logo-img { height: 28px !important; width: auto !important; max-height: 28px !important; object-fit: contain; }
              nav { position: fixed; top: 0; left: 0; right: 0; z-index: 100; background: rgba(255, 255, 255, 0.94); }
              .nav-inner { max-width: 1200px; margin: auto; height: 56px; display: flex; align-items: center; justify-content: space-between; padding: 0 5%; }
              .logo { display: flex; align-items: center; gap: 8px; text-decoration: none; }
              .nav-links { display: flex; align-items: center; gap: 24px; list-style: none; margin: 0; padding: 0; }
              @media (max-width: 900px) {
                .nav-links:not(.open) { display: none !important; }
              }
            `,
          }}
        />
      </head>
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
