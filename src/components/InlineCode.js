import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class InlineCode extends PureComponent {
  static propTypes = {
    value: PropTypes.string.isRequired
  };

  render() {
    const { value } = this.props;
    return (
      <code style={{ background: "rgb(240, 240, 240)", borderRadius: "0.3rem", fontSize: "1.1rem", padding: "0.3rem", fontWeight:"bold"}}>
        {value}
      </code>
    );
  }
}

export default InlineCode;
