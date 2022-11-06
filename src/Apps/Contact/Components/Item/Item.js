import React from "react";

import "./Item.css";

class Item extends React.Component {
  render() {
    return (
      <div className="Item d-flex flex-column">
        <span className="title">{this.props.title}</span>
        <span className="information">
          {this.props.icon}
          {this.props.information}
        </span>
      </div>
    );
  }
}

export default Item;
