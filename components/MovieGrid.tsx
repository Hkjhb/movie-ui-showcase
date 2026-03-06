"use client";

import { useState, useMemo } from "react";
import type { Movie } from "@/data/movies";
import SearchBar from "./SearchBar";
import GenreFilter from "./GenreFilter";
import MovieCard from "./MovieCard";

interface MovieGridProps {
  movies: Movie[];
  allGenres: string[];
}

export default function MovieGrid({ movies, allGenres }: MovieGridProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeGenre, setActiveGenre] = useState("All");

  const filtered = useMemo(
    () =>
      movies.filter((movie) => {
        const matchesSearch = movie.title
          .toLowerCase()
          .includes(searchQuery.toLowerCase());
        const matchesGenre =
          activeGenre === "All" || movie.genres.includes(activeGenre);
        return matchesSearch && matchesGenre;
      }),
    [movies, searchQuery, activeGenre]
  );

  return (
    <section aria-label="Movie collection">
      {/* Controls */}
      <div className="mb-8 flex flex-col gap-4">
        <SearchBar value={searchQuery} onChange={setSearchQuery} />
        <GenreFilter
          genres={allGenres}
          activeGenre={activeGenre}
          onSelect={setActiveGenre}
        />
      </div>

      {/* Grid heading */}
      <h2 className="section-heading">🎬 All Movies</h2>

      {filtered.length === 0 ? (
        /* Empty state */
        <div className="py-16 text-center text-[#888]" role="status">
          <div className="mb-3 text-5xl" aria-hidden="true">
            🎬
          </div>
          <p className="text-[1.1rem]">No movies found. Try a different search or filter.</p>
        </div>
      ) : (
        /* Movie grid */
        <div
          className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          role="list"
        >
          {filtered.map((movie, i) => (
            <div key={movie.id} role="listitem">
              <MovieCard movie={movie} animationDelay={i * 0.05} />
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
