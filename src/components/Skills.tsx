import GlowCard from "./effects/GlowCard";
import Pill from "./effects/Pill";

const groups = [
  { title: "Languages", items: ["Python","TypeScript","Go","SQL"] },
  { title: "Frontend",  items: ["React","Vite","Tailwind","ShadCN"] },
  { title: "Backend",   items: ["FastAPI","Flask","Node","Postgres"] },
  { title: "Cloud",     items: ["AWS","Vercel","Docker","Supabase"] },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative bg-zinc-100 text-zinc-900"
    >
      <div className="container mx-auto px-6 max-w-5xl py-20">
        <h2 className="text-3xl sm:text-4xl font-bold text-center">
          <span className="text-brand-gradient">Skills</span>
        </h2>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {groups.map((g) => (
            <GlowCard
              key={g.title}
              title={g.title}
              // Override to LIGHT card + add hero-essence ring on hover
              className="light-card brand-ring"
            >
              <div className="flex flex-wrap gap-2">
                {g.items.map((it) => (
                  <Pill
                    key={it}
                    // Light-friendly pill colors
                    className="px-3 py-1 text-xs bg-transparent border-transparent brand-border pill-fill-white text-zinc-900"
                  >
                    {it}
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
