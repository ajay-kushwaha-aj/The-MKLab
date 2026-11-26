import { BookOpen, Calendar, Clock } from "lucide-react";
import NetworkCanvas from "../components/NetworkCanvas";
import { Reveal } from "../components/MotionPrimitives";
import { MKLAB_DATA } from "../data/labData";

export default function TeachingPage() {
  const D = MKLAB_DATA;
  const featured = D.courses.filter((c) => c.featured);
  const others = D.courses.filter((c) => !c.featured);

  return (
    <>
      <section className="relative overflow-hidden border-b border-white/10 dark:border-[var(--border-subtle)] bg-[#0F2942] dark:bg-[var(--bg-page)] py-12 text-[var(--text-on-dark)] sm:py-16">
        <NetworkCanvas compact />
        <div className="relative z-10 mx-auto w-full max-w-[1360px] px-4 sm:px-6 lg:px-10 animate-fade-rise">
          <div className="inline-flex items-center gap-2 font-mono-tech text-xs text-[var(--text-on-dark-muted)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
            Curriculum &amp; Mentorship
          </div>
          <h1 className="mt-3 font-display text-3xl font-medium tracking-tight sm:text-4xl lg:text-[46px]">Teaching</h1>
          <p className="mt-4 max-w-[66ch] text-base leading-relaxed text-[var(--text-on-dark-muted)] sm:text-lg">
            {D.piCV.teachingStatement}
          </p>
        </div>
      </section>

      <section className="py-10 sm:py-12">
        <div className="mx-auto w-full max-w-[1360px] px-4 sm:px-6 lg:px-10">
          <Reveal>
            <div className="mb-8 border-b border-[var(--border-subtle)] pb-4">
              <span className="mb-1 block font-mono-tech text-xs text-[var(--teal)]">Primary Courses</span>
              <h2 className="font-display text-2xl font-medium sm:text-3xl">Courses on The MKLab curriculum</h2>
            </div>
          </Reveal>

          <div className="mb-14 grid gap-6">
            {featured.map((c, idx) => (
              <Reveal key={c.code} delay={idx * 60}>
                <article className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-6 shadow-xs sm:p-8">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <span className="inline-flex h-6 items-center gap-1.5 rounded bg-[var(--teal-soft-bg)] px-2 font-mono-tech text-xs text-[var(--teal)]">
                        <BookOpen size={12} strokeWidth={1.6} />
                        {c.code}
                      </span>
                      <h3 className="mt-3 mb-1 font-display text-2xl font-medium sm:text-[26px]">
                        {c.code}: {c.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-[var(--text-secondary)]">
                        <span className="inline-flex items-center gap-1.5">
                          <Calendar size={14} strokeWidth={1.6} className="text-[var(--teal)]" />
                          Semester: <strong>{c.semester}</strong>
                        </span>
                        <span>· {c.level}</span>
                      </div>
                    </div>
                    <span className="inline-flex h-6 items-center gap-1.5 rounded border border-[var(--border-subtle)] bg-[var(--bg-raised)] dark:border-[var(--border-subtle)] px-2.5 font-mono-tech text-xs tabular-nums text-[var(--text-secondary)]">
                      <Clock size={12} strokeWidth={1.6} className="text-[var(--teal)]" />
                      {c.hours}
                    </span>
                  </div>

                  <p className="mt-4 text-[15px] text-[var(--text-secondary)]">{c.description}</p>

                  {c.syllabus && (
                    <div className="mt-6 border-t border-[var(--border-subtle)] pt-5">
                      <div className="mb-4 font-mono-tech text-xs text-[var(--text-muted)]">
                        Course Syllabus
                      </div>
                      <div className="grid gap-3 md:grid-cols-2">
                        {c.syllabus.map((s) => (
                          <div
                            key={s.day}
                            className="grid grid-cols-[88px_minmax(0,1fr)] items-center gap-3 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-page)] px-4 py-3 transition-all duration-150 hover:translate-x-0.5 hover:border-[var(--teal)]/45 hover:bg-[var(--bg-surface)]"
                          >
                            <span className="font-mono-tech text-xs font-medium text-[var(--teal)] tabular-nums">{s.day}</span>
                            <span className="text-sm text-[var(--text-primary)]">{s.topic}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mb-8 border-b border-[var(--border-subtle)] pb-4">
              <span className="mb-1 block font-mono-tech text-xs text-[var(--teal)]">
                Additional Masters &amp; PhD Modules (from PI CV)
              </span>
              <h2 className="font-display text-2xl font-medium sm:text-3xl">Further graduate coursework</h2>
            </div>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-3">
            {others.map((c, idx) => (
              <Reveal key={c.title} delay={idx * 60} className="h-full">
                <article className="flex h-full flex-col gap-3 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-6 shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
                  <div className="flex items-center justify-between gap-2">
                    <span className="inline-flex h-6 items-center gap-1.5 rounded border border-[var(--border-subtle)] bg-[var(--bg-raised)] dark:border-[var(--border-subtle)] px-2 font-mono-tech text-xs text-[var(--text-secondary)]">
                      <BookOpen size={12} strokeWidth={1.6} className="text-[var(--teal)]" />
                      {c.code}
                    </span>
                    <span className="inline-flex h-6 items-center gap-1.5 rounded border border-[var(--border-subtle)] bg-[var(--bg-raised)] dark:border-[var(--border-subtle)] px-2 font-mono-tech text-xs tabular-nums text-[var(--text-secondary)]">
                      <Clock size={12} strokeWidth={1.6} className="text-[var(--teal)]" />
                      {c.hours}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-medium">{c.title}</h3>
                  <div className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[var(--teal)]">
                    <Calendar size={13} strokeWidth={1.6} />
                    <span>{c.semester}</span>
                  </div>
                  <p className="mt-auto text-sm leading-relaxed text-[var(--text-secondary)]">{c.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
