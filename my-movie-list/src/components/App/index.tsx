import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Header } from "../Header";
import { Navbar } from "../Navbar";
import { Home } from "../Home";
import { MovieList } from "../MoviesList";
import "./index.css";

const App = () => {

  const [moviesStore, setMoviesStore] = useState<Movie[]>([]);
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    let movies: Movie[] = JSON.parse(localStorage.getItem("movies") || "[]");
    if (movies.length > 0) {
      setMoviesStore(movies);
    }
  }, []);

  const storeMovie = (movieToStore: Movie) => {

    const moviesToStore = [...moviesStore];

    const findIndexMovieToEdit = moviesToStore.findIndex(movie => movie.imdbID === movieToStore.imdbID);

    if (findIndexMovieToEdit >= 0) {
      moviesToStore.splice(findIndexMovieToEdit, 1);
    }

    setMoviesStore([...moviesToStore, movieToStore]);

    localStorage.setItem("movies", JSON.stringify([...moviesToStore, movieToStore]));
  }

  const setMoviesResultSearch = (movies: Movie[]) => {
    let arrMovies = movies.map(movie => {
      let find = moviesStore.find(movieStored => movieStored.imdbID === movie.imdbID);
      if (find) {
        return find;
      } else {
        return movie;
      }
    });
    setMovies(arrMovies);
  }

  return (
    <div className="app">
      <Header />
      <Router >
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home storeMovie={storeMovie} setMoviesResultSearch={setMoviesResultSearch} movies={movies} />
          </Route>
          <Route path="/watched">
            <MovieList movies={moviesStore.filter(m => m.watched)} storeMovie={storeMovie} />
          </Route>
          <Route path="/whantwatch">
            <MovieList movies={moviesStore.filter(m => m.wantWatch)} storeMovie={storeMovie} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
