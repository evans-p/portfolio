import React from "react";

import "./MainPage.css";

import Nav from "./Components/Nav/Nav";
import Heroe from "./Components/Heroe/Heroe";

class MainPage extends React.Component {
  render() {
    return (
      <div className="MainPage">
        <Nav />
        <Heroe />
      </div>
    );
  }
}

export default MainPage;
