import React from "react";

import Head from "./Components/Head/Head";
import Menu from "./Components/Menu/Menu";
import Info from "./Components/Info/Info";
import Education from "./Components/Education/Education";
import Skills from "./Components/Skills/Skills";

class About extends React.Component {
  render() {
    return (
      <div className="About">
        <Menu />
        <Head />
        <Info width={this.props.width} />
        <Education />
        <Skills width={this.props.width} />
      </div>
    );
  }
}

export default About;
