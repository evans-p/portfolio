import React from "react";

import "./MainPage.css";

import Nav from "./Components/Nav/Nav";
import Heroe from "./Components/Heroe/Heroe";
import Loader from "./Components/Loader/Loader";

class MainPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loaded: false,
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ loaded: true });
    }, 2000);
  }

  render() {
    return (
      <div className="MainPage">
        <Nav />
        <Heroe />
        {!this.state.loaded ? <Loader /> : null}
      </div>
    );
  }
}

export default MainPage;
