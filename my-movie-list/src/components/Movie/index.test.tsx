import { render } from "@testing-library/react";
import React from "react";
import { Movie } from "./index";

describe("Component: Movie", () => {
  const movie: Movie = {
    Year: "1994",
    Type: "movie",
    Title: "The Lion King",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYTYxNGMyZTYtMjE3MS00MzNjLWFjNmYtMDk3N2FmM2JiM2M1XkEyXkFqcGdeQXVyNjY5NDU4NzI@._V1_SX300.jpg",
    imdbID: "tt0110357",
  };

  it("should render", async () => {
    const { getByText, getByAltText } = render(<Movie movie={movie} />);

    expect(getByText(movie.Year)).toBeInTheDocument();
    expect(getByText(movie.Title)).toBeInTheDocument();
    expect(getByAltText(movie.Title)).toBeInTheDocument();
  });

  it("should render actions", async () => {
    const { getByText } = render(
      <Movie movie={movie} actions={<p>actions</p>} />
    );
    expect(getByText("actions")).toBeInTheDocument();
  });
});
