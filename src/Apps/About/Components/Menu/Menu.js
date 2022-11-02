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
      <nav className="Menu">
        <div
          className={this.state.open ? "burger burger-open" : "burger"}
          onClick={this.openMenu}
        >
          <span></span>
        </div>
        <div className={this.state.open ? "options options-open" : "options"}>
          <div className={this.state.open ? "option option-open " : "option"}>
            <i class="bi bi-house-door-fill"></i>
            <h3>home</h3>
          </div>
          <div className={this.state.open ? "option option-open" : "option"}>
            <i className="bi bi-person-fill"></i>
            <h3>about</h3>
          </div>
          <div className={this.state.open ? "option option-open" : "option"}>
            <i className="bi bi-briefcase-fill"></i>
            <h3>portfolio</h3>
          </div>
          <div
            className={
              this.state.open
                ? "option option-open contact-open"
                : "option contact"
            }
          >
            <i className="bi bi-chat-fill"></i>
            <h3>contact</h3>
          </div>
        </div>
      </nav>
    );
  }
}

export default Menu;
