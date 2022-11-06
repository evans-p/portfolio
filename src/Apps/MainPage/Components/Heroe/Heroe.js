import React from "react";

import "./Heroe.css";
import "./carousel.scss";

import MainButton from "../../../UtilComponents/MainButton/MainButton";
import SecondaryButton from "../../../UtilComponents/SecondaryButton/SecondaryButton";

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
            <div class="frame">
              <div class="center">
                <div class="carousel">
                  <div class="pre">I'm </div>
                  <div class="change_outer">
                    <div class="change_inner">
                      <div class="element">Evans Poulakis</div>
                      <div class="element">an Engineer</div>
                      <div class="element">a Developer</div>
                      <div class="element">a Designer</div>
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
