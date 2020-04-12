import React from "react";
import ItemList from "../../components/ItemList";
import ".././SubPage.css";

function MLAgent() {
  return (
    <div className="main-container">
      <h1 className="main-title">Project</h1>
      <h2 className="sub-title">
        [프로젝트, C#, Unity3D] 인공지능 탁구 머신 시뮬레이션
      </h2>
      <figure className="main-figure">
        <img
          className="main-img"
          src={require("../../img/ml-agent.jpg")}
          alt=""
        />
      </figure>
      <p className="common-content">
        <h3>대학교 종합설계프로젝트</h3>
        <br></br>
        <h3>사용 언어</h3>
        <p><b>C#</b></p>
        <br></br>
        <h3>사용 툴</h3>
        <p>Unity3D</p>
        <br></br>
        <h3>프로젝트 설명</h3>
        <p>
          Unity 에서 제공하는 ML-agent(Machine Learning Agent)를 통해 심층강화학습으로 인공지능 탁구로봇을 구현하는 프로젝트입니다.
        </p>
        <br></br>
        <h3>담당 역할</h3>
        <p>역기구학(Inverse Kinematics) 구현 및 로봇 팔 디자인, 강화학습 진행</p>
        <p>공의 위치를 통해 로봇 팔을 움직일 수 있도록 역기구학 수식 정리 및 로봇 팔 구현(3축 좌표로 로봇 팔의 각 관절의 각도를 계산)</p>
        <p>만들어진 로봇 팔로 강화학습 진행</p>
        <br></br>
        <h3>Github</h3>
        <a href="https://github.com/wuppu/Table_tennis_ML" target="_blank" rel="noopener noreferrer">
          github.com/wuppu/Table_tennis_ML
        </a>
        <br></br>
        <br></br>
        <h3>역기구학(Inverse Kinematics) 구현</h3>
        <video src={require("../../video/inverse.mp4")} controls></video>
        <br></br>
        <br></br>
        <h3>강화 학습(Reinforcement Learning) 진행</h3>
        <video src={require("../../video/test.mp4")} controls></video>
        <br></br>
      </p>
      <ItemList />
    </div>
  );
}
export default MLAgent;
