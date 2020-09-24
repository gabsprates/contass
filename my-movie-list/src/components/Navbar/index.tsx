import React from "react";
import "./index.css";

export enum WhatList {
  WATCHED = "WATCHED",
  WANT_WATCH = "WANT_WATCH",
}

const options: { [list in WhatList]: string } = {
  [WhatList.WATCHED]: "Filmes que já vi",
  [WhatList.WANT_WATCH]: "Filmes que quero ver",
};

type NavbarProps = {
  active: WhatList;
  onClick: (whatList: WhatList) => void;
};

export const Navbar = ({ active, onClick }: NavbarProps) => (
  <nav className="navbar">
    {Object.values(WhatList).map((listType) => (
      <button
        onClick={() => onClick(listType)}
        className={`button ${active === listType ? "on" : ""}`}
      >
        {options[listType]}
      </button>
    ))}
  </nav>
);
