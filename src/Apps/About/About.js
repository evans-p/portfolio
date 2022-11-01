import React from "react";

import Head from "./Components/Head/Head";
import Menu from "./Components/Menu/Menu";
import Info from "./Components/Info/Info";

class About extends React.Component {
  render() {
    return (
      <div className="About">
        <Menu />
        <Head />
        <Info />
      </div>
    );
  }
}

export default About;
