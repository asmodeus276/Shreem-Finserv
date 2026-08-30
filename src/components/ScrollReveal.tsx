"use client";

import React from "react";
import { useInView } from "@/hooks/useInView";

type AnimationVariant =
  | "fade-up"
  | "fade-down"
  | "fade-left"
  | "fade-right"
  | "zoom-in"
  | "scale-up";

interface ScrollRevealProps {
  children: React.ReactNode;
  variant?: AnimationVariant;
  delay?: number; // ms
  duration?: number; // ms
  className?: string;
  once?: boolean;
}

const variantStyles: Record<AnimationVariant, { hidden: React.CSSProperties; visible: React.CSSProperties }> = {
  "fade-up": {
    hidden: { opacity: 0, transform: "translateY(40px)" },
    visible: { opacity: 1, transform: "translateY(0)" },
  },
  "fade-down": {
    hidden: { opacity: 0, transform: "translateY(-40px)" },
    visible: { opacity: 1, transform: "translateY(0)" },
  },
  "fade-left": {
    hidden: { opacity: 0, transform: "translateX(-40px)" },
    visible: { opacity: 1, transform: "translateX(0)" },
  },
  "fade-right": {
    hidden: { opacity: 0, transform: "translateX(40px)" },
    visible: { opacity: 1, transform: "translateX(0)" },
  },
  "zoom-in": {
    hidden: { opacity: 0, transform: "scale(0.9)" },
    visible: { opacity: 1, transform: "scale(1)" },
  },
  "scale-up": {
    hidden: { opacity: 0, transform: "scale(0.95) translateY(20px)" },
    visible: { opacity: 1, transform: "scale(1) translateY(0)" },
  },
};

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  variant = "fade-up",
  delay = 0,
  duration = 700,
  className = "",
  once = true,
}) => {
  const { ref, isInView } = useInView({ threshold: 0.1, triggerOnce: once });

  const styles = variantStyles[variant];

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...(isInView ? styles.visible : styles.hidden),
        transition: `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
