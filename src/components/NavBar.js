import React from 'react';
import { NavLink } from "react-router-dom";

const linkStyles = {
  display: "inline-block",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white",
};

function NavBar() {
    return (
      <div>
      <NavLink
        to="/"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Home
      </NavLink>
      <NavLink
        to="/favorites"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Favorites
      </NavLink>
      <NavLink
        to="/add"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Add Drink
      </NavLink>
    </div>
    );
  }
  
  export default NavBar;