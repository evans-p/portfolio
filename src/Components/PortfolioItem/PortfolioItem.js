import React from "react";

import "./PortfolioItem.css";
import img from "../../Assets/background-image.jpg";

class PortfolioItem extends React.Component {
  render() {
    return (
      <div className="PortfolioItem">
        <span>image title {this.props.id}</span>
        <img src={img} />
      </div>
    );
  }
}

export default PortfolioItem;
