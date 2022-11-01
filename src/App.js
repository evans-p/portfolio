import React from "react";

import MainPage from "./Apps/MainPage/MainPage";
import About from "./Apps/About/About";

class App extends React.Component {
  render() {
    return (
      <div>
        {/* <MainPage /> */}
        <About />
      </div>
    );
  }
}

export default App;
