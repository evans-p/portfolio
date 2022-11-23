import React from "react";
import { Link } from "react-router-dom";
import "./HeroeAlternative.css";

class HeroeAlternative extends React.Component {
  render() {
    return (
      <div className="HeroeAlternative">
        <Link className="menu-option" to="/about">
          <i className="bi bi-person-fill"></i>
          <span>About me</span>
        </Link>
        <Link className="menu-option" to="/portfolio">
          <i className="bi bi-briefcase-fill"></i>
          <span>portfolio</span>
        </Link>
        <Link className="menu-option" to="/contact">
          <i className="bi bi-chat-fill"></i>
          <span>get in touch</span>
        </Link>
      </div>
    );
  }
}

export default HeroeAlternative;
