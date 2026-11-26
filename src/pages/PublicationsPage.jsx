import { useMemo, useState } from "react";
import { Award, BookOpen, Calendar, Check, Copy, ExternalLink, Search } from "lucide-react";
import NetworkCanvas from "../components/NetworkCanvas";
import { Reveal } from "../components/MotionPrimitives";
import { MKLAB_DATA } from "../data/labData";

export default function PublicationsPage() {
  const [filter, setFilter] = useState("all");
  const [yearFilter, setYearFilter] = useState(null);
  const [query, setQuery] = useState("");
  const [copiedId, setCopiedId] = useState(null);

  const allItems = useMemo(
    () => [
      ...MKLAB_DATA.publications.map((p) => ({ ...p, kind: "article", uid: `art-${p.num}` })),
      ...MKLAB_DATA.bookChapters.map((c) => ({ ...c, kind: "chapter", inst: "UoH", journal: c.book, uid: `ch-${c.num}` })),
    ],
    []
  );

  const yearStats = useMemo(() => {
    const counts = {};
    allItems.forEach((item) => {
      counts[item.year] = (counts[item.year] || 0) + 1;
    });
    const years = Object.keys(counts).sort();
    const max = Math.max(...Object.values(counts));
    return { years, counts, max };
  }, [allItems]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return allItems.filter((item) => {
      if (yearFilter && item.year !== yearFilter) return false;
      if (filter === "articles" && item.kind !== "article") return false;
      if (filter === "chapters" && item.kind !== "chapter") return false;
      if (filter === "corresponding" && !item.corresponding) return false;
      if (filter === "uoh" && item.inst !== "UoH") return false;
      if (filter === "uva" && item.inst !== "UVA") return false;
      if (filter === "cdfd" && item.inst !== "CDFD") return false;
      if (!q) return true;
      const hay = `${item.title} ${item.authors} ${item.journal} ${item.year} ${item.refLabel}`.toLowerCase();
      return hay.includes(q);
    });
  }, [allItems, filter, yearFilter, query]);

  function handleCopy(item) {
    const text = `${item.authors} (${item.year}). ${item.title}. ${item.journal}. ${item.refLabel}`;
    navigator.clipboard?.writeText(text);
    setCopiedId(item.uid);
    setTimeout(() => setCopiedId(null), 1500);
  }

  return (
    <>
      <section className="relative overflow-hidden border-b border-white/10 dark:border-[var(--border-subtle)] bg-[#0F2942] dark:bg-[var(--bg-page)] py-12 text-[var(--text-on-dark)] sm:py-16">
        <NetworkCanvas compact />
        <div className="relative z-10 mx-auto w-full max-w-[1360px] px-4 sm:px-6 lg:px-10 animate-fade-rise">
          <div className="inline-flex items-center gap-2 font-mono-tech text-xs text-[var(--text-on-dark-muted)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
            Bibliography · H-index: 18
          </div>
          <h1 className="mt-3 font-display text-3xl font-medium tracking-tight sm:text-4xl lg:text-[46px]">Publications</h1>
          <p className="mt-4 max-w-[64ch] text-base leading-relaxed text-[var(--text-on-dark-muted)] sm:text-lg">
            Peer-reviewed journal articles and Springer Nature book chapters in chronological order across University of Hyderabad, University of Virginia, and CDFD.
          </p>
        </div>
      </section>

      <section className="py-10 sm:py-12">
        <div className="mx-auto w-full max-w-[1360px] px-4 sm:px-6 lg:px-10">
          {/* Interactive Year Bar Chart */}
          <Reveal>
            <div className="mb-6 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-5 shadow-xs sm:p-6">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="inline-flex items-center gap-1.5 font-mono-tech text-xs text-[var(--text-secondary)]">
                  <Calendar size={13} strokeWidth={1.6} className="text-[var(--teal)]" />
                  Publication timeline (click any year to filter)
                </span>
                {yearFilter && (
                  <button
                    type="button"
                    onClick={() => setYearFilter(null)}
                    className="h-7 rounded border border-[var(--border-strong)] bg-[var(--bg-page)] px-2.5 text-xs font-medium text-[var(--text-primary)] hover:border-[var(--teal)] hover:text-[var(--teal)]"
                  >
                    Clear year ({yearFilter})
                  </button>
                )}
              </div>

              <div className="mt-5 grid grid-flow-col auto-cols-[minmax(38px,1fr)] gap-1.5 overflow-x-auto border-b border-[var(--border-subtle)] pb-1 pt-2 sm:gap-2.5">
                {yearStats.years.map((y) => {
                  const numY = Number(y);
                  const count = yearStats.counts[y];
                  const barHeight = Math.max(14, Math.round((count / yearStats.max) * 96));
                  const pressed = yearFilter === numY;
                  return (
                    <button
                      key={y}
                      type="button"
                      onClick={() => setYearFilter(pressed ? null : numY)}
                      aria-pressed={pressed}
                      title={`Filter ${y}: ${count} ${count === 1 ? "publication" : "publications"}`}
                      className="group flex min-w-[30px] flex-col items-center justify-end gap-1.5 rounded-t-md bg-transparent px-0.5 pt-2 transition-colors hover:bg-[var(--bg-page)]/60"
                    >
                      <div className="flex h-[122px] w-full flex-col items-center justify-end gap-1.5">
                        <span
                          className={`font-mono-tech text-[11px] leading-none tabular-nums transition-colors ${
                            pressed
                              ? "font-semibold text-[var(--accent)]"
                              : "text-[var(--text-muted)] group-hover:text-[var(--teal)]"
                          }`}
                        >
                          {count}
                        </span>
                        <span
                          className={`w-full max-w-[36px] shrink-0 rounded-t transition-all duration-300 ${
                            pressed
                              ? "bg-[var(--accent)] shadow-sm"
                              : "bg-[#B8C7D6] dark:bg-[#22B8B5]/40 group-hover:bg-[var(--teal)] dark:group-hover:bg-[var(--teal)]"
                          }`}
                          style={{ height: `${barHeight}px` }}
                        />
                      </div>
                      <span
                        className={`pt-1 font-mono-tech text-[11px] tabular-nums transition-colors ${
                          pressed
                            ? "font-semibold text-[var(--accent)]"
                            : "text-[var(--text-secondary)] group-hover:text-[var(--text-primary)]"
                        }`}
                      >
                        {y}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </Reveal>

          {/* Filter Pills + Search */}
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2" role="group" aria-label="Filter publications">
              {[
                { key: "all", label: "All" },
                { key: "articles", label: "Journal Articles" },
                { key: "chapters", label: "Book Chapters" },
                { key: "corresponding", label: "Corresponding Author" },
                { key: "uoh", label: "UoH" },
                { key: "uva", label: "UVA" },
                { key: "cdfd", label: "CDFD" },
              ].map((b) => (
                <button
                  key={b.key}
                  type="button"
                  onClick={() => setFilter(b.key)}
                  aria-pressed={filter === b.key}
                  className={`h-8 rounded-lg border px-3.5 text-[13px] font-medium transition-colors ${
                    filter === b.key
                      ? "border-[var(--pill-active-bg)] bg-[var(--pill-active-bg)] text-[var(--pill-active-text)] dark:border-[#234D75]"
                      : "border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:border-[var(--border-strong)]"
                  }`}
                >
                  {b.label}
                </button>
              ))}
            </div>

            <div className="relative min-w-[250px] flex-1 sm:max-w-[340px]">
              <Search size={16} strokeWidth={1.5} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search title, author, journal, PMID..."
                aria-label="Search publications"
                className="h-9 w-full rounded-lg border border-[var(--border-strong)] bg-[var(--bg-surface)] pl-9 pr-3 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:border-[var(--teal)] focus:outline-none"
              />
            </div>
          </div>

          <div className="mb-4 font-mono-tech text-xs text-[var(--text-muted)]">
            Showing {filtered.length} of {allItems.length} entries{yearFilter ? ` in ${yearFilter}` : ""}
          </div>

          <div className="border-t border-[var(--border-subtle)]">
            {filtered.length === 0 ? (
              <div className="py-10 text-sm text-[var(--text-muted)]">No matching publications found.</div>
            ) : (
              filtered.map((item) => {
                const numLabel = item.kind === "chapter" ? `Ch.${item.num}` : `#${String(item.num).padStart(2, "0")}`;
                const isCopied = copiedId === item.uid;
                return (
                  <article
                    key={item.uid}
                    className="grid items-start gap-4 border-b border-[var(--border-subtle)] px-3 py-5 transition-colors hover:bg-[var(--bg-surface)] md:grid-cols-[56px_minmax(0,1fr)_auto] animate-fade-rise"
                  >
                    <div className="pt-0.5 font-mono-tech text-[13px] text-[var(--teal)] tabular-nums">{numLabel}</div>
                    <div className="min-w-0">
                      <h2 className="mb-1 text-base font-semibold leading-snug text-[var(--text-primary)]">{item.title}</h2>
                      <p className="mb-2 text-sm text-[var(--text-secondary)]">{item.authors}</p>
                      <div className="flex flex-wrap items-center gap-2 text-[13px] text-[var(--text-muted)]">
                        <span><em>{item.journal}</em></span>
                        <span className="inline-flex h-6 items-center gap-1 rounded border border-[var(--border-subtle)] bg-[var(--bg-raised)] dark:border-[var(--border-subtle)] px-2 font-mono-tech text-xs tabular-nums">
                          <Calendar size={11} strokeWidth={1.6} className="text-[var(--teal)]" />
                          {item.year}
                        </span>
                        <span className="inline-flex h-6 items-center rounded border border-[var(--border-subtle)] bg-[var(--bg-raised)] dark:border-[var(--border-subtle)] px-2 font-mono-tech text-xs">
                          {item.inst}
                        </span>
                        {item.kind === "chapter" && (
                          <span className="inline-flex h-6 items-center gap-1 rounded border border-[var(--border-subtle)] bg-[var(--bg-raised)] dark:border-[var(--border-subtle)] px-2 font-mono-tech text-xs">
                            <BookOpen size={11} strokeWidth={1.6} className="text-[var(--teal)]" />
                            Book Chapter
                          </span>
                        )}
                        {item.corresponding && (
                          <span className="inline-flex h-6 items-center gap-1 rounded bg-[var(--teal-soft-bg)] px-2 font-mono-tech text-xs text-[var(--teal)]">
                            <Award size={11} strokeWidth={1.6} />
                            Corresponding Author
                          </span>
                        )}
                        {item.jointFirst && (
                          <span className="inline-flex h-6 items-center rounded bg-[var(--teal-soft-bg)] px-2 font-mono-tech text-xs text-[var(--teal)]">
                            Joint First Author
                          </span>
                        )}
                        {item.fromCV && (
                          <span className="inline-flex h-6 items-center rounded border border-[var(--border-subtle)] bg-[var(--bg-raised)] dark:border-[var(--border-subtle)] px-2 font-mono-tech text-xs">
                            Listed in 2026 CV
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex shrink-0 items-center gap-2">
                      <button
                        type="button"
                        onClick={() => handleCopy(item)}
                        className="inline-flex h-8 items-center gap-1.5 rounded border border-[var(--border-strong)] bg-[var(--bg-surface)] px-3 text-[13px] font-medium text-[var(--text-primary)] hover:border-[var(--teal)] hover:text-[var(--teal)]"
                      >
                        {isCopied ? <Check size={14} strokeWidth={1.5} /> : <Copy size={14} strokeWidth={1.5} />}
                        {isCopied ? "Copied" : "Cite"}
                      </button>
                      {item.url ? (
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex h-8 items-center gap-1.5 rounded border border-[var(--border-strong)] bg-[var(--bg-surface)] px-3 text-[13px] font-medium text-[var(--text-primary)] hover:border-[var(--teal)] hover:text-[var(--teal)]"
                        >
                          {item.refLabel} <ExternalLink size={13} strokeWidth={1.5} />
                        </a>
                      ) : (
                        <span className="inline-flex h-8 items-center rounded border border-[var(--border-subtle)] bg-[var(--bg-raised)] dark:border-[var(--border-subtle)] px-2.5 font-mono-tech text-xs text-[var(--text-muted)]">
                          {item.refLabel}
                        </span>
                      )}
                    </div>
                  </article>
                );
              })
            )}
          </div>
        </div>
      </section>
    </>
  );
}
