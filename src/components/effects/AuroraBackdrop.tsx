import React from "react";

export default function AuroraBackdrop({ className = "", children }: React.PropsWithChildren<{ className?: string }>) {
  return (
    <div className={`relative ${className}`}>
      <div className="pointer-events-none absolute inset-0 bg-aurora" />
      <div className="pointer-events-none absolute inset-0 bg-mesh mix-blend-overlay" />
      {children}
    </div>
  );
}
