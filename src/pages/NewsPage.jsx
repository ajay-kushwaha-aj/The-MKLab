import { useState } from "react";
import { Link } from "react-router-dom";
import { Calendar, CalendarDays, Mic } from "lucide-react";
import NetworkCanvas from "../components/NetworkCanvas";
import { Reveal } from "../components/MotionPrimitives";
import { MKLAB_DATA } from "../data/labData";

export default function NewsPage() {
  const [year, setYear] = useState("all");
  const D = MKLAB_DATA;

  const items = D.news.filter((n) => year === "all" || String(n.year) === year);

  return (
    <>
      <section className="relative overflow-hidden border-b border-white/10 dark:border-[var(--border-subtle)] bg-[#0F2942] dark:bg-[var(--bg-page)] py-12 text-[var(--text-on-dark)] sm:py-16">
        <NetworkCanvas compact />
        <div className="relative z-10 mx-auto w-full max-w-[1360px] px-4 sm:px-6 lg:px-10 animate-fade-rise">
          <div className="inline-flex items-center gap-2 font-mono-tech text-xs text-[var(--text-on-dark-muted)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
            Dispatches &amp; Events
          </div>
          <h1 className="mt-3 font-display text-3xl font-medium tracking-tight sm:text-4xl lg:text-[46px]">News</h1>
          <p className="mt-4 max-w-[64ch] text-base leading-relaxed text-[var(--text-on-dark-muted)] sm:text-lg">
            Lab milestones, conference presentations, workshops, awards, welcomes, and farewells across 2025–2026.
          </p>
        </div>
      </section>

      <section className="py-10 sm:py-12">
        <div className="mx-auto w-full max-w-[1360px] px-4 sm:px-6 lg:px-10">
          <div className="mb-6 flex flex-wrap gap-2">
            {[
              { key: "all", label: "All Updates" },
              { key: "2026", label: "2026" },
              { key: "2025", label: "2025" },
            ].map((b) => (
              <button
                key={b.key}
                type="button"
                onClick={() => setYear(b.key)}
                aria-pressed={year === b.key}
                className={`h-8 rounded-lg border px-3.5 text-[13px] font-medium transition-colors ${
                  year === b.key
                    ? "border-[var(--pill-active-bg)] bg-[var(--pill-active-bg)] text-[var(--pill-active-text)] dark:border-[#234D75]"
                    : "border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:border-[var(--border-strong)]"
                }`}
              >
                {b.label}
              </button>
            ))}
          </div>

          <div className="border-t border-[var(--border-subtle)]">
            {items.map((n, i) => (
              <article
                key={i}
                className="grid items-start gap-2 border-b border-[var(--border-subtle)] py-5 sm:grid-cols-[128px_minmax(0,1fr)] sm:gap-6 animate-fade-rise"
              >
                <div className="inline-flex items-center gap-1.5 font-mono-tech text-[13px] font-medium text-[var(--teal)] tabular-nums">
                  <Calendar size={14} strokeWidth={1.6} className="shrink-0" />
                  <span>{n.date}, {n.year}</span>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <p className="text-base text-[var(--text-primary)]">{n.text}</p>
                  <span className="inline-flex h-6 shrink-0 items-center rounded border border-[var(--border-subtle)] bg-[var(--bg-raised)] dark:border-[var(--border-subtle)] px-2 font-mono-tech text-xs text-[var(--text-secondary)]">
                    {n.category}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--border-subtle)] bg-[var(--bg-surface)] py-14 sm:py-16">
        <div className="mx-auto w-full max-w-[1360px] px-4 sm:px-6 lg:px-10">
          <Reveal>
            <div className="mb-8 flex flex-col items-start justify-between gap-4 border-b border-[var(--border-subtle)] pb-4 sm:flex-row sm:items-end">
              <div>
                <span className="mb-1 block font-mono-tech text-xs text-[var(--teal)]">
                  Outreach &amp; Speaking Archive (from PI CV)
                </span>
                <h2 className="font-display text-2xl font-medium sm:text-3xl">
                  Invited talks &amp; organized workshops
                </h2>
              </div>
              <Link to="/cv#talks" className="text-sm font-medium text-[var(--teal)] hover:underline">
                Complete PI Dossier →
              </Link>
            </div>
          </Reveal>

          <div className="grid items-start gap-8 lg:grid-cols-2">
            <Reveal>
              <div>
                <h3 className="mb-4 inline-flex items-center gap-2 font-mono-tech text-[13px] text-[var(--teal)]">
                  <Mic size={14} strokeWidth={1.6} />
                  <span>Recent Invited Talks &amp; Keynotes</span>
                </h3>
                <ol className="grid list-decimal gap-3 pl-5 text-sm text-[var(--text-secondary)]">
                  {D.piCV.invitedTalks.slice(0, 10).map((t, idx) => (
                    <li key={idx}>{t}</li>
                  ))}
                </ol>
                <div className="mt-5">
                  <Link
                    to="/cv#talks"
                    className="inline-flex h-8 items-center rounded border border-[var(--border-strong)] bg-[var(--bg-surface)] px-3 text-[13px] font-medium text-[var(--text-primary)] hover:border-[var(--teal)] hover:text-[var(--teal)]"
                  >
                    View all talks
                  </Link>
                </div>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <div>
                <h3 className="mb-4 inline-flex items-center gap-2 font-mono-tech text-[13px] text-[var(--teal)]">
                  <CalendarDays size={14} strokeWidth={1.6} />
                  <span>Workshops &amp; Symposia Organized</span>
                </h3>
                <ol className="grid list-decimal gap-3 pl-5 text-sm text-[var(--text-secondary)]">
                  {D.piCV.organizedEvents.map((e, idx) => (
                    <li key={idx}>{e}</li>
                  ))}
                </ol>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
