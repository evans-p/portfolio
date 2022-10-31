import React from "react";

import "./MainPage.css";

import Nav from "./Components/Nav/Nav";
import Heroe from "./Components/Heroe/Heroe";
import Loader from "./Components/Loader/Loader";
import HeroeAlternative from "./Components/HeroeAlternative/HeroeAlternative";

class MainPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loaded: false,
      height: window.innerHeight,
      width: window.innerWidth,
    };

    this.handleWindowResize = this.handleWindowResize.bind(this);
  }
  handleWindowResize() {
    console.log("resizing...");

    this.setState({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ loaded: true });
    }, 2000);
    window.addEventListener("resize", this.handleWindowResize);
  }

  render() {
    return (
      <div className="MainPage">
        {this.state.width < 950 ? <HeroeAlternative /> : null}
        {this.state.width >= 950 ? <Nav /> : null}
        {this.state.width >= 950 ? <Heroe /> : null}
        {this.state.width >= 950 ? (
          !this.state.loaded ? (
            <Loader />
          ) : null
        ) : null}
      </div>
    );
  }
}

export default MainPage;
