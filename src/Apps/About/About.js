import React from "react";

import Head from "../UtilComponents/Head/Head";
import Menu from "./Components/Menu/Menu";
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
        <Head {...headParameters} />
        <Info width={this.props.width} />
        <Education />
        <Skills width={this.props.width} />
      </div>
    );
  }
}

export default About;
