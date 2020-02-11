import React, { Component } from "react";
import ReactMarkdown from "react-markdown";
import CodeBlock from "../components/CodeBlock";
import InlineCode from "../components/InlineCode";
import ItemBlock from "../components/ItemBlock";
import axios from "axios";
import "./SubPage.css";

class Project extends Component {
  itemList = [1, 2, 3, 4, 5, 6, 7];
  state = {
    readme: "",
    date: ""
  };

  dateToStr = date => {
    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
    let yyyy = date.getFullYear().toString();
    let mm = date.getMonth() + 1;
    if (mm < 10) mm = `0${mm}`;
    let dd = date.getDate();
    if (dd < 10) dd = `0${dd}`;
    let hour = date.getHours();
    if (hour < 10) hour = "0" + hour;
    let min = date.getMinutes();
    if (min < 10) min = "0" + min;
    let sec = date.getSeconds();
    if (sec < 10) sec = "0" + sec;
    let day = date.getDay();

    return `${yyyy}-${mm}-${dd} ${weekday[day]} | ${hour}:${min}:${sec}`;
  };
  getGithubReadme = async () => {
    const {
      data: { content }
    } = await axios.get(
      "https://api.github.com/repos/wuppu/react-study/readme"
    );

    const { data } = await axios.get(
      "https://api.github.com/repos/wuppu/react-study/commits?path=README.md"
    );
    const date = new Date(data[0].commit.author.date);
    const dateStr = this.dateToStr(date);

    const decodeReadme = decodeURIComponent(escape(window.atob(content)));
    this.setState({ readme: decodeReadme, date: dateStr });
  };

  componentDidMount() {
    this.getGithubReadme();
  }

  render() {
    const { readme, date } = this.state;

    return (
      <div className="main-container">
        <h1 className="main-title">This is Project</h1>
        <h2 className="sub-title">
          The standard Lorem Ipsum passage, used since the 1500s
        </h2>
        <figure className="main-figure">
          <img
            className="main-img"
            src={require("../img/city_art_sky_127834_1920x1080.jpg")}
            alt=""
          />
        </figure>

        <pre className="common-content">{date}</pre>
        <ReactMarkdown
          className="common-content"
          source={readme}
          renderers={{ code: CodeBlock, inlineCode: InlineCode }}
        />

        <div className="item-block-list">
          {this.itemList.map((item, index) => (
            <ItemBlock
              key={index}
              title={`Item #${item}`}
              right={index % 2 === 0 ? true : false}
              odd={this.itemList.length % 2 === 1 ? true : false}
              last={
                this.itemList.length % 2 === 1
                  ? index > this.itemList.length - 2
                    ? true
                    : false
                  : index > this.itemList.length - 3
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
}
export default Project;
