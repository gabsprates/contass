import React, { useContext } from "react";
import { ListsContext } from "../../context/listContext";
import { Movie, ToggleWatched } from "../Movie";
import { MovieList, MovieListItem } from "../MovieList";

export const WatchedList = () => {
  const { watched: movies } = useContext(ListsContext);

  return (
    <>
      <h2>Já Assisti ({movies.length})</h2>

      <MovieList>
        {movies.map((movie) => {
          return (
            <MovieListItem key={movie.imdbID}>
              <Movie
                movie={movie}
                actions={
                  <>
                    <ToggleWatched movie={movie} />
                  </>
                }
              />
            </MovieListItem>
          );
        })}
      </MovieList>
    </>
  );
};
