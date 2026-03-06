export default function Footer() {
  return (
    <footer className="mt-[72px] border-t border-[#2a2a2a] px-5 py-7 text-center text-[0.82rem] text-[#888]">
      <p>
        Movie UI Showcase &mdash; Built with{" "}
        <span className="text-[#e0b84f]">Next.js</span> &amp; Tailwind CSS.
        Poster images courtesy of{" "}
        <a
          href="https://www.themoviedb.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#e0b84f] no-underline hover:underline"
        >
          TMDB
        </a>
        .
      </p>
    </footer>
  );
}
