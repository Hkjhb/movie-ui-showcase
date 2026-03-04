const movies = [
  {
    id: 1,
    title: "The Dark Knight",
    year: 2008,
    genres: ["Action", "Crime", "Drama"],
    rating: 5,
    runtime: "2h 32m",
    description:
      "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    poster:
      "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    featured: true,
  },
  {
    id: 2,
    title: "Inception",
    year: 2010,
    genres: ["Action", "Sci-Fi", "Thriller"],
    rating: 5,
    runtime: "2h 28m",
    description:
      "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    poster:
      "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
  },
  {
    id: 3,
    title: "Interstellar",
    year: 2014,
    genres: ["Adventure", "Drama", "Sci-Fi"],
    rating: 5,
    runtime: "2h 49m",
    description:
      "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival as Earth faces environmental catastrophe.",
    poster:
      "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
  },
  {
    id: 4,
    title: "The Matrix",
    year: 1999,
    genres: ["Action", "Sci-Fi"],
    rating: 5,
    runtime: "2h 16m",
    description:
      "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
    poster:
      "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
  },
  {
    id: 5,
    title: "Pulp Fiction",
    year: 1994,
    genres: ["Crime", "Drama", "Thriller"],
    rating: 5,
    runtime: "2h 34m",
    description:
      "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    poster:
      "https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
  },
  {
    id: 6,
    title: "Forrest Gump",
    year: 1994,
    genres: ["Drama", "Romance"],
    rating: 4,
    runtime: "2h 22m",
    description:
      "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold through the perspective of an Alabama man with an extraordinary life.",
    poster:
      "https://image.tmdb.org/t/p/w500/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg",
  },
  {
    id: 7,
    title: "The Shawshank Redemption",
    year: 1994,
    genres: ["Drama"],
    rating: 5,
    runtime: "2h 22m",
    description:
      "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    poster:
      "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
  },
  {
    id: 8,
    title: "Spirited Away",
    year: 2001,
    genres: ["Animation", "Adventure", "Family"],
    rating: 5,
    runtime: "2h 5m",
    description:
      "During her family's move to the suburbs, a sulky 10-year-old girl wanders into a world ruled by gods, witches, and spirits, where humans are changed into beasts.",
    poster:
      "https://image.tmdb.org/t/p/w500/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg",
  },
  {
    id: 9,
    title: "Parasite",
    year: 2019,
    genres: ["Comedy", "Drama", "Thriller"],
    rating: 5,
    runtime: "2h 12m",
    description:
      "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
    poster:
      "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
  },
  {
    id: 10,
    title: "The Godfather",
    year: 1972,
    genres: ["Crime", "Drama"],
    rating: 5,
    runtime: "2h 55m",
    description:
      "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    poster:
      "https://image.tmdb.org/t/p/original/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
  },
  {
    id: 11,
    title: "Avengers: Endgame",
    year: 2019,
    genres: ["Action", "Adventure", "Sci-Fi"],
    rating: 4,
    runtime: "3h 2m",
    description:
      "After the devastating events of Infinity War, the Avengers assemble once more to reverse Thanos's actions and restore balance to the universe.",
    poster:
      "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
  },
  {
    id: 12,
    title: "Joker",
    year: 2019,
    genres: ["Crime", "Drama", "Thriller"],
    rating: 4,
    runtime: "2h 2m",
    description:
      "In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime.",
    poster:
      "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
  },
  {
    id: 13,
    title: "Get Out",
    year: 2017,
    genres: ["Horror", "Mystery", "Thriller"],
    rating: 4,
    runtime: "1h 44m",
    description:
      "A young African-American visits his white girlfriend's parents for the weekend, where his simmering uneasiness about their reception of him eventually reaches a boiling point.",
    poster:
      "https://image.tmdb.org/t/p/w500/tFXcEccSQMf3lfhfXKSU9iRBpa3.jpg",
  },
  {
    id: 14,
    title: "La La Land",
    year: 2016,
    genres: ["Comedy", "Drama", "Romance"],
    rating: 4,
    runtime: "2h 8m",
    description:
      "While navigating their careers in Los Angeles, a pianist and an actress fall in love while attempting to reconcile their aspirations for the future.",
    poster:
      "https://image.tmdb.org/t/p/w500/uDO8zWDhfWwoFdKS4fzkUJt0Rf0.jpg",
  },
  {
    id: 15,
    title: "Mad Max: Fury Road",
    year: 2015,
    genres: ["Action", "Adventure", "Sci-Fi"],
    rating: 4,
    runtime: "2h 0m",
    description:
      "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search for her homeland with the aid of a group of female prisoners and a drifter.",
    poster:
      "https://image.tmdb.org/t/p/w500/8tZYtuWezp8JbcsvHYO0O46tFbo.jpg",
  },
];

// Collect all unique genres
const allGenres = [...new Set(movies.flatMap((m) => m.genres))].sort();

let activeGenre = "All";
let searchQuery = "";

function getStars(rating) {
  const full = Math.floor(rating);
  const empty = 5 - full;
  return (
    '<span class="stars">' +
    "★".repeat(full) +
    '<span class="stars-empty">' +
    "★".repeat(empty) +
    "</span></span>"
  );
}

function createCard(movie) {
  const genreTags = movie.genres
    .map((g) => `<span class="genre-tag">${g}</span>`)
    .join("");

  return `
    <article class="movie-card" data-id="${movie.id}">
      <div class="card-poster">
        <img src="${movie.poster}" alt="${movie.title} poster" loading="lazy" data-fallback="poster">
        <div class="card-overlay">
          <p class="overlay-description">${movie.description}</p>
        </div>
      </div>
      <div class="card-body">
        <div class="card-genres">${genreTags}</div>
        <h3 class="card-title">${movie.title}</h3>
        <div class="card-meta">
          <span class="card-year">${movie.year}</span>
          <span class="card-runtime">${movie.runtime}</span>
        </div>
        <div class="card-rating">${getStars(movie.rating)}</div>
      </div>
    </article>
  `;
}

function renderMovies() {
  const grid = document.getElementById("movie-grid");
  const noResults = document.getElementById("no-results");

  const filtered = movies.filter((movie) => {
    const matchesSearch = movie.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesGenre =
      activeGenre === "All" || movie.genres.includes(activeGenre);
    return matchesSearch && matchesGenre;
  });

  if (filtered.length === 0) {
    grid.innerHTML = "";
    noResults.hidden = false;
  } else {
    noResults.hidden = true;
    grid.innerHTML = filtered.map(createCard).join("");
    // Trigger fade-in
    requestAnimationFrame(() => {
      grid.querySelectorAll(".movie-card").forEach((card, i) => {
        card.style.animationDelay = `${i * 0.05}s`;
        card.classList.add("fade-in");
      });
    });
  }
}

function renderGenreFilters() {
  const container = document.getElementById("genre-filters");
  const allButton = `<button class="filter-btn active" data-genre="All">All</button>`;
  const genreButtons = allGenres
    .map((g) => `<button class="filter-btn" data-genre="${g}">${g}</button>`)
    .join("");
  container.innerHTML = allButton + genreButtons;

  container.addEventListener("click", (e) => {
    const btn = e.target.closest(".filter-btn");
    if (!btn) return;
    activeGenre = btn.dataset.genre;
    container
      .querySelectorAll(".filter-btn")
      .forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    renderMovies();
  });
}

function renderFeatured() {
  const featured = movies.find((m) => m.featured);
  if (!featured) return;
  const section = document.getElementById("featured-section");
  section.innerHTML = `
    <div class="featured-inner">
      <img class="featured-poster" src="${featured.poster}" alt="${featured.title} poster" data-fallback="poster">
      <div class="featured-info">
        <span class="featured-label">★ Featured Film</span>
        <h2 class="featured-title">${featured.title}</h2>
        <div class="featured-meta">
          <span>${featured.year}</span>
          <span>${featured.runtime}</span>
          <span>${getStars(featured.rating)}</span>
        </div>
        <div class="featured-genres">
          ${featured.genres.map((g) => `<span class="genre-tag">${g}</span>`).join("")}
        </div>
        <p class="featured-description">${featured.description}</p>
      </div>
    </div>
  `;
}

// Handle poster load errors without inline event handlers
document.addEventListener("error", (e) => {
  if (e.target.tagName === "IMG" && e.target.dataset.fallback === "poster") {
    e.target.removeAttribute("data-fallback");
    e.target.src =
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='500' height='750'%3E%3Crect width='500' height='750' fill='%231a1a2e'/%3E%3Ctext x='50%25' y='50%25' fill='%23e0b84f' font-size='48' text-anchor='middle' dominant-baseline='middle'%3E🎬%3C/text%3E%3C/svg%3E";
  }
}, true);

// Search
document.getElementById("search-input").addEventListener("input", (e) => {
  searchQuery = e.target.value;
  renderMovies();
});

// Init
renderFeatured();
renderGenreFilters();
renderMovies();