"use client";

import Image from "next/image";
import type { ReactNode } from "react";
import Button from "./Button";

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
      // Optional: default opacity is handled in Image className below
    }
  | {
      type: "video";
      src: string;
      poster?: string;
    };

type HeroProps = {
  // Background (optional, but you’ll almost always pass it)
  bg: HeroBackground;

  // Height presets: matches your existing heroes
  // - "60vh": your image heroes
  // - "70vh": your favorite video hero default
  // - "custom": allow fully custom class
  height?: "60vh" | "70vh" | "custom";
  customHeightClassName?: string; // used when height="custom"

  // Overlay
  // - "solid": matches bg-black/45 you use on image heroes
  // - "gradient": matches the video hero overlay
  overlayVariant?: "solid" | "gradient";
  overlayClassName?: string; // full override if needed

  // Content
  badgeText?: string;
  badgeDot?: boolean; // default true
  title: string;
  subtitle?: ReactNode;

  // Alignment
  // "left": your standard
  // "center": full centered hero
  align?: "left" | "center";

  // Sometimes you want the badge centered but text left (you had that)
  badgeAlign?: "inherit" | "left" | "center";

  // Buttons
  buttons?: HeroButton[];

  // Extra escape hatch for one-off tweaks without forking the component
  contentClassName?: string;
};

export default function Hero({
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

  const heightClass =
    height === "60vh"
      ? "h-[60vh]"
      : height === "70vh"
      ? "min-h-[70vh]"
      : customHeightClassName;

  const overlay =
    overlayClassName ??
    (overlayVariant === "gradient"
      ? "bg-gradient-to-b from-black/70 via-black/65 to-black/60"
      : "bg-black/45");

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
          />
        )}

        <div className={`absolute inset-0 ${overlay}`} />
      </div>

      {/* Content */}
      <div className={`section relative flex items-center py-16 md:py-20 ${heightClass}`}>
        <div
          className={[
            "max-w-4xl space-y-6",
            isCenter ? "mx-auto text-center" : "",
            contentClassName,
          ].join(" ")}
        >
          {/* Badge (pill) */}
          {badgeText ? (
            <div className={`flex ${badgeRowJustify}`}>
              {/* This version keeps the TEXT perfectly centered in the pill,
                  while the dot sits on the left without shifting centering */}
              <span className="relative inline-flex items-center justify-center bg-white/25 px-6 py-2.5 md:py-3 text-sm uppercase tracking-wider leading-none">
                {badgeDot ? (
                  <span className="absolute left-3 top-1/2 h-2 w-2 -translate-y-1/2 bg-[--color-primary]" />
                ) : null}
                <span className="text-center">{badgeText}</span>
              </span>
            </div>
          ) : null}

          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
            {title}
          </h1>

          {/* Subtitle */}
          {subtitle ? (
            <div className="text-base md:text-lg text-white/90 max-w-3xl leading-relaxed">
              {subtitle}
            </div>
          ) : null}

          {/* Buttons */}
          {buttons.length > 0 ? (
            <div className={`flex flex-wrap gap-4 ${isCenter ? "justify-center" : ""}`}>
              {buttons.map((b, idx) => (
                <Button
                  key={`${b.href}-${idx}`}
                  href={b.href}
                  variant={b.variant ?? "primary"}
                  className={b.className ?? ""}
                >
                  {b.label}
                </Button>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
