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
              <EducationItem
                count={1}
                date="2010 - 2022"
                title={"Aristotle University of Thessaloniki"}
                subtitle={"Electrical and Computer Engineering Degree"}
                description={"Degree Grade 7.27 out of 10"}
              />
              <EducationItem
                count={2}
                date="2010 - 2021"
                title={"Aristotle University of Thessaloniki"}
                subtitle={"Electrical and Computer Engineering Degree"}
                description={"Degree Grade 7.27/10"}
              />
            </div>
            <div className="col-12 col-md-6">
              <h2>Seminars - Classes</h2>
              <EducationItem
                count={1}
                date="2010 - 2022"
                title={"Aristotle University of Thessaloniki"}
                subtitle={"Electrical and Computer Engineering Degree"}
                description={"Degree Grade 7.27 out of 10"}
              />
              <EducationItem
                count={2}
                date="2010 - 2021"
                title={"Aristotle University of Thessaloniki"}
                subtitle={"Electrical and Computer Engineering Degree"}
                description={"Degree Grade 7.27/10"}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Education;
