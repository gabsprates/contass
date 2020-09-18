/// <reference types="react-scripts" />

type Movie = {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
};

type AppState = {
  search: string;
  movies: Movie[];
};
