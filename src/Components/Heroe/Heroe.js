import React from "react";

import "./Heroe.css";
import "./carousel.scss";

import MainButton from "../MainButton/MainButton";
import SecondaryButton from "../SecondaryButton/SecondaryButton";

import portrait from "../../Assets/img_portfolio.jpg";

class Heroe extends React.Component {
  render() {
    return (
      <div className="Heroe  d-flex align-items-center">
        {/* <div className="Heroe container d-flex align-items-center"> */}
        <div className="row">
          <div className="col d-flex justify-content-end">
            <img src={portrait} alt="portrait" loading="lazy" />
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
              I'm a Freelance UI/UX Designer and Developer based in London,
              England. I strives to build immersive and beautiful web
              applications through carefully crafted code and user-centric
              design.
            </p>
            <div className="buttons">
              <MainButton
                icon={<i className="bi bi-person-fill"></i>}
                text={"more about me"}
              />
              <SecondaryButton
                icon={<i className="bi bi-briefcase-fill"></i>}
                text={"portfolio"}
                marginLeft={20}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Heroe;