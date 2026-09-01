import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SmartOnward — AI Automation",
  description:
    "We automate repetitive work, connect your tools and build AI-powered workflows that help your team respond faster, save time and focus on higher-value work.",
};

export default function AIAutomationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
