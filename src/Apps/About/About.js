import React from "react";

import Header from "../UtilComponents/Header/Header";
import Menu from "../UtilComponents/Menu/Menu";
import Info from "./Components/Info/Info";
import Education from "./Components/Education/Education";
import Skills from "./Components/Skills/Skills";

class About extends React.Component {
  render() {
    let headParameters = {
      titleMain: "About",
      titleSecondary: "Me",
      subtitle: "I DESIGN AND CODE BEAUTIFUL THINGS, AND I LOVE WHAT I DO.",
    };

    return (
      <div className="About">
        <Menu />
        <Header {...headParameters} />
        <Info width={this.props.width} />
        <Education />
        <Skills width={this.props.width} />
      </div>
    );
  }
}

export default About;
