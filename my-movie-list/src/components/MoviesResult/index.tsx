import React from "react";
import "./index.css";
import { Movie } from "../Movie";
import { MovieList, MovieListItem } from "../MovieList";

type MoviesResultProps = { clearSerach: () => void } & Pick<
  AppState,
  "search" | "movies"
>;

export const MoviesResult = ({
  search,
  movies,
  clearSerach,
}: MoviesResultProps) => {
  return (
    <>
      <h2 className="searchTerm">
        "{search}"{" "}
        <span className="searchTerm-clear" onClick={clearSerach}>
          [ limpar ]
        </span>
      </h2>

      <MovieList>
        {movies.map((movie) => {
          return (
            <MovieListItem key={movie.imdbID}>
              <Movie movie={movie} />
            </MovieListItem>
          );
        })}
      </MovieList>
    </>
  );
};
