const BRAND_STYLES = {
  linkedin: {
    hoverText: "group-hover:text-[#0A66C2] dark:group-hover:text-[#60A5FA]",
    hoverBorder: "hover:border-[#0A66C2]/45 hover:bg-[#0A66C2]/[0.05] dark:hover:border-[#60A5FA]/50 dark:hover:bg-[#60A5FA]/10",
  },
  scholar: {
    hoverText: "group-hover:text-[#356AC3] dark:group-hover:text-[#76A7FA]",
    hoverBorder: "hover:border-[#4285F4]/45 hover:bg-[#4285F4]/[0.06] dark:hover:border-[#76A7FA]/50 dark:hover:bg-[#76A7FA]/10",
  },
  x: {
    hoverText: "group-hover:text-[#0F1419] dark:group-hover:text-[#F1F5F9]",
    hoverBorder: "hover:border-[#0F1419]/35 hover:bg-[#0F1419]/[0.04] dark:hover:border-[#94A3B8]/50 dark:hover:bg-white/[0.06]",
  },
  github: {
    hoverText: "group-hover:text-[#181717] dark:group-hover:text-[#F1F5F9]",
    hoverBorder: "hover:border-[#181717]/35 hover:bg-[#181717]/[0.04] dark:hover:border-[#94A3B8]/50 dark:hover:bg-white/[0.06]",
  },
  cv: {
    hoverText: "group-hover:text-[var(--accent-soft-text)]",
    hoverBorder: "hover:border-[var(--accent)]/45 hover:bg-[var(--accent-soft-bg)]",
  },
};

export function getBrandButtonClasses(brand) {
  return BRAND_STYLES[brand]?.hoverBorder || "";
}

export function getBrandTextClasses(brand) {
  return BRAND_STYLES[brand]?.hoverText || "";
}

function LinkedInSvg({ colored }) {
  return (
    <svg viewBox="0 0 24 24" className="h-full w-full" aria-hidden="true">
      <rect
        x="2"
        y="2"
        width="20"
        height="20"
        rx="4"
        fill={colored ? "#0A66C2" : "none"}
        stroke={colored ? "#0A66C2" : "currentColor"}
        strokeWidth={colored ? "0" : "1.6"}
      />
      <path
        d="M7.5 10.2V17M7.5 7.2V7.25M11.2 17V10.2M11.2 12.1C11.7 10.8 12.9 10.1 14.2 10.1C15.9 10.1 16.8 11.2 16.8 13.1V17"
        fill="none"
        stroke={colored ? "#FFFFFF" : "currentColor"}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ScholarSvg({ colored }) {
  return (
    <svg viewBox="0 0 24 24" className="h-full w-full" aria-hidden="true">
      {colored ? (
        <>
          <path d="M12 14.5L3 8.5L12 3.5V14.5Z" fill="#4285F4" />
          <path d="M12 14.5L21 8.5L12 3.5V14.5Z" fill="#356AC3" />
          <circle cx="12" cy="14.5" r="5" fill="#A0C3FF" />
          <path d="M12 9.5C14.76 9.5 17 11.74 17 14.5C17 17.26 14.76 19.5 12 19.5V9.5Z" fill="#76A7FA" />
        </>
      ) : (
        <>
          <path
            d="M12 3.5L3 8.5L12 13.5L21 8.5L12 3.5Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path
            d="M7.3 11.2C7.1 11.9 7 12.7 7 13.5C7 16.26 9.24 18.5 12 18.5C14.76 18.5 17 16.26 17 13.5C17 12.7 16.9 11.9 16.7 11.2"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </>
      )}
    </svg>
  );
}

function XSvg({ colored }) {
  return (
    <svg viewBox="0 0 24 24" className="h-full w-full" aria-hidden="true">
      <rect
        x="2"
        y="2"
        width="20"
        height="20"
        rx="4"
        fill={colored ? "#0F1419" : "none"}
        stroke={colored ? "#0F1419" : "currentColor"}
        strokeWidth={colored ? "0" : "1.6"}
      />
      <path
        d="M13.3 10.9L17.6 6H16.6L12.8 10.3L9.9 6H6.5L11 12.5L6.5 17.7H7.5L11.5 13.1L14.6 17.7H18L13.3 10.9ZM11.9 12.5L11.4 11.8L7.9 6.8H9.4L12.2 10.8L12.7 11.5L16.4 16.9H14.9L11.9 12.5Z"
        fill={colored ? "#FFFFFF" : "currentColor"}
      />
    </svg>
  );
}

function GitHubSvg({ colored }) {
  return (
    <svg viewBox="0 0 24 24" className="h-full w-full" aria-hidden="true">
      {colored && <circle cx="12" cy="12" r="10" fill="#181717" />}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2.2C6.48 2.2 2 6.68 2 12.2C2 16.62 4.86 20.36 8.84 21.68C9.34 21.77 9.52 21.46 9.52 21.2C9.52 20.96 9.51 20.18 9.51 19.34C7 19.8 6.35 18.72 6.15 18.16C6.04 17.87 5.55 16.98 5.12 16.74C4.77 16.55 4.27 16.08 5.11 16.07C5.9 16.06 6.46 16.8 6.65 17.1C7.55 18.62 8.99 18.19 9.56 17.93C9.65 17.28 9.91 16.84 10.2 16.59C7.98 16.34 5.66 15.48 5.66 11.66C5.66 10.57 6.05 9.67 6.69 8.97C6.59 8.72 6.24 7.69 6.79 6.3C6.79 6.3 7.63 6.03 9.54 7.32C10.34 7.1 11.19 6.99 12.04 6.99C12.89 6.99 13.74 7.1 14.54 7.32C16.45 6.02 17.29 6.3 17.29 6.3C17.84 7.69 17.49 8.72 17.39 8.97C18.03 9.67 18.42 10.56 18.42 11.66C18.42 15.49 16.09 16.34 13.87 16.59C14.23 16.9 14.55 17.51 14.55 18.46C14.55 19.81 14.54 20.89 14.54 21.2C14.54 21.46 14.72 21.78 15.23 21.68C19.18 20.36 22 16.61 22 12.2C22 6.68 17.52 2.2 12 2.2Z"
        fill={colored ? "#FFFFFF" : "currentColor"}
        transform={colored ? "translate(2.4 2.4) scale(0.8)" : undefined}
      />
    </svg>
  );
}

function CvSvg({ colored }) {
  return (
    <svg viewBox="0 0 24 24" className="h-full w-full" aria-hidden="true">
      <path
        d="M6 3.5H14.5L18.5 7.5V20.5H6V3.5Z"
        fill={colored ? "#E05A47" : "none"}
        stroke={colored ? "#E05A47" : "currentColor"}
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M14.5 3.5V7.5H18.5"
        fill="none"
        stroke={colored ? "#FFFFFF" : "currentColor"}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M9 12H15M9 15.5H13.5"
        stroke={colored ? "#FFFFFF" : "currentColor"}
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

const ICONS = {
  linkedin: LinkedInSvg,
  scholar: ScholarSvg,
  x: XSvg,
  github: GitHubSvg,
  cv: CvSvg,
};

export default function SocialBrandIcon({ brand, sizeClass = "h-[18px] w-[18px]" }) {
  const IconComp = ICONS[brand];
  if (!IconComp) return null;

  return (
    <span className={`relative inline-block shrink-0 ${sizeClass}`}>
      <span className="absolute inset-0 text-[var(--text-muted)] transition-opacity duration-300 group-hover:opacity-20">
        <IconComp colored={false} />
      </span>
      <span
        className="
          absolute inset-0
          [clip-path:inset(100%_0_0_0)]
          transition-[clip-path] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]
          group-hover:[clip-path:inset(0%_0_0_0)]
        "
      >
        <IconComp colored={true} />
      </span>
    </span>
  );
}
