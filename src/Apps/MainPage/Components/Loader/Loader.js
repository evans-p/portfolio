import React from "react";

import "./Loader.css";

class Loader extends React.Component {
  render() {
    return (
      <div className="Loader">
        <div className="top">
          <h1>Evans</h1>
        </div>
        <div className="mid">
          <div className="left"></div>
        </div>
        <div className="bottom">
          <h1>Poulakis</h1>
        </div>
      </div>
    );
  }
}

export default Loader;
