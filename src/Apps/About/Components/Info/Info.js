import React from "react";

import "./Info.css";

import portrait from "../../Assets/img_portfolio.jpg";

class Info extends React.Component {
  render() {
    return (
      <div className="Info">
        <div className="left">
          <img src={portrait} alt="portrait" loading="lazy" />
        </div>
        <div className="right">
          <ul>
            <li>
              <h6>
                <span>First Name</span>Evans
              </h6>
            </li>
            <li>
              <h6>
                <span>Last Name</span>Poulakis
              </h6>
            </li>
            <li>
              <h6>
                <span>Birthdate</span>27 February 1992
              </h6>
            </li>
            <li>
              <h6>
                <span>Nationality</span>Greek
              </h6>
            </li>
            <li>
              <h6>
                <span>Address</span>Athens Greece
              </h6>
            </li>
            <li>
              <h6>
                <span>Languages</span>Greek English French
              </h6>
            </li>
          </ul>
          <ul>
            <li>
              <h6>
                <span>First Name</span>Evans
              </h6>
            </li>
            <li>
              <h6>
                <span>Last Name</span>Poulakis
              </h6>
            </li>
            <li>
              <h6>
                <span>Birthdate</span>27 February 1992
              </h6>
            </li>
            <li>
              <h6>
                <span>Nationality</span>Greek
              </h6>
            </li>
            <li>
              <h6>
                <span>Address</span>Athens Greece
              </h6>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Info;
