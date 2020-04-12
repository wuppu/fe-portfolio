import React from "react";
// import ItemBlock from "../components/ItemBlock";
import "./SubPage.css";

function Contact() {
  // const itemList = [1, 2, 3, 4, 5, 6, 7];

  return (
    <div className="main-container">
      <h1 className="main-title">Contact</h1>
      <figure className="main-figure">
        <img
          className="main-img"
          src={require("../img/city_art_sky_127834_1920x1080.jpg")}
          alt=""
        />
      </figure>
      <div className="common-content" style={{textAlign: "center"}}>
        <h3>Github</h3>
        <a
          href="https://github.com/wuppu"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>https://github.com/wuppu</p>
        </a>
        <br></br>
        <h3>Blog</h3>
        <a
          href="https://blog.naver.com/wndud1640"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>https://blog.naver.com/wndud1640</p>
        </a>
        <br></br>
        <h3>E-mail</h3>
        <p>wndud1640@gmail.com (wndud1640@naver.com)</p>
      </div>
    </div>
  );
}
export default Contact;
