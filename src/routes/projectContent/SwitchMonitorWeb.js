import React from "react";
import ItemList from "../../components/ItemList";
import ".././SubPage.css";

function SwitchMonitorWeb() {
  return (
    <div className="main-container">
      <h1 className="main-title">Project</h1>
      <h2 className="sub-title">
        [프로젝트, 웹, HTML, CSS, Javascript] 네트워크 스위치 모니터링 프로그램
      </h2>
      <figure className="main-figure">
        <img
          className="main-img"
          src={require("../../img/switch-monitor-web.jpg")}
          alt=""
        />
      </figure>
      <p className="common-content">
        <br></br>
        <h3>전자부품연구원 프로젝트</h3>
        <br></br>
        <h3>사용 언어</h3>
        <p><b>HTML / CSS / Javascript</b></p>
        <br></br>
        <h3>사용 라이브러리</h3>
        <p>Bootstrap</p>
        <br></br>
        <h3>프로젝트 설명</h3>
        <p>
          가상 네트워크를 만들고 스위치의 데이터를 조회/수정, 모니터링하는
          프로그램을 웹 기반 애플리케이션으로 개발하였습니다. 기존의 Windows
          플랫폼으로 개발했던 애플리케이션의 기능을 똑같이 수행할 수 있도록
          개발하였습니다. Bootstrap 라이브러리를 사용하여, 반응형 및 디자인을
          단순화하여 진행했습니다.
        </p>
        <br></br>
        <h3>담당 역할</h3>
        <p>
          UI/UX 개발, 가상 네트워크 그리기 기능 구현, 네트워크 스위치 데이터
          조회/수정, 모니터링 구현
        </p>
        <p>JSON 포맷 데이터 인코딩/디코딩하여 메시지 전송 구현</p>
        <p>
          스위치 파라미터 테이블 개발, 기존의 Windows 애플리케이션에서 사용했던
          데이터를 그대로 사용하여 가상 네트워크 및 파라미터 테이블
          저장/불러오기 기능 구현
        </p>
      </p>
      <ItemList />
    </div>
  );
}
export default SwitchMonitorWeb;
