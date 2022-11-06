import React from "react";

import MainPage from "./Apps/MainPage/MainPage";
import About from "./Apps/About/About";
import Contract from "./Apps/Contact/Contact";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      width: window.innerWidth,
    };

    this.handleWindowResize = this.handleWindowResize.bind(this);
  }
  handleWindowResize() {
    this.setState({
      width: window.innerWidth,
    });
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleWindowResize);
  }
  render() {
    return (
      <div>
        {/* <MainPage width={this.state.width} /> */}
        {/* <About width={this.state.width} /> */}
        <Contract width={this.state.width} />
      </div>
    );
  }
}

export default App;
