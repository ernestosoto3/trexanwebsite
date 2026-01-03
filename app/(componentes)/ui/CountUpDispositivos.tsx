"use client";

import { useEffect, useState, useRef, memo } from "react";

// ============================================================================
// CONSTANTS
// ============================================================================
const RATE_PER_WEEK = 200_000;
const START_DATE = new Date("2025-01-01T00:00:00Z");
const UPDATE_INTERVAL_MS = 1000; // Update every 1 second for smoother feel

// ============================================================================
// HELPER FUNCTION - Calculate current count
// ============================================================================
function calculateCurrentCount(): number {
  const now = new Date();
  const diffMs = now.getTime() - START_DATE.getTime();
  const diffWeeks = diffMs / (1000 * 60 * 60 * 24 * 7);
  const total = Math.floor(diffWeeks * RATE_PER_WEEK);
  return Math.max(0, total); // Prevent negative numbers
}

// ============================================================================
// COUNT UP COMPONENT
// ============================================================================
function CountUpDispositivosComponent() {
  // Use null initially to detect hydration
  const [count, setCount] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  // ============================================================================
  // VISIBILITY DETECTION - Only update when visible
  // ============================================================================
  useEffect(() => {
    if (!elementRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry) {
          setIsVisible(entry.isIntersecting);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(elementRef.current);

    return () => observer.disconnect();
  }, []);

  // ============================================================================
  // COUNT UPDATE - Only when visible
  // ============================================================================
  useEffect(() => {
    // Set initial count on mount (fixes hydration mismatch)
    setCount(calculateCurrentCount());

    // Only update if visible
    if (!isVisible) return;

    const interval = setInterval(() => {
      setCount(calculateCurrentCount());
    }, UPDATE_INTERVAL_MS);

    return () => clearInterval(interval);
  }, [isVisible]);

  // ============================================================================
  // RENDER
  // ============================================================================
  // Show 0 during hydration to prevent mismatch
  const displayCount = count ?? 0;

  return (
    <span
      ref={elementRef}
      className="text-5xl md:text-6xl font-extrabold text-white tracking-tight tabular-nums"
      suppressHydrationWarning
    >
      {displayCount.toLocaleString()}
    </span>
  );
}

// ============================================================================
// MEMOIZED EXPORT
// ============================================================================
const CountUpDispositivos = memo(CountUpDispositivosComponent);
CountUpDispositivos.displayName = "CountUpDispositivos";

export default CountUpDispositivos;