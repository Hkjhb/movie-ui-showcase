import { movies, allGenres } from "@/data/movies";
import FeaturedMovie from "@/components/FeaturedMovie";
import MovieGrid from "@/components/MovieGrid";
import Footer from "@/components/Footer";

export default function Home() {
  const featured = movies.find((m) => m.featured) ?? movies[0];

  return (
    <>
      {/* ===== Hero Banner ===== */}
      <header
        className="relative overflow-hidden border-b border-[#2a2a2a] px-5 pb-12 pt-16 text-center"
        style={{
          background:
            "linear-gradient(135deg, #0d0d0d 0%, #1a0a0a 50%, #0d0d0d 100%)",
        }}
      >
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, rgba(224,60,60,0.12) 0%, transparent 65%)",
          }}
          aria-hidden="true"
        />
        <h1
          className="relative text-[clamp(2rem,6vw,3.8rem)] font-extrabold leading-tight tracking-tight text-[#f0f0f0]"
          style={{ letterSpacing: "-0.02em" }}
        >
          🎬 Movie <span className="text-[#e0b84f]">UI Showcase</span>
        </h1>
        <p className="relative mx-auto mt-3 max-w-xl text-[clamp(0.9rem,2.5vw,1.1rem)] text-[#888]">
          Explore a curated collection of iconic films — filter by genre, search
          by title, and discover your next watch.
        </p>
      </header>

      <main className="mx-auto max-w-[1300px] px-5">
        {/* ===== Featured Film ===== */}
        <section className="mb-10 mt-12" aria-label="Featured film">
          <h2 className="section-heading">⭐ Featured Film</h2>
          <FeaturedMovie movie={featured} />
        </section>

        {/* ===== Movie Grid with Search & Filter ===== */}
        <MovieGrid movies={movies} allGenres={allGenres} />
      </main>

      <Footer />
    </>
  );
}
