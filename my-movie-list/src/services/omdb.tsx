const ENDPOINT =
  "http://www.omdbapi.com/?apikey=3fc724f5&type=movie";

export const searchMovies = async (search: string) => {
  const response = await fetch(`${ENDPOINT}&s=${search}`);

  const data = await response.json();

  return data;
};

export const searchMoviesById = async (id: string) => {
  const response = await fetch(`${ENDPOINT}&i=${id}`);

  const data = await response.json();

  return data;
};