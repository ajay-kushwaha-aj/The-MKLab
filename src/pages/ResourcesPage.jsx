import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";
import NetworkCanvas from "../components/NetworkCanvas";
import { Reveal } from "../components/MotionPrimitives";
import SocialBrandIcon, { getBrandButtonClasses, getBrandTextClasses } from "../components/SocialBrandIcon";
import { MKLAB_DATA } from "../data/labData";

export default function ResourcesPage() {
  const D = MKLAB_DATA;
  const tools = D.researchThemes[3].tools;

  const links = [
    {
      brand: "cv",
      title: "Dr. Manjari Kiran — Curriculum Vitae (2026 PDF)",
      desc: "Original embedded Google Drive PDF (Manjari_Kiran_2026.pdf) with full career dossier.",
      href: D.site.social.cvPdf,
      action: "Open Drive PDF",
    },
    {
      brand: "scholar",
      title: "Google Scholar Profile",
      desc: "Complete citation metrics (H-index: 18) and indexed papers for Dr. Manjari Kiran.",
      href: D.site.social.scholar,
      action: "Open Scholar",
    },
    {
      brand: "linkedin",
      title: "LinkedIn Profile",
      desc: "Professional updates and academic network for Dr. Manjari Kiran.",
      href: D.site.social.linkedin,
      action: "Open LinkedIn",
    },
    {
      brand: "x",
      title: "X (Twitter) — @manjkira564",
      desc: "Lab highlights, paper announcements, and conference updates.",
      href: D.site.social.x,
      action: "Open X",
    },
  ];

  return (
    <>
      <section className="relative overflow-hidden border-b border-white/10 dark:border-[var(--border-subtle)] bg-[#0F2942] dark:bg-[var(--bg-page)] py-12 text-[var(--text-on-dark)] sm:py-16">
        <NetworkCanvas compact />
        <div className="relative z-10 mx-auto w-full max-w-[1360px] px-4 sm:px-6 lg:px-10 animate-fade-rise">
          <div className="inline-flex items-center gap-2 font-mono-tech text-xs text-[var(--text-on-dark-muted)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
            Code, Tools &amp; References
          </div>
          <h1 className="mt-3 font-display text-3xl font-medium tracking-tight sm:text-4xl lg:text-[46px]">Resources</h1>
          <p className="mt-4 max-w-[64ch] text-base leading-relaxed text-[var(--text-on-dark-muted)] sm:text-lg">
            Open-source bioinformatics tools, computational frameworks, and external profiles maintained by The MKLab.
          </p>
        </div>
      </section>

      <section className="py-10 sm:py-12">
        <div className="mx-auto w-full max-w-[1360px] px-4 sm:px-6 lg:px-10">
          <Reveal>
            <div className="mb-12 flex flex-wrap items-center justify-between gap-6 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-6 shadow-xs transition-all duration-200 hover:shadow-md sm:p-8">
              <div>
                <span className="inline-flex h-6 items-center rounded bg-[var(--teal-soft-bg)] px-2 font-mono-tech text-xs text-[var(--teal)]">
                  Primary Code Repository
                </span>
                <h2 className="mt-3 mb-2 font-display text-2xl font-medium sm:text-[28px]">
                  Lab GitHub Page — MKLABcoder
                </h2>
                <p className="max-w-[60ch] text-sm leading-relaxed text-[var(--text-secondary)]">
                  Source code, computational pipelines, R and Python workflows, and reproducible scripts accompanying MKLab publications.
                </p>
              </div>
              <a
                href={D.site.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex h-11 items-center gap-2.5 rounded-lg border border-[var(--border-strong)] bg-[var(--bg-surface)] px-5 text-sm font-medium text-[var(--text-primary)] transition-all duration-200 hover:border-[#181717]/40 hover:bg-[#181717]/[0.04] dark:hover:border-[#94A3B8]/50 dark:hover:bg-white/[0.06]"
              >
                <SocialBrandIcon brand="github" sizeClass="h-5 w-5" />
                <span>Open github.com/MKLABcoder</span>
                <ExternalLink size={15} strokeWidth={1.5} />
              </a>
            </div>
          </Reveal>

          <Reveal>
            <div className="mb-8 flex flex-col items-start justify-between gap-4 border-b border-[var(--border-subtle)] pb-4 sm:flex-row sm:items-end">
              <div>
                <span className="mb-1 block font-mono-tech text-xs text-[var(--teal)]">Lab Tools &amp; Models</span>
                <h2 className="font-display text-2xl font-medium sm:text-3xl">Developed software &amp; frameworks</h2>
              </div>
              <Link to="/publications" className="text-sm font-medium text-[var(--teal)] hover:underline">
                All publications →
              </Link>
            </div>
          </Reveal>

          <div className="mb-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {tools.map((t, i) => (
              <Reveal key={t.name} delay={(i % 3) * 50} className="h-full">
                <article className="flex h-full flex-col gap-3 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-6 shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
                  <div>
                    <span className="inline-flex h-6 items-center rounded border border-[var(--border-subtle)] bg-[var(--bg-raised)] dark:border-[var(--border-subtle)] px-2 font-mono-tech text-xs text-[var(--text-secondary)]">
                      {t.tag}
                    </span>
                  </div>
                  <h3 className="font-mono-tech text-base font-medium text-[var(--text-primary)]">{t.name}</h3>
                  <p className="text-sm leading-relaxed text-[var(--text-secondary)]">{t.desc}</p>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mb-8 border-b border-[var(--border-subtle)] pb-4">
              <span className="mb-1 block font-mono-tech text-xs text-[var(--teal)]">Documents &amp; Profiles</span>
              <h2 className="font-display text-2xl font-medium sm:text-3xl">Academic links &amp; CV</h2>
            </div>
          </Reveal>

          <div className="grid gap-5 md:grid-cols-2">
            {links.map((l, i) => (
              <Reveal key={l.title} delay={i * 50} className="h-full">
                <article
                  className={`group flex h-full flex-col justify-between gap-4 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-5 shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md sm:flex-row sm:items-center ${getBrandButtonClasses(l.brand)}`}
                >
                  <div className="flex min-w-0 items-center gap-4">
                    <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-page)]">
                      <SocialBrandIcon brand={l.brand} sizeClass="h-6 w-6" />
                    </div>
                    <div className="min-w-0">
                      <h3 className={`text-base font-semibold text-[var(--text-primary)] transition-colors ${getBrandTextClasses(l.brand)}`}>
                        {l.title}
                      </h3>
                      <p className="mt-1 text-[13px] text-[var(--text-secondary)]">{l.desc}</p>
                    </div>
                  </div>
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex h-8 shrink-0 items-center gap-1.5 rounded border border-[var(--border-strong)] bg-[var(--bg-surface)] px-3 text-[13px] font-medium text-[var(--text-primary)] transition-colors ${getBrandTextClasses(l.brand)}`}
                  >
                    {l.action} <ExternalLink size={13} strokeWidth={1.5} />
                  </a>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
