import React from "react";

import "./EducationItem.css";

class EducationItem extends React.Component {
  render() {
    return (
      <div
        className="EducationItem"
        style={this.props.count == 1 ? { marginTop: "50px" } : {}}
      >
        <span className="bullet"></span>
        <div className="card">
          <span className="date">
            <i class="bi bi-calendar-event-fill"></i>
            {this.props.date}
          </span>
          <span className="title">{this.props.title}</span>
          <span className="subtitle">{this.props.subtitle}</span>
          <span className="description">{this.props.description}</span>
        </div>
      </div>
    );
  }
}

export default EducationItem;
