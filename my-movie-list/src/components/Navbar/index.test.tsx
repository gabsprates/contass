import React from "react";
import { render } from "@testing-library/react";
import { Navbar } from ".";

describe("Component: Navbar", () => {
  it("should render", async () => {
    const { getByText } = render(<Navbar />);

    expect(getByText("Filmes que já vi")).toBeInTheDocument();
    expect(getByText("Filmes que quero ver")).toBeInTheDocument();
  });
});
