import React from "react";
import "./SubPage.css";

function About() {
  // const itemList = [1, 2, 3, 4, 5, 6, 7];

  return (
    <div className="main-container">
      <h1 className="main-title">About</h1>
      <figure className="main-figure">
        <img className="main-img" src={require("../img/Home_img.jpg")} alt="" />
      </figure>
      <div className="common-content" style={{textAlign: "center"}}>
        <h3>이름</h3>
        <p>김 주 영 (Kim Juyoung)</p>
        <br></br>
        <h3>생년월일</h3>
        <p>1994년 4월 8일</p>
        <br></br>
        <h3>학력사항</h3>
        <ul style={{ listStyle: "none" }}>
          <li>2010.03 ~ 2013.02 주엽고등학교 졸업</li>
          <li>2014.03 ~ 2020.02 한국항공대학교 소프트웨어학과 졸업</li>
        </ul>
        <br></br>
        <h3>경력사항 </h3>
        <ul style={{ listStyle: "none" }}>
          <li>2018.08 ~ 2018.09 전자부품연구원(KETI) 위촉연구원 SW개발 근무</li>
          <li>2019.01 ~ 2019.07 전자부품연구원(KETI) 위촉연구원 SW개발 근무</li>
        </ul>
        <br></br>
        <h3>기술스택</h3>
        <div className="sort-row">
          <figure className="sub-figure">
            <img className="sub-img" src={require("../img/CPP.png")} alt="" />
          </figure>
          <figure className="sub-figure">
            <img className="sub-img" src={require("../img/CS.png")} alt="" />
          </figure>
          <figure className="sub-figure">
            <img className="sub-img" src={require("../img/HTML5.png")} alt="" />
          </figure>
          <figure className="sub-figure">
            <img className="sub-img" src={require("../img/CSS3.png")} alt="" />
          </figure>
          <figure className="sub-figure">
            <img className="sub-img" src={require("../img/JS.png")} alt="" />
          </figure>
          <figure className="sub-figure">
            <img className="sub-img" src={require("../img/unity.png")} alt="" />
          </figure>
          <figure className="sub-figure">
            <img className="sub-img" src={require("../img/REACT.png")} alt="" />
          </figure>
        </div>
        <ul style={{ listStyle: "none" }}>
          <li>
            <h3>C++</h3>
            <p>
              알고리즘 & 자료구조 문제를 풀면서 개인학습 (
              <a href="https://github.com/wuppu/Algorithms" target="_blank" rel="noopener noreferrer">
                https://github.com/wuppu/Algorithms
              </a>
              )
            </p>
          </li>
          <br></br>
          <li>
            <h3>C#</h3>
            <p>Windows 플랫폼 애플리케이션 프로젝트 진행</p>
          </li>
          <br></br>
          <li>
            <h3>HTML5 / CSS3 / Javascript</h3>
            <p>웹 프론트엔드 독학 및 프로젝트 진행</p>
          </li>
          <br></br>
          <li>
            <h3>Unity3D</h3>
            <p>게임 개발 및 애플리케이션 구현</p>
          </li>
          <br></br>
          <li>
            <h3>React</h3>
            <p>웹 프론트엔드 프레임워크 독학 및 개인 프로젝트 진행</p>
          </li>
        </ul>
        <br></br>
      </div>
    </div>
  );
}
export default About;
