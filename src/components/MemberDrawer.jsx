import { useEffect } from "react";
import { Link } from "react-router-dom";
import { X } from "lucide-react";
import MemberAvatar from "./MemberAvatar";

export default function MemberDrawer({ member, onClose }) {
  useEffect(() => {
    if (!member) return;
    function onKey(e) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [member, onClose]);

  if (!member) return null;

  return (
    <>
      <div
        className="fixed inset-0 z-50 bg-[#09131E]/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />
      <aside
        role="dialog"
        aria-modal="true"
        aria-labelledby="drawer-member-name"
        className="fixed inset-y-0 right-0 z-50 flex w-full max-w-[560px] flex-col border-l border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[var(--text-primary)] shadow-2xl animate-fade-rise"
      >
        <div className="flex items-center justify-between gap-4 border-b border-[var(--border-subtle)] px-6 py-5">
          <div className="flex min-w-0 items-center gap-3">
            <MemberAvatar person={member} sizeClass="h-14 w-14" />
            <div className="min-w-0">
              <h2 id="drawer-member-name" className="truncate font-display text-2xl font-medium text-[var(--text-primary)]">
                {member.name}
              </h2>
              <p className="truncate text-[13px] text-[var(--text-muted)]">
                {member.role || member.workedAs || "MKLab Member"}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close profile"
            className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-page)] text-[var(--text-primary)] hover:border-[var(--teal)] hover:text-[var(--teal)]"
          >
            <X size={18} strokeWidth={1.5} />
          </button>
        </div>

        <div className="grid gap-6 overflow-y-auto p-6">
          {member.focus && (
            <div>
              <h3 className="mb-1.5 font-mono-tech text-xs font-medium text-[var(--teal)]">Focus</h3>
              <p className="text-sm leading-relaxed text-[var(--text-secondary)]">{member.focus}</p>
            </div>
          )}
          {member.current && (
            <div>
              <h3 className="mb-1.5 font-mono-tech text-xs font-medium text-[var(--teal)]">Current Position</h3>
              <p className="text-sm leading-relaxed text-[var(--text-secondary)]">{member.current}</p>
            </div>
          )}
          {member.background && (
            <div>
              <h3 className="mb-1.5 font-mono-tech text-xs font-medium text-[var(--teal)]">Background</h3>
              <div className="grid gap-3 text-sm leading-relaxed text-[var(--text-secondary)]">
                {member.background.split("\n\n").map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>
          )}
          {member.researchInterests && (
            <div>
              <h3 className="mb-1.5 font-mono-tech text-xs font-medium text-[var(--teal)]">Research Interests</h3>
              <p className="text-sm leading-relaxed text-[var(--text-secondary)]">{member.researchInterests}</p>
            </div>
          )}
          {member.academicInterests && (
            <div>
              <h3 className="mb-1.5 font-mono-tech text-xs font-medium text-[var(--teal)]">Academic Interests</h3>
              <p className="text-sm leading-relaxed text-[var(--text-secondary)]">{member.academicInterests}</p>
            </div>
          )}
          {member.funFact && (
            <div>
              <h3 className="mb-1.5 font-mono-tech text-xs font-medium text-[var(--teal)]">Fun Fact</h3>
              <p className="text-sm leading-relaxed text-[var(--text-secondary)]">{member.funFact}</p>
            </div>
          )}
          {member.slug === "manjari-kiran" && (
            <div className="pt-2">
              <Link
                to="/cv"
                onClick={onClose}
                className="inline-flex h-10 items-center rounded-lg bg-[var(--accent)] px-5 text-sm font-semibold text-[var(--accent-text)] hover:bg-[var(--accent-hover)]"
              >
                Open Complete CV Dossier (10 Pages)
              </Link>
            </div>
          )}
        </div>
      </aside>
    </>
  );
}
