import React, { useState } from "react";
import { Header } from "../Header";
import { MoviesResult } from "../MoviesResult";
import { Navbar } from "../Navbar";
import { SearchForm } from "../SearchForm";
import "./index.css";

const App = () => {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState<Movie[]>([]);

  return (
    <div className="app">
      <Header />

      <SearchForm search={search} setMovies={setMovies} setSearch={setSearch} />

      {movies.length ? (
        <MoviesResult search={search} movies={movies} />
      ) : (
        <Navbar />
      )}
    </div>
  );
};

export default App;
