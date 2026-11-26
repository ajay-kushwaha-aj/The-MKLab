import { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { ArrowRight, FileText, Menu, X } from "lucide-react";
import { ASSETS, MKLAB_DATA } from "../data/labData";
import ThemeToggle from "./ThemeToggle";

const NAV_ITEMS = [
  { to: "/", label: "Home", end: true },
  { to: "/research", label: "Research" },
  { to: "/team", label: "Team" },
  { to: "/publications", label: "Publication" },
  { to: "/teaching", label: "Teaching" },
  { to: "/news", label: "News" },
  { to: "/resources", label: "Resources" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const { pathname } = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    function onScroll() {
      const y = window.scrollY;
      const docH = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(y > 16);
      setProgress(docH > 0 ? Math.min(100, (y / docH) * 100) : 0);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div
        className="fixed top-0 left-0 z-50 h-[2px] bg-[var(--accent)] transition-[width] duration-75 ease-linear"
        style={{ width: `${progress}%` }}
        aria-hidden="true"
      />
      <header
        style={{ backgroundColor: scrolled ? "var(--nav-bg-scrolled)" : "var(--nav-bg)" }}
        className={`sticky top-0 z-40 h-16 border-b border-[var(--border-subtle)] backdrop-blur-md transition-all duration-200 ${
          scrolled ? "shadow-sm" : ""
        }`}
      >
        <div className="mx-auto flex h-full w-full max-w-[1360px] items-center justify-between gap-3 px-4 sm:px-6 lg:px-10">
          <div className="flex shrink-0 items-center gap-2.5 sm:gap-3">
            <a
              href={MKLAB_DATA.site.institutionUrl}
              target="_blank"
              rel="noopener noreferrer"
              title="University of Hyderabad (uohyd.ac.in)"
              aria-label="University of Hyderabad official website"
              className="group inline-flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-[var(--border-strong)] bg-white p-0.5 shadow-xs transition-transform duration-200 hover:scale-105 hover:border-[var(--teal)]"
            >
              <img
                src={ASSETS.uohLogo}
                alt="University of Hyderabad crest"
                className="h-full w-full bg-white object-contain"
              />
            </a>
            <span className="h-5 w-px bg-[var(--border-subtle)]" aria-hidden="true" />
            <Link to="/" className="group inline-flex shrink-0 items-center gap-2.5 font-semibold text-[16px] sm:text-[17px] tracking-tight text-[var(--text-primary)]">
              <img
                src={ASSETS.labLogo}
                alt="The MKLab logo"
                className="h-9 w-9 shrink-0 rounded-full border border-[var(--border-strong)] bg-white object-cover shadow-xs transition-transform duration-200 group-hover:scale-105"
              />
              <span>The MKLab</span>
            </Link>
            <a
              href={MKLAB_DATA.site.institutionUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden border-l border-[var(--border-subtle)] pl-3 text-[13px] font-normal text-[var(--text-muted)] transition-colors hover:text-[var(--teal)] xl:inline"
            >
              University of Hyderabad
            </a>
          </div>

          <nav aria-label="Primary navigation" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {NAV_ITEMS.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    end={item.end}
                    className={({ isActive }) =>
                      `inline-flex h-9 items-center rounded-lg px-3 text-sm font-medium transition-colors duration-150 ${
                        isActive
                          ? "bg-[var(--pill-active-bg)] text-[var(--pill-active-text)] dark:border dark:border-[#234D75] dark:text-[#22B8B5]"
                          : "text-[var(--text-secondary)] hover:bg-[var(--bg-raised)] hover:text-[var(--text-primary)] dark:hover:bg-[#183857]/60"
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Link
              to="/cv"
              className="hidden h-9 items-center gap-2 rounded-lg bg-[var(--accent)] px-4 text-[13px] font-semibold text-[var(--accent-text)] transition-colors duration-150 hover:bg-[var(--accent-hover)] active:scale-[0.98] sm:inline-flex"
            >
              <FileText size={14} strokeWidth={1.75} />
              <span>PI Dossier</span>
            </Link>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label="Toggle navigation menu"
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[var(--text-primary)] lg:hidden"
            >
              {open ? <X size={18} strokeWidth={1.5} /> : <Menu size={18} strokeWidth={1.5} />}
            </button>
          </div>
        </div>
      </header>

      {open && (
        <nav
          aria-label="Mobile navigation"
          className="fixed inset-x-0 top-16 z-30 border-b border-[var(--border-subtle)] bg-[var(--bg-surface)] p-4 shadow-lg lg:hidden"
        >
          <ul className="grid gap-1">
            {NAV_ITEMS.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.end}
                  className={({ isActive }) =>
                    `flex items-center justify-between rounded-lg px-4 py-3 text-[15px] font-medium ${
                      isActive
                        ? "bg-[var(--pill-active-bg)] text-[var(--pill-active-text)] dark:text-[#22B8B5]"
                        : "text-[var(--text-secondary)] hover:bg-[var(--bg-raised)]"
                    }`
                  }
                >
                  <span>{item.label}</span>
                  <ArrowRight size={16} strokeWidth={1.5} />
                </NavLink>
              </li>
            ))}
            <li>
              <NavLink
                to="/cv"
                className={({ isActive }) =>
                  `flex items-center justify-between rounded-lg px-4 py-3 text-[15px] font-medium ${
                    isActive
                      ? "bg-[var(--pill-active-bg)] text-[var(--pill-active-text)] dark:text-[#22B8B5]"
                      : "text-[var(--text-secondary)] hover:bg-[var(--bg-raised)]"
                  }`
                }
              >
                <span>PI Dossier &amp; CV</span>
                <ArrowRight size={16} strokeWidth={1.5} />
              </NavLink>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
}
