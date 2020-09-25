import React from "react";
import { CardMovie } from "../CardMovie";


// type MoviesResultProps = Pick<AppState, "search" | "movies">;

type MoviesResultProps = {
  search: AppState["search"];
  movies: AppState["movies"];
  storeMovie: (movieToStore: Movie) => void;
}

export const MoviesResult = ({ search, movies, storeMovie }: MoviesResultProps) => {
  return (
    <>
      <h2>"Resultados da busca de: {search}"</h2>
      <div className="cards">
        {movies.map((movie) => (
          <CardMovie movie={movie} key={movie.imdbID} storeMovie={storeMovie} />
        ))}
      </div>
    </>
  );
};
