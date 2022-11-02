import React from "react";

import MainPage from "./Apps/MainPage/MainPage";
import About from "./Apps/About/About";

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
        {/* <MainPage /> */}
        <About width={this.state.width} />
      </div>
    );
  }
}

export default App;
