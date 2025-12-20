'use client';

import { useEffect, useState } from 'react';

// 200,000 dispositivos por semana
const RATE_PER_WEEK = 200_000;
// Fecha de inicio: 1 enero 2025
const START_DATE = new Date('2025-01-01T00:00:00Z');

export default function CountUpDispositivos() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    function updateCount() {
      const now = new Date();
      const diffMs = now.getTime() - START_DATE.getTime();
      const diffWeeks = diffMs / (1000 * 60 * 60 * 24 * 7);

      const total = Math.floor(diffWeeks * RATE_PER_WEEK);
      setCount(total);
    }

    updateCount();
    const interval = setInterval(updateCount, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <span className="text-5xl md:text-6xl font-extrabold text-white tracking-tight">
      {count.toLocaleString()}
    </span>
  );
}
