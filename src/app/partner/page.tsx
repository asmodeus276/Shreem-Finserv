import { Metadata } from "next";
import { PartnerSection } from "@/components/PartnerSection";
import { AwardsShowcase } from "@/components/AwardsShowcase";
import { PartnerMarquee } from "@/components/PartnerMarquee";

export const metadata: Metadata = {
  title: "Become a Channel Partner / DSA - Earn ₹1 Lakh+ Monthly",
  description:
    "Partner with Shreem Finserv. Access 50+ Banks & NBFCs, top commission slabs, dedicated relationship manager, and live digital CRM portal.",
};

export default function PartnerPage() {
  return (
    <div className="pt-24 pb-16">
      <PartnerSection />
      <AwardsShowcase />
      <PartnerMarquee />
    </div>
  );
}
