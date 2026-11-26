export default function ThemeSchematic({ themeId }) {
  if (themeId === "theme-1") {
    return (
      <svg viewBox="0 0 220 160" fill="none" className="w-full max-w-[220px]" aria-label="lncRNA splicing and microprotein diagram">
        <path className="svg-flow" d="M20 80 H65 Q75 28 95 80 T135 80 H200" stroke="var(--text-primary)" strokeWidth="2" strokeLinecap="round" />
        <rect x="34" y="70" width="24" height="20" rx="4" fill="var(--accent)" fillOpacity="0.18" stroke="var(--accent)" strokeWidth="1.5" />
        <rect x="148" y="70" width="34" height="20" rx="4" fill="var(--teal)" fillOpacity="0.18" stroke="var(--teal)" strokeWidth="1.5" />
        <circle className="svg-breathe" cx="95" cy="54" r="6" fill="var(--accent)" />
        <path d="M20 122 H200" stroke="var(--text-primary)" strokeOpacity="0.22" strokeDasharray="4 4" />
        <circle className="svg-breathe" cx="165" cy="122" r="11" fill="var(--teal)" fillOpacity="0.16" stroke="var(--teal)" strokeWidth="1.5" />
      </svg>
    );
  }
  if (themeId === "theme-2") {
    return (
      <svg viewBox="0 0 220 160" fill="none" className="w-full max-w-[220px]" aria-label="Chromatin looping and condensate diagram">
        <path d="M20 118 C60 118, 60 36, 110 36 C160 36, 160 118, 200 118" stroke="var(--text-primary)" strokeWidth="2" />
        <circle className="svg-breathe" cx="110" cy="72" r="34" fill="var(--teal)" fillOpacity="0.12" stroke="var(--teal)" strokeWidth="1.5" strokeDasharray="4 4" />
        <circle cx="96" cy="66" r="7" fill="var(--accent)" />
        <circle cx="124" cy="78" r="8" fill="var(--teal)" />
        <circle cx="72" cy="86" r="5" fill="var(--accent)" />
        <circle cx="148" cy="86" r="5" fill="var(--teal)" />
      </svg>
    );
  }
  if (themeId === "theme-3") {
    return (
      <svg viewBox="0 0 220 160" fill="none" className="w-full max-w-[220px]" aria-label="Epitranscriptomic RNA modification diagram">
        <path className="svg-flow" d="M20 88 Q65 42 110 88 T200 88" stroke="var(--text-primary)" strokeWidth="2" />
        <line x1="65" y1="64" x2="65" y2="34" stroke="var(--accent)" strokeWidth="1.5" />
        <circle className="svg-breathe" cx="65" cy="28" r="8" fill="var(--accent)" fillOpacity="0.2" stroke="var(--accent)" strokeWidth="1.5" />
        <line x1="115" y1="92" x2="115" y2="124" stroke="var(--teal)" strokeWidth="1.5" />
        <rect x="106" y="124" width="18" height="14" rx="4" fill="var(--teal)" fillOpacity="0.18" stroke="var(--teal)" strokeWidth="1.5" />
        <line x1="160" y1="66" x2="160" y2="38" stroke="var(--accent)" strokeWidth="1.5" />
        <circle className="svg-breathe" cx="160" cy="32" r="7" fill="var(--accent)" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 220 160" fill="none" className="w-full max-w-[220px]" aria-label="Computational network and ML prediction diagram">
      <line className="svg-flow" x1="48" y1="45" x2="110" y2="80" stroke="var(--text-primary)" strokeOpacity="0.35" strokeWidth="1.5" />
      <line className="svg-flow" x1="48" y1="115" x2="110" y2="80" stroke="var(--text-primary)" strokeOpacity="0.35" strokeWidth="1.5" />
      <line className="svg-flow" x1="110" y1="80" x2="174" y2="45" stroke="var(--accent)" strokeWidth="2" />
      <line className="svg-flow" x1="110" y1="80" x2="174" y2="115" stroke="var(--teal)" strokeWidth="1.5" />
      <circle cx="48" cy="45" r="10" fill="var(--bg-surface)" stroke="var(--text-primary)" strokeWidth="1.5" />
      <circle cx="48" cy="115" r="10" fill="var(--bg-surface)" stroke="var(--text-primary)" strokeWidth="1.5" />
      <circle className="svg-breathe" cx="110" cy="80" r="15" fill="var(--teal)" fillOpacity="0.16" stroke="var(--teal)" strokeWidth="1.8" />
      <circle cx="174" cy="45" r="11" fill="var(--accent)" />
      <circle cx="174" cy="115" r="10" fill="var(--teal)" />
    </svg>
  );
}
