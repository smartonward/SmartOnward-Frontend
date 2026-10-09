import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Website Development",
  description:
    "We design and develop fast, modern, conversion-focused websites that make your brand look credible, communicate your value and turn visitors into customers.",
};

export default function WebsiteDevelopmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
