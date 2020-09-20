import React, { useState } from "react";
import { Header } from "../Header";
import { MoviesResult } from "../MoviesResult";
import { Navbar } from "../Navbar";
import { SearchForm } from "../SearchForm";
import "./index.css";

const mock = {
  search: "the lion king",
  movies: [
    {
      Title: "The Lion King",
      Year: "1994",
      imdbID: "tt0110357",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BYTYxNGMyZTYtMjE3MS00MzNjLWFjNmYtMDk3N2FmM2JiM2M1XkEyXkFqcGdeQXVyNjY5NDU4NzI@._V1_SX300.jpg",
    },
    {
      Title: "The Lion King",
      Year: "2019",
      imdbID: "tt6105098",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjIwMjE1Nzc4NV5BMl5BanBnXkFtZTgwNDg4OTA1NzM@._V1_SX300.jpg",
    },
    {
      Title: "The Lion King 2: Simba's Pride",
      Year: "1998",
      imdbID: "tt0120131",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BY2Y3MTk2MDgtOTc1Yy00ZmFjLThlNTEtMDQ1Y2EzZmRjMzVjXkEyXkFqcGdeQXVyNjk1Njg5NTA@._V1_SX300.jpg",
    },
    {
      Title: "The Lion King 3: Hakuna Matata",
      Year: "2004",
      imdbID: "tt0318403",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOGZiMDQ1YTQtMGVlOC00OTJiLWFkYzMtYjdiYmY0NWM5YzVjXkEyXkFqcGdeQXVyOTg4MDk3MTQ@._V1_SX300.jpg",
    },
    {
      Title: "Leo the Lion: King of the Jungle",
      Year: "1994",
      imdbID: "tt0234092",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOThjNzQ4MjktODE0Mi00NzM2LTljN2QtYjE5YWQ4NGQyOTNkXkEyXkFqcGdeQXVyODIxNjk4NzQ@._V1_SX300.jpg",
    },
    {
      Title: "The Making of 'The Lion King'",
      Year: "1994",
      imdbID: "tt0366742",
      Type: "movie",
      Poster: "N/A",
    },
    {
      Title: "The Lion King: A Musical Journey with Elton John",
      Year: "1994",
      imdbID: "tt0245234",
      Type: "movie",
      Poster: "N/A",
    },
    {
      Title: "An Animated Classic: Simba, the King Lion",
      Year: "2014",
      imdbID: "tt3529460",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTg4MjE1MzkyMV5BMl5BanBnXkFtZTgwNzQ2NjAyMTE@._V1_SX300.jpg",
    },
    {
      Title: "Edward VIII: The Lion King",
      Year: "2013",
      imdbID: "tt2925156",
      Type: "movie",
      Poster: "N/A",
    },
    {
      Title: "Broadway Backstage: The Lion King",
      Year: "2013",
      imdbID: "tt5362870",
      Type: "movie",
      Poster: "N/A",
    },
  ],
};

const App = () => {
  const [search, setSearch] = useState(mock.search);
  const [movies, setMovies] = useState<Movie[]>(mock.movies);

  return (
    <div className="app">
      <Header />

      <SearchForm search={search} setMovies={setMovies} setSearch={setSearch} />

      {movies.length ? (
        <MoviesResult
          search={search}
          movies={movies}
          clearSerach={() => {
            setSearch("");
            setMovies([]);
          }}
        />
      ) : (
        <Navbar />
      )}
    </div>
  );
};

export default App;
