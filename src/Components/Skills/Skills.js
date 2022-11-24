import React from "react";

import "./Skills.css";

import Skill from "../Skill/Skill";

class Skills extends React.Component {
  renderSkills() {
    if (this.props.width >= 768) {
      return (
        <div className="row">
          <div className="col">
            {this.props.skillData
              .slice(0, Math.floor(this.props.skillData.length / 3))
              .map((e) => (
                <Skill
                  title={e[0]}
                  percent={e[1]}
                  key={Math.floor(999999999 * Math.random())}
                />
              ))}
          </div>
          <div className="col">
            {this.props.skillData
              .slice(
                Math.floor(this.props.skillData.length / 3),
                Math.floor((2 * this.props.skillData.length) / 3)
              )
              .map((e) => (
                <Skill
                  title={e[0]}
                  percent={e[1]}
                  key={Math.floor(999999999 * Math.random())}
                />
              ))}
          </div>
          <div className="col">
            {this.props.skillData
              .slice(Math.floor((2 * this.props.skillData.length) / 3))
              .map((e) => (
                <Skill
                  title={e[0]}
                  percent={e[1]}
                  key={Math.floor(999999999 * Math.random())}
                />
              ))}
          </div>
        </div>
      );
    } else if (this.props.width < 768 && this.props.width >= 576) {
      return (
        <div className="row">
          <div className="col">
            {this.props.skillData
              .slice(0, Math.floor(this.props.skillData.length / 2) + 1)
              .map((e) => (
                <Skill
                  title={e[0]}
                  percent={e[1]}
                  key={Math.floor(999999999 * Math.random())}
                />
              ))}
          </div>
          <div className="col">
            {this.props.skillData
              .slice(Math.floor(this.props.skillData.length / 2) + 1)
              .map((e) => (
                <Skill
                  title={e[0]}
                  percent={e[1]}
                  key={Math.floor(999999999 * Math.random())}
                />
              ))}
          </div>
        </div>
      );
    } else {
      return (
        <div className="row">
          <div className="col">
            {this.props.skillData.map((e) => (
              <Skill
                title={e[0]}
                percent={e[1]}
                key={Math.floor(999999999 * Math.random())}
              />
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
