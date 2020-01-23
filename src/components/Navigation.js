import React from "react";
import "./Navigation.css";
import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';
function Navigation({links}) {

  return (
    <nav>
      <ul className="nav-links">
        {links.map((link, index) => (
          <NavLink exact to={link.path} className="link" activeClassName="link active">{link.name}</NavLink>
        ))}
      </ul>
    </nav>
  );
}

Navigation.contextType = {
  router: PropTypes.object
}
export default Navigation;
