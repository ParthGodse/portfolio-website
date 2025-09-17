import React, { useMemo } from "react";

export default function Meteors({ count = 6, className = "" }: { count?: number; className?: string }) {
  const trails = useMemo(() => Array.from({ length: count }, () => ({
    top: Math.random() * 70,
    left: Math.random() * 20 - 10,
    delay: Math.random() * 6,
  })), [count]);

  return (
    <div aria-hidden className={`pointer-events-none absolute inset-0 ${className}`}>
      {trails.map((t, i) => (
        <span
          key={i}
          style={{ top: `${t.top}%`, left: `${t.left}%`, animationDelay: `${t.delay}s` }}
          className="absolute h-px w-40 bg-gradient-to-r from-transparent via-white/70 to-transparent animate-meteor opacity-0"
        />
      ))}
    </div>
  );
}
