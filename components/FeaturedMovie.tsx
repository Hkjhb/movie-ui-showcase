"use client";

import { useState } from "react";
import Image from "next/image";
import type { Movie } from "@/data/movies";

const FALLBACK_SRC =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='500' height='750'%3E%3Crect width='500' height='750' fill='%231a1a2e'/%3E%3Ctext x='50%25' y='50%25' fill='%23e0b84f' font-size='48' text-anchor='middle' dominant-baseline='middle'%3E%F0%9F%8E%AC%3C/text%3E%3C/svg%3E";

function StarRating({ rating }: { rating: number }) {
  const full = Math.floor(rating);
  const empty = 5 - full;
  return (
    <span aria-label={`${rating} out of 5 stars`}>
      <span className="stars-filled">{"★".repeat(full)}</span>
      <span className="stars-empty">{"★".repeat(empty)}</span>
    </span>
  );
}

interface FeaturedMovieProps {
  movie: Movie;
}

export default function FeaturedMovie({ movie }: FeaturedMovieProps) {
  const [imgSrc, setImgSrc] = useState(movie.poster);

  return (
    <div
      className="relative overflow-hidden rounded-xl border border-[#2a2a2a] bg-[#1a1a1a]"
      style={{
        background:
          "linear-gradient(135deg, rgba(224,184,79,0.04), transparent)",
      }}
    >
      <div className="flex gap-8 sm:flex-row flex-col">
        {/* Poster */}
        <div className="relative h-[260px] w-full flex-shrink-0 sm:h-auto sm:w-[200px]">
          <Image
            src={imgSrc}
            alt={`${movie.title} poster`}
            fill
            sizes="(max-width: 640px) 100vw, 200px"
            className="object-cover object-top transition-transform duration-300"
            onError={() => setImgSrc(FALLBACK_SRC)}
            priority
          />
        </div>

        {/* Info */}
        <div className="flex flex-col justify-center gap-3 py-7 pr-6 pl-0 max-sm:px-4 max-sm:pb-5">
          <span className="text-[0.75rem] font-semibold uppercase tracking-[0.1em] text-[#e0b84f]">
            ★ Featured Film
          </span>
          <h2 className="text-[clamp(1.4rem,3vw,2.2rem)] font-bold leading-snug text-[#f0f0f0]">
            {movie.title}
          </h2>
          <div className="flex items-center gap-4 text-[0.9rem] text-[#888]">
            <span>{movie.year}</span>
            <span>{movie.runtime}</span>
            <span className="text-[0.9rem]">
              <StarRating rating={movie.rating} />
            </span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {movie.genres.map((g) => (
              <span key={g} className="genre-tag">
                {g}
              </span>
            ))}
          </div>
          <p className="max-w-[580px] text-[0.9rem] leading-[1.7] text-[#888]">
            {movie.description}
          </p>
        </div>
      </div>
    </div>
  );
}
