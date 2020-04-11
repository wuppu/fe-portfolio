import React from "react";
import ItemList from "../components/ItemList";
import "./SubPage.css";

function Project() {

  return (
    <div className="main-container">
      <h1 className="main-title">Project</h1>
      <h2 className="sub-title">수행 프로젝트</h2>
      <figure className="main-figure">
        <img
          className="main-img"
          src={require("../img/city_art_sky_127834_1920x1080.jpg")}
          alt=""
        />
      </figure>
      <p className="common-content">
        현재까지 진행했던 개인적으로 진행했던 학습부터 프로젝트 중에서 주요 자료들을 정리했습니다.<br></br>
        사용했던 언어로는 <b>C++, C#, HTML, CSS, Javascript</b> 가 있으며, 웹 프로젝트를 진행하면서 <b>Python, php</b> 를 추가적으로 사용했습니다. <br></br>
        알고리즘 & 자료구조 공부는 현재까지도 진행중이며 <b>C++</b> 로 문제를 풀고 있습니다.<br></br>
        대학교에서 진행했던 프로젝트 2개, 경력사항에 있던 전자부품연구원에서 진행한 프로젝트 2개로 정리하였습니다.<br></br>
      </p>
      <ItemList/>
    </div>
  );
}
export default Project;
