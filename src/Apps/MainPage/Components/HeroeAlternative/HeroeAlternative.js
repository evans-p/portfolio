import React from "react";

import "./HeroeAlternative.css";

class HeroeAlternative extends React.Component {
  render() {
    return (
      <div className="HeroeAlternative">
        <div className="menu-option">
          <i className="bi bi-person-fill"></i>
          <span>About me</span>
        </div>
        <div className="menu-option">
          <i className="bi bi-briefcase-fill"></i>
          <span>portfolio</span>
        </div>
        <div className="menu-option">
          <i class="bi bi-chat-fill"></i>
          <span>get in touch</span>
        </div>
      </div>
    );
  }
}

export default HeroeAlternative;
