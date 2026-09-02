import { Metadata } from "next";
import { PartnerSection } from "@/components/PartnerSection";
import { AwardsShowcase } from "@/components/AwardsShowcase";
import { PartnerMarquee } from "@/components/PartnerMarquee";
import { InnerBanner } from "@/components/InnerBanner";

export const metadata: Metadata = {
  title: "Become a Channel Partner / DSA - Earn ₹1 Lakh+ Monthly | Shreem Finserv",
  description:
    "Partner with Shreem Finserv. Access 50+ Banks & NBFCs, top commission slabs, dedicated relationship manager, and live digital CRM portal.",
};

export default function PartnerPage() {
  return (
    <div className="pt-24 sm:pt-28 md:pt-32 pb-16">
      
      {/* Capital Need Style Banner */}
      <InnerBanner
        badge="INSTITUTIONAL DSA PROGRAM"
        badgeIcon="handshake"
        title="Become a Shreem"
        highlightText="DSA Channel Partner"
        subtitle="Empower your clients with instant approvals across 50+ Scheduled Commercial Banks & NBFCs while earning industry-leading payouts and dedicated RM support."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Partners" },
          { label: "DSA Program" },
        ]}
        imageSrc="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=800&q=80"
        imageAlt="Shreem Finserv Channel Partner & DSA Network"
        ctaText="Register as Partner"
        ctaLink="#partner-onboarding-section"
        quickStats={[
          { label: "Lending Tie-ups", value: "50+ Banks" },
          { label: "Average Earnings", value: "₹1L - ₹5L/mo" },
          { label: "Payout SLA", value: "Weekly Direct" },
          { label: "CRM Portal", value: "Live Tracking" },
        ]}
      />

      <PartnerSection />
      <AwardsShowcase />
      <PartnerMarquee />
    </div>
  );
}
