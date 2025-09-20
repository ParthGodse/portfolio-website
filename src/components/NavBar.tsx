// import { useEffect, useState } from "react";
// import { Menu, X, Github, Linkedin, Mail } from "lucide-react";
// import ResumeModal from "./ResumeModal";

// const LINKS = [
//   { id: "hero",       label: "Home" },
//   { id: "about",      label: "About" },
//   { id: "experience", label: "Experience" },
//   { id: "projects",   label: "Projects" },
//   { id: "skills",     label: "Skills" },
//   { id: "contact",    label: "Contact" },
// ];

// const SECTION_IDS = LINKS.map(l => l.id);
// const NAV_H = 56; // h-14

// export default function NavBar() {
//   const [scrolled, setScrolled] = useState(false);
//   const [active, setActive] = useState<string>("hero");
//   const [menuOpen, setMenuOpen] = useState(false);

//   const [resumeOpen, setResumeOpen] = useState(false);
//   const [origin, setOrigin] = useState<{ x: number; y: number } | null>(null);

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 8);
//     onScroll();
//     window.addEventListener("scroll", onScroll, { passive: true });
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   // Robust scroll-spy: pick the section that actually contains a probe point
//   useEffect(() => {
//     const pickActive = () => {
//       const probe = window.scrollY + NAV_H + window.innerHeight * 0.33;
//       let current = SECTION_IDS[0];
//       for (const id of SECTION_IDS) {
//         const el = document.getElementById(id);
//         if (!el) continue;
//         const top = el.offsetTop;
//         const bottom = top + el.offsetHeight;
//         if (probe >= top && probe < bottom) { current = id; break; }
//       }
//       setActive(current);
//     };
//     pickActive();
//     window.addEventListener("scroll", pickActive, { passive: true });
//     window.addEventListener("resize", pickActive);
//     return () => {
//       window.removeEventListener("scroll", pickActive);
//       window.removeEventListener("resize", pickActive);
//     };
//   }, []);

//   // Header-offset smooth scroll (prevents the title from hiding under the fixed nav)
//   const go = (id: string) => {
//     setMenuOpen(false);
//     const el = document.getElementById(id);
//     if (!el) return;
//     const y = el.getBoundingClientRect().top + window.scrollY - NAV_H - 8;
//     window.scrollTo({ top: y, behavior: "smooth" });
//     setActive(id); // immediate feedback
//   };

//   const openResume = (e: React.MouseEvent) => {
//     e.preventDefault();
//     setMenuOpen(false);
//     setOrigin({ x: e.clientX, y: e.clientY });
//     setResumeOpen(true);
//   };

//   return (
//     <>
//       <nav className="fixed top-0 inset-x-0 z-50" role="navigation" aria-label="Primary">
//         <div
//           className={`h-14 border-b ${
//             scrolled
//               ? "bg-background/90 backdrop-blur-glass border-border"
//               : "bg-background/70 backdrop-blur-glass border-border"
//           }`}
//         >
//           <div className="mx-auto max-w-6xl h-full px-4 flex items-center justify-between text-foreground">
//             <a
//               href="#hero"
//               onClick={(e) => { e.preventDefault(); go("hero"); }}
//               className="text-sm font-semibold tracking-tight hover:opacity-90 transition"
//             >
//               Parth<span className="opacity-60">.dev</span>
//             </a>

//             {/* Desktop */}
//             <div className="hidden md:flex items-center gap-6">
//               {LINKS.map((link) => (
//                 <a
//                   key={link.id}
//                   href={`#${link.id}`}
//                   onClick={(e) => { e.preventDefault(); go(link.id); }}
//                   className={`group relative text-sm transition ${
//                     active === link.id ? "opacity-100" : "opacity-75 hover:opacity-100"
//                   }`}
//                 >
//                   {link.label}
//                   <span
//                     className={`
//                       pointer-events-none absolute -bottom-1 left-0 h-0.5 rounded-full
//                       bg-gradient-to-r from-[var(--brand-start)] to-[var(--brand-end)]
//                       transition-all duration-300
//                       ${active === link.id ? "w-full" : "w-0 group-hover:w-full"}
//                     `}
//                   />
//                 </a>
//               ))}

//               {/* Resume — same styling, opens modal */}
//               <a
//                 href="/Resume_parth_sde.pdf"
//                 onClick={openResume}
//                 aria-haspopup="dialog"
//                 aria-expanded={resumeOpen}
//                 className="nav-pill nav-pill--brand inline-flex items-center px-3 py-1 text-white/90 hover:text-white"
//               >
//                 Resume
//               </a>

//               <a
//                 href="https://github.com/ParthGodse" target="_blank" rel="noreferrer"
//                 className="p-0 text-white/80 hover:text-white transition" aria-label="GitHub"
//               >
//                 <Github size={18} />
//               </a>
//               <a
//                 href="https://www.linkedin.com/in/parth-godse/" target="_blank" rel="noreferrer"
//                 className="p-0 text-white/80 hover:text-white transition" aria-label="LinkedIn"
//               >
//                 <Linkedin size={18} />
//               </a>
//               <a
//                 href="mailto:parthgod0708@gmail.com"
//                 className="p-0 text-white/80 hover:text-white transition" aria-label="Email"
//               >
//                 <Mail size={18} />
//               </a>
//             </div>

//             {/* Mobile toggle */}
//             <button
//               className="md:hidden p-2 bg-transparent border-0 outline-none text-white/90 hover:text-white transition"
//               onClick={() => setMenuOpen(v => !v)}
//               aria-expanded={menuOpen}
//               aria-controls="mobile-menu"
//               aria-label="Toggle menu"
//             >
//               {menuOpen ? <X size={18} /> : <Menu size={18} />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile panel */}
//         {menuOpen && (
//           <div id="mobile-menu" className="md:hidden border-b border-border bg-background/90 backdrop-blur-glass">
//             <div className="mx-auto max-w-6xl px-4 py-3 flex flex-wrap items-center gap-5 text-foreground">
//               {LINKS.map((link) => (
//                 <a
//                   key={link.id}
//                   href={`#${link.id}`}
//                   onClick={(e) => { e.preventDefault(); go(link.id); }}
//                   className={`text-sm transition ${
//                     active === link.id ? "opacity-100" : "opacity-80 hover:opacity-100"
//                   }`}
//                 >
//                   {link.label}
//                 </a>
//               ))}
//               <a
//                 href="/Resume_parth_sde.pdf"
//                 onClick={openResume}
//                 aria-haspopup="dialog"
//                 aria-expanded={resumeOpen}
//                 className="nav-pill nav-pill--brand inline-flex items-center px-3 py-1 text-white/90 hover:text-white"
//               >
//                 Resume
//               </a>
//             </div>
//           </div>
//         )}
//       </nav>

//       {/* One modal mount */}
//       <ResumeModal
//         open={resumeOpen}
//         onClose={() => setResumeOpen(false)}
//         origin={origin}
//         src="/Resume_parth_sde.pdf"
//         fileName="Parth_Godse_Resume.pdf"
//       />
//     </>
//   );
// }

import { useEffect, useState } from "react";
import {
  Home, Braces, Briefcase, LayoutGrid, Sparkles, MessageSquare, Github, Mail
} from "lucide-react";
import ResumeModal from "./ResumeModal";

const NAV_H = 56; // h-14

// Section icons (Contact added)
const ICON_LINKS = [
  { id: "hero",       label: "Home",       Icon: Home },
  { id: "about",      label: "About",      Icon: Braces },
  { id: "experience", label: "Experience", Icon: Briefcase },
  { id: "projects",   label: "Projects",   Icon: LayoutGrid },
  { id: "skills",     label: "Skills",     Icon: Sparkles },
  { id: "contact",    label: "Contact",    Icon: MessageSquare },
];

// Scroll spy over all sections
const SECTION_IDS = ["hero","about","experience","projects","skills","contact"];

export default function NavBar() {
  const [active, setActive] = useState("hero");
  const [resumeOpen, setResumeOpen] = useState(false);
  const [origin, setOrigin] = useState<{ x:number; y:number } | null>(null);

  // scroll spy
  useEffect(() => {
    const pickActive = () => {
      const probe = window.scrollY + NAV_H + window.innerHeight * 0.33;
      let cur = SECTION_IDS[0];
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.offsetTop, bottom = top + el.offsetHeight;
        if (probe >= top && probe < bottom) { cur = id; break; }
      }
      setActive(cur);
    };
    pickActive();
    window.addEventListener("scroll", pickActive, { passive: true });
    window.addEventListener("resize", pickActive);
    return () => {
      window.removeEventListener("scroll", pickActive);
      window.removeEventListener("resize", pickActive);
    };
  }, []);

  // smooth scroll (offset for island height)
  const go = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - NAV_H - 8;
    window.scrollTo({ top: y, behavior: "smooth" });
    setActive(id);
  };

  const openResume = (e: React.MouseEvent) => {
    e.preventDefault();
    setOrigin({ x: e.clientX, y: e.clientY });
    setResumeOpen(true);
  };

  return (
    <>
      {/* ISLAND */}
      <div className="fixed top-3 left-1/2 -translate-x-1/2 z-50">
        <div
          className="
            island flex items-center gap-4 rounded-full px-5 py-2
            bg-background/80 backdrop-blur-glass border border-border shadow-sm text-foreground
            w-[min(32vw,860px)]   /* ⬅ controls island length */
          "
        >
          {/* section icons */}
          <div className="flex items-center gap-2">
            {ICON_LINKS.map(({ id, label, Icon }) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={(e) => { e.preventDefault(); go(id); }}
                title={label}
                aria-label={label}
                className="
                  nav-icon relative inline-grid place-items-center
                  h-9 w-9 rounded-full bg-transparent
                  text-foreground/75 hover:text-foreground
                  outline-none focus:outline-none select-none
                "
              >
                <Icon
                  size={18}
                  className={active === id ? "text-[var(--brand-start)]" : ""}
                />
                <span
                  className={`
                    pointer-events-none absolute -bottom-1 left-1/2 -translate-x-1/2
                    h-0.5 rounded-full bg-gradient-to-r
                    from-[var(--brand-start)] to-[var(--brand-end)]
                    transition-all duration-300
                    ${active === id ? "w-5 opacity-100" : "w-0 opacity-0 group-hover:w-5 group-hover:opacity-100"}
                  `}
                />
              </a>
            ))}
          </div>

          {/* push right cluster to the end */}
          <div className="flex-1" />

          {/* Resume pill */}
          <a
            href="/Resume_parth_sde.pdf"
            onClick={openResume}
            aria-haspopup="dialog"
            aria-expanded={resumeOpen}
            className="hidden sm:inline-flex items-center h-8 rounded-full px-3 text-sm nav-pill nav-pill--brand text-white/90 hover:text-white"
          >
            Resume
          </a>

          <div className="h-6 w-px bg-border" />

          {/* socials at far right */}
          <a
            href="https://github.com/ParthGodse" target="_blank" rel="noreferrer" aria-label="GitHub"
            className="inline-grid place-items-center h-9 w-9 rounded-full bg-transparent text-foreground/70 hover:text-foreground transition"
          >
            <Github size={18} />
          </a>
          <a
            href="mailto:parthgod0708@gmail.com" aria-label="Email"
            className="inline-grid place-items-center h-9 w-9 rounded-full bg-transparent text-foreground/70 hover:text-foreground transition"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>

      {/* Resume modal */}
      <ResumeModal
        open={resumeOpen}
        onClose={() => setResumeOpen(false)}
        origin={origin}
        src="/Resume_parth_sde.pdf"
        fileName="Parth_Godse_Resume.pdf"
      />
    </>
  );
}
