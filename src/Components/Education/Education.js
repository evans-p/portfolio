import React from "react";

import "./Education.css";

import EducationItem from "../EducationItem/EducationItem";

class Education extends React.Component {
  render() {
    return (
      <div className="Education">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              <h2>Education</h2>
              {this.props.educationData.map((el) => {
                return (
                  <EducationItem
                    {...el}
                    key={Math.floor(999999999 * Math.random())}
                  />
                );
              })}
            </div>
            <div className="col-12 col-md-6">
              <h2>Seminars - Classes</h2>
              {this.props.seminarsData.map((el) => {
                return (
                  <EducationItem
                    {...el}
                    key={Math.floor(999999999 * Math.random())}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Education;
