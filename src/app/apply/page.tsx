import { Metadata } from "next";
import ApplyClientPage from "./ApplyClientPage";

export const metadata: Metadata = {
  title: "Apply Online for Instant Loan Approval - Shreem Finserv",
  description:
    "Apply for instant Personal Loans, MSME Working Capital, Loan Against Property (LAP), and Machinery Loans with 50+ RBI-regulated bank & NBFC partners.",
};

export default function ApplyPage() {
  return <ApplyClientPage />;
}
