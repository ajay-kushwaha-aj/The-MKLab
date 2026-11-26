import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

function getInitialDark() {
  if (typeof document !== "undefined" && document.documentElement.classList.contains("dark")) {
    return true;
  }
  if (typeof window === "undefined") return false;
  const saved = localStorage.getItem("mklab-theme");
  if (saved) return saved === "dark";
  return window.matchMedia?.("(prefers-color-scheme: dark)").matches ?? false;
}

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(getInitialDark);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  useEffect(() => {
    const mq = window.matchMedia?.("(prefers-color-scheme: dark)");
    if (!mq) return;
    function onSystemChange(e) {
      if (!localStorage.getItem("mklab-theme")) {
        setIsDark(e.matches);
      }
    }
    mq.addEventListener?.("change", onSystemChange);
    return () => mq.removeEventListener?.("change", onSystemChange);
  }, []);

  function toggleTheme() {
    const next = !isDark;
    localStorage.setItem("mklab-theme", next ? "dark" : "light");
    setIsDark(next);
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[var(--text-primary)] transition-colors duration-150 hover:border-[var(--teal)] hover:text-[var(--teal)] active:scale-[0.97]"
    >
      {isDark ? <Sun size={16} strokeWidth={1.75} className="text-[var(--accent)]" /> : <Moon size={16} strokeWidth={1.75} />}
    </button>
  );
}
