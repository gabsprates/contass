import React, { useContext } from "react";
import { ListsContext } from "../../context/listContext";
import "./index.css";

type MovieProps = {
  movie: Movie;
  actions?: React.ReactNode;
};

const posterPlaceholder = "https://placehold.it/300x457";

const getPoster = (image: string, title: string) => {
  if (/\.(jpg|png)$/.test(image)) return image;

  return `${posterPlaceholder}?text=${title}`;
};

export const Movie = ({ movie, actions }: MovieProps) => (
  <div className="movie">
    <figure className="movie-poster">
      <img
        src={getPoster(movie.Poster, movie.Title)}
        alt={movie.Title}
        width="150"
        height="228"
      />
      <span className="movie-year">{movie.Year}</span>
    </figure>

    <p className="movie-title">
      <strong>{movie.Title}</strong>
    </p>

    {actions && <div className="movie-actions">{actions}</div>}
  </div>
);

export const ToggleWatched = ({ movie }: { movie: Movie }) => {
  const { isWatched, addToWatched, removeFromWatched } = useContext(
    ListsContext
  );

  return isWatched(movie.imdbID) ? (
    <button
      className="button on"
      onClick={() => removeFromWatched(movie.imdbID)}
    >
      remover dos já assistidos
    </button>
  ) : (
    <button className="button" onClick={() => addToWatched(movie)}>
      já assisti
    </button>
  );
};

export const ToggleWantWatch = ({ movie }: { movie: Movie }) => {
  const { isWantWatch, addToWantWatch, removeFromWantWatch } = useContext(
    ListsContext
  );

  return isWantWatch(movie.imdbID) ? (
    <button
      className="button on"
      onClick={() => removeFromWantWatch(movie.imdbID)}
    >
      remover dos que quero ver
    </button>
  ) : (
    <button className="button" onClick={() => addToWantWatch(movie)}>
      quero ver
    </button>
  );
};
