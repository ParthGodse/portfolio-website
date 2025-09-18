// components/ResumeModal.tsx
import React, { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { X, Download, ExternalLink } from "lucide-react";

type ResumeModalProps = {
  open: boolean;
  onClose: () => void;
  src?: string;
  fileName?: string;
  origin?: { x: number; y: number } | null;
};

export default function ResumeModal({
  open,
  onClose,
  src = "/resume.pdf",
  fileName = "Resume.pdf",
  origin,
}: ResumeModalProps) {
  const [zoom, setZoom] = useState(1);
  const [mounted, setMounted] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  const originStyle = useMemo(() => {
    if (!origin) return { transformOrigin: "50% 50%" } as React.CSSProperties;
    const x = (origin.x / window.innerWidth) * 100;
    const y = (origin.y / window.innerHeight) * 100;
    return { transformOrigin: `${x}% ${y}%` } as React.CSSProperties;
  }, [origin]);

  useEffect(() => setMounted(true), []);
  useEffect(() => {
    if (!open) return;
    const html = document.documentElement;
    const prev = html.style.overflow;
    html.style.overflow = "hidden";
    html.classList.add("has-resume-open");
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      html.style.overflow = prev;
      html.classList.remove("has-resume-open");
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  useEffect(() => { if (open) setZoom(1); }, [open]);

  if (!mounted || !open) return null;

  const pdfSrc = `${src}#toolbar=0&navpanes=0`;

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Resume preview"
      className="fixed inset-0 z-[1000] grid place-items-center"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity" />

      {/* Panel */}
      <div
        ref={panelRef}
        className="
          relative z-10 w-[min(92vw,1000px)] h-[min(88vh,1200px)]
          rounded-2xl border border-white/10
          bg-[#0c1320]/85 text-white backdrop-blur-md
          shadow-[0_20px_60px_rgba(0,0,0,.55)]
          overflow-hidden
        "
        style={{ ...originStyle, animation: "resumePop .22s ease-out" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* ----- Polished top bar ----- */}
        <div className="flex items-center justify-between gap-3 px-3 py-2 border-b border-white/10 bg-white/5 backdrop-blur-md">
        <div className="flex items-center gap-2 min-w-0">
            {/* Close: bright icon, softer fill */}
            <button
            onClick={onClose}
            aria-label="Close"
             className="resume-modal relative z-10 rounded-2xl border border-white/10 bg-[#0c1320]/85 text-white backdrop-blur-md shadow-[0_20px_60px_rgba(0,0,0,.55)] overflow-hidden"
            >
            <X size={16} className="opacity-90 text-white" />
            </button>
            <div className="text-sm font-medium justify-center items-center text-white/90 truncate">Resume</div>
        </div>

        <div className="flex items-center gap-2">
            {/* Segmented zoom control — icons forced white, fills softened */}
            {/* <div className="inline-flex items-center gap-1 rounded-full border border-white/15 bg-white/10 px-1 py-1">
            <button
                onClick={dec}
                aria-label="Zoom out"
                className="inline-flex h-7 w-7 items-center justify-center rounded-full
                        border border-white/15 bg-white/10 text-white/90
                        hover:bg-white/15 hover:text-white transition"
            >
                <ZoomOut size={14} className="opacity-90" />
            </button>

            <div className="px-2 h-7 inline-flex items-center rounded-full bg-white/14 text-[11px] font-semibold text-white">
                {Math.round(zoom * 100)}%
            </div>

            <button
                onClick={inc}
                aria-label="Zoom in"
                className="inline-flex h-7 w-7 items-center justify-center rounded-full
                        border border-white/15 bg-white/10 text-white/90
                        hover:bg-white/15 hover:text-white transition"
            >
                <ZoomIn size={14} className="opacity-90" />
            </button>
            </div> */}

            {/* Brand-outline actions — same look as navbar Resume chip */}
            <a
            href={src}
            download={fileName}
            className="
                hidden sm:inline-flex items-center gap-1 h-8 px-3 text-xs
                nav-pill nav-pill--brand
                bg-white/5 text-white/90 hover:text-white
            "
            >
            <Download size={14} className="opacity-90" />
            Download
            </a>

            <a
            href={src}
            target="_blank"
            rel="noopener noreferrer"
            className="
                hidden sm:inline-flex items-center gap-1 h-8 px-3 text-xs
                nav-pill nav-pill--brand
                bg-white/5 text-white/90 hover:text-white
            "
            >
            <ExternalLink size={14} className="opacity-90" />
            New tab
            </a>
        </div>
        </div>
        {/* ----- /top bar ----- */}

        {/* Viewer */}
        <div className="relative h-[calc(100%-42px)] overflow-auto bg-black/25">
          <div className="flex justify-center p-4">
            <div
              className="origin-top w-full max-w-[900px]"
              style={{ transform: `scale(${zoom})`, width: `${100 / zoom}%` }}
            >
              <iframe title="Resume PDF" src={pdfSrc} className="w-full h-[78vh] bg-white rounded-lg" />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes resumePop { 0% { opacity: 0; transform: scale(.985) } 100% { opacity: 1; transform: scale(1) } }
      `}</style>
    </div>,
    document.body
  );
}
