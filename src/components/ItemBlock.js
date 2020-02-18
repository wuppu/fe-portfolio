import React from "react";
import "./ItemBlock.css";

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

  const { right, odd, last, img, title, preview = content, inline, blink } = props;

  return (
    <div
      className={`item-block ${inline ? "inline" : ""} ${right ? "right" : ""} ${
        odd && last ? "odd" : ""
      } ${last ? "last" : ""}` }
      style={blink ? {opacity: 0} : {opacity: 1}}
    >
      <h2 className="sub-title">{title}</h2>
      <figure className="item-figure">
        <img className="item-img" src={require(`../img/${img}`)} alt={img} />
      </figure>
      <p>{`${preview.slice(0, 150)}...`}</p>
    </div>
  );
}

export default ItemBlock;
