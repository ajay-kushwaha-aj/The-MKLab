import { useEffect, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ArrowRight, Briefcase, Calendar, FileText, Mail } from "lucide-react";
import NetworkCanvas from "../components/NetworkCanvas";
import MemberAvatar from "../components/MemberAvatar";
import MemberDrawer from "../components/MemberDrawer";
import { MKLAB_DATA } from "../data/labData";

export default function TeamPage() {
  const [group, setGroup] = useState("all");
  const [searchParams, setSearchParams] = useSearchParams();
  const T = MKLAB_DATA.team;

  const profileMap = useMemo(() => {
    const map = {};
    [T.pi, ...T.phd, ...T.staff, ...T.alumniPhd, ...T.alumniMasters, ...T.alumniInterns].forEach((m) => {
      if (m.slug) map[m.slug] = m;
    });
    return map;
  }, [T]);

  const activeSlug = searchParams.get("member");
  const activeMember = activeSlug ? profileMap[activeSlug] : null;

  useEffect(() => {
    if (window.location.hash === "#open-positions") {
      document.getElementById("open-positions")?.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const show = (g) => group === "all" || group === g;

  function openMember(slug) {
    setSearchParams({ member: slug });
  }

  function closeMember() {
    searchParams.delete("member");
    setSearchParams(searchParams);
  }

  return (
    <>
      <section className="relative overflow-hidden border-b border-white/10 dark:border-[var(--border-subtle)] bg-[#0F2942] dark:bg-[var(--bg-page)] py-12 text-[var(--text-on-dark)] sm:py-16">
        <NetworkCanvas compact />
        <div className="relative z-10 mx-auto w-full max-w-[1360px] px-4 sm:px-6 lg:px-10 animate-fade-rise">
          <div className="inline-flex items-center gap-2 font-mono-tech text-xs text-[var(--text-on-dark-muted)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
            People &amp; Alumni
          </div>
          <h1 className="mt-3 font-display text-3xl font-medium tracking-tight sm:text-4xl lg:text-[46px]">Lab Members</h1>
          <p className="mt-4 max-w-[64ch] text-base leading-relaxed text-[var(--text-on-dark-muted)] sm:text-lg">
            Researchers, graduate students, project staff, and alumni working across non-coding RNA biology, epitranscriptomics, chromatin interaction networks, and cancer genomics.
          </p>
        </div>
      </section>

      <section className="py-10 sm:py-12">
        <div className="mx-auto w-full max-w-[1360px] px-4 sm:px-6 lg:px-10">
          <div className="mb-8 flex flex-wrap gap-2">
            {[
              { key: "all", label: "All Sections" },
              { key: "pi", label: "Principal Investigator" },
              { key: "phd", label: "PhD Students (4)" },
              { key: "staff", label: "Staff & Open Roles" },
              { key: "students", label: "Master's & Interns (4)" },
              { key: "alumni", label: "Alumni (22)" },
              { key: "mascot", label: "Mascot" },
            ].map((pill) => (
              <button
                key={pill.key}
                type="button"
                onClick={() => setGroup(pill.key)}
                aria-pressed={group === pill.key}
                className={`h-8 rounded-lg border px-3.5 text-[13px] font-medium transition-colors ${
                  group === pill.key
                    ? "border-[var(--pill-active-bg)] bg-[var(--pill-active-bg)] text-[var(--pill-active-text)] dark:border-[#234D75]"
                    : "border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:border-[var(--border-strong)]"
                }`}
              >
                {pill.label}
              </button>
            ))}
          </div>

          <div className="grid gap-12">
            {show("pi") && (
              <div className="animate-fade-rise">
                <h2 className="mb-5 flex items-center justify-between border-b border-[var(--border-subtle)] pb-2 font-mono-tech text-[13px] text-[var(--teal)]">
                  <span>Principal Investigator</span>
                  <span>01</span>
                </h2>
                <div className="group grid items-start gap-6 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-6 shadow-xs transition-all duration-200 hover:border-[var(--border-strong)] hover:shadow-md sm:grid-cols-[auto_minmax(0,1fr)]">
                  <MemberAvatar person={T.pi} sizeClass="h-24 w-24" />
                  <div>
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <h3 className="font-display text-2xl font-medium sm:text-[26px]">{T.pi.name}</h3>
                        <div className="text-sm font-medium text-[var(--teal)]">{T.pi.role}</div>
                        <div className="mt-1 text-[13px] text-[var(--text-muted)]">{T.pi.focus}</div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <button
                          type="button"
                          onClick={() => openMember(T.pi.slug)}
                          className="inline-flex h-8 items-center rounded border border-[var(--border-strong)] bg-[var(--bg-surface)] px-3 text-[13px] font-medium text-[var(--text-primary)] hover:bg-[var(--bg-raised)]"
                        >
                          Bio &amp; Interests
                        </button>
                        <Link
                          to="/cv"
                          className="inline-flex h-8 items-center gap-1.5 rounded bg-[var(--accent)] px-3 text-[13px] font-semibold text-[var(--accent-text)] hover:bg-[var(--accent-hover)]"
                        >
                          <FileText size={13} strokeWidth={1.75} />
                          Full CV Dossier
                        </Link>
                      </div>
                    </div>
                    <p className="mt-4 text-sm leading-relaxed text-[var(--text-secondary)]">{T.pi.background}</p>
                  </div>
                </div>
              </div>
            )}

            {show("phd") && (
              <div className="animate-fade-rise">
                <h2 className="mb-5 flex items-center justify-between border-b border-[var(--border-subtle)] pb-2 font-mono-tech text-[13px] text-[var(--teal)]">
                  <span>PhD Students</span>
                  <span className="tabular-nums">04</span>
                </h2>
                <div className="grid gap-6 md:grid-cols-2">
                  {T.phd.map((m) => (
                    <article
                      key={m.slug}
                      className="group flex h-full flex-col gap-4 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-6 shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--border-strong)] hover:shadow-md"
                    >
                      <div className="flex items-center gap-4">
                        <MemberAvatar person={m} />
                        <div>
                          <h3 className="font-display text-xl font-medium">{m.name}</h3>
                          <div className="text-[13px] text-[var(--text-secondary)]">{m.role}</div>
                          <span className="mt-2 inline-flex h-6 items-center rounded border border-[var(--border-subtle)] bg-[var(--bg-raised)] dark:border-[var(--border-subtle)] px-2 font-mono-tech text-xs text-[var(--text-secondary)]">
                            {m.focus}
                          </span>
                        </div>
                      </div>
                      {m.background && (
                        <p className="line-clamp-3 text-sm leading-relaxed text-[var(--text-secondary)]">{m.background}</p>
                      )}
                      {m.background && (
                        <div className="mt-auto pt-1">
                          <button
                            type="button"
                            onClick={() => openMember(m.slug)}
                            className="inline-flex h-8 items-center gap-1.5 rounded border border-[var(--border-strong)] bg-[var(--bg-surface)] px-3 text-[13px] font-medium text-[var(--text-primary)] hover:border-[var(--teal)] hover:text-[var(--teal)]"
                          >
                            View Profile <ArrowRight size={14} strokeWidth={1.5} />
                          </button>
                        </div>
                      )}
                    </article>
                  ))}
                </div>
              </div>
            )}

            {show("staff") && (
              <div id="open-positions" className="animate-fade-rise">
                <h2 className="mb-5 flex items-center justify-between border-b border-[var(--border-subtle)] pb-2 font-mono-tech text-[13px] text-[var(--teal)]">
                  <span>Project Staffs / JRFs &amp; Open Positions</span>
                  <span className="tabular-nums">1 Active · 3 Open</span>
                </h2>
                <div className="grid gap-6 md:grid-cols-2">
                  {T.staff.map((m) => (
                    <article
                      key={m.slug}
                      className="group flex h-full flex-col gap-4 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-6 shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--border-strong)] hover:shadow-md"
                    >
                      <div className="flex items-center gap-4">
                        <MemberAvatar person={m} />
                        <div>
                          <h3 className="font-display text-xl font-medium">{m.name}</h3>
                          <div className="text-[13px] text-[var(--text-secondary)]">{m.role}</div>
                          <span className="mt-2 inline-flex h-6 items-center rounded border border-[var(--border-subtle)] bg-[var(--bg-raised)] dark:border-[var(--border-subtle)] px-2 font-mono-tech text-xs text-[var(--text-secondary)]">
                            {m.focus}
                          </span>
                        </div>
                      </div>
                      <p className="line-clamp-3 text-sm leading-relaxed text-[var(--text-secondary)]">{m.researchInterests}</p>
                      <div className="mt-auto">
                        <button
                          type="button"
                          onClick={() => openMember(m.slug)}
                          className="inline-flex h-8 items-center gap-1.5 rounded border border-[var(--border-strong)] bg-[var(--bg-surface)] px-3 text-[13px] font-medium text-[var(--text-primary)] hover:border-[var(--teal)] hover:text-[var(--teal)]"
                        >
                          View Profile <ArrowRight size={14} strokeWidth={1.5} />
                        </button>
                      </div>
                    </article>
                  ))}

                  {Array.from({ length: T.openPositions }, (_, i) => (
                    <article
                      key={i}
                      className="flex h-full flex-col justify-between gap-4 rounded-xl border border-dashed border-[var(--border-strong)] bg-[var(--bg-surface)]/80 p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--teal)]/50 hover:bg-[var(--bg-surface)] hover:shadow-md"
                    >
                      <div>
                        <span className="inline-flex h-6 items-center gap-1.5 rounded border border-[var(--teal)]/35 bg-[var(--teal-soft-bg)] px-2 font-mono-tech text-xs text-[var(--teal)]">
                          <Briefcase size={12} strokeWidth={1.6} />
                          Position Available · #{i + 1}
                        </span>
                        <h3 className="mt-3 font-display text-xl font-medium">Project Staff / JRF</h3>
                        <p className="mt-2 text-sm text-[var(--text-secondary)]">
                          Open position for computational biology, transcriptomics, or network biology research at UoH.
                        </p>
                      </div>
                      <a
                        href={`mailto:${MKLAB_DATA.site.email}?subject=Application%20for%20JRF%20/%20Project%20Staff%20Position%20at%20MKLab`}
                        className="inline-flex h-8 w-fit items-center gap-1.5 rounded border border-[var(--border-strong)] bg-[var(--bg-surface)] px-3 text-[13px] font-medium text-[var(--text-primary)] hover:border-[var(--teal)] hover:text-[var(--teal)]"
                      >
                        <Mail size={14} strokeWidth={1.5} /> Inquire with PI
                      </a>
                    </article>
                  ))}
                </div>
              </div>
            )}

            {show("students") && (
              <div className="animate-fade-rise">
                <h2 className="mb-5 flex items-center justify-between border-b border-[var(--border-subtle)] pb-2 font-mono-tech text-[13px] text-[var(--teal)]">
                  <span>Master's Dissertation &amp; Intern Students</span>
                  <span className="tabular-nums">04</span>
                </h2>
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                  {T.mastersAndInterns.map((m) => (
                    <article
                      key={m.name}
                      className="group flex items-center gap-4 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-5 shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--border-strong)] hover:shadow-md"
                    >
                      <MemberAvatar person={m} sizeClass="h-16 w-16" />
                      <div className="min-w-0">
                        <h3 className="font-display text-lg font-medium leading-tight">{m.name}</h3>
                        <div className="mt-1 text-[13px] text-[var(--text-secondary)]">{m.role}</div>
                        {m.period && (
                          <div className="mt-1 inline-flex items-center gap-1.5 font-mono-tech text-[11px] text-[var(--text-muted)]">
                            <Calendar size={11} strokeWidth={1.6} className="shrink-0 text-[var(--teal)]" />
                            <span>{m.period}</span>
                          </div>
                        )}
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            )}

            {show("alumni") && (
              <div className="grid gap-10 animate-fade-rise">
                <div>
                  <h2 className="mb-5 flex items-center justify-between border-b border-[var(--border-subtle)] pb-2 font-mono-tech text-[13px] text-[var(--teal)]">
                    <span>Alumni — PhD</span>
                    <span className="tabular-nums">01</span>
                  </h2>
                  <div className="grid gap-6 md:grid-cols-2">
                    {T.alumniPhd.map((m) => (
                      <article
                        key={m.slug}
                        className="group flex h-full flex-col gap-4 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-6 shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--border-strong)] hover:shadow-md"
                      >
                        <div className="flex items-center gap-4">
                          <MemberAvatar person={m} />
                          <div>
                            <h3 className="font-display text-xl font-medium">{m.name}</h3>
                            <div className="text-[13px] text-[var(--text-secondary)]">Worked in MKLab as: {m.workedAs}</div>
                            <div className="mt-1 text-[13px] font-medium text-[var(--teal)]">Currently: {m.current}</div>
                          </div>
                        </div>
                        <div className="mt-auto">
                          <button
                            type="button"
                            onClick={() => openMember(m.slug)}
                            className="inline-flex h-8 items-center gap-1.5 rounded border border-[var(--border-strong)] bg-[var(--bg-surface)] px-3 text-[13px] font-medium text-[var(--text-primary)] hover:border-[var(--teal)] hover:text-[var(--teal)]"
                          >
                            View Profile <ArrowRight size={14} strokeWidth={1.5} />
                          </button>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="mb-5 flex items-center justify-between border-b border-[var(--border-subtle)] pb-2 font-mono-tech text-[13px] text-[var(--teal)]">
                    <span>Alumni — Master's Dissertation</span>
                    <span className="tabular-nums">12</span>
                  </h2>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {T.alumniMasters.map((m) => (
                      <article
                        key={m.name}
                        className="group flex h-full flex-col gap-3 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-4 shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--border-strong)] hover:shadow-md"
                      >
                        <div className="flex items-start gap-3">
                          <MemberAvatar person={m} sizeClass="h-14 w-14" />
                          <div className="flex min-w-0 flex-1 items-start justify-between gap-2">
                            <div className="min-w-0">
                              <h3 className="font-display text-lg font-medium leading-snug">{m.name}</h3>
                              <div className="text-[13px] leading-snug text-[var(--text-secondary)]">{m.workedAs}</div>
                            </div>
                            {m.slug && (
                              <button
                                type="button"
                                onClick={() => openMember(m.slug)}
                                className="inline-flex h-7 shrink-0 items-center rounded border border-[var(--border-strong)] bg-[var(--bg-surface)] px-2.5 text-xs font-medium hover:border-[var(--teal)] hover:text-[var(--teal)]"
                              >
                                Bio
                              </button>
                            )}
                          </div>
                        </div>
                        {m.current && (
                          <div className="mt-auto border-t border-[var(--border-subtle)] pt-2 text-[13px] text-[var(--teal)]">
                            Now: {m.current}
                          </div>
                        )}
                      </article>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="mb-5 flex items-center justify-between border-b border-[var(--border-subtle)] pb-2 font-mono-tech text-[13px] text-[var(--teal)]">
                    <span>Alumni — Interns</span>
                    <span className="tabular-nums">09</span>
                  </h2>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {T.alumniInterns.map((m) => (
                      <article
                        key={m.name}
                        className="group flex items-center justify-between gap-3 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-4 shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--border-strong)] hover:shadow-md"
                      >
                        <div className="flex min-w-0 items-center gap-3">
                          <MemberAvatar person={m} sizeClass="h-14 w-14" />
                          <div className="min-w-0">
                            <h3 className="truncate font-display text-lg font-medium">{m.name}</h3>
                            <div className="text-xs text-[var(--text-muted)]">Former Lab Intern</div>
                          </div>
                        </div>
                        {m.slug && (
                          <button
                            type="button"
                            onClick={() => openMember(m.slug)}
                            className="inline-flex h-7 shrink-0 items-center rounded border border-[var(--border-strong)] bg-[var(--bg-surface)] px-2.5 text-xs font-medium hover:border-[var(--teal)] hover:text-[var(--teal)]"
                          >
                            Bio
                          </button>
                        )}
                      </article>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {show("mascot") && (
              <div className="animate-fade-rise">
                <h2 className="mb-5 flex items-center justify-between border-b border-[var(--border-subtle)] pb-2 font-mono-tech text-[13px] text-[var(--teal)]">
                  <span>Lab Mascot</span>
                  <span>SMOKE</span>
                </h2>
                <div className="grid gap-5 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-6 shadow-xs">
                  <div className="group flex items-center gap-5">
                    <MemberAvatar person={T.mascot} objectPosition="object-center" />
                    <div>
                      <h3 className="font-display text-2xl font-medium">{T.mascot.name}</h3>
                      <div className="text-sm text-[var(--text-secondary)]">
                        Official Lab Mascot of The MKLab · Featured across 6 gallery snapshots on the original lab roster.
                      </div>
                    </div>
                  </div>
                  {T.mascot.gallery && (
                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
                      {T.mascot.gallery.map((src, idx) => (
                        <div
                          key={idx}
                          className="group/item aspect-square overflow-hidden rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-raised)] dark:border-[var(--border-subtle)]"
                        >
                          <img
                            src={src}
                            alt={`SMOKE lab mascot snapshot ${idx + 1}`}
                            loading="lazy"
                            className="h-full w-full object-cover object-center transition-transform duration-300 group-hover/item:scale-105"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <MemberDrawer member={activeMember} onClose={closeMember} />
    </>
  );
}
