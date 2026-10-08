import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SmartOnward Technologies — Digital Marketing",
  description:
    "We build digital marketing campaigns that connect the right audience with the right message — across search, social, paid advertising and content.",
};

export default function DigitalMarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
