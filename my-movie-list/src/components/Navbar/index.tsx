import React from "react";
import { NavLink } from 'react-router-dom';
import "./index.css";

export const Navbar = () => (
  <>
    <nav className="navbar">
      <ul className="horizontal">
        <li>
          <NavLink exact to="/" activeClassName="active">Pesquisar</NavLink>
        </li>
        <li>
          <NavLink to="/watched" activeClassName="active">Filmes que já vi</NavLink>
        </li>
        <li>
          <NavLink to="/whantwatch" activeClassName="active">Filmes que quero ver</NavLink>
        </li>
      </ul>
    </nav>
  </>
);
