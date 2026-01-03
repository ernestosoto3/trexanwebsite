"use client";

import { memo, useEffect, useState, useCallback } from "react";

// ============================================================================
// CONSTANTS
// ============================================================================
const SCROLL_THRESHOLD = 300; // Show button after scrolling 300px
const THROTTLE_MS = 100; // Throttle scroll events to once per 100ms

// ============================================================================
// UTILITIES
// ============================================================================
/**
 * Throttle function - limits how often a function can fire
 */
function throttle<T extends (...args: any[]) => void>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;
  return function (this: any, ...args: Parameters<T>) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

// ============================================================================
// ARROW UP ICON COMPONENT
// ============================================================================
const ArrowUpIcon = memo(() => (
  <svg
    className="h-5 w-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2.5}
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M5 10l7-7m0 0l7 7m-7-7v18"
    />
  </svg>
));

ArrowUpIcon.displayName = "ArrowUpIcon";

// ============================================================================
// SCROLL TO TOP COMPONENT
// ============================================================================
function ScrollToTopComponent() {
  const [isVisible, setIsVisible] = useState(false);

  // Memoized scroll handler
  const handleScroll = useCallback(() => {
    setIsVisible(window.scrollY > SCROLL_THRESHOLD);
  }, []);

  // Throttled scroll handler
  const throttledHandleScroll = useCallback(
    () => throttle(handleScroll, THROTTLE_MS)(),
    [handleScroll]
  );

  useEffect(() => {
    // Only add listener if component is mounted
    window.addEventListener("scroll", throttledHandleScroll, { passive: true });
    
    // Check initial scroll position
    handleScroll();

    return () => window.removeEventListener("scroll", throttledHandleScroll);
  }, [throttledHandleScroll, handleScroll]);

  // Memoized scroll to top function
  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`
        fixed bottom-6 right-6 z-50
        h-11 w-11 rounded-full
        bg-emerald-700 text-white
        shadow-lg backdrop-blur
        flex items-center justify-center
        transition-all duration-300
        hover:bg-emerald-800
        active:scale-95
        focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2
        ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 pointer-events-none"
        }
      `}
    >
      <ArrowUpIcon />
    </button>
  );
}

// ============================================================================
// MEMOIZED EXPORT
// ============================================================================
const ScrollToTop = memo(ScrollToTopComponent);
ScrollToTop.displayName = "ScrollToTop";

export default ScrollToTop;