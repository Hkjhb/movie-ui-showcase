export interface Movie {
  id: number;
  title: string;
  year: number;
  genres: string[];
  rating: number;
  runtime: string;
  description: string;
  poster: string;
  featured?: boolean;
}

export const movies: Movie[] = [
  {
    id: 1,
    title: "The Dark Knight",
    year: 2008,
    genres: ["Action", "Crime", "Drama"],
    rating: 5,
    runtime: "2h 32m",
    description:
      "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
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
    poster: "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
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
    poster: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
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
    poster: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
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
    poster: "https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
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
    poster: "https://image.tmdb.org/t/p/w500/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg",
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
    poster: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
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
    poster: "https://image.tmdb.org/t/p/w500/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg",
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
    poster: "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
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
    poster: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
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
    poster: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
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
    poster: "https://image.tmdb.org/t/p/w500/tFXcEccSQMf3lfhfXKSU9iRBpa3.jpg",
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
    poster: "https://image.tmdb.org/t/p/w500/uDO8zWDhfWwoFdKS4fzkUJt0Rf0.jpg",
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
    poster: "https://image.tmdb.org/t/p/w500/8tZYtuWezp8JbcsvHYO0O46tFbo.jpg",
  },
];

export const allGenres: string[] = Array.from(
  new Set(movies.flatMap((m) => m.genres))
).sort();
