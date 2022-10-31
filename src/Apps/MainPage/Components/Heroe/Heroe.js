import React from "react";

import "./Heroe.css";
import "./carousel.scss";

import portrait from "../Assets/img_portfolio.jpg";

class Heroe extends React.Component {
  render() {
    return (
      <div className="Heroe">
        <div className="col left">
          <img
            src={portrait}
            className="portrait"
            alt="portrait"
            loading="lazy"
          />
        </div>
        <div className="col right">
          <h3>Hi there!</h3>
          {/* <h1>
            I'm <span>a Software Engineer</span>
          </h1> */}

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
            England. I strives to build immersive and beautiful web applications
            through carefully crafted code and user-centric design.
          </p>
          <div className="buttons">
            <button className="about">
              <i className="bi bi-person-fill"></i> more about me
            </button>
            <button className="portfolio">
              <i className="bi bi-briefcase-fill"></i> portfolio
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Heroe;
