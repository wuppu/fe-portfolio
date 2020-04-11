import React from "react";
import ItemList from "../../components/ItemList";
import ".././SubPage.css";

function Scratch() {

  return (
    <div className="main-container">
      <h1 className="main-title">Project</h1>
      <h2 className="sub-title">[프로젝트, C#, Unity3D] 코딩 퍼즐 게임</h2>
      <div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-around"}}>
        <figure className="main-figure" style={{width: "30rem"}}>
          <img
            className="main-img"
            src={require("../../img/scratch.jpg")}
            alt=""
          />
        </figure>
        <figure className="main-figure" style={{width: "30rem"}}>
          <img
            className="main-img"
            src={require("../../img/scratch2.jpg")}
            alt=""
          />
        </figure>
      </div>      
      <div className="common-content">
        <h3>대학교 종합설계프로젝트</h3>
        <br></br>
        <h3>사용 언어</h3>
        <p>C#</p>
        <br></br>
        <h3>사용 툴</h3>
        <p>Unity3D</p>
        <br></br>
        <h3>프로젝트 설명</h3>
        <p>Scratch 라는 코딩 교육용 프로그램에서 아이디어를 얻어, Scratch 처럼 코드 블록을 이용하여 주어진 문제를 풀며 코딩을 배울 수 있는 게임을 개발하였습니다.</p>
        <br></br>
        <h3>담당 역할</h3>
        <p>메인 시스템 구현, UI/UX 및 디자인</p>
        <p>코드 블록의 연결, 연결된 블록을 실행하였을 때의 작동 구현</p>
        <p>연결된 코드 블록을 확인하여 오류 검출기 구현</p>        
        <br></br>
        <h3>Github</h3>
        <a href="https://github.com/wuppu/Scratch" target="_blank">
          github.com/wuppu/Scratch
        </a>
        <br></br>
        <br></br>
        <h3>Trello</h3>
        <a href="https://trello.com/b/eWMVJfBg/scratch-project" target="_blank">
          trello.com/b/eWMVJfBg/scratch-project
        </a>
      </div>
      <ItemList/>
    </div>
  );
}
export default Scratch;
