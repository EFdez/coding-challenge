import React from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as MandoBeibiIcon } from "../../assets/images/Mando-Beibi.svg";
import { Grid, Cell } from "react-foundation";

import "./index.scss";

const Navbar = () => {
  return (
    <Grid className="Navbar display">
      <Cell large={2} small={4} className="Navbar_icon">
        <NavLink className={({ isActive }) => isActive ? "active" : undefined} to="/">
          <MandoBeibiIcon />
        </NavLink>
      </Cell>
      <Cell
        large={9}
        small={6}
        className="Navbar_links text-mandalore text-big"
      >
        <NavLink className={({ isActive }) => isActive ? "active" : undefined} to="/rules">
          <span>Reglas del juego</span>
        </NavLink>
        <NavLink
          className={({ isActive }) => isActive ? "active" : undefined}
          to="/pieces"
        >
          <span>Fichas</span>
        </NavLink>
        <NavLink className={({ isActive }) => isActive ? "active" : undefined} to="/game">
          <span>Juego</span>
        </NavLink>
      </Cell>
    </Grid>
  );
};

export default Navbar;
