import React from "react";
import {useState} from "react";
import "./Navigation.css";
import { NavLink } from "react-router-dom";

function Navigation({ links }) {

  const [navOpen, setNavOpen] = useState(false);

  return (
    <nav>
      <div className={navOpen ? "nav-background-cover open" : "nav-background-cover"} onClick={() => setNavOpen(!navOpen)}></div>
      <ul className={navOpen ? "nav-links open" : "nav-links"}>
        {links.map((link, index) => (
          <NavLink
            key={index}
            exact
            to={link.path}
            className="link"
            activeClassName="link active"
            onClick={() => setNavOpen(false)}
          >
            {link.name}
          </NavLink>
        ))}
      </ul>
      <div className={navOpen ? "toggle burger" : "burger"} onClick={() => setNavOpen(!navOpen)}>
        <span className="line1"></span>
        <span className="line2"></span>
        <span className="line3"></span>
      </div>
    </nav>
  );
}

export default Navigation;
