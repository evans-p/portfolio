import React from "react";

import "./Menu.css";
class Menu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };

    this.openMenu = this.openMenu.bind(this);
  }

  openMenu() {
    let open = this.state.open;
    this.setState({ open: !open });
  }

  render() {
    return (
      <div className="Menu">
        <div className="burger">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
    );
  }
}

export default Menu;
