import React from "react";

import "./MainButton.css";

class MainButton extends React.Component {
  render() {
    let style = this.props.marginRight
      ? { marginRight: this.props.marginRight }
      : {};
    style = this.props.marginLeft
      ? { ...style, marginLeft: this.props.marginLeft }
      : { ...style };

    return (
      <button className="MainButton" style={style}>
        <span>
          {this.props.icon}
          {this.props.text}
        </span>
      </button>
    );
  }
}

export default MainButton;
