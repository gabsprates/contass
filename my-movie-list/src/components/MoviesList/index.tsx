import React from 'react';
import { CardMovie } from "../CardMovie";

type MovieListProps = {
    movies: Movie[];
    storeMovie: (movieToStore: Movie) => void;
}

export const MovieList = ({ movies, storeMovie }: MovieListProps) => {
    return (
        <div className="cards">
            {movies.map((movie) => (
                <CardMovie movie={movie} key={movie.imdbID} storeMovie={storeMovie} />
            ))}
        </div>
    );
}