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

interface MovieCardProps {
  movie: Movie;
  animationDelay?: number;
}

export default function MovieCard({ movie, animationDelay = 0 }: MovieCardProps) {
  const [imgSrc, setImgSrc] = useState(movie.poster);

  return (
    <article
      className="movie-card-animate group relative cursor-pointer overflow-hidden rounded-xl border border-[#2a2a2a] bg-[#161616] transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.02] hover:border-[rgba(224,184,79,0.4)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.6),0_0_0_1px_rgba(224,184,79,0.25)]"
      style={{ animationDelay: `${animationDelay}s` }}
      aria-label={`${movie.title} (${movie.year})`}
    >
      {/* Poster */}
      <div className="relative aspect-[2/3] overflow-hidden bg-[#111]">
        <Image
          src={imgSrc}
          alt={`${movie.title} poster`}
          fill
          sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, (max-width: 1100px) 33vw, 25vw"
          className="object-cover transition-transform duration-300 group-hover:scale-[1.06]"
          onError={() => setImgSrc(FALLBACK_SRC)}
          loading="lazy"
        />
        {/* Hover overlay */}
        <div className="absolute inset-0 flex items-end p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.55) 55%, transparent 100%)",
          }}
        >
          <p className="overlay-description">{movie.description}</p>
        </div>
      </div>

      {/* Card body */}
      <div className="p-[14px_14px_16px]">
        <div className="mb-2 flex flex-wrap gap-1">
          {movie.genres.map((g) => (
            <span key={g} className="genre-tag">
              {g}
            </span>
          ))}
        </div>
        <h3 className="mb-1.5 overflow-hidden text-ellipsis whitespace-nowrap text-[0.95rem] font-bold leading-snug text-[#f0f0f0]">
          {movie.title}
        </h3>
        <div className="mb-2 flex gap-3 text-[0.78rem] text-[#888]">
          <span>{movie.year}</span>
          <span>{movie.runtime}</span>
        </div>
        <div className="text-[0.9rem]">
          <StarRating rating={movie.rating} />
        </div>
      </div>
    </article>
  );
}
