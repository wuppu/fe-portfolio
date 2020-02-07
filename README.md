# fe-portfolio

[Demo homepage](https://wuppu.github.io/fe-portfolio)



## Tools

- react
- gh-pages
- react-markdown
  - [rexxars: react-markdown](https://github.com/rexxars/react-markdown)
- react-router-dom
- react-syntax-highlighter
  - [conorhastings: react-syntax-highlighter](https://github.com/conorhastings/react-syntax-highlighter)
- axios

- github api ver.3



## About

- github 에 올려둔 프로젝트와 파일들을 github api(ver.3) 를 통해 가져오고 markdown 변환을 통해 출력합니다.
- 이 때, markdown 을 파싱하기 위해서 `react-markdown` 라이브러리를 사용하였습니다.
- markdown 에서 코드 블럭에 있는 코드의 하이라이트를 표현하기 위해서 `react-syntax-highlighter` 라이브러리를 사용하였습니다.

### Project.js

```jsx
/* Project.js */
import React, { Component } from "react";
import ReactMarkdown from "react-markdown";
import CodeBlock from "../components/CodeBlock";
import InlineCode from "../components/InlineCode";
import axios from "axios";
import "./SubPage.css";

class Project extends Component {
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
        <ReactMarkdown 
            className="common-content" 
            source={readme} 
            renderers={{code: CodeBlock, 
                inlineCode: InlineCode}}/>
    );
  }
}
export default Project;
```

- `<ReactMarkdown/>` 의 옵션으로 `renderers` 를 사용자가 설정할 수 있습니다.
- 옵션을 넣게 되면 만들어분 컴포넌트의 설정으로 웹에 표시됩니다.
- 여기서 `code` 는 코드 블럭을 의미하며, `inlineCode` 는 " ` " 으로 표시된 코드를 의미합니다.



### CodeBlock.js

```jsx
/* CodeBlock.js */
import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { ghcolors as codeStyle } from "react-syntax-highlighter/dist/esm/styles/prism";

class CodeBlock extends PureComponent {
  static propTypes = {
    value: PropTypes.string.isRequired,
    language: PropTypes.string
  };

  static defaultProps = {
    language: null
  };

  render() {
    const { language, value } = this.props;
    return (
      <SyntaxHighlighter language={language} style={codeStyle}>
        {value}
      </SyntaxHighlighter>
    );
  }
}

export default CodeBlock;
```

- `import` 할 때, `codeStyle` 를 바꿔주면 코드 블럭의 테마를 바꿔줄 수 있습니다.
- `hljs` 는 JSX 파일에 대해서 하이라이트 적용되지 않기 때문에 `prism` 을 사용합니다.
  - [PRISMJS](https://prismjs.com/)



### InlineCode.js

```jsx
/* InlineCode.js */
import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class InlineCode extends PureComponent {
  static propTypes = {
    value: PropTypes.string.isRequired
  };

  render() {
    const { value } = this.props;
    return (
      <code style={{ 
                background: "rgb(240, 240, 240)", 
                borderRadius: "0.3rem", 
                fontSize: "1.1rem", 
                padding: "0.3rem", 
                fontWeight:"bold"
            }}>
        {value}
      </code>
    );
  }
}

export default InlineCode;
```



