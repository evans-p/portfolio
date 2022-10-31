import React from "react";

import "./Nav.css";

import Menu from "../Menu/Menu";
class Nav extends React.Component {
  render() {
    return (
      <div className="Nav">
        <Menu />
      </div>
    );
  }
}

export default Nav;
