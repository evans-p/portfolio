import React from "react";

import "./Home.css";

import Heroe from "../Heroe/Heroe";
import Loader from "../Loader/Loader";
import HeroeAlternative from "../HeroeAlternative/HeroeAlternative";

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        {this.props.width < 950 ? <HeroeAlternative /> : null}
        {this.props.width >= 950 ? <Heroe /> : null}
        {!this.props.loaded ? <Loader /> : null}
      </div>
    );
  }
}

export default Home;
