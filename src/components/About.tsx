import GlowCard from "./effects/GlowCard";

export default function About() {
  return (
    <section id="about" className="relative bg-zinc-100 text-zinc-900">
      {/* super subtle accents (optional) */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-10 left-8 w-40 h-40 rounded-full blur-3xl"
             style={{ background: "radial-gradient(circle, rgba(99,102,241,.10), transparent 60%)" }} />
        <div className="absolute bottom-12 right-8 w-56 h-56 rounded-full blur-3xl"
             style={{ background: "radial-gradient(circle, rgba(236,72,153,.08), transparent 60%)" }} />
      </div>

      <div className="container mx-auto px-6 max-w-5xl py-20">
        <h2 className="text-3xl sm:text-4xl font-bold text-center">
          <span className="text-brand-gradient">About</span>
        </h2>

        <div className="mt-10 grid md:grid-cols-2 gap-10 items-center">
          {/* Light GlowCard; override inner text colors with arbitrary selectors */}
          <GlowCard
            className="
              light-card brand-ring
              [&>h3]:!text-zinc-900
              [&>div.relative.z-10]:!text-zinc-800
            "
            title="Who I Am"
          >
            <p className="leading-relaxed">
              Recent CS grad who enjoys building end-to-end software—spanning clean UIs, robust APIs,
              and data pipelines. I favor simple designs, measurable outcomes, and quick iteration.
            </p>
            <p className="mt-4 leading-relaxed text-zinc-700">
              Interests: distributed systems, ML tooling, and visualization. I care about DX, tests, and
              performance budgets.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 metric-hero-ring">
                <div className="text-2xl font-semibold">15+</div>
                <div className="text-xs text-zinc-600">Projects</div>
              </div>
              <div className="rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 metric-hero-ring">
                <div className="text-2xl font-semibold">3.8</div>
                <div className="text-xs text-zinc-600">GPA</div>
              </div>
              {/* If your <Metric /> supports className, you can use those instead:
                 <Metric value="15+" label="Projects" className="text-zinc-900" />
                 <Metric value="3.8"  label="GPA"      className="text-zinc-900" />
              */}
            </div>
          </GlowCard>

          {/* Photo/emoji block adapted for light background */}
          <div className="relative flex items-center justify-center">
            <div className="size-72 rounded-3xl border border-zinc-200 bg-white shadow-sm
                            flex items-center justify-center animate-floaty">
              <span className="text-6xl" role="img" aria-label="developer">🧑‍💻</span>
            </div>
            <span className="absolute top-6 right-8 size-2 rounded-full bg-indigo-300/70 animate-pulse" />
            <span className="absolute bottom-10 left-10 size-1.5 rounded-full bg-pink-300/70 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}
