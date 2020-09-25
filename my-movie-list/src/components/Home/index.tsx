import React, { useState } from 'react';
import { SearchForm } from "../SearchForm";
import { MoviesResult } from "../MoviesResult";

type MoviesResultProps = {
    storeMovie: (movieToStore: Movie) => void;
    setMoviesResultSearch: (movies: Movie[]) => void;
    movies: Movie[];
}

export const Home = ({ storeMovie, setMoviesResultSearch, movies }: MoviesResultProps) => {
    const [search, setSearch] = useState("");
    const [searching, setSearching] = useState(false);
    const [searchErro, setSearchErro] = useState(false);

    return (
        <>
            <SearchForm search={search} setMoviesResultSearch={setMoviesResultSearch} setSearch={setSearch} setSearching={setSearching} setSearchErro={setSearchErro} />
            {searching ? (<><h1>Buscando...</h1></>) : ""}
            {searchErro ? (<><h1>Nenhum resultado encontrado</h1></>) : ""}
            {
                movies.length ?
                    (<MoviesResult search={search} movies={movies} storeMovie={storeMovie} />)
                    : ""
            }
        </>
    );
}