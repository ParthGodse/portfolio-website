import { useEffect, useState } from "react";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";
import ResumeModal from "./ResumeModal";

const LINKS = [
  { id: "hero",     label: "Home" },
  { id: "about",    label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills",   label: "Skills" },
  { id: "contact",  label: "Contact" },
];

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("hero");

  // RENAMED to avoid confusion with resumeOpen
  const [menuOpen, setMenuOpen] = useState(false);

  const [resumeOpen, setResumeOpen] = useState(false);
  const [origin, setOrigin] = useState<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach(e => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-35% 0px -50% 0px" }
    );
    LINKS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  const go = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const openResume = (e: React.MouseEvent) => {
    e.preventDefault();
    setMenuOpen(false);
    setOrigin({ x: e.clientX, y: e.clientY });
    setResumeOpen(true);
  };

  return (
    <>
      <nav className="fixed top-0 inset-x-0 z-50" role="navigation" aria-label="Primary">
        <div
          className={`h-14 border-b ${
            scrolled
              ? "bg-background/90 backdrop-blur-glass border-border"
              : "bg-background/70 backdrop-blur-glass border-border"
          }`}
        >
          <div className="mx-auto max-w-6xl h-full px-4 flex items-center justify-between text-foreground">
            <a
              href="#hero"
              onClick={(e) => { e.preventDefault(); go("hero"); }}
              className="text-sm font-semibold tracking-tight hover:opacity-90 transition"
            >
              Parth<span className="opacity-60">.dev</span>
            </a>

            {/* Desktop */}
            <div className="hidden md:flex items-center gap-6">
              {LINKS.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => { e.preventDefault(); go(link.id); }}
                  className={`relative text-sm transition ${
                    active === link.id ? "opacity-100" : "opacity-75 hover:opacity-100"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-indigo-400 to-fuchsia-400 transition-all ${
                      active === link.id ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </a>
              ))}

              {/* Resume — same styling, opens modal */}
              <a
                href="/Resume_parth_sde.pdf"
                onClick={openResume}
                aria-haspopup="dialog"
                aria-expanded={resumeOpen}
                className="nav-pill nav-pill--brand inline-flex items-center px-3 py-1 text-white/90 hover:text-white"
              >
                Resume
              </a>

              <a href="https://github.com/yourhandle" target="_blank" rel="noreferrer"
                 className="p-0 text-white/80 hover:text-white transition" aria-label="GitHub">
                <Github size={18} />
              </a>
              <a href="https://linkedin.com/in/yourhandle" target="_blank" rel="noreferrer"
                 className="p-0 text-white/80 hover:text-white transition" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
              <a href="mailto:you@example.com"
                 className="p-0 text-white/80 hover:text-white transition" aria-label="Email">
                <Mail size={18} />
              </a>
            </div>

            {/* Mobile toggle */}
            <button
              className="md:hidden p-2 bg-transparent border-0 outline-none text-white/90 hover:text-white transition"
              onClick={() => setMenuOpen(v => !v)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile panel */}
        {menuOpen && (
          <div id="mobile-menu" className="md:hidden border-b border-border bg-background/90 backdrop-blur-glass">
            <div className="mx-auto max-w-6xl px-4 py-3 flex flex-wrap items-center gap-5 text-foreground">
              {LINKS.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => { e.preventDefault(); go(link.id); }}
                  className={`text-sm transition ${
                    active === link.id ? "opacity-100" : "opacity-80 hover:opacity-100"
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="/Resume_parth_sde.pdf"
                onClick={openResume}
                aria-haspopup="dialog"
                aria-expanded={resumeOpen}
                className="nav-pill nav-pill--brand inline-flex items-center px-3 py-1 text-white/90 hover:text-white"
              >
                Resume
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Mount ONE modal here (outside menus) */}
      <ResumeModal
        open={resumeOpen}
        onClose={() => setResumeOpen(false)}
        origin={origin}
        src="/Resume_parth_sde.pdf"              // put file in /public
        fileName="Parth_Godse_Resume.pdf"
      />
    </>
  );
}
