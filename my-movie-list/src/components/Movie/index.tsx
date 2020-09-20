import React from "react";
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
        width="300"
        height="457"
      />
      <span className="movie-year">{movie.Year}</span>
    </figure>

    <p className="movie-title">
      <strong>{movie.Title}</strong>
    </p>

    {actions && <div>teste</div>}
  </div>
);
