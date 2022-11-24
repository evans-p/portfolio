import React from "react";

import "./PortfolioItem.css";

class PortfolioItem extends React.Component {
  render() {
    return (
      <>
        <div
          className="PortfolioItem"
          onClick={() => {
            this.props.openModal(this.props);
          }}
        >
          <span>{this.props.title}</span>
          <img src={this.props.img} alt={this.props.title} />
        </div>
      </>
    );
  }
}

export default PortfolioItem;
