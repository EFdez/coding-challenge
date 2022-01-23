import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <Link to="/rules">Reglas del juego</Link>
      <Link to="/pieces">Piezas</Link>
      <Link to="/game">Juego</Link>
    </>
  );
};

export default Navbar;
