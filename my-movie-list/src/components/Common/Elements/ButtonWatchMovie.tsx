import React from 'react';

type ButtonWatchMovieProps = {
    movie: Movie;
    storeMovie: (movieToStore: Movie) => void;
}

const handleWatchMovie = ({ movie, storeMovie }: ButtonWatchMovieProps) => {
    movie.watched = !movie.watched;
    movie.wantWatch = false;
    storeMovie(movie);
}

export const ButtonWatchMovie = ({ movie, storeMovie }: ButtonWatchMovieProps) => {
    return (
        <button className={movie.watched ? 'watched' : ''} onClick={() => handleWatchMovie({ movie, storeMovie })}>Marcar como já visto!</button>
    );
}