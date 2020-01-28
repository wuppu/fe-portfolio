import React from "react";
import "./Navigation.css";
import { NavLink } from "react-router-dom";

function Navigation({ links }) {
  return (
    <nav>
      <ul className="nav-links">
        {links.map((link, index) => (
          <NavLink
            key={index}
            exact
            to={link.path}
            className="link"
            activeClassName="link active"
          >
            {link.name}
          </NavLink>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
