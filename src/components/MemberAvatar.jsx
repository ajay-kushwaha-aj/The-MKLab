import { useState } from "react";

export default function MemberAvatar({ person, sizeClass = "h-[76px] w-[76px]", objectPosition = "object-top" }) {
  const [failed, setFailed] = useState(false);

  return (
    <div
      className={`${sizeClass} shrink-0 overflow-hidden rounded-xl border border-[var(--border-subtle)] bg-gradient-to-br from-[#E6EEF4] to-[#D8E3EC] dark:from-[#102030] dark:to-[#183857] grid place-items-center font-display text-xl font-medium text-[var(--teal)]`}
    >
      {person.photo && !failed ? (
        <img
          src={person.photo}
          alt={person.name}
          loading="lazy"
          onError={() => setFailed(true)}
          className={`h-full w-full object-cover ${objectPosition} transition-transform duration-300 group-hover:scale-[1.04]`}
        />
      ) : (
        <span>{person.initials || "MK"}</span>
      )}
    </div>
  );
}
