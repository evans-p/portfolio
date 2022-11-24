import React from "react";

import "./SecondaryButton.css";

class SecondaryButton extends React.Component {
  render() {
    let style = this.props.marginRight
      ? { marginRight: this.props.marginRight }
      : {};
    style = this.props.marginLeft
      ? { ...style, marginLeft: this.props.marginLeft }
      : { ...style };

    return (
      <button
        className="SecondaryButton"
        style={style}
        onClick={this.props.action}
      >
        <span>
          {this.props.icon}
          {this.props.text}
        </span>
      </button>
    );
  }
}

export default SecondaryButton;
