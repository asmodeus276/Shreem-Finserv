import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BRAND_CONFIG } from "@/config/brand";

interface LogoProps {
  variant?: "light" | "dark" | "auto";
  showTagline?: boolean;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  href?: string;
}

export const Logo: React.FC<LogoProps> = ({
  variant = "auto",
  size = "md",
  className = "",
  href = "/",
}) => {
  const isLight = variant === "light";

  const sizeClasses = {
    sm: "h-9 sm:h-10 w-auto",
    md: "h-12 sm:h-14 md:h-16 w-auto",
    lg: "h-14 sm:h-16 md:h-18 w-auto",
    xl: "h-16 sm:h-20 w-auto",
  };

  const logoImage = (
    <div
      className={`inline-flex items-center group select-none transition-transform duration-200 group-hover:scale-[1.02] ${
        isLight ? "bg-white p-2 sm:p-2.5 rounded-2xl shadow-sm border border-white/20" : ""
      } ${className}`}
    >
      <Image
        src="/logo-full.png"
        alt={`${BRAND_CONFIG.name} - ${BRAND_CONFIG.tagline}`}
        width={540}
        height={144}
        className={`${sizeClasses[size]} object-contain`}
        priority
      />
    </div>
  );

  if (href) {
    return (
      <Link
        href={href}
        className="inline-flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0B2E8D] rounded-xl"
        aria-label={`${BRAND_CONFIG.name} Home`}
      >
        {logoImage}
      </Link>
    );
  }

  return logoImage;
};

export default Logo;
