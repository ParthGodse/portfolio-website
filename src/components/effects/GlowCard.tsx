import React from "react";
import { Sparkles } from "lucide-react";

type Props = React.PropsWithChildren<{
  title?: string;
  footer?: React.ReactNode;
  className?: string;
  // optional: disable sheen if you want ultra-minimal
  sheenOnce?: boolean;
}>;

export default function GlowCard({ title, footer, className = "", children, sheenOnce = true }: Props) {
  return (
    <div
      className={`
        group relative overflow-hidden rounded-2xl border border-white/10
        bg-white/5 backdrop-blur-sm
        p-5 shadow-sm
        transition-transform duration-300
        will-change-transform will-change-opacity
        hover:-translate-y-1 hover:shadow-md
        ${className}
      `}
      // create its own composite layer (helps avoid flicker on some GPUs)
      style={{ transform: "translateZ(0)" }}
    >
      {/* lightweight one-shot sheen (no continuous shimmer) */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0"
        style={{
          background:
            "linear-gradient(110deg, rgba(255,255,255,0) 0%, rgba(255,255,255,.18) 45%, rgba(255,255,255,0) 60%)",
          maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        }}
      />
      <div
        className={`pointer-events-none absolute inset-0 rounded-2xl card-sheen ${sheenOnce ? "group-hover:card-sheen-run" : ""}`}
        aria-hidden
      />

      {title && (
        <h3 className="relative z-10 text-base font-semibold mb-2 text-white/90 flex items-center gap-2">
          <Sparkles size={16} className="opacity-70" />
          {title}
        </h3>
      )}
      <div className="relative z-10 text-white/90">{children}</div>
      {footer && <div className="relative z-10 mt-4 text-sm text-white/70">{footer}</div>}
    </div>
  );
}
