import GlowCard from "./effects/GlowCard";
import Pill from "./effects/Pill";
import { ExternalLink, Github } from "lucide-react";

const items = [
  { title: "LiveSync Kanban", desc: "Realtime multi-tenant board with RLS and email digests.", tech: ["Next.js","TypeScript","Supabase","Tailwind"], live: "#", repo: "#" },
  { title: "AWS Big Data ETL", desc: "AutoML + PySpark on EC2 Spot; 40% faster, 30% cheaper.", tech: ["PySpark","S3","SageMaker","EC2"], live: "#", repo: "#" },
  { title: "Anatomical SVGs", desc: "Auto-layout organ schematics, poster-ready SVG outputs.", tech: ["Python","Matplotlib","NumPy"], live: "#", repo: "#" },
];

export default function Projects() {
  return (
    <section id="projects" className="relative bg-white text-zinc-900">
      {/* super subtle accents (optional) */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-10 left-8 w-40 h-40 rounded-full blur-3xl"
             style={{ background: "radial-gradient(circle, rgba(99,102,241,.08), transparent 60%)" }} />
        <div className="absolute bottom-12 right-8 w-56 h-56 rounded-full blur-3xl"
             style={{ background: "radial-gradient(circle, rgba(236,72,153,.06), transparent 60%)" }} />
      </div>

      <div className="relative container mx-auto px-6 max-w-6xl py-20">
        <h2 className="text-3xl sm:text-4xl font-bold text-center">
          <span className="text-brand-gradient">Projects</span>
        </h2>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((p, i) => (
            <GlowCard
              key={p.title}
              title={p.title}
              className="
                light-card brand-ring
                [&>h3]:text-zinc-900
                [&>div.relative.z-10]:text-zinc-800
                /* tint the sheen to hero colors, make it visible on light bg */
                [--sheen-c1:rgba(99,102,241,0.28)]
                [--sheen-c2:rgba(236,72,153,0.28)]
                [&_.card-sheen]:mix-blend-normal
                animate-scaleIn 
              "
              // slight stagger on each card
              // @ts-ignore
              style={{ animationDelay: `${i * 120}ms` }}
              footer={
                <div className="flex items-center gap-3 text-zinc-700">
                  <a className="inline-flex items-center gap-1 underline-offset-4 hover:underline hover:text-zinc-900"
                     href={p.live} target="_blank" rel="noreferrer">
                    <ExternalLink size={14} /> Live
                  </a>
                  <a className="inline-flex items-center gap-1 underline-offset-4 hover:underline hover:text-zinc-900"
                     href={p.repo} target="_blank" rel="noreferrer">
                    <Github size={14} /> Code
                  </a>
                </div>
              }
            >
              <p className="text-zinc-700">{p.desc}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <Pill
                    key={t}
                    className="
                      /* navy solid pill (clean on white) */
                      rounded-full shadow-sm
                      hover:[filter:brightness(1.08)] px-3 py-1 text-xs 
                      bg-transparent border-transparent brand-border pill-fill-white text-zinc-900
                    "
                  >
                    {t}
                  </Pill>
                ))}
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
}
