import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SmartOnward Technologies — Video & Reels",
  description:
    "We create scroll-stopping videos, Reels and short-form content that bring your brand to life, communicate your message and keep your audience engaged.",
};

export default function VideoAndReelsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
