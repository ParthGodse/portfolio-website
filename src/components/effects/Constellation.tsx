import React, { useMemo } from "react";

export default function Constellation({ count = 24, className = "" }: { count?: number; className?: string }) {
  const stars = useMemo(() => Array.from({ length: count }, () => ({
    top: Math.random() * 100,
    left: Math.random() * 100,
    size: Math.random() * 2 + 1,
    delay: Math.random() * 4,
  })), [count]);

  return (
    <div aria-hidden className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {stars.map((s, i) => (
        <span
          key={i}
          style={{ top: `${s.top}%`, left: `${s.left}%`, width: s.size, height: s.size, animationDelay: `${s.delay}s` }}
          className="absolute rounded-full bg-white/50 blur-[1px] animate-pulse"
        />
      ))}
    </div>
  );
}
