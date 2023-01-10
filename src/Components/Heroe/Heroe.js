import React from "react";
import { Link } from "react-router-dom";
import "./Heroe.css";
import "./carousel.scss";

import MainButton from "../MainButton/MainButton";
import SecondaryButton from "../SecondaryButton/SecondaryButton";

import portrait from "../../Assets/img_portfolio.jpg";

class Heroe extends React.Component {
  render() {
    return (
      <div className="Heroe  d-flex align-items-center">
        <div className="row">
          <div className="col d-flex justify-content-end">
            <img src={portrait} alt="portrait" />
          </div>
          <div className="col right">
            <h3>Hi there!</h3>
            <div className="frame">
              <div className="center">
                <div className="carousel">
                  <div className="pre">I'm </div>
                  <div className="change_outer">
                    <div className="change_inner">
                      <div className="element">Evans Poulakis</div>
                      <div className="element">an Engineer</div>
                      <div className="element">a Developer</div>
                      <div className="element">a Designer</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <p>
              I'm a software engineer based in Athens, Greece. Passionate about
              building beautiful applications carefully trough crafted code and
              user-centric design.
            </p>
            <div className="buttons">
              <Link to="/about">
                <MainButton
                  icon={<i className="bi bi-person-fill"></i>}
                  text={"more about me"}
                />
              </Link>
              <Link to="/portfolio">
                <SecondaryButton
                  icon={<i className="bi bi-briefcase-fill"></i>}
                  text={"portfolio"}
                  marginLeft={20}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Heroe;
