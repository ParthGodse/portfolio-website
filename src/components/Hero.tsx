import { Github, Linkedin, Mail } from "lucide-react";
import AuroraBackdrop from "./effects/AuroraBackdrop";
import Constellation from "./effects/Constellation";
import Meteors from "./effects/Meteors";
import MagicButton from "./effects/MagicButton";

export default function Hero() {
  const scroll = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      role="banner"
      className="
        relative isolate overflow-hidden
        flex items-center justify-center min-h-screen min-w-screen
        text-white bg-hero-gradient
      "
      // Force true fullscreen on all browsers (dvh handles mobile chrome)
      style={{
        // minHeight: "90dvh",
        background:
          // fallback if your .bg-hero-gradient class hasn't loaded
          "radial-gradient(120% 80% at 50% -10%, hsla(245,85%,65%,.25) 0%, transparent 60%), radial-gradient(80% 60% at 20% 20%, hsla(320,75%,60%,.18) 0%, transparent 60%), linear-gradient(180deg, hsl(220,20%,4%) 0%, hsl(220,20%,4%) 60%)",
      }}
    >
      {/* Background layers (kept behind content) */}
      <AuroraBackdrop className="absolute inset-0 -z-30" />

      <div className="absolute inset-0 -z-20 bg-hero-mesh opacity-40" aria-hidden />

      {/* Angle + soften meteors so they don't look like horizontal lines */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden
        style={{
          transform: "rotate(45deg)",       // tilt the trails
          transformOrigin: "70% 30%",
          opacity: 1,                      // soften
          filter: "blur(0.2px)",             // slight blur for glow-y feel
        }}
      >
        <Constellation count={300} />
        <Meteors count={7} />
      </div>

      {/* Optional subtle dark overlay for text contrast */}
      <div
        className="absolute inset-0 -z-10"
        aria-hidden
        style={{
          background:
            "linear-gradient(180deg, transparent 0%, rgba(0,0,0,.05) 40%, rgba(0,0,0,.12) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl">
        <div className="mb-6 animate-scaleIn">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80">
            <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Open to Opportunities
          </span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight drop-shadow-md">
          Parth Godse
        </h1>

        <p className="mt-3 text-lg sm:text-xl text-white/80">
          Software Engineer • CS Grad • Full-stack & Data-driven systems
        </p>

        <p className="mt-5 text-white/70">
          I design pragmatic solutions that scale, with crisp UX and measurable impact.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <MagicButton onClick={() => scroll("projects")}>See Projects</MagicButton>
          <MagicButton className="border-white/30" onClick={() => scroll("contact")}>
            Get in Touch
          </MagicButton>
          <a
            href="https://github.com"
            className="rounded-full border border-white/20 p-2 hover:scale-105 transition"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href="https://linkedin.com"
            className="rounded-full border border-white/20 p-2 hover:scale-105 transition"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="mailto:you@example.com"
            className="rounded-full border border-white/20 p-2 hover:scale-105 transition"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scroll("about")}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 hover:text-white transition animate-bounce"
        aria-label="Scroll to About"
      >
        ↓
      </button>
    </section>
  );
}
