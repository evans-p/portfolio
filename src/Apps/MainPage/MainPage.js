import React from "react";

import "./MainPage.css";

import Heroe from "./Components/Heroe/Heroe";
import Loader from "./Components/Loader/Loader";
import HeroeAlternative from "./Components/HeroeAlternative/HeroeAlternative";
import Menu from "./Components/Menu/Menu";

class MainPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loaded: false,
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ loaded: true });
    }, 2000);
  }

  render() {
    return (
      <div className="MainPage">
        {this.props.width < 950 ? <HeroeAlternative /> : null}
        {this.props.width >= 950 ? <Menu /> : null}
        {this.props.width >= 950 ? <Heroe /> : null}
        {!this.state.loaded ? <Loader /> : null}
      </div>
    );
  }
}

export default MainPage;
