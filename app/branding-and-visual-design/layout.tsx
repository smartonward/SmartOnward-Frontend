import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SmartOnward — Branding & Visual Design",
  description:
    "We turn ideas into distinctive brand identities that look professional, feel consistent and give your business a visual presence built for growth.",
};

export default function BrandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
