import React from "react";
import { NavLink } from "react-router-dom";
import { ClickAwayListener } from "@mui/material";

import "./Menu.css";
class Menu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };

    this.openMenu = this.openMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  openMenu() {
    this.setState({ open: true });
  }
  closeMenu() {
    this.setState({ open: false });
  }
  toggleMenu() {
    let open = this.state.open;
    this.setState({ open: !open });
  }

  render() {
    return (
      <ClickAwayListener onClickAway={this.closeMenu}>
        <nav className="Menu">
          <div
            className={this.state.open ? "burger burger-open" : "burger"}
            onClick={this.toggleMenu}
          >
            <span></span>
          </div>
          <div className={this.state.open ? "options options-open" : "options"}>
            {/* <div className={this.state.open ? "option option-open " : "option"}>
            <i className="bi bi-house-door-fill"></i>
            <h3>home</h3>
          </div> */}
            <NavLink
              onClick={this.closeMenu}
              to="/"
              className={({ isActive }) => {
                {
                  if (isActive) {
                    return this.state.open
                      ? "option option-open active"
                      : "option active";
                  }
                  return this.state.open ? "option option-open" : "option";
                }
              }}
            >
              <i className="bi bi-house-door-fill"></i>
              <h3>home</h3>
            </NavLink>
            <NavLink
              onClick={this.closeMenu}
              to="/about"
              className={({ isActive }) => {
                {
                  if (isActive) {
                    return this.state.open
                      ? "option option-open active"
                      : "option active";
                  }
                  return this.state.open ? "option option-open" : "option";
                }
              }}
            >
              <i className="bi bi-person-fill"></i>
              <h3>about</h3>
            </NavLink>

            <NavLink
              onClick={this.closeMenu}
              to="/portfolio"
              className={({ isActive }) => {
                {
                  if (isActive) {
                    return this.state.open
                      ? "option option-open active"
                      : "option active";
                  }
                  return this.state.open ? "option option-open" : "option";
                }
              }}
            >
              <i className="bi bi-briefcase-fill"></i>
              <h3>portfolio</h3>
            </NavLink>
            <NavLink
              onClick={this.closeMenu}
              to="/contact"
              className={({ isActive }) => {
                {
                  if (isActive) {
                    return this.state.open
                      ? "option option-open active"
                      : "option active";
                  }
                  return this.state.open ? "option option-open" : "option";
                }
              }}
            >
              <i className="bi bi-chat-fill"></i>
              <h3>contact</h3>
            </NavLink>
          </div>
        </nav>
      </ClickAwayListener>
    );
  }
}

export default Menu;
