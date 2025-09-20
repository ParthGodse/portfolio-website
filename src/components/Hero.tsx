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
// import { useCallback } from "react";

// export default function Hero() {
//   const go = useCallback((id: string) => {
//     document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
//   }, []);

//   return (
//     <section
//       id="hero"
//       className="relative min-h-[100svh] overflow-hidden bg-hero-surface text-white"
//     >
//       {/* spotlight / bloom */}
//       <div
//         aria-hidden
//         className="pointer-events-none absolute right-[14%] top-[42%] -z-10 h-[55vmax] w-[55vmax] rounded-full"
//         style={{
//           background:
//             "radial-gradient(closest-side, rgba(124,58,237,.28), rgba(99,102,241,.18) 40%, transparent 70%)",
//           filter: "blur(22px)",
//           transform: "translate(25%,-40%)",
//         }}
//       />

//       {/* decorative shapes */}
//       <div
//         aria-hidden
//         className="absolute right-10 top-10 size-4 rotate-45 rounded-sm"
//         style={{ background: "linear-gradient(90deg,var(--brand-start),var(--brand-end))" }}
//       />
//       <div
//         aria-hidden
//         className="absolute left-10 bottom-10 size-6 rounded-sm border border-white/15"
//       />

//       {/* content */}
//       <div className="container mx-auto px-6">
//         <div className="grid items-center gap-12 md:grid-cols-2 pt-28 pb-20">
//           {/* left: copy */}
//           <div className="max-w-xl">
//             <h1 className="leading-[0.95] text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight">
//               <span className="block">Digital</span>
//               <span className="block text-brand-gradient">Craftsman</span>
//             </h1>

//             <p className="mt-6 text-lg sm:text-xl text-white/75 max-w-prose">
//               Transforming ideas into pixel-perfect realities through thoughtful design
//               and clean code architecture.
//             </p>

//             <div className="mt-8 flex flex-wrap gap-4">
//               <button onClick={() => go("projects")} className="btn-primary">
//                 Portfolio
//               </button>
//               <button onClick={() => go("about")} className="btn-ghost">
//                 About
//               </button>
//             </div>
//           </div>

//           {/* right: image card */}
//           <div className="md:ml-auto">
//             <div className="hero-card brand-ring elevate relative w-full max-w-[560px] rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md">
//               {/* faux header bar */}
//               <div className="absolute left-6 right-6 top-6 h-2.5 rounded-full bg-white/10 overflow-hidden">
//                 <div className="h-full w-[78%] rounded-full bg-brand-gradient" />
//               </div>

//               {/* image */}
//               <div className="aspect-[16/10] w-full overflow-hidden rounded-2xl">
//                 {/* Put your image at /public/hero-image.jpg (or change the src) */}
//                 <img
//                   src="/hero-image.jpg"
//                   alt="Selected work preview"
//                   className="h-full w-full object-cover"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
