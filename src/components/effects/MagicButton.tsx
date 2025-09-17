import React from "react";

export default function MagicButton({ className = "", children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className={`group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-white/20 px-5 py-2 text-sm text-white transition-transform hover:scale-[1.03] ${className}`}
    >
      <span className="absolute inset-0 -z-10 bg-gradient-to-r from-indigo-500/20 via-fuchsia-500/20 to-emerald-500/20" />
      <span className="absolute inset-0 -z-10 animate-shimmer opacity-0 group-hover:opacity-100 bg-[linear-gradient(110deg,rgba(255,255,255,.05)_25%,rgba(255,255,255,.2)_37%,rgba(255,255,255,.05)_63%)]" />
      <span className="relative z-10">{children}</span>
    </button>
  );
}
