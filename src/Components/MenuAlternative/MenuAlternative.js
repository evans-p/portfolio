import React from "react";
import { Link } from "react-router-dom";
import "./MenuAlternative.css";

class MenuAlternative extends React.Component {
  render() {
    return (
      <Link to="/" className="MenuAlternative">
        <i className="bi bi-arrow-left-short"></i>
      </Link>
    );
  }
}

export default MenuAlternative;
