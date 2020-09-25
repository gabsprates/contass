import React from 'react';

type ButtonWantWatchMovieProps = {
    movie: Movie;
    storeMovie: (movieToStore: Movie) => void;
}

const handleWantWatchMovie = ({ movie, storeMovie }: ButtonWantWatchMovieProps) => {
    movie.watched = false;
    movie.wantWatch = !movie.wantWatch;
    storeMovie(movie);
}

export const ButtonWantWatchMovie = ({ movie, storeMovie }: ButtonWantWatchMovieProps) => {
    return (
        <button className={movie.wantWatch ? 'wantWatch' : ''} onClick={() => handleWantWatchMovie({ movie, storeMovie })}>Marcar para ver!</button>
    );
}