import React, { PropsWithChildren, useCallback } from "react";
import { useListManager } from "../hooks/listManager";

export const ListsContext = React.createContext({
  watched: [] as Movie[],
  wantWatch: [] as Movie[],

  isWatched: (_movieID: string) => Boolean(_movieID),
  isWantWatch: (_movieID: string) => Boolean(_movieID),

  addToWatched: (_movie: Movie) => {},
  addToWantWatch: (_movie: Movie) => {},

  removeFromWatched: (_movieID: string) => {},
  removeFromWantWatch: (_movieID: string) => {},
});

export const ListContextWrapper = ({ children }: PropsWithChildren<{}>) => {
  const {
    add: watchedAdd,
    list: watched,
    remove: removeFromWatched,
    contains: isWatched,
  } = useListManager("watched");
  const {
    add: addToWantWatch,
    list: wantWatch,
    remove: removeFromWantWatch,
    contains: isWantWatch,
  } = useListManager("wantWatch");

  const addToWatched = useCallback(
    (movie: Movie) => {
      watchedAdd(movie);
      removeFromWantWatch(movie.imdbID);
    },
    [removeFromWantWatch, watchedAdd]
  );

  return (
    <ListsContext.Provider
      value={{
        watched,
        wantWatch,
        isWatched,
        isWantWatch,
        addToWatched,
        addToWantWatch,
        removeFromWatched,
        removeFromWantWatch,
      }}
    >
      {children}
    </ListsContext.Provider>
  );
};
