import { Link } from "react-router-dom";
import { Briefcase, Building2, ExternalLink, Mail, MapPin, Phone } from "lucide-react";
import { ASSETS, MKLAB_DATA } from "../data/labData";
import SocialBrandIcon, { getBrandButtonClasses, getBrandTextClasses } from "./SocialBrandIcon";

export default function Footer() {
  const s = MKLAB_DATA.site;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t border-[var(--border-subtle)] bg-[var(--bg-surface)] py-12">
      <div className="mx-auto w-full max-w-[1360px] px-4 sm:px-6 lg:px-10">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="mb-3 inline-flex items-center gap-3 font-semibold text-[17px] text-[var(--text-primary)]">
              <img
                src={ASSETS.labLogo}
                alt="The MKLab logo"
                className="h-10 w-10 shrink-0 rounded-full border border-[var(--border-strong)] bg-white object-cover shadow-xs"
              />
              <span>{s.name}</span>
            </div>
            <p className="max-w-[44ch] text-sm leading-relaxed text-[var(--text-secondary)]">
              <span className="inline-flex items-start gap-2">
                <Building2 size={15} strokeWidth={1.6} className="mt-1 shrink-0 text-[var(--teal)]" />
                <span>{s.department}</span>
              </span>
              <br />
              <span className="inline-flex items-start gap-2">
                <MapPin size={15} strokeWidth={1.6} className="mt-1 shrink-0 text-[var(--teal)]" />
                <span>
                  {s.room}, {s.institution}
                </span>
              </span>
            </p>
            <div className="mt-4 grid max-w-[380px] grid-cols-1 gap-2.5 min-[380px]:grid-cols-2">
              {[
                { brand: "x", label: "X / Twitter", href: s.social.x },
                { brand: "linkedin", label: "LinkedIn", href: s.social.linkedin },
                { brand: "scholar", label: "Google Scholar", href: s.social.scholar },
                { brand: "github", label: "GitHub", href: s.social.github },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group inline-flex h-9 w-full items-center justify-between gap-2 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-page)] px-3 text-[13px] font-medium text-[var(--text-secondary)] transition-all duration-200 ${getBrandButtonClasses(item.brand)} ${getBrandTextClasses(item.brand)}`}
                >
                  <span className="inline-flex min-w-0 items-center gap-2">
                    <SocialBrandIcon brand={item.brand} sizeClass="h-[18px] w-[18px]" />
                    <span className="truncate">{item.label}</span>
                  </span>
                  <ExternalLink size={12} strokeWidth={1.5} className="shrink-0 opacity-50 transition-opacity group-hover:opacity-90" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <h3 className="mb-3 text-[13px] font-semibold text-[var(--text-primary)]">Contact</h3>
            <ul className="grid gap-2.5 text-sm text-[var(--text-secondary)]">
              <li className="font-semibold text-[var(--text-primary)]">{s.pi}</li>
              <li>
                <a href={`mailto:${s.email}`} className="inline-flex items-center gap-2 text-[var(--teal)] hover:underline">
                  <Mail size={14} strokeWidth={1.6} className="shrink-0" />
                  <span>{s.email}</span>
                </a>
              </li>
              <li>
                <a href={`tel:${s.phoneLab}`} className="inline-flex items-center gap-2 tabular-nums hover:text-[var(--teal)]">
                  <Phone size={14} strokeWidth={1.6} className="shrink-0 text-[var(--teal)]" />
                  <span>Lab: {s.phoneLab}</span>
                </a>
              </li>
              <li>
                <a href={`tel:${s.phoneCV}`} className="inline-flex items-center gap-2 tabular-nums hover:text-[var(--teal)]">
                  <Phone size={14} strokeWidth={1.6} className="shrink-0 text-[var(--teal)]" />
                  <span>Office: {s.phoneCV}</span>
                </a>
              </li>
              <li>
                <Link to="/team#open-positions" className="inline-flex items-center gap-2 hover:text-[var(--teal)]">
                  <Briefcase size={14} strokeWidth={1.6} className="shrink-0 text-[var(--accent)]" />
                  <span>Open JRF / Staff Positions (3)</span>
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h3 className="mb-3 text-[13px] font-semibold text-[var(--text-primary)]">Sections</h3>
            <ul className="grid gap-2 text-sm text-[var(--text-secondary)] sm:grid-cols-2">
              <li><Link to="/research" className="hover:text-[var(--teal)]">Research Themes</Link></li>
              <li><Link to="/team" className="hover:text-[var(--teal)]">Lab Members &amp; Alumni</Link></li>
              <li><Link to="/publications" className="hover:text-[var(--teal)]">Publications</Link></li>
              <li><Link to="/teaching" className="hover:text-[var(--teal)]">Teaching &amp; Syllabus</Link></li>
              <li><Link to="/news" className="hover:text-[var(--teal)]">News &amp; Events</Link></li>
              <li><Link to="/resources" className="hover:text-[var(--teal)]">GitHub &amp; Tools</Link></li>
              <li className="sm:col-span-2">
                <Link to="/cv" className="font-medium text-[var(--teal)] hover:underline">
                  Dr. Manjari Kiran
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-x-6 gap-y-2 border-t border-[var(--border-subtle)] pt-5 text-[13px] text-[var(--text-muted)]">
          <span className="tabular-nums">
            &copy; {currentYear} {s.name}. All rights reserved.
          </span>
          <span>
            {s.developerCredit.prefix}{" "}
            <a
              href={s.developerCredit.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-[var(--text-primary)] underline decoration-[var(--border-strong)] underline-offset-4 transition-colors hover:text-[var(--teal)] hover:decoration-[var(--teal)]"
            >
              {s.developerCredit.name}
            </a>
          </span>
          <span className="font-mono-tech text-xs">School of Life Sciences · University of Hyderabad</span>
        </div>
      </div>
    </footer>
  );
}
