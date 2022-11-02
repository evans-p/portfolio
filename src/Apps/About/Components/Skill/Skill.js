import React from "react";

import "./Skill.css";

class Skill extends React.Component {
  render() {
    return (
      <div className="Skill d-flex align-items-center flex-column">
        <div className="text">{this.props.title}</div>
        <div className="chart-bar">
          <span
            className="bar"
            style={{ width: `${this.props.percent}%` }}
          ></span>
          <span
            className="percent d-flex align-items-center justify-content-center"
            style={{ left: `calc(${this.props.percent}% - 23px)` }}
          >
            {`${this.props.percent}%`}
          </span>
        </div>
      </div>
    );
  }
}

export default Skill;
