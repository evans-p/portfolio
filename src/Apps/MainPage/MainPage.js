import React from "react";

import "./MainPage.css";

import Nav from "./Components/Nav/Nav";
import Heroe from "./Components/Heroe/Heroe";
import Loader from "./Components/Loader/Loader";

class MainPage extends React.Component {
  render() {
    return (
      <div className="MainPage">
        <Nav />
        <Heroe />
        <Loader />
      </div>
    );
  }
}

export default MainPage;
