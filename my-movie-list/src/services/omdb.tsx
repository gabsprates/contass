const ENDPOINT =
  "http://www.omdbapi.com/?i=tt3896198&apikey=3fc724f5&type=movie";

export const searchMovies = async (search: string) => {
  const response = await fetch(`${ENDPOINT}&s=${search}`);

  const data = await response.json();

  return data;
};
