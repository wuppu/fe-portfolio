import React from "react";
import "./ItemBlock.css";
import { Link } from "react-router-dom";

function ItemBlock(props) {
  const content = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
    occaecat cupidatat non proident, sunt in culpa qui officia deserunt
    mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur
    adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
    magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
    in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
    qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit
    amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
    dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

  const {
    right,
    odd,
    last,
    img,
    title,
    preview = content,
    inline,
    blink,
  } = props;

  function scrollTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

  return (
    <div
      className={`item-block ${inline ? "inline" : ""} ${
        right ? "right" : ""
      } ${odd && last ? "odd" : ""} ${last ? "last" : ""}`}
      style={blink ? { opacity: 0 } : { opacity: 1 }}
    >
      <Link className="link" to={`/project/${img}`} onClick={scrollTop}>
        <h2 className="sub-title">{title}</h2>
        <figure className="item-figure">
          <img className="item-img" src={require(`../img/${img}.jpg`)} alt={img} />
        </figure>
      </Link>  
      <p>{`${preview.slice(0, 150)}...`}</p>
    </div>
  );
}

export default ItemBlock;
