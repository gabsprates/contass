import React from "react";
import "./index.css";
import logo from "../../logo.svg";

export const Header = () => (
  <header className="header">
    <img src={logo} width="40" height="40" alt="logo" className="logo" />

    <h1>Minha Lista de Filmes</h1>
  </header>
);
