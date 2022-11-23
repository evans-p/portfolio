import React from "react";

import "./Loader.css";

class Loader extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mounted: false,
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ mounted: true });
    }, 0);
  }

  render() {
    return (
      <div className="Loader">
        <div className={this.state.mounted ? "top top-mounted" : "top"}>
          <h1 className={this.state.mounted ? "h1-mounted" : ""}>Evans</h1>
        </div>
        <div className={this.state.mounted ? "mid mid-mounted" : "mid"}>
          <div className="center"></div>
        </div>
        <div
          className={this.state.mounted ? "bottom bottom-mounted" : "bottom"}
        >
          <h1 className={this.state.mounted ? "h1-mounted" : ""}>Poulakis</h1>
        </div>
      </div>
    );
  }
}

export default Loader;
