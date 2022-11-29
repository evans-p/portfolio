import React from "react";

import Header from "../Header/Header";
import Info from "../Info/Info";
import Education from "../Education/Education";
import Skills from "../Skills/Skills";

import {
  skillData,
  seminarsData,
  aboutHeader,
  educationData,
} from "../..//Data/aboutData";

class About extends React.Component {
  render() {
    return (
      <div className="About">
        <Header {...aboutHeader} />
        <Info width={this.props.width} />
        <Education seminarsData={seminarsData} educationData={educationData} />
        <Skills width={this.props.width} skillData={skillData} />
      </div>
    );
  }
}

export default About;
