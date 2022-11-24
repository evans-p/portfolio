import React from "react";

import Header from "../Header/Header";
import Info from "../Info/Info";
import Education from "../Education/Education";
import Skills from "../Skills/Skills";

class About extends React.Component {
  render() {
    return (
      <div className="About">
        <Header {...this.props.aboutHeader} />
        <Info
          width={this.props.width}
          infoDataLeft={this.props.infoDataLeft}
          infoDataRight={this.props.infoDataRight}
        />
        <Education
          seminarsData={this.props.seminarsData}
          educationData={this.props.educationData}
        />
        <Skills width={this.props.width} skillData={this.props.skillData} />
      </div>
    );
  }
}

export default About;
