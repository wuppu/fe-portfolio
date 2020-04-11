import React from "react";
import ItemList from "../../components/ItemList";
import ".././SubPage.css";

function Algorithm() {
  return (
    <div className="main-container">
      <h1 className="main-title">Project</h1>
      <h2 className="sub-title">[개인학습, C++] 알고리즘 & 자료구조 학습</h2>
      <figure className="main-figure">
        <img
          className="main-img"
          src={require("../../img/algorithm.jpg")}
          alt=""
        />
      </figure>
      <div className="common-content">
        <h3>사용 언어</h3>
        <p>C++</p>
        <p>
          1년간 C++ 로 알고리즘 문제를 풀며, 깃 허브에 정리하고 있습니다. 주로
          백준(
          <a href="https://acmicpc.net" target="_blank">
            acmicpc.net
          </a>
          ), 프로그래머스(
          <a href="https://programmers.co.kr" target="_blank">
            programmers.co.kr
          </a>
          )에서 문제를 풀고 있습니다. 그리고 추가적으로 CodeForces(
          <a href="https://codeforces.com" target="_blank">
            codeforces.com
          </a>
          )에서 주기적으로 진행하는 코딩 테스트를 통해 공부하고 있습니다.
        </p>
        <br></br>
        <h3>Github</h3>
        <a href="https://github.com/wuppu/Algorithms" target="_blank">
          github.com/wuppu/Algorithms
        </a>
      </div>
      <ItemList />
    </div>
  );
}
export default Algorithm;
