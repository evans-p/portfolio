import React from "react";

import "./Skills.css";

class Skills extends React.Component {
  render() {
    return (
      <div className="Skills container">
        <span className="row">Skills</span>
        <div className="row">
          <div className="col">
            <div className="skill-item"></div>
          </div>
          <div className="col"></div>
          <div className="col"></div>
        </div>
      </div>
    );
  }
}

export default Skills;
