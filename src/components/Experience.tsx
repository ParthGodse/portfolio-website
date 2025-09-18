import { useState } from "react";
import { ChevronDown, ExternalLink, Github } from "lucide-react";
import GlowCard from "./effects/GlowCard";
import Pill from "./effects/Pill";

type Item = {
  role: string; company: string; period: string; summary: string;
  details?: string[]; tech?: string[]; live?: string; repo?: string;
};

const items: Item[] = [
  { role: "Software Engineer Intern", company: "Acme Corp", period: "May–Aug 2024",
    summary: "Built analytics dashboards and cut load times ~35%.",
    details: [
      "Shipped dashboards with lazy data fetching & memoized selectors.",
      "Instrumented tracing; eliminated N+1 query paths.",
      "Playwright tests; CI runtime -22% via test sharding."
    ],
    tech: ["React","TypeScript","Node","Postgres"], live: "#", repo: "#",
  },
  { role: "Research Assistant", company: "CS Dept, Uni", period: "Jan–May 2024",
    summary: "Prototyped vector search; ~2× recall@10 on lab datasets.",
    details: [
      "Fine-tuned embeddings; batched inference with caching.",
      "Built FastAPI service with rate limiting & metrics."
    ],
    tech: ["Python","FastAPI","OpenAI","Docker"], live: "#", repo: "#",
  },
  { role: "Freelance", company: "Various", period: "2023",
    summary: "Delivered 5 small web apps end-to-end for local clients.",
    details: ["Auth, payments, emails, analytics; automated backups & alerts."],
    tech: ["Next.js","Stripe","Supabase"], live: "#", repo: "#",
  },
];

export default function Experience() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="experience" className="relative bg-white text-zinc-900 scroll-mt-20">
      {/* soft blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-10 left-8 w-40 h-40 rounded-full blur-3xl"
             style={{ background: "radial-gradient(circle, rgba(99,102,241,.08), transparent 60%)" }} />
        <div className="absolute bottom-12 right-8 w-56 h-56 rounded-full blur-3xl"
             style={{ background: "radial-gradient(circle, rgba(236,72,153,.06), transparent 60%)" }} />
      </div>

      <div className="relative container mx-auto px-6 max-w-6xl py-20">
        <h2 className="text-3xl sm:text-4xl font-bold text-center">
          <span className="text-brand-gradient">Experience</span>
        </h2>

        {/* timeline is confined to the list area, so it doesn't cross the title */}
        <div className="relative mt-10">
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 -translate-x-1/2 w-px top-0 bottom-0
                       bg-gradient-to-b from-[var(--brand-start)] via-zinc-200 to-[var(--brand-end)]"
          />
          <ol className="relative space-y-10 pt-4">
            {items.map((it, i) => {
              const leftSide = i % 2 === 0;
              const isOpen = openIdx === i;

              return (
                <li key={i} className="relative first-mt-10">
                  {/* dot on the center line */}
                  <span
                    aria-hidden
                    className="absolute top-3 left-1/2 -translate-x-1/2 size-3 rounded-full ring-4 ring-zinc-100"
                    style={{ background: "linear-gradient(90deg, var(--brand-start), var(--brand-end))" }}
                  />

                  <div className="md:grid md:grid-cols-2 md:gap-8">
                    <div className={leftSide ? "md:pr-10" : "md:col-start-2 md:pl-10"}>
                      <GlowCard
                        className="
                          light-card brand-ring
                          [&>h3]:text-zinc-900
                          [&>div.relative.z-10]:text-zinc-800
                          [--sheen-c1:rgba(99,102,241,0.28)]
                          [--sheen-c2:rgba(236,72,153,0.28)]
                          [&_.card-sheen]:mix-blend-normal
                          animate-scaleIn
                        "
                        // @ts-ignore
                        style={{ animationDelay: `${i * 120}ms` }}
                      >
                        {/* Accordion trigger — white by default, no dark padding */}
                        <button
                          onClick={() => setOpenIdx(isOpen ? null : i)}
                          aria-expanded={isOpen}
                          className="
                            block w-full text-left rounded-xl
                            bg-white hover:bg-zinc-50
                            px-4 py-3 transition-colors outline-none
                            // ring-2 ring-indigo-200       
                        "
                        >
                          <div className="flex items-start justify-between gap-3">
                            <div className="min-w-0">
                              <div className="text-sm text-zinc-500">{it.company} · {it.period}</div>
                              <h3 className="text-lg font-semibold text-zinc-900">{it.role}</h3>
                              <p className="mt-1 text-sm text-zinc-600">{it.summary}</p>
                            </div>
                            <ChevronDown
                              size={18}
                              className={`shrink-0 mt-1 text-zinc-500 transition ${isOpen ? "rotate-180" : ""}`}
                            />
                          </div>
                        </button>

                        {/* accordion body */}
                        <div
                          className={`grid transition-all duration-300 ease-out ${
                            isOpen ? "grid-rows-[1fr] opacity-100 mt-3" : "grid-rows-[0fr] opacity-0"
                          }`}
                        >
                          <div className="overflow-hidden">
                            {!!it.details?.length && (
                              <ul className="ml-5 list-disc space-y-1 text-sm text-zinc-700">
                                {it.details.map((d, di) => <li key={di}>{d}</li>)}
                              </ul>
                            )}

                            <div className="mt-3 flex flex-wrap gap-2">
                              {it.tech?.map((t) => (
                                <Pill
                                  key={t}
                                  className="
                                    rounded-full shadow-sm
                                    hover:[filter:brightness(1.08)] px-3 py-1 text-xs
                                    bg-transparent border-transparent brand-border pill-fill-white text-zinc-900
                                  "
                                >
                                  {t}
                                </Pill>
                              ))}
                            </div>

                            {(it.live || it.repo) && (
                              <div className="mt-4 flex items-center gap-3 text-zinc-700">
                                {it.live && (
                                  <a className="inline-flex items-center gap-1 underline-offset-4 hover:underline hover:text-zinc-900"
                                     href={it.live} target="_blank" rel="noreferrer">
                                    <ExternalLink size={14} /> Live
                                  </a>
                                )}
                                {it.repo && (
                                  <a className="inline-flex items-center gap-1 underline-offset-4 hover:underline hover:text-zinc-900"
                                     href={it.repo} target="_blank" rel="noreferrer">
                                    <Github size={14} /> Code
                                  </a>
                                )}
                              </div>
                            )}
                          </div>
                        </div>
                      </GlowCard>
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
