import React from "react";

import "./Head.css";

class Head extends React.Component {
  render() {
    return (
      <header className="Head">
        <h2>
          {this.props.titleMain}
          <span>{this.props.titleSecondary}</span>
        </h2>
        <h3>{this.props.subtitle}</h3>
      </header>
    );
  }
}

export default Head;
