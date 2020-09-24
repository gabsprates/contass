import { useCallback, useEffect, useState } from "react";

export const useListManager = (listID: string) => {
  const [list, setList] = useState<Movie[]>([]);

  useEffect(() => {
    const storage = localStorage.getItem(listID);
    try {
      if (!storage) return;

      const parsedMovies = JSON.parse(storage) as Movie[];

      if (parsedMovies.length) setList(parsedMovies);
    } catch (error) {
      console.error(error);
    }
  }, [listID]);

  useEffect(() => {
    try {
      localStorage.setItem(listID, JSON.stringify(list));
    } catch (error) {
      console.error(error);
    }
  }, [listID, list]);

  const remove = useCallback(
    (movieID: Movie["imdbID"]) => {
      const index = list.findIndex((movie) => movie.imdbID === movieID);
      if (index < 0) return;

      const newList = [...list];
      newList.splice(index, 1);
      setList(newList);
    },
    [list]
  );

  const add = useCallback(
    (newMovie: Movie) => {
      const index = list.findIndex((movie) => movie.imdbID === newMovie.imdbID);
      if (index > -1) return;

      const newList = [...list, newMovie];
      setList(newList);
    },
    [list]
  );

  const contains = useCallback(
    (movieID: Movie["imdbID"]) => {
      return list.findIndex((movie) => movie.imdbID === movieID) > -1;
    },
    [list]
  );

  return { add, list, remove, contains };
};
