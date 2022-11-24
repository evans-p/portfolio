import React from "react";
import { Link } from "react-router-dom";
import "./MenuAlternative.css";

export default function MenuAlternative(props) {
  if (props.modalOpen && props.location.pathname === "/portfolio") {
    return (
      <div className="MenuAlternative" onClick={props.closeModal}>
        <i className="bi bi-arrow-left-short"></i>
      </div>
    );
  }
  return (
    <Link to="/" className="MenuAlternative">
      <i className="bi bi-arrow-left-short"></i>
    </Link>
  );
}
