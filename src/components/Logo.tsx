import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BRAND_CONFIG } from "@/config/brand";

interface LogoProps {
  variant?: "light" | "dark" | "auto";
  showTagline?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
  href?: string;
}

export const Logo: React.FC<LogoProps> = ({
  variant = "auto",
  showTagline = true,
  size = "md",
  className = "",
  href = "/",
}) => {
  const isLight = variant === "light";
  
  const sizeMap = {
    sm: { img: 36, title: "text-lg", tag: "text-[10px]" },
    md: { img: 48, title: "text-xl md:text-2xl", tag: "text-xs" },
    lg: { img: 56, title: "text-2xl md:text-3xl", tag: "text-xs md:text-sm" },
  };

  const content = (
    <div className={`inline-flex items-center gap-3 group select-none ${className}`}>
      <div className="relative flex-shrink-0 flex items-center justify-center">
        <Image
          src="/logo-mark.png"
          alt="Shreem Finserv Logo"
          width={sizeMap[size].img}
          height={sizeMap[size].img}
          className="object-contain transition-transform duration-300 group-hover:scale-105"
          priority
        />
      </div>
      <div className="flex flex-col justify-center">
        <span
          className={`font-bold tracking-tight uppercase leading-none ${sizeMap[size].title} ${
            isLight
              ? "text-white"
              : variant === "dark"
              ? "text-[#001A62]"
              : "text-[#001A62] dark:text-[#B7C4FF]"
          }`}
        >
          SHREEM FINSERV
        </span>
        {showTagline && (
          <span
            className={`font-medium tracking-wide uppercase mt-1 leading-none ${sizeMap[size].tag} ${
              isLight
                ? "text-white/80"
                : variant === "dark"
                ? "text-[#64748B]"
                : "text-[#64748B] dark:text-slate-300"
            }`}
          >
            {BRAND_CONFIG.tagline}
          </span>
        )}
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0B2E8D] rounded-lg">
        {content}
      </Link>
    );
  }

  return content;
};

export default Logo;
