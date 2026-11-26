import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Briefcase,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Code2,
  Cpu,
  ExternalLink,
  FileText,
  Mail,
  MapPin,
  Pause,
  Phone,
  Play,
  Users,
} from "lucide-react";
import { ASSETS, MKLAB_DATA } from "../data/labData";
import NetworkCanvas from "../components/NetworkCanvas";
import ThemeSchematic from "../components/ThemeSchematic";
import { Reveal, CountUp } from "../components/MotionPrimitives";

export default function HomePage() {
  const [activeThemeIdx, setActiveThemeIdx] = useState(0);
  const [activeGroupIdx, setActiveGroupIdx] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const [groupHovered, setGroupHovered] = useState(false);
  const D = MKLAB_DATA;
  const activeTheme = D.researchThemes[activeThemeIdx];
  const tools = D.researchThemes[3].tools;
  const groupPhotos = D.groupPhotos;
  const activeGroup = groupPhotos[activeGroupIdx];

  useEffect(() => {
    if (!autoPlay || groupHovered || groupPhotos.length <= 1) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = setInterval(() => {
      setActiveGroupIdx((i) => (i + 1) % groupPhotos.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [autoPlay, groupHovered, activeGroupIdx, groupPhotos.length]);

  return (
    <>
      {/* Commanding Dark Hero with Fluid Ratio Fit & Vacant-Area AUCG Trails */}
      <section className="relative flex items-center overflow-hidden border-b border-white/10 dark:border-[var(--border-subtle)] bg-[#0F2942] dark:bg-[var(--bg-page)] py-10 text-[var(--text-on-dark)] sm:py-12 lg:min-h-[min(calc(100svh-6.75rem),760px)] lg:py-12 xl:py-16">
        <NetworkCanvas />
        <div className="relative z-10 mx-auto grid w-full max-w-[1360px] items-center gap-8 px-4 sm:px-6 lg:grid-cols-12 lg:gap-10 xl:gap-12 lg:px-10 pointer-events-none">
          <div data-canvas-safe className="flex min-w-0 flex-col gap-4 sm:gap-5 lg:col-span-7 animate-fade-rise">
            <div className="inline-flex max-w-full w-fit items-center gap-2 rounded-full border border-white/15 dark:border-[#183857] bg-white/5 dark:bg-[#102030] px-3 py-1.5 font-mono-tech text-[11px] sm:text-xs text-[var(--text-on-dark-muted)]">
              <span className="live-dot h-2 w-2 shrink-0 rounded-full bg-[var(--teal-bright)]" />
              <span className="leading-snug">Dept. of Systems &amp; Computational Biology · UoH</span>
            </div>

            <h1 className="font-display text-[clamp(1.9rem,3.6vw+0.85rem,3.45rem)] font-medium leading-[1.06] tracking-tight">
              Decoding the regulatory language of non-coding RNAs
            </h1>

            <p className="max-w-[58ch] text-[15px] leading-relaxed text-[var(--text-on-dark-muted)] sm:text-base xl:text-lg">
              {D.site.tagline}
            </p>

            <div className="mt-1 flex flex-wrap gap-2.5 sm:mt-2 sm:gap-3 pointer-events-auto">
              <Link
                to="/research"
                className="inline-flex h-10 w-full items-center justify-center gap-2 rounded-lg bg-[var(--accent)] px-5 text-sm font-semibold text-[var(--accent-text)] transition-all duration-150 hover:bg-[var(--accent-hover)] hover:shadow-lg active:scale-[0.98] sm:h-11 sm:w-auto"
              >
                Explore Research
                <ArrowRight size={16} strokeWidth={1.5} />
              </Link>
              <Link
                to="/publications"
                className="inline-flex h-10 flex-1 items-center justify-center rounded-lg border border-white/15 dark:border-[#183857] bg-white/8 dark:bg-[#102030] px-4 text-sm font-medium text-[var(--text-on-dark)] transition-colors duration-150 hover:bg-white/15 dark:hover:bg-[#183857] sm:h-11 sm:flex-initial sm:px-5"
              >
                Browse Publications
              </Link>
              <Link
                to="/team#open-positions"
                className="inline-flex h-10 flex-1 items-center justify-center rounded-lg border border-[var(--teal-bright)]/40 bg-[var(--teal-soft-bg)] px-4 text-sm font-medium text-[var(--teal-bright)] transition-colors duration-150 hover:bg-[var(--teal-bright)]/20 sm:h-11 sm:flex-initial sm:px-5"
              >
                Open Positions
              </Link>
            </div>
          </div>

          {/* Right Telemetry Visual Card */}
          <div data-canvas-safe className="min-w-0 lg:col-span-5 pointer-events-auto animate-fade-rise">
            <div className="group rounded-2xl border border-white/12 dark:border-[var(--border-subtle)] bg-[#153554]/85 dark:bg-[var(--bg-surface)]/95 p-4 shadow-2xl backdrop-blur-md transition-colors duration-200 hover:border-white/25 dark:hover:border-[#234D75] sm:p-5 xl:p-6">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 dark:border-[var(--border-subtle)] pb-2.5 font-mono-tech text-[11px] text-[var(--text-on-dark-muted)] sm:pb-3">
                <span>FIG. 01 · REGULATORY MODEL</span>
                <span className="text-[var(--teal-bright)]">AUCG · Live RNA Strands</span>
              </div>

              <div className="my-3.5 aspect-[16/9] overflow-hidden rounded-xl border border-white/10 dark:border-[var(--border-subtle)] bg-[var(--bg-page)] xl:my-4">
                <img
                  src={ASSETS.heroRnaVisual}
                  alt="Folded lncRNA secondary structure, chromatin looping, and biomolecular condensates"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>

              <div className="grid grid-cols-1 gap-2.5 font-mono-tech text-xs min-[400px]:grid-cols-2 xl:gap-3">
                {[
                  { k: "Principal Investigator", v: "Dr. Manjari Kiran" },
                  { k: "Core Focus", v: "lncRNA · eRNA · ML" },
                  { k: "Software & Models", v: "MAGICAL · CaTCH · PROMISE" },
                  { k: "Location", v: "Room F75A, SLS, UoH" },
                ].map((cell) => (
                  <div key={cell.k} className="min-w-0 rounded-lg border border-white/8 dark:border-[var(--border-subtle)] bg-white/[0.04] dark:bg-[#09131E]/65 p-2.5 xl:p-3">
                    <span className="block truncate text-[11px] text-[var(--text-on-dark-muted)]">{cell.k}</span>
                    <strong className="mt-0.5 block truncate font-medium text-[var(--text-on-dark)]">{cell.v}</strong>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Live Lab Dispatch Ticker */}
      <div className="ticker-container flex h-11 items-center overflow-hidden border-b border-white/10 dark:border-[var(--border-subtle)] bg-[#153554] dark:bg-[var(--bg-surface)] text-[var(--text-on-dark)]">
        <div className="mx-auto flex w-full max-w-[1360px] items-center gap-4 px-4 sm:px-6 lg:px-10">
          <span className="shrink-0 rounded bg-[var(--accent-soft-bg)] px-2 py-0.5 font-mono-tech text-[11px] font-semibold text-[var(--accent)]">
            DISPATCH
          </span>
          <div className="flex-1 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_3%,#000_97%,transparent)]">
            <div className="ticker-track">
              {[...D.news.slice(0, 7), ...D.news.slice(0, 7)].map((n, idx) => (
                <span key={idx} className="whitespace-nowrap text-[13px] text-[var(--text-on-dark-muted)]">
                  <strong className="mr-1.5 font-medium text-[var(--text-on-dark)]">
                    {n.date}, {n.year}
                  </strong>
                  {n.text}
                </span>
              ))}
            </div>
          </div>
          <Link to="/news" className="shrink-0 font-mono-tech text-xs text-[var(--text-on-dark-muted)] hover:text-[var(--teal-bright)]">
            All news →
          </Link>
        </div>
      </div>

      {/* Key Lab Metrics Band */}
      <section className="border-b border-[var(--border-subtle)] bg-[var(--bg-surface)]">
        <div className="mx-auto grid w-full max-w-[1360px] grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
          {[
            { val: 32, label: "Peer-reviewed articles (2012–2026)" },
            { val: 18, label: "Principal Investigator H-index" },
            { val: 7, label: "Springer Nature book chapters" },
            { val: 8, label: "Active extramural grants" },
            { val: 3, label: "Open JRF / Project Staff roles" },
          ].map((m, i) => (
            <Reveal
              key={m.label}
              delay={i * 50}
              className="border-b border-r border-[var(--border-subtle)] px-5 py-6 last:border-r-0 lg:border-b-0"
            >
              <div className="font-display text-3xl font-medium leading-none text-[var(--text-primary)] sm:text-4xl">
                <CountUp target={m.val} />
              </div>
              <div className="mt-2 text-[13px] text-[var(--text-muted)]">{m.label}</div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Interactive 4-Theme Explorer */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto w-full max-w-[1360px] px-4 sm:px-6 lg:px-10">
          <Reveal>
            <div className="mb-8 flex flex-col items-start justify-between gap-4 border-b border-[var(--border-subtle)] pb-4 sm:flex-row sm:items-end">
              <div>
                <span className="mb-1 block font-mono-tech text-xs text-[var(--teal)]">01 · Research Program</span>
                <h2 className="font-display text-2xl font-medium tracking-tight sm:text-3xl">
                  Four interconnected research themes
                </h2>
              </div>
              <Link to="/research" className="inline-flex items-center gap-2 text-sm font-medium text-[var(--teal)] hover:underline">
                Full themes &amp; grants <ArrowRight size={16} strokeWidth={1.5} />
              </Link>
            </div>
          </Reveal>

          <Reveal>
            <div className="grid items-stretch gap-6 lg:grid-cols-12">
              <div className="grid gap-2 lg:col-span-4" role="tablist" aria-label="Research themes">
                {D.researchThemes.map((t, i) => {
                  const selected = i === activeThemeIdx;
                  return (
                    <button
                      key={t.id}
                      type="button"
                      role="tab"
                      aria-selected={selected}
                      onClick={() => setActiveThemeIdx(i)}
                      className={`w-full rounded-xl border p-4 text-left transition-all duration-150 ${selected
                        ? "border-[var(--pill-active-bg)] bg-[var(--pill-active-bg)] text-[var(--pill-active-text)] dark:border-[#234D75] shadow-md"
                        : "border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[var(--text-primary)] hover:translate-x-0.5 hover:border-[var(--border-strong)]"
                        }`}
                    >
                      <span className={`mb-1 block font-mono-tech text-[11px] ${selected ? "text-[var(--teal-bright)]" : "text-[var(--teal)]"}`}>
                        THEME {t.index}
                      </span>
                      <span className="block text-[15px] font-semibold">{t.title}</span>
                    </button>
                  );
                })}
              </div>

              <div
                key={activeTheme.id}
                role="tabpanel"
                className="grid items-center gap-6 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-6 shadow-xs sm:p-8 md:grid-cols-12 lg:col-span-8 animate-fade-rise"
              >
                <div className="md:col-span-7">
                  <span className="inline-flex h-6 items-center rounded bg-[var(--teal-soft-bg)] px-2 font-mono-tech text-xs text-[var(--teal)]">
                    Theme {activeTheme.index}
                  </span>
                  <h3 className="mt-3 mb-3 font-display text-2xl font-medium leading-tight sm:text-[28px]">
                    {activeTheme.title}
                  </h3>
                  <p className="mb-4 text-[15px] leading-relaxed text-[var(--text-secondary)]">{activeTheme.summary}</p>
                  <div className="mb-5 flex flex-wrap gap-2">
                    {activeTheme.keywords.map((k) => (
                      <span key={k} className="inline-flex h-6 items-center rounded border border-[var(--border-subtle)] bg-[var(--bg-raised)] dark:border-[var(--border-subtle)] px-2 font-mono-tech text-xs text-[var(--text-secondary)]">
                        {k}
                      </span>
                    ))}
                  </div>
                  <Link to={`/research#${activeTheme.id}`} className="inline-flex items-center gap-2 text-sm font-medium text-[var(--teal)] hover:underline">
                    Inspect full theme details <ArrowRight size={15} strokeWidth={1.5} />
                  </Link>
                </div>

                <div className="grid place-items-center rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-page)] p-5 md:col-span-5">
                  <ThemeSchematic themeId={activeTheme.id} />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Computational Tools & Frameworks */}
      <section className="border-y border-[var(--border-subtle)] bg-[var(--bg-surface)] py-14 sm:py-16">
        <div className="mx-auto w-full max-w-[1360px] px-4 sm:px-6 lg:px-10">
          <Reveal>
            <div className="mb-8 flex flex-col items-start justify-between gap-4 border-b border-[var(--border-subtle)] pb-4 sm:flex-row sm:items-end">
              <div>
                <span className="mb-1 block font-mono-tech text-xs text-[var(--teal)]">02 · Computational Frameworks</span>
                <h2 className="font-display text-2xl font-medium tracking-tight sm:text-3xl">
                  Tools, databases &amp; prognostic models
                </h2>
              </div>
              <Link to="/resources" className="inline-flex items-center gap-2 text-sm font-medium text-[var(--teal)] hover:underline">
                GitHub &amp; resources <ArrowRight size={16} strokeWidth={1.5} />
              </Link>
            </div>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {tools.map((tool, i) => (
              <Reveal key={tool.name} delay={(i % 3) * 50} className="h-full">
                <div className="flex h-full flex-col gap-3 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-page)]/60 p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--border-strong)] hover:bg-[var(--bg-surface)] hover:shadow-md">
                  <div>
                    <span className="inline-flex h-6 items-center gap-1.5 rounded border border-[var(--border-subtle)] bg-[var(--bg-surface)] px-2 font-mono-tech text-xs text-[var(--text-secondary)]">
                      <Cpu size={12} strokeWidth={1.6} className="text-[var(--teal)]" />
                      {tool.tag}
                    </span>
                  </div>
                  <h3 className="font-mono-tech text-base font-medium text-[var(--text-primary)]">{tool.name}</h3>
                  <p className="text-sm leading-relaxed text-[var(--text-secondary)]">{tool.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PI Spotlight & Lab Group Pictures Archive */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto w-full max-w-[1360px] px-4 sm:px-6 lg:px-10">
          <Reveal>
            <div className="mb-14 grid items-center gap-6 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-6 shadow-xs sm:grid-cols-[132px_minmax(0,1fr)] sm:gap-8 sm:p-8">
              <div className="h-40 w-32 overflow-hidden rounded-xl border border-[var(--border-strong)] bg-[var(--bg-raised)] dark:border-[var(--border-subtle)]">
                <img
                  src={ASSETS.manjariTeamPhoto}
                  alt="Dr. Manjari Kiran"
                  className="h-full w-full object-cover object-top"
                />
              </div>
              <div>
                <div className="mb-3 flex flex-wrap gap-2">
                  <span className="inline-flex h-6 items-center rounded bg-[var(--teal-soft-bg)] px-2 font-mono-tech text-xs text-[var(--teal)]">
                    Principal Investigator
                  </span>
                  <span className="inline-flex h-6 items-center rounded border border-[var(--border-subtle)] bg-[var(--bg-raised)] dark:border-[var(--border-subtle)] px-2 font-mono-tech text-xs text-[var(--text-secondary)]">
                    University Chancellor Award 2025
                  </span>
                  <span className="inline-flex h-6 items-center rounded border border-[var(--border-subtle)] bg-[var(--bg-raised)] dark:border-[var(--border-subtle)] px-2 font-mono-tech text-xs text-[var(--text-secondary)]">
                    BIRD Award 2024
                  </span>
                  <span className="inline-flex h-6 items-center rounded border border-[var(--border-subtle)] bg-[var(--bg-raised)] dark:border-[var(--border-subtle)] px-2 font-mono-tech text-xs text-[var(--text-secondary)]">
                    DBT IYBF 2024
                  </span>
                </div>
                <h2 className="mb-2 font-display text-2xl font-medium sm:text-[28px]">Dr. Manjari Kiran</h2>
                <p className="mb-4 max-w-[68ch] text-sm leading-relaxed text-[var(--text-secondary)]">
                  Assistant Professor, Department of Systems and Computational Biology, University of Hyderabad (since Dec 2018). Ph.D. from CDFD Hyderabad (2009–2014) and DoD Postdoctoral Fellow at the University of Virginia (2014–2018).
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    to="/cv"
                    className="inline-flex h-9 items-center gap-1.5 rounded-lg bg-[var(--accent)] px-4 text-[13px] font-semibold text-[var(--accent-text)] transition-colors hover:bg-[var(--accent-hover)]"
                  >
                    <FileText size={14} strokeWidth={1.75} />
                    Explore Complete CV Dossier
                  </Link>
                  <Link
                    to="/team"
                    className="inline-flex h-9 items-center gap-1.5 rounded-lg border border-[var(--border-strong)] bg-[var(--bg-surface)] px-4 text-[13px] font-medium text-[var(--text-primary)] transition-colors hover:bg-[var(--bg-raised)]"
                  >
                    <Users size={14} strokeWidth={1.6} className="text-[var(--teal)]" />
                    Meet All Lab Members
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="mb-6 flex flex-col items-start justify-between gap-4 border-b border-[var(--border-subtle)] pb-4 sm:flex-row sm:items-end">
              <div>
                <span className="mb-1 block font-mono-tech text-xs text-[var(--teal)]">03 · Life at The MKLab</span>
                <h2 className="font-display text-2xl font-medium tracking-tight sm:text-3xl">
                  Lab group pictures (2020–2025)
                </h2>
              </div>
              <Link to="/team" className="inline-flex items-center gap-2 text-sm font-medium text-[var(--teal)] hover:underline">
                View all lab members <ArrowRight size={16} strokeWidth={1.5} />
              </Link>
            </div>
          </Reveal>

          <Reveal>
            <div
              className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-4 shadow-xs sm:p-6"
              onMouseEnter={() => setGroupHovered(true)}
              onMouseLeave={() => setGroupHovered(false)}
            >
              <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-1.5" role="tablist" aria-label="Group photo years">
                  {groupPhotos.map((photo, idx) => {
                    const selected = idx === activeGroupIdx;
                    return (
                      <button
                        key={photo.id}
                        type="button"
                        role="tab"
                        aria-selected={selected}
                        onClick={() => setActiveGroupIdx(idx)}
                        className={`h-8 rounded-lg border px-3 font-mono-tech text-xs font-medium transition-colors ${selected
                          ? "border-[var(--pill-active-bg)] bg-[var(--pill-active-bg)] text-[var(--pill-active-text)] dark:border-[#234D75]"
                          : "border-[var(--border-subtle)] bg-[var(--bg-page)] text-[var(--text-secondary)] hover:border-[var(--border-strong)] hover:bg-[var(--bg-raised)]"
                          }`}
                      >
                        {photo.label}
                      </button>
                    );
                  })}
                </div>

                <div className="flex items-center gap-2">
                  <span className="font-mono-tech text-xs text-[var(--text-muted)] tabular-nums">
                    {String(activeGroupIdx + 1).padStart(2, "0")} / {String(groupPhotos.length).padStart(2, "0")}
                  </span>
                  <button
                    type="button"
                    aria-label={autoPlay ? "Pause slideshow" : "Play slideshow"}
                    onClick={() => setAutoPlay((p) => !p)}
                    title={autoPlay ? "Pause autoslide (4.5s)" : "Resume autoslide (4.5s)"}
                    className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-[var(--border-strong)] bg-[var(--bg-surface)] text-[var(--text-primary)] transition-colors hover:border-[var(--teal)] hover:text-[var(--teal)]"
                  >
                    {autoPlay ? <Pause size={14} strokeWidth={1.5} /> : <Play size={14} strokeWidth={1.5} />}
                  </button>
                  <button
                    type="button"
                    aria-label="Previous group photo"
                    onClick={() => setActiveGroupIdx((i) => (i - 1 + groupPhotos.length) % groupPhotos.length)}
                    className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-[var(--border-strong)] bg-[var(--bg-surface)] text-[var(--text-primary)] transition-colors hover:border-[var(--teal)] hover:text-[var(--teal)]"
                  >
                    <ChevronLeft size={16} strokeWidth={1.5} />
                  </button>
                  <button
                    type="button"
                    aria-label="Next group photo"
                    onClick={() => setActiveGroupIdx((i) => (i + 1) % groupPhotos.length)}
                    className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-[var(--border-strong)] bg-[var(--bg-surface)] text-[var(--text-primary)] transition-colors hover:border-[var(--teal)] hover:text-[var(--teal)]"
                  >
                    <ChevronRight size={16} strokeWidth={1.5} />
                  </button>
                </div>
              </div>

              <div className="relative flex aspect-[16/9] max-h-[540px] w-full items-center justify-center overflow-hidden rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-page)] p-2 sm:p-4">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,var(--teal-soft-bg)_100%)] opacity-70"
                />
                <img
                  key={activeGroup.id}
                  src={activeGroup.src}
                  alt={`The MKLab group photo ${activeGroup.label} — ${activeGroup.caption}`}
                  className="relative z-10 max-h-full w-auto max-w-full rounded-lg border border-[var(--border-subtle)] object-contain shadow-lg animate-fade-rise"
                />
              </div>

              <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-[var(--border-subtle)] pt-3">
                <p className="text-sm text-[var(--text-secondary)]">{activeGroup.caption}</p>
                <span className="inline-flex h-6 items-center gap-1.5 rounded border border-[var(--border-subtle)] bg-[var(--bg-raised)] dark:border-[var(--border-subtle)] px-2 font-mono-tech text-xs text-[var(--teal)] tabular-nums">
                  <Calendar size={12} strokeWidth={1.6} />
                  Cohort {activeGroup.year}
                </span>
              </div>

              <div className="mt-4 grid grid-cols-4 gap-2.5 sm:grid-cols-7">
                {groupPhotos.map((photo, idx) => {
                  const selected = idx === activeGroupIdx;
                  return (
                    <button
                      key={photo.id}
                      type="button"
                      onClick={() => setActiveGroupIdx(idx)}
                      aria-label={`Show ${photo.label} group picture`}
                      className={`group relative aspect-[4/3] overflow-hidden rounded-lg border bg-[var(--bg-page)] transition-all duration-150 ${selected
                        ? "border-[var(--accent)] ring-2 ring-[var(--accent)]/30"
                        : "border-[var(--border-subtle)] opacity-75 hover:-translate-y-0.5 hover:opacity-100"
                        }`}
                    >
                      <img
                        src={photo.src}
                        alt={`MKLab ${photo.label}`}
                        loading="lazy"
                        className="h-full w-full object-cover object-center"
                      />
                      <span className="absolute inset-x-0 bottom-0 bg-[#09131E]/85 py-0.5 text-center font-mono-tech text-[10px] font-medium text-white">
                        {photo.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Recent Peer-Reviewed Publications */}
      <section className="border-y border-[var(--border-subtle)] bg-[var(--bg-surface)] py-14 sm:py-16">
        <div className="mx-auto w-full max-w-[1360px] px-4 sm:px-6 lg:px-10">
          <Reveal>
            <div className="mb-6 flex flex-col items-start justify-between gap-4 border-b border-[var(--border-subtle)] pb-4 sm:flex-row sm:items-end">
              <div>
                <span className="mb-1 block font-mono-tech text-xs text-[var(--teal)]">04 · Selected Publications</span>
                <h2 className="font-display text-2xl font-medium tracking-tight sm:text-3xl">Recent peer-reviewed papers</h2>
              </div>
              <Link to="/publications" className="inline-flex items-center gap-2 text-sm font-medium text-[var(--teal)] hover:underline">
                All Publications <ArrowRight size={16} strokeWidth={1.5} />
              </Link>
            </div>
          </Reveal>

          <div className="border-t border-[var(--border-subtle)]">
            {D.publications.slice(0, 5).map((p, i) => (
              <Reveal key={p.num} delay={i * 40}>
                <article className="group grid items-start gap-4 border-b border-[var(--border-subtle)] px-3 py-5 transition-colors hover:bg-[var(--bg-page)]/60 md:grid-cols-[56px_minmax(0,1fr)_auto]">
                  <div className="pt-0.5 font-mono-tech text-[13px] text-[var(--teal)] tabular-nums">
                    #{String(p.num).padStart(2, "0")}
                  </div>
                  <div className="min-w-0">
                    <h3 className="mb-1 text-base font-semibold leading-snug text-[var(--text-primary)]">{p.title}</h3>
                    <p className="mb-2 text-sm text-[var(--text-secondary)]">{p.authors}</p>
                    <div className="flex flex-wrap items-center gap-2 text-[13px] text-[var(--text-muted)]">
                      <span><em>{p.journal}</em></span>
                      <span className="inline-flex h-6 items-center rounded border border-[var(--border-subtle)] bg-[var(--bg-raised)] dark:border-[var(--border-subtle)] px-2 font-mono-tech text-xs tabular-nums">
                        {p.year}
                      </span>
                      {p.corresponding && (
                        <span className="inline-flex h-6 items-center rounded bg-[var(--teal-soft-bg)] px-2 font-mono-tech text-xs text-[var(--teal)]">
                          Corresponding Author
                        </span>
                      )}
                    </div>
                  </div>
                  {p.url && (
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-8 shrink-0 items-center gap-1.5 rounded border border-[var(--border-strong)] bg-[var(--bg-surface)] px-3 text-[13px] font-medium text-[var(--text-primary)] transition-colors hover:border-[var(--teal)] hover:text-[var(--teal)]"
                    >
                      {p.refLabel} <ExternalLink size={13} strokeWidth={1.5} />
                    </a>
                  )}
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* News + High-Attention Open Positions Callout */}
      <section className="py-14 sm:py-16 pb-6">
        <div className="mx-auto grid w-full max-w-[1360px] items-stretch gap-8 px-4 sm:px-6 lg:grid-cols-12 lg:px-10">
          <Reveal className="h-full lg:col-span-7">
            <div className="flex h-full flex-col rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-6 shadow-xs sm:p-8">
              <div className="mb-4 flex items-end justify-between border-b border-[var(--border-subtle)] pb-3">
                <div>
                  <span className="mb-1 block font-mono-tech text-xs text-[var(--teal)]">05 · Lab Timeline</span>
                  <h2 className="font-display text-2xl font-medium">Recent updates</h2>
                </div>
                <Link to="/news" className="text-sm font-medium text-[var(--teal)] hover:underline">
                  All updates
                </Link>
              </div>
              <div className="flex flex-1 flex-col justify-between">
                {D.news.slice(0, 5).map((n, i) => (
                  <div
                    key={i}
                    className="grid gap-2 border-b border-[var(--border-subtle)] py-3 last:border-b-0 sm:grid-cols-[108px_minmax(0,1fr)] sm:gap-4"
                  >
                    <div className="inline-flex items-center gap-1.5 font-mono-tech text-xs font-medium text-[var(--teal)] tabular-nums">
                      <Calendar size={12} strokeWidth={1.6} className="shrink-0" />
                      <span>{n.date}, {n.year}</span>
                    </div>
                    <p className="text-sm text-[var(--text-secondary)]">{n.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={80} className="h-full lg:col-span-5">
            <div className="flex h-full flex-col rounded-2xl border border-white/10 dark:border-[var(--border-subtle)] bg-[#0F2942] dark:bg-[var(--bg-surface)] p-6 text-[var(--text-on-dark)] shadow-xl sm:p-8">
              <div>
                <span className="inline-flex h-6 items-center rounded border border-[var(--accent)]/40 bg-[var(--accent-soft-bg)] px-2.5 font-mono-tech text-xs font-medium text-[var(--accent)]">
                  Open Positions
                </span>
                <h2 className="mt-4 font-display text-[28px] font-medium">Join The MKLab</h2>
                <p className="mt-3 mb-5 text-sm leading-relaxed text-[var(--text-on-dark-muted)]">
                  Openings for <strong className="font-medium text-white">Project Staff / Junior Research Fellows (JRFs)</strong> in computational biology, 3D chromatin interaction networks, epitranscriptomics, and cancer genomics.
                </p>
              </div>
              <div className="mb-6 grid gap-2.5 rounded-xl border border-white/10 dark:border-[var(--border-subtle)] bg-white/[0.04] dark:bg-[#09131E]/65 p-4 text-sm text-[var(--text-on-dark-muted)]">
                <div className="inline-flex items-start gap-2.5">
                  <MapPin size={15} strokeWidth={1.6} className="mt-0.5 shrink-0 text-[var(--teal-bright)]" />
                  <span><strong className="text-white">Room:</strong> F75A, School of Life Sciences, UoH</span>
                </div>
                <div className="inline-flex items-center gap-2.5">
                  <Mail size={15} strokeWidth={1.6} className="shrink-0 text-[var(--teal-bright)]" />
                  <span>
                    <strong className="text-white">Email:</strong>{" "}
                    <a href={`mailto:${D.site.email}`} className="text-[var(--teal-bright)] hover:underline">
                      {D.site.email}
                    </a>
                  </span>
                </div>
                <div className="inline-flex items-center gap-2.5 tabular-nums">
                  <Phone size={15} strokeWidth={1.6} className="shrink-0 text-[var(--teal-bright)]" />
                  <span>
                    <strong className="text-white">Contact:</strong>{" "}
                    <a href={`tel:${D.site.phoneLab}`} className="hover:text-white hover:underline">
                      {D.site.phoneLab}
                    </a>
                  </span>
                </div>
              </div>
              <div className="mt-auto flex flex-wrap gap-3 pt-1">
                <Link
                  to="/team#open-positions"
                  className="inline-flex h-10 items-center gap-2 rounded-lg bg-[var(--accent)] px-5 text-sm font-semibold text-[var(--accent-text)] transition-colors hover:bg-[var(--accent-hover)]"
                >
                  <Briefcase size={15} strokeWidth={1.75} />
                  View Open Positions
                </Link>
                <Link
                  to="/resources"
                  className="inline-flex h-10 items-center gap-2 rounded-lg border border-white/15 dark:border-[#183857] bg-white/8 dark:bg-[#183857]/60 px-5 text-sm font-medium text-white transition-colors hover:bg-white/15 dark:hover:bg-[#183857]"
                >
                  <Code2 size={15} strokeWidth={1.6} />
                  Lab GitHub
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
