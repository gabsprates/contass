export const loadMovies = () => {
    let movies: Movie[];

    movies = JSON.parse(localStorage.getItem("movies") || "");

    return movies;
};