"use client";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="relative max-w-[480px]">
      {/* Search icon */}
      <span
        className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-[#888]"
        aria-hidden="true"
      >
        🔍
      </span>
      <input
        type="search"
        id="search-input"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search movies…"
        aria-label="Search movies by title"
        className="w-full rounded-lg border border-[#2a2a2a] bg-[#1a1a1a] py-[11px] pl-10 pr-4 font-[inherit] text-[0.95rem] text-[#f0f0f0] outline-none transition-all duration-300 placeholder:text-[#888] focus:border-[#e0b84f] focus:shadow-[0_0_0_3px_rgba(224,184,79,0.12)]"
      />
    </div>
  );
}
