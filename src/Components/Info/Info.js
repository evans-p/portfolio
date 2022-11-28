import React from "react";
import { Link } from "react-router-dom";

import "./Info.css";

import MainButton from "../MainButton/MainButton";

import CV from "../../Assets/CV_Poulakis_Evaggelos.pdf";

class Info extends React.Component {
  renderInfoLeft() {
    return (
      <ul
        className={
          this.props.width >= 992
            ? "col-6"
            : "col-6 d-flex flex-column align-items-end"
        }
      >
        {this.props.infoDataLeft.map((el) => {
          return (
            <li key={Math.floor(999999999 * Math.random())}>
              <h6
                className={
                  this.props.width >= 992
                    ? ""
                    : "d-flex flex-column align-items-end"
                }
              >
                <span>{el[0]}</span>
                {el[1]}
              </h6>
            </li>
          );
        })}
      </ul>
    );
  }

  renderInfoRight() {
    return (
      <ul
        className={
          this.props.width >= 992
            ? "col-6"
            : "col-6 d-flex flex-column align-items-start"
        }
      >
        {this.props.infoDataRight.map((el) => {
          return (
            <li key={Math.floor(999999999 * Math.random())}>
              <h6
                className={this.props.width >= 992 ? "" : "d-flex flex-column"}
              >
                <span>{el[0]}</span>
                {el[1]}
              </h6>
            </li>
          );
        })}
      </ul>
    );
  }

  render() {
    return (
      <div className="Info container">
        <div className="row">
          <div
            className={
              this.props.width >= 992
                ? "left col-12 col-lg-6 d-flex justify-content-end"
                : "left col-12 col-lg-6 d-flex justify-content-center"
            }
          >
            <img src={this.props.portrait} alt="portrait" loading="lazy" />
          </div>
          <div
            className={
              this.props.width >= 992
                ? "right col-12 col-lg-6 d-flex flex-column align-items-start justify-content-center"
                : "right col-12 col-lg-6 d-flex flex-column align-items-center justify-content-center mt-5"
            }
          >
            <div
              className={
                this.props.width >= 992
                  ? "row"
                  : "row d-flex justify-content-center"
              }
            >
              {this.renderInfoLeft()}
              {this.renderInfoRight()}
              <div
                className={
                  this.props.width >= 992
                    ? "col-12 px-0"
                    : "col d-flex justify-content-center align-items-center"
                }
              >
                <Link to={CV} download="CV_Poulakis_Evaggelos" target="_blank">
                  <MainButton
                    icon={<i className="bi bi-download"></i>}
                    text={"download my cv"}
                    // action={this.downloadPDF}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Info;
