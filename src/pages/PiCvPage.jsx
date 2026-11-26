import {
  Award,
  BookOpen,
  Briefcase,
  Calendar,
  CalendarDays,
  ExternalLink,
  FileText,
  GraduationCap,
  Mail,
  MapPin,
  Mic,
  Phone,
  Users,
} from "lucide-react";
import NetworkCanvas from "../components/NetworkCanvas";
import { Reveal } from "../components/MotionPrimitives";
import { ASSETS, MKLAB_DATA } from "../data/labData";

export default function PiCvPage() {
  const D = MKLAB_DATA;
  const CV = D.piCV;

  return (
    <>
      <section className="relative overflow-hidden border-b border-white/10 dark:border-[var(--border-subtle)] bg-[#0F2942] dark:bg-[var(--bg-page)] py-12 text-[var(--text-on-dark)] sm:py-16">
        <NetworkCanvas compact />
        <div className="relative z-10 mx-auto w-full max-w-[1360px] px-4 sm:px-6 lg:px-10 animate-fade-rise">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div className="flex items-center gap-5">
              <div className="h-28 w-24 shrink-0 overflow-hidden rounded-xl border border-white/15 dark:border-[var(--border-subtle)] bg-[#153554] dark:bg-[var(--bg-surface)]">
                <img
                  src={ASSETS.manjariPhoto}
                  alt="Dr. Manjari Kiran"
                  className="h-full w-full object-cover object-top"
                />
              </div>
              <div>
                <div className="inline-flex items-center gap-2 font-mono-tech text-xs text-[var(--text-on-dark-muted)]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                  Principal Investigator
                </div>
                <h1 className="mt-2 font-display text-3xl font-medium tracking-tight sm:text-4xl lg:text-[44px]">
                  Dr. Manjari Kiran
                </h1>
                <p className="mt-2 max-w-[60ch] text-sm text-[var(--text-on-dark-muted)] sm:text-base">
                  Assistant Professor, Department of Systems and Computational Biology, School of Life Sciences, University of Hyderabad.
                </p>
                <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1.5 font-mono-tech text-xs text-[var(--text-on-dark-muted)]">
                  <a href={`mailto:${D.site.email}`} className="inline-flex items-center gap-1.5 text-[var(--teal-bright)] hover:underline">
                    <Mail size={13} strokeWidth={1.6} />
                    <span>{D.site.email}</span>
                  </a>
                  <a href={`tel:${D.site.phoneCV}`} className="inline-flex items-center gap-1.5 tabular-nums hover:text-white">
                    <Phone size={13} strokeWidth={1.6} className="text-[var(--teal-bright)]" />
                    <span>{D.site.phoneCV}</span>
                  </a>
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin size={13} strokeWidth={1.6} className="text-[var(--teal-bright)]" />
                    <span>{D.site.room}</span>
                  </span>
                </div>
              </div>
            </div>
            <a
              href={D.site.social.cvPdf}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center gap-2 rounded-lg bg-[var(--accent)] px-5 text-sm font-semibold text-[var(--accent-text)] hover:bg-[var(--accent-hover)]"
            >
              <FileText size={15} strokeWidth={1.75} />
              View Original PDF <ExternalLink size={15} strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-12">
        <div className="mx-auto grid w-full max-w-[1360px] items-start gap-10 px-4 sm:px-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:px-10">
          <aside className="grid gap-1 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-4 shadow-xs lg:sticky lg:top-24" aria-label="CV sections">
            <div className="px-3 py-1.5 font-mono-tech text-[11px] text-[var(--text-muted)]">Dossier Sections</div>
            {[
              { href: "#positions", label: "Positions & Education", Icon: Briefcase },
              { href: "#achievements", label: "Academic Achievements", Icon: Award },
              { href: "#memberships", label: "Memberships", Icon: Users },
              { href: "#statements", label: "Research & Teaching Statements", Icon: BookOpen },
              { href: "#mentoring", label: "Mentoring & Doctoral Committees", Icon: GraduationCap },
              { href: "#grants", label: "Funded Grants", Icon: CalendarDays },
              { href: "#talks", label: "Invited Talks", Icon: Mic },
              { href: "#service", label: "Events & Journal Reviews", Icon: FileText },
            ].map(({ href, label, Icon }) => (
              <a
                key={href}
                href={href}
                className="inline-flex items-center gap-2.5 rounded-md px-3 py-2 text-[13px] text-[var(--text-secondary)] transition-colors hover:bg-[var(--bg-raised)] hover:text-[var(--teal)]"
              >
                <Icon size={14} strokeWidth={1.6} className="shrink-0 text-[var(--teal)]" />
                <span>{label}</span>
              </a>
            ))}
          </aside>

          <div className="min-w-0">
            <Reveal>
              <section id="positions" className="mb-10 border-b border-[var(--border-subtle)] pb-10">
                <h2 className="mb-4 font-display text-2xl font-medium sm:text-[26px]">Academic Positions &amp; Education</h2>
                <h3 className="mb-2 font-mono-tech text-xs text-[var(--teal)]">Positions</h3>
                <div className="mb-6">
                  {CV.positions.map((p, idx) => (
                    <div key={idx} className="grid gap-1 border-t border-[var(--border-subtle)] py-3 sm:grid-cols-[190px_minmax(0,1fr)] sm:gap-4">
                      <div className="inline-flex items-center gap-1.5 font-mono-tech text-xs text-[var(--text-muted)] tabular-nums">
                        <Calendar size={12} strokeWidth={1.6} className="shrink-0 text-[var(--teal)]" />
                        <span>{p.period}</span>
                      </div>
                      <div>
                        <strong className="text-[var(--text-primary)]">{p.title}</strong>
                        <div className="text-sm text-[var(--text-secondary)]">{p.org}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <h3 className="mb-2 font-mono-tech text-xs text-[var(--teal)]">Education</h3>
                <div>
                  {CV.education.map((e, idx) => (
                    <div key={idx} className="grid gap-1 border-t border-[var(--border-subtle)] py-3 sm:grid-cols-[190px_minmax(0,1fr)] sm:gap-4">
                      <div className="inline-flex items-center gap-1.5 font-mono-tech text-xs text-[var(--text-muted)] tabular-nums">
                        <Calendar size={12} strokeWidth={1.6} className="shrink-0 text-[var(--teal)]" />
                        <span>{e.period}</span>
                      </div>
                      <div>
                        <strong className="text-[var(--text-primary)]">{e.degree}</strong>
                        <div className="text-sm text-[var(--text-secondary)]">{e.inst}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </Reveal>

            <Reveal>
              <section id="achievements" className="mb-10 border-b border-[var(--border-subtle)] pb-10">
                <h2 className="mb-4 font-display text-2xl font-medium sm:text-[26px]">Academic Achievements</h2>
                <ol className="grid list-decimal gap-3 pl-5 text-sm leading-relaxed text-[var(--text-secondary)]">
                  {CV.achievements.map((a, idx) => (
                    <li key={idx}>{a}</li>
                  ))}
                </ol>
              </section>
            </Reveal>

            <Reveal>
              <section id="memberships" className="mb-10 border-b border-[var(--border-subtle)] pb-10">
                <h2 className="mb-4 font-display text-2xl font-medium sm:text-[26px]">Professional Memberships</h2>
                <ul className="grid list-disc gap-2 pl-5 text-sm text-[var(--text-secondary)]">
                  {CV.memberships.map((m, idx) => (
                    <li key={idx}>{m}</li>
                  ))}
                </ul>
              </section>
            </Reveal>

            <Reveal>
              <section id="statements" className="mb-10 border-b border-[var(--border-subtle)] pb-10">
                <h2 className="mb-4 font-display text-2xl font-medium sm:text-[26px]">Research &amp; Teaching Statements</h2>
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-6 shadow-xs">
                    <h3 className="mb-3 font-mono-tech text-xs text-[var(--teal)]">Research Statement</h3>
                    <p className="text-sm leading-relaxed text-[var(--text-secondary)]">{CV.researchStatement}</p>
                  </div>
                  <div className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-6 shadow-xs">
                    <h3 className="mb-3 font-mono-tech text-xs text-[var(--teal)]">Teaching Statement</h3>
                    <p className="text-sm leading-relaxed text-[var(--text-secondary)]">{CV.teachingStatement}</p>
                  </div>
                </div>
              </section>
            </Reveal>

            <Reveal>
              <section id="mentoring" className="mb-10 border-b border-[var(--border-subtle)] pb-10">
                <h2 className="mb-4 font-display text-2xl font-medium sm:text-[26px]">Research Training &amp; Mentoring</h2>
                <div className="mb-6 grid gap-6 md:grid-cols-2">
                  <div className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-6 shadow-xs">
                    <h3 className="mb-3 font-mono-tech text-xs text-[var(--teal)]">PhD &amp; Master's Supervision</h3>
                    <ul className="grid list-disc gap-2 pl-4 text-sm text-[var(--text-secondary)]">
                      <li>5 Graduate/PhD students (1 completed PhD: Anubha Dey, 2019–2025; 4 current: Amardeep, Shirshanya, Neelima, Sravan)</li>
                      <li>13 Master’s thesis students (2019–2027)</li>
                      <li>Past Project Staff: Haneesh Jindal (Jan 2021 – Jan 2023)</li>
                      <li>12 Summer trainees</li>
                    </ul>
                  </div>
                  <div className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-6 shadow-xs">
                    <h3 className="mb-3 font-mono-tech text-xs text-[var(--teal)]">Courses Taught</h3>
                    <ul className="grid list-disc gap-2 pl-4 text-sm text-[var(--text-secondary)]">
                      {D.courses.map((c) => (
                        <li key={c.title}>
                          {c.title} ({c.semester}, {c.hours})
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <h3 className="mb-3 font-mono-tech text-xs text-[var(--teal)]">Thesis Doctoral Committee Member</h3>
                <ol className="grid list-decimal gap-2 pl-5 text-sm text-[var(--text-secondary)]">
                  {CV.doctoralCommittees.map((c, idx) => (
                    <li key={idx}>{c}</li>
                  ))}
                </ol>
              </section>
            </Reveal>

            <Reveal>
              <section id="grants" className="mb-10 border-b border-[var(--border-subtle)] pb-10">
                <h2 className="mb-4 font-display text-2xl font-medium sm:text-[26px]">Extramural Grants</h2>
                <h3 className="mb-3 font-mono-tech text-xs text-[var(--teal)]">Current Grants</h3>
                <div className="mb-6">
                  {D.grants.current.map((g, idx) => (
                    <div key={idx} className="grid gap-1 border-t border-[var(--border-subtle)] py-3 sm:grid-cols-[180px_minmax(0,1fr)] sm:gap-4">
                      <div className="font-mono-tech text-xs text-[var(--teal)] tabular-nums">
                        {g.year}
                        {g.amount !== "—" && (
                          <>
                            <br />
                            {g.amount}
                          </>
                        )}
                      </div>
                      <div>
                        <strong className="text-sm text-[var(--text-primary)]">{g.title}</strong>
                        <div className="mt-0.5 text-[13px] text-[var(--text-secondary)]">
                          {g.agency} · {g.role}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <h3 className="mb-3 font-mono-tech text-xs text-[var(--text-muted)]">Completed Grants</h3>
                <div>
                  {D.grants.completed.map((g, idx) => (
                    <div key={idx} className="grid gap-1 border-t border-[var(--border-subtle)] py-3 sm:grid-cols-[180px_minmax(0,1fr)] sm:gap-4">
                      <div className="font-mono-tech text-xs text-[var(--text-muted)] tabular-nums">
                        {g.year}
                        <br />
                        {g.amount}
                      </div>
                      <div>
                        <strong className="text-sm text-[var(--text-primary)]">{g.title}</strong>
                        <div className="mt-0.5 text-[13px] text-[var(--text-secondary)]">
                          {g.agency} · {g.role}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </Reveal>

            <Reveal>
              <section id="talks" className="mb-10 border-b border-[var(--border-subtle)] pb-10">
                <h2 className="mb-4 font-display text-2xl font-medium sm:text-[26px]">
                  Invited Talks &amp; Resource Person
                </h2>
                <ol className="grid list-decimal gap-3 pl-5 text-sm text-[var(--text-secondary)]">
                  {CV.invitedTalks.map((t, idx) => (
                    <li key={idx}>{t}</li>
                  ))}
                </ol>
              </section>
            </Reveal>

            <Reveal>
              <section id="service">
                <h2 className="mb-4 font-display text-2xl font-medium sm:text-[26px]">Academic Service</h2>
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-6 shadow-xs">
                    <h3 className="mb-3 font-mono-tech text-xs text-[var(--teal)]">Coordinator / Organizer</h3>
                    <ol className="grid list-decimal gap-2 pl-4 text-sm text-[var(--text-secondary)]">
                      {CV.organizedEvents.map((e, idx) => (
                        <li key={idx}>{e}</li>
                      ))}
                    </ol>
                  </div>
                  <div className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-6 shadow-xs">
                    <h3 className="mb-3 font-mono-tech text-xs text-[var(--teal)]">Journal Reviewer</h3>
                    <ul className="grid list-disc gap-2 pl-4 text-sm text-[var(--text-secondary)]">
                      {CV.journalReviewer.map((r, idx) => (
                        <li key={idx}>{r}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
