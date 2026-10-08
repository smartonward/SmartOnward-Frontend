import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SmartOnward Technologies — Social Media Management",
  description:
    "We plan, create, publish and optimize social content that keeps your brand visible, consistent and connected with the people you want to reach.",
};

export default function SocialMediaManagementLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
