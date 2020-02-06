import React, { Component } from "react";
import ReactMarkdown from "react-markdown";
import CodeBlock from "../components/CodeBlock";
import InlineCode from "../components/InlineCode";
import axios from "axios";
import ItemBlock from "../components/ItemBlock";
import "./SubPage.css";

class Project extends Component {
  itemList = [1, 2, 3, 4, 5, 6, 7];
  state = {
    readme: ""
  };

  getGithubReadme = async () => {
    const {
      data: { content }
    } = await axios.get("https://api.github.com/repos/wuppu/react-study/readme");
    const decodeReadme = decodeURIComponent(escape(window.atob(content)));
    this.setState({readme: decodeReadme});
  };

  componentDidMount() {
    this.getGithubReadme();
  };

  render() {    
    const {readme} = this.state;

    return (
      <div className="main-container">
        <h1 className="main-title">This is Project</h1>
        <h2 className="sub-title">The standard Lorem Ipsum passage, used since the 1500s</h2>
        <figure className="main-figure">
          <img
            className="main-img"
            src={require("../img/city_art_sky_127834_1920x1080.jpg")}
            alt=""
          />
        </figure>

        <ReactMarkdown className="common-content" source={readme} renderers={{code: CodeBlock, inlineCode: InlineCode}}/>

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
