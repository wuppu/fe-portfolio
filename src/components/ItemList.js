import React from "react";
import { useState } from "react";
import "./ItemList.css";

import ItemBlock from "./ItemBlock";

function ItemList() {
  const [listToggle, setListToggle] = useState(true);
  const [blink, setBlink] = useState(false);
  // const itemList = [1, 2, 3, 4, 5, 6, 7];
  
  const projectList = [
    {
      title: "[개인학습, C++] 알고리즘 & 자료구조 학습",
      thumnail: "algorithm",
      content: "1년간 C++ 로 알고리즘 문제를 풀며, 깃 허브에 정리하고 있습니다. 주로 백준(acmicpc.net), 프로그래머스(programmers.co.kr)에서 문제를 풀고 있습니다. 그리고 추가적으로 CodeForces(codeforces.com)에서 주기적으로 진행하는 코딩 테스트를 통해 공부하고 있습니다."
    },
    {
      title: "[프로젝트, C#, Unity3D] 코딩 퍼즐 게임",
      thumnail: "scratch",
      content: "Scratch 라는 코딩 교육용 프로그램에서 아이디어를 얻어, Scratch 처럼 코드 블록을 이용하여 주어진 문제를 풀며 코딩을 배울 수 있는 게임을 개발하였습니다."
    },
    {
      title: "[프로젝트, C#, Unity3D] 인공지능 탁구 머신 시뮬레이션",
      thumnail: "ml-agent",
      content: "Unity 에서 제공하는 ML-agent(Machine Learning Agent)를 통해 심층강화학습으로 인공지능 탁구로봇을 구현하는 프로젝트입니다. 역기구학(Inverse Kinematics) 구현 및 로봇 팔 디자인, 강화학습 진행"
    },
    {
      title: "[프로젝트, C#, Windows Form] 네트워크 스위치 모니터링 프로그램",
      thumnail: "switch-monitor",
      content: "가상 네트워크를 만들고 스위치의 데이터를 조회/수정, 모니터링하는 프로그램을 Windows 플랫폼 애플리케이션으로 개발하였습니다. UI/UX 수정, 네트워크 스위치 데이터 조회/수정, 모니터링 구현"
    },
    {
      title: "[프로젝트, 웹, HTML, CSS, Javascript] 네트워크 스위치 모니터링 프로그램",
      thumnail: "switch-monitor-web",
      content: "가상 네트워크를 만들고 스위치의 데이터를 조회/수정, 모니터링하는 프로그램을 웹 기반 애플리케이션으로 개발하였습니다. 기존의 Windows 플랫폼으로 개발했던 애플리케이션의 기능을 똑같이 수행할 수 있도록 개발하였습니다. Bootstrap 라이브러리를 사용하여, 반응형 및 디자인을 단순화하여 진행했습니다."
    }
  ]

  // const clickHandle = () => {
  //   setBlink(true);
  //   setTimeout(() => {
  //     setBlink(false);
  //     setListToggle(!listToggle);
  //   }, 500);
  // }

  return (
    <div className="item-container">
      
      {/* <div
        className="list-toggle"
        onClick={() => clickHandle()}
      ></div> */}
      
      <div className="item-block-list">
        {projectList.map((item, index) => (
          <ItemBlock
            key={index}
            title={`${item.title}`}
            preview={item.content}
            inline={listToggle ? true : false}
            right={listToggle ? false : (index % 2 === 0 ? true : false)}
            odd={projectList.length % 2 === 1 ? true : false}
            last={
              projectList.length % 2 === 1
                ? index > projectList.length - 2
                  ? true
                  : false
                : index > projectList.length - 3
                ? true
                : false
            }
            img={item.thumnail}
            blink={blink}
          />
        ))}
      </div>
    </div>
  );
}

export default ItemList;
