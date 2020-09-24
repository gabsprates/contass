import React, { useState } from "react";
import { ListContextWrapper } from "../../context/listContext";
import { Header } from "../Header";
import { MoviesResult } from "../MoviesResult";
import { Navbar, WhatList } from "../Navbar";
import { SearchForm } from "../SearchForm";
import { WantWatchList } from "../WantWatchList";
import { WatchedList } from "../WatchedList";
import "./index.css";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState<Movie[]>([]);
  const [activeList, setActiveList] = useState<WhatList>(WhatList.WATCHED);

  return (
    <div className="app">
      <Header />

      <SearchForm setMovies={setMovies} setSearchTerm={setSearchTerm} />

      <ListContextWrapper>
        {movies.length ? (
          <MoviesResult
            search={searchTerm}
            movies={movies}
            clearSerach={() => {
              setSearchTerm("");
              setMovies([]);
            }}
          />
        ) : (
          <>
            <Navbar
              active={activeList}
              onClick={(list) => setActiveList(list)}
            />

            {activeList === WhatList.WATCHED ? (
              <WatchedList />
            ) : (
              <WantWatchList />
            )}
          </>
        )}
      </ListContextWrapper>
    </div>
  );
};

export default App;
