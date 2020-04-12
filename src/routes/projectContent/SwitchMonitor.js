import React from "react";
import ItemList from "../../components/ItemList";
import ".././SubPage.css";

function SwitchMonitor() {
  return (
    <div className="main-container">
      <h1 className="main-title">Project</h1>
      <h2 className="sub-title">
        [프로젝트, C#, Windows Form] 네트워크 스위치 모니터링 프로그램
      </h2>
      <figure className="main-figure">
        <img
          className="main-img"
          src={require("../../img/switch-monitor.jpg")}
          alt=""
        />
      </figure>
      <p className="common-content">
        <h3>전자부품연구원 개인 프로젝트</h3>
        <br></br>
        <h3>사용 언어</h3>
        <p><b>C#</b></p>
        <br></br>
        <h3>프로젝트 설명</h3>
        <p>
          가상 네트워크를 만들고 스위치의 데이터를 조회/수정, 모니터링하는
          프로그램을 Windows 플랫폼 애플리케이션으로 개발하였습니다.
        </p>
        <br></br>
        <h3>담당 역할</h3>
        <p>UI/UX 수정, 네트워크 스위치 데이터 조회/수정, 모니터링 구현</p>
        <p>JSON 포맷 데이터 인코딩/디코딩하여 메시지 전송 구현</p>
        <p>
          스위치 파라미터 테이블 개발, 가상 네트워크 및 파라미터 테이블 저장 및
          불러오기 기능 구현
        </p>
      </p>
      <ItemList />
    </div>
  );
}
export default SwitchMonitor;
