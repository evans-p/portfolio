import React from "react";

import Header from "../Header/Header";
import Info from "../Info/Info";
import Education from "../Education/Education";
import Skills from "../Skills/Skills";

class About extends React.Component {
  render() {
    let headParameters = {
      titleMain: "About",
      titleSecondary: "Me",
      subtitle: "I DESIGN AND CODE BEAUTIFUL THINGS, AND I LOVE WHAT I DO.",
    };

    return (
      <div className="About">
        <Header {...headParameters} />
        <Info width={this.props.width} />
        <Education />
        <Skills width={this.props.width} />
      </div>
    );
  }
}

export default About;
