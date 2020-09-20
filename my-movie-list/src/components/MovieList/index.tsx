import React, { PropsWithChildren } from "react";
import "./index.css";

export const MovieList = ({ children }: PropsWithChildren<{}>) => (
  <ul className="movieList">{children}</ul>
);

export const MovieListItem = ({ children }: PropsWithChildren<{}>) => (
  <li className="movieList-item">{children}</li>
);
