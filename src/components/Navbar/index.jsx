import React, { useState } from "react";

import { NavLink } from "react-router-dom";
import { Grid, Cell } from "react-foundation";
import { ReactComponent as MandoBeibiIcon } from "../../assets/images/Mando-Beibi.svg";

import "./index.scss";

const Navbar = () => {

  const [isActive, setActive] = useState(false);

  const toggleClassCollapsedMenu = () => {
    setActive(!isActive);
  }

  return (
    <>
      <Grid className="Navbar display">
        <Cell small={6} medium={1}>
          <NavLink className={({ isActive }) => isActive ? "active" : undefined} to="/">
            <MandoBeibiIcon />
          </NavLink>
        </Cell>
        <Cell
          medium={9}
          className="Navbar_links text-mandalore text-big show-for-medium"
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

        <Cell
          small={6}
          className="show-for-small-only Navbar_collapsed"
        >
          <div onClick={toggleClassCollapsedMenu} className={`icon ${isActive && 'icon-active'}`}></div>
        </Cell>

      </Grid>

      {isActive &&
        (<div className='Collapsed-menu show-for-small-only'>
          <Grid className="Navbar Collapsed-menu_container">
            <Cell className="Navbar_links">
              <NavLink onClick={toggleClassCollapsedMenu} to="/rules">Reglas del juego</NavLink>
              <NavLink onClick={toggleClassCollapsedMenu} to="/pieces">Fichas</NavLink>
              <NavLink onClick={toggleClassCollapsedMenu} to="/game">Juego</NavLink>
            </Cell>
          </Grid>
        </div>
        )}
    </>
  );
};

export default Navbar;
