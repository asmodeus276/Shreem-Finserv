import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { MobileStickyBar } from "@/components/MobileStickyBar";
import { BRAND_CONFIG } from "@/config/brand";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#001A62",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: {
    template: `%s | ${BRAND_CONFIG.name}`,
    default: `${BRAND_CONFIG.name} - ${BRAND_CONFIG.tagline}`,
  },
  description:
    "Instant loan disbursal with minimal paperwork. Shreem Finserv provides bespoke personal loans for doctors, MSME working capital, Loan Against Property (LAP), machinery loans, and women entrepreneur loans with 100% DPDP 2026 compliance.",
  keywords: [
    "Shreem Finserv",
    "Personal loan for doctors",
    "MSME working capital loan",
    "Loan against property",
    "Machinery loan",
    "Urgent cash advance",
    "Loans for women entrepreneurs",
    "Fast loan disbursal India",
  ],
  authors: [{ name: BRAND_CONFIG.name }],
  icons: {
    icon: "/logo-mark.png",
    apple: "/logo-mark.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakartaSans.variable} scroll-smooth`}>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans bg-[#F7F9FB] text-slate-900 antialiased selection:bg-[#0B2E8D] selection:text-white pb-14 md:pb-0">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <MobileStickyBar />
      </body>
    </html>
  );
}
