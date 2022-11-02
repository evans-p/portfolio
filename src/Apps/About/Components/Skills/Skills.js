import React from "react";

import "./Skills.css";

import Skill from "../Skill/Skill";

class Skills extends React.Component {
  renderSkills() {
    let skills = [
      ["html", "30"],
      ["html", "40"],
      ["html", "50"],
      ["html", "60"],
      ["html", "70"],
      ["html", "80"],
      ["html", "70"],
      ["html", "80"],
      ["html", "90"],
    ];
    if (this.props.width >= 768) {
      return (
        <div className="row">
          <div className="col">
            {skills.slice(0, Math.floor(skills.length / 3)).map((e) => (
              <Skill title={e[0]} percent={e[1]} />
            ))}
          </div>
          <div className="col">
            {skills
              .slice(
                Math.floor(skills.length / 3),
                Math.floor((2 * skills.length) / 3)
              )
              .map((e) => (
                <Skill title={e[0]} percent={e[1]} />
              ))}
          </div>
          <div className="col">
            {skills.slice(Math.floor((2 * skills.length) / 3)).map((e) => (
              <Skill title={e[0]} percent={e[1]} />
            ))}
          </div>
        </div>
      );
    } else if (this.props.width < 768 && this.props.width >= 576) {
      return (
        <div className="row">
          <div className="col">
            {skills.slice(0, Math.floor(skills.length / 2) + 1).map((e) => (
              <Skill title={e[0]} percent={e[1]} />
            ))}
          </div>
          <div className="col">
            {skills.slice(Math.floor(skills.length / 2) + 1).map((e) => (
              <Skill title={e[0]} percent={e[1]} />
            ))}
          </div>
        </div>
      );
    } else {
      return (
        <div className="row">
          <div className="col">
            {skills.map((e) => (
              <Skill title={e[0]} percent={e[1]} />
            ))}
          </div>
        </div>
      );
    }
  }
  render() {
    return (
      <div className="Skills container">
        <div className="row">
          <span className="col-12">Skills</span>
        </div>
        {this.renderSkills()}
      </div>
    );
  }
}

export default Skills;
