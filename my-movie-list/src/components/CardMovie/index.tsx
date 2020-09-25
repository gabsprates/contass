import React from 'react';
import "./index.css";
import { ButtonWatchMovie } from '../Common/Elements/ButtonWatchMovie';
import { ButtonWantWatchMovie } from '../Common/Elements/ButtonWantWatchMovie';


type CardMovieProps = {
    movie: Movie;
    storeMovie: (movieToStore: Movie) => void;
};

const Actions = ({ movie, storeMovie }: CardMovieProps) => {
    if (!movie.wantWatch && !movie.watched) {
        return (<>
            <ButtonWatchMovie movie={movie} storeMovie={storeMovie} />
            <ButtonWantWatchMovie movie={movie} storeMovie={storeMovie} />
        </>);
    } else if (movie.wantWatch) {
        return (<ButtonWatchMovie movie={movie} storeMovie={storeMovie} />);
    } else {
        return (<ButtonWantWatchMovie movie={movie} storeMovie={storeMovie} />);
    }
};

export const CardMovie = ({ movie, storeMovie }: CardMovieProps) => {
    return (
        <div className="card">
            <div className='card_left'>
                <img src={movie.Poster} alt="" />
            </div>
            <div className="card_right">
                <h1>{movie.Title}</h1>
                <div className='card_right__details'>
                    <ul>
                        <li>{movie.Year}</li>
                        <li>{movie.Runtime}</li>
                        <li>{movie.Genre}</li>
                        <li>IMDB: {movie.imdbRating}</li>
                    </ul>
                </div>
                <div className='card_right__rating'>
                    <div className="card_right__rating__stars">
                    </div>
                </div>
                <div className='card_right__review'>
                    <p>
                        {movie.Plot}
                    </p>
                    <a href={`http://www.imdb.com/title/${movie.imdbID}/plotsummary?ref_=tt_stry_pl`} rel="noopener noreferrer" target='_blank'>Read more</a>
                </div>
                <div className='card_right__button'>
                    <Actions movie={movie} storeMovie={storeMovie} />
                </div>
            </div>
        </div>
    );
}