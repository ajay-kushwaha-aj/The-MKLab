import { useState } from "react";
import { Calendar, Cpu, FileText } from "lucide-react";
import NetworkCanvas from "../components/NetworkCanvas";
import ThemeSchematic from "../components/ThemeSchematic";
import { Reveal } from "../components/MotionPrimitives";
import { MKLAB_DATA } from "../data/labData";

export default function ResearchPage() {
  const [grantFilter, setGrantFilter] = useState("all");
  const D = MKLAB_DATA;

  const allGrants = [
    ...D.grants.current.map((g) => ({ ...g, status: "current" })),
    ...D.grants.completed.map((g) => ({ ...g, status: "completed" })),
  ].filter((g) => grantFilter === "all" || g.status === grantFilter);

  return (
    <>
      <section className="relative overflow-hidden border-b border-white/10 dark:border-[var(--border-subtle)] bg-[#0F2942] dark:bg-[var(--bg-page)] py-12 text-[var(--text-on-dark)] sm:py-16">
        <NetworkCanvas compact />
        <div className="relative z-10 mx-auto w-full max-w-[1360px] px-4 sm:px-6 lg:px-10 animate-fade-rise">
          <div className="inline-flex items-center gap-2 font-mono-tech text-xs text-[var(--text-on-dark-muted)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
            Research Program
          </div>
          <h1 className="mt-3 font-display text-3xl font-medium tracking-tight sm:text-4xl lg:text-[46px]">Research</h1>
          <p className="mt-4 max-w-[64ch] text-base leading-relaxed text-[var(--text-on-dark-muted)] sm:text-lg">
            The ongoing research work can be organized around four interconnected themes spanning non-coding RNA biology, chromatin regulation, epitranscriptomics, and machine-learning software development.
          </p>
        </div>
      </section>

      <section className="py-8 sm:py-12">
        <div className="mx-auto w-full max-w-[1360px] px-4 sm:px-6 lg:px-10">
          {D.researchThemes.map((t, i) => (
            <Reveal key={t.id} delay={i * 40}>
              <article
                id={t.id}
                className="grid items-start gap-8 border-b border-[var(--border-subtle)] py-10 last:border-b-0 md:grid-cols-[280px_minmax(0,1fr)]"
              >
                <div>
                  <div className="grid aspect-[4/3] place-items-center rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-5 shadow-xs">
                    <ThemeSchematic themeId={t.id} />
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {t.keywords.map((k) => (
                      <span
                        key={k}
                        className="inline-flex h-6 items-center rounded border border-[var(--border-subtle)] bg-[var(--bg-raised)] dark:border-[var(--border-subtle)] px-2 font-mono-tech text-xs text-[var(--text-secondary)]"
                      >
                        {k}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="mb-1 block font-mono-tech text-xs text-[var(--teal)]">Theme {t.index}</span>
                  <h2 className="mb-4 font-display text-2xl font-medium sm:text-3xl">{t.title}</h2>
                  <p className="mb-4 text-base leading-relaxed text-[var(--text-secondary)]">{t.summary}</p>
                  {t.tools ? (
                    <div className="mt-5 grid gap-4 sm:grid-cols-2">
                      {t.tools.map((tool) => (
                        <div
                          key={tool.name}
                          className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-4 shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--border-strong)] hover:shadow-md"
                        >
                          <div className="mb-2 flex items-center justify-between gap-2">
                            <strong className="font-mono-tech text-sm font-medium text-[var(--text-primary)]">{tool.name}</strong>
                            <span className="inline-flex h-6 items-center gap-1 rounded border border-[var(--border-subtle)] bg-[var(--bg-raised)] dark:border-[var(--border-subtle)] px-2 font-mono-tech text-[11px] text-[var(--text-secondary)]">
                              <Cpu size={11} strokeWidth={1.6} className="text-[var(--teal)]" />
                              {tool.tag}
                            </span>
                          </div>
                          <p className="text-[13px] leading-relaxed text-[var(--text-secondary)]">{tool.desc}</p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="inline-flex items-center gap-1.5 font-mono-tech text-xs text-[var(--text-muted)]">
                      <FileText size={13} strokeWidth={1.6} className="text-[var(--teal)]" />
                      <span>Key reference: {t.citation}</span>
                    </div>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Funded Grants */}
      <section className="border-t border-[var(--border-subtle)] bg-[var(--bg-surface)] py-14 sm:py-16">
        <div className="mx-auto w-full max-w-[1360px] px-4 sm:px-6 lg:px-10">
          <div className="mb-8 flex flex-col items-start justify-between gap-4 border-b border-[var(--border-subtle)] pb-4 sm:flex-row sm:items-end">
            <div>
              <span className="mb-1 block font-mono-tech text-xs text-[var(--teal)]">Extramural Support</span>
              <h2 className="font-display text-2xl font-medium sm:text-3xl">Current &amp; completed research grants</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {[
                { key: "all", label: "All (11)" },
                { key: "current", label: "Current (8)" },
                { key: "completed", label: "Completed (3)" },
              ].map((b) => (
                <button
                  key={b.key}
                  type="button"
                  onClick={() => setGrantFilter(b.key)}
                  aria-pressed={grantFilter === b.key}
                  className={`h-8 rounded-lg border px-3.5 text-[13px] font-medium transition-colors ${
                    grantFilter === b.key
                      ? "border-[var(--pill-active-bg)] bg-[var(--pill-active-bg)] text-[var(--pill-active-text)] dark:border-[#234D75]"
                      : "border-[var(--border-subtle)] bg-[var(--bg-page)] text-[var(--text-secondary)] hover:border-[var(--border-strong)]"
                  }`}
                >
                  {b.label}
                </button>
              ))}
            </div>
          </div>

          <div className="border-t border-[var(--border-subtle)]">
            {allGrants.map((g, idx) => (
              <div
                key={idx}
                className="grid items-start gap-3 border-b border-[var(--border-subtle)] py-4 md:grid-cols-[110px_minmax(0,1fr)_auto] md:gap-4"
              >
                <div className="inline-flex items-center gap-1.5 font-mono-tech text-[13px] text-[var(--teal)] tabular-nums">
                  <Calendar size={13} strokeWidth={1.6} className="shrink-0" />
                  <span>{g.year}</span>
                </div>
                <div>
                  <div className="text-[15px] font-semibold text-[var(--text-primary)]">{g.title}</div>
                  <div className="mt-1 text-[13px] text-[var(--text-secondary)]">
                    {g.agency} · <strong>{g.role}</strong>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  {g.amount !== "—" && (
                    <span className="inline-flex h-6 items-center rounded border border-[var(--border-subtle)] bg-[var(--bg-raised)] dark:border-[var(--border-subtle)] px-2 font-mono-tech text-xs tabular-nums text-[var(--text-primary)]">
                      {g.amount}
                    </span>
                  )}
                  <span
                    className={`inline-flex h-6 items-center rounded px-2 font-mono-tech text-xs ${
                      g.status === "current"
                        ? "border border-[var(--teal)]/35 bg-[var(--teal-soft-bg)] text-[var(--teal)]"
                        : "border border-[var(--border-subtle)] bg-[var(--bg-raised)] dark:border-[var(--border-subtle)] text-[var(--text-secondary)]"
                    }`}
                  >
                    {g.status === "current" ? "Active" : "Completed"}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
