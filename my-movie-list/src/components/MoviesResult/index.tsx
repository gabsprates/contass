import React from "react";

type MoviesResultProps = Pick<AppState, "search" | "movies">;

export const MoviesResult = ({ search, movies }: MoviesResultProps) => {
  return (
    <>
      <h2>"{search}"</h2>
      <ul>
        {movies.map((movie) => (
          <li key={movie.imdbID}>{movie.Title}</li>
        ))}
      </ul>
    </>
  );
};
