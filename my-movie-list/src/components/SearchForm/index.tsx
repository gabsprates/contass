import React, { useState } from "react";
import { searchMovies } from "../../services/omdb";

type SearchFormProps = {
  setMovies: (movies: Movie[]) => void;
  setSearchTerm: (search: string) => void;
};

export const SearchForm = ({ setMovies, setSearchTerm }: SearchFormProps) => {
  const [search, setSearch] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!search) return;

    searchMovies(search)
      .then((moviesFromAPI) => {
        setSearchTerm(search);
        setMovies(moviesFromAPI);
      })
      .catch(console.error);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={search}
        onChange={handleChange}
        placeholder="pesquise filmes aqui"
      />
      <button type="submit" className="button">
        pesquisar
      </button>
    </form>
  );
};
