import React from "react";
import { searchMovies } from "../../services/omdb";

type SearchFormProps = {
  search: AppState["search"];
  setSearch: (search: string) => void;
  setMovies: (movies: Movie[]) => void;
};

export const SearchForm = ({
  search,
  setMovies,
  setSearch,
}: SearchFormProps) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!search) return;

    searchMovies(search)
      .then((moviesFromAPI) => setMovies(moviesFromAPI.Search))
      .catch(console.error);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={handleChange}
        placeholder="pesquise filmes aqui"
      />
      <button type="submit" className="button">
        pesquisar
      </button>
    </form>
  );
};
