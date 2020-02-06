import React from "react";
import ItemBlock from "../components/ItemBlock";
import "./SubPage.css";

function Contact() {
  const itemList = [1, 2, 3, 4, 5, 6, 7];

  return (
    <div className="main-container">
      <h1 className="main-title">This is Contact</h1>
      <h2 className="sub-title">The standard Lorem Ipsum passage, used since the 1500s</h2>
      <figure className="main-figure">
        <img
          className="main-img"
          src={require("../img/city_art_sky_127834_1920x1080.jpg")}
          alt=""
        />
      </figure>
      <p className="common-content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
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
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <div className="item-block-list">
        {itemList.map((item, index) => (
          <ItemBlock
            key={index}
            title={`Item #${item}`}
            right={index % 2 === 0 ? true : false}
            odd={itemList.length % 2 === 1 ? true : false}
            last={
              itemList.length % 2 === 1
                ? index > itemList.length - 2
                  ? true
                  : false
                : index > itemList.length - 3
                ? true
                : false
            }
            img={"Home_img.jpg"}
          />
        ))}
      </div>
    </div>
  );
}
export default Contact;
