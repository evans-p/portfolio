import React from "react";

import "./PortfolioItem.css";

class PortfolioItem extends React.Component {
  render() {
    const data = {
      id: this.props.id,
      title: this.props.title,
      description: this.props.description,
      technologies: this.props.technologies,
      duration: this.props.duration,
      img: this.props.img,
    };

    return (
      <>
        <div
          className="PortfolioItem"
          onClick={() => {
            this.props.openModal(data);
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
