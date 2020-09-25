import React from "react";
import { searchMovies, searchMoviesById } from "../../services/omdb";
import "./index.css";

type SearchFormProps = {
  search: AppState["search"];
  setSearch: (search: string) => void;
  setSearching: (searching: boolean) => void;
  setSearchErro: (erro: boolean) => void;
  setMoviesResultSearch: (movies: Movie[]) => void;
};

export const SearchForm = ({ search, setMoviesResultSearch, setSearch, setSearching, setSearchErro }: SearchFormProps) => {

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!search) return;
    setMoviesResultSearch([]);
    setSearching(true);
    let moviesFromAPI = await searchMovies(search);

    if (moviesFromAPI.Error) {
      setSearchErro(true);
      setSearching(false);
      return;
    }
    setSearchErro(false);
    let movies: Movie[] = [];

    Promise.all(
      moviesFromAPI.Search.map(async (movie: Movie) => movies.push(await searchMoviesById(movie.imdbID)))).then(_ => {
        setMoviesResultSearch(movies);
        setSearching(false);
      });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        id="inputSearch"
        onChange={handleChange}
        placeholder="pesquise filmes aqui"
      />
      <button type="submit" className="button">
        pesquisar
      </button>
    </form>
  );
};
