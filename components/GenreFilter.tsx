"use client";

interface GenreFilterProps {
  genres: string[];
  activeGenre: string;
  onSelect: (genre: string) => void;
}

export default function GenreFilter({
  genres,
  activeGenre,
  onSelect,
}: GenreFilterProps) {
  const all = ["All", ...genres];

  return (
    <div
      className="flex flex-wrap gap-2"
      role="group"
      aria-label="Filter by genre"
    >
      {all.map((genre) => {
        const isActive = genre === activeGenre;
        return (
          <button
            key={genre}
            onClick={() => onSelect(genre)}
            aria-pressed={isActive}
            className={`rounded-full border px-4 py-1.5 font-[inherit] text-[0.82rem] font-medium transition-all duration-300 ${
              isActive
                ? "filter-btn-active"
                : "border-[#2a2a2a] bg-[#1a1a1a] text-[#888] hover:border-[#444] hover:bg-[#1e1e1e] hover:text-[#f0f0f0]"
            }`}
          >
            {genre}
          </button>
        );
      })}
    </div>
  );
}
