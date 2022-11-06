import React from "react";

import "./Header.css";

class Header extends React.Component {
  render() {
    return (
      <header className="Header d-flex flex-column align-items-center">
        <h1>
          {this.props.titleMain}
          <span>{this.props.titleSecondary}</span>
        </h1>
        <h3>{this.props.subtitle}</h3>
      </header>
    );
  }
}

export default Header;
