"use client";

import { memo } from "react";
import Image from "next/image";
import type { ReactNode } from "react";
import Button from "./Button";

// ============================================================================
// TYPES
// ============================================================================
type HeroButton = {
  href: string;
  label: string;
  variant?: "primary" | "outline" | "orange";
  className?: string;
};

type HeroBackground =
  | {
      type: "image";
      src: string;
      alt?: string;
      priority?: boolean;
    }
  | {
      type: "video";
      src: string;
      poster?: string;
      preload?: "auto" | "metadata" | "none";
    };

type HeroProps = {
  bg: HeroBackground;
  height?: "60vh" | "70vh" | "custom";
  customHeightClassName?: string;
  overlayVariant?: "solid" | "gradient";
  overlayClassName?: string;
  badgeText?: string;
  badgeDot?: boolean;
  title: string;
  subtitle?: ReactNode;
  align?: "left" | "center";
  badgeAlign?: "inherit" | "left" | "center";
  buttons?: HeroButton[];
  contentClassName?: string;
};

// ============================================================================
// HERO COMPONENT
// ============================================================================
function HeroComponent({
  bg,
  height = "70vh",
  customHeightClassName = "min-h-[70vh]",
  overlayVariant = bg.type === "video" ? "gradient" : "solid",
  overlayClassName,
  badgeText,
  badgeDot = true,
  title,
  subtitle,
  align = "left",
  badgeAlign = "inherit",
  buttons = [],
  contentClassName = "",
}: HeroProps) {
  const isCenter = align === "center";

  // Height classes
  const heightClass =
    height === "60vh"
      ? "h-[60vh]"
      : height === "70vh"
      ? "min-h-[70vh]"
      : customHeightClassName;

  // Overlay classes
  const overlay =
    overlayClassName ??
    (overlayVariant === "gradient"
      ? "bg-gradient-to-b from-black/70 via-black/65 to-black/60"
      : "bg-black/45");

  // Badge alignment
  const badgeRowJustify =
    badgeAlign === "inherit"
      ? isCenter
        ? "justify-center"
        : "justify-start"
      : badgeAlign === "center"
      ? "justify-center"
      : "justify-start";

  return (
    <section className="relative overflow-hidden bg-black text-white">
      {/* Background */}
      <div className="absolute inset-0">
        {bg.type === "video" ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            preload={bg.preload ?? "auto"}
            poster={bg.poster}
            className="h-full w-full object-cover"
          >
            <source src={bg.src} type="video/mp4" />
          </video>
        ) : (
          <Image
            src={bg.src}
            alt={bg.alt ?? "Hero background"}
            fill
            priority={bg.priority ?? true}
            className="object-cover opacity-70"
            sizes="100vw"
            quality={85}
          />
        )}

        <div className={`absolute inset-0 ${overlay}`} />
      </div>

      {/* Content */}
      <div
        className={`section relative flex items-center py-16 md:py-20 ${heightClass}`}
      >
        <div
          className={`max-w-4xl space-y-6 ${isCenter ? "mx-auto text-center" : ""} ${contentClassName}`}
        >
          {/* Badge */}
          {badgeText && (
            <div className={`flex ${badgeRowJustify}`}>
              <span className="relative inline-flex items-center justify-center bg-white/25 px-6 py-2.5 md:py-3 text-sm uppercase tracking-wider leading-none">
                {badgeDot && (
                  <span className="absolute left-3 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-[--color-primary]" />
                )}
                <span className="text-center">{badgeText}</span>
              </span>
            </div>
          )}

          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
            {title}
          </h1>

          {/* Subtitle */}
          {subtitle && (
            <div className="text-base md:text-lg text-white/90 max-w-3xl leading-relaxed">
              {subtitle}
            </div>
          )}

          {/* Buttons */}
          {buttons.length > 0 && (
            <div
              className={`flex flex-wrap gap-4 ${isCenter ? "justify-center" : ""}`}
            >
              {buttons.map((button) => (
                <Button
                  key={button.href}
                  href={button.href}
                  variant={button.variant ?? "primary"}
                  className={button.className ?? ""}
                >
                  {button.label}
                </Button>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// MEMOIZED EXPORT
// ============================================================================
const Hero = memo(HeroComponent);
Hero.displayName = "Hero";

export default Hero;