import React from "react";
import Image from "next/image";
import Link from "next/link";

interface BrandLogoProps {
  variant?: "header" | "footer" | "hero" | "compact";
  showTagline?: boolean;
  className?: string;
  theme?: "light" | "dark";
}

export default function BrandLogo({
  variant = "header",
  showTagline = true,
  className = "",
  theme = "light",
}: BrandLogoProps) {
  const isDark = theme === "dark" || variant === "footer";
  const isHero = variant === "hero";
  const isCompact = variant === "compact";

  const imageSize = isHero ? 60 : isCompact ? 32 : 44;

  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-2.5 sm:gap-3 transition-opacity duration-150 hover:opacity-95 shrink-0 ${className}`}
      aria-label="RMI BPO LLC - Domestic BPO Partner"
    >
      {/* Visual Emblem Badge with Delicate Executive Border */}
      <div
        className={`relative shrink-0 rounded-full p-0.5 shadow-xs transition-transform duration-150 group-hover:scale-102 ${
          isDark
            ? "bg-[#061129] border border-[#b8860b]/60 ring-1 ring-white/10"
            : "bg-white border border-[#b8860b]/40 ring-1 ring-slate-100"
        }`}
      >
        <div className="relative overflow-hidden rounded-full bg-white w-9 h-9 sm:w-11 sm:h-11">
          <Image
            src="/assets/logo-badge.jpg"
            alt="RMI BPO LLC Emblem"
            width={imageSize}
            height={imageSize}
            className="rounded-full object-cover w-full h-full"
            priority={variant === "header"}
          />
        </div>
      </div>

      {/* Bespoke HTML / CSS Brand Typography Lockup */}
      <div className="flex flex-col justify-center">
        <div className="flex items-baseline gap-1 leading-none">
          {/* RMI in Unified Modern Executive Typography */}
          <span
            className={`font-extrabold tracking-tight ${
              isDark ? "text-white" : "text-[#0a1c42]"
            } ${
              isHero
                ? "text-3xl sm:text-4xl"
                : isCompact
                ? "text-base sm:text-lg"
                : "text-lg sm:text-xl md:text-[22px]"
            }`}
            style={{
              fontFamily: "var(--font-heading), var(--font-inter), sans-serif",
              letterSpacing: "-0.025em",
            }}
          >
            RMI
          </span>

          {/* BPO in Harmonized Warm Gold */}
          <span
            className={`font-extrabold tracking-tight ${
              isHero
                ? "text-3xl sm:text-4xl"
                : isCompact
                ? "text-base sm:text-lg"
                : "text-lg sm:text-xl md:text-[22px]"
            }`}
            style={{
              fontFamily: "var(--font-heading), var(--font-inter), sans-serif",
              color: "#b8860b",
              letterSpacing: "-0.025em",
            }}
          >
            BPO
          </span>

          {/* LLC in Seamless Legal Designator (No Box) */}
          <span
            className={`font-bold uppercase ml-1 ${
              isDark ? "text-slate-400" : "text-slate-500"
            } ${isHero ? "text-xs sm:text-sm" : "text-[10px] sm:text-[11px]"}`}
            style={{
              fontFamily: "var(--font-heading), var(--font-inter), sans-serif",
              letterSpacing: "0.14em",
            }}
          >
            LLC
          </span>
        </div>

        {/* Sub-tagline: Clean Corporate Descriptor */}
        {showTagline && (
          <span
            className={`${
              variant === "header" ? "hidden sm:block" : "block"
            } text-[9px] sm:text-[9.5px] font-semibold tracking-[0.14em] uppercase mt-1 ${
              isDark ? "text-slate-400" : "text-slate-500"
            }`}
          >
            Domestic BPO Partner
          </span>
        )}
      </div>
    </Link>
  );
}
