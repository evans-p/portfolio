import React from "react";

import "./Info.css";

import portrait from "../../Assets/img_portfolio.jpg";

class Info extends React.Component {
  render() {
    return (
      <div className="Info row">
        <div
          className={
            this.props.width >= 992
              ? "left col-12 col-lg-6 d-flex justify-content-end"
              : "left col-12 col-lg-6 d-flex justify-content-center"
          }
        >
          <img src={portrait} alt="portrait" loading="lazy" />
        </div>
        <div
          className={
            this.props.width >= 992
              ? "right col-12 col-lg-6 d-flex align-items-start justify-content-center"
              : "right col-12 col-lg-6 d-flex align-items-center justify-content-center mt-5"
          }
        >
          <div
            className={
              this.props.width >= 992
                ? "row"
                : "row d-flex justify-content-center"
            }
          >
            <ul
              className={
                this.props.width >= 992
                  ? "col-6"
                  : "col-6 d-flex flex-column align-items-end"
              }
            >
              <li>
                <h6
                  className={
                    this.props.width >= 992
                      ? ""
                      : "d-flex flex-column align-items-end"
                  }
                >
                  <span>First Name</span>Evans
                </h6>
              </li>
              <li>
                <h6
                  className={
                    this.props.width >= 992
                      ? ""
                      : "d-flex flex-column align-items-end"
                  }
                >
                  <span>Last Name</span>Poulakis
                </h6>
              </li>
              <li>
                <h6
                  className={
                    this.props.width >= 992
                      ? ""
                      : "d-flex flex-column align-items-end"
                  }
                >
                  <span>Birthdate</span>27 February 92
                </h6>
              </li>
              <li>
                <h6
                  className={
                    this.props.width >= 992
                      ? ""
                      : "d-flex flex-column align-items-end"
                  }
                >
                  <span>Nationality</span>Greek
                </h6>
              </li>
              <li>
                <h6
                  className={
                    this.props.width >= 992
                      ? ""
                      : "d-flex flex-column align-items-end"
                  }
                >
                  <span>Languages</span>English French
                </h6>
              </li>
            </ul>
            <ul
              className={
                this.props.width >= 992
                  ? "col-6"
                  : "col-6 d-flex flex-column align-items-start"
              }
            >
              <li>
                <h6
                  className={
                    this.props.width >= 992 ? "" : "d-flex flex-column"
                  }
                >
                  <span>Experience</span>None
                </h6>
              </li>
              <li>
                <h6
                  className={
                    this.props.width >= 992 ? "" : "d-flex flex-column"
                  }
                >
                  <span>Address</span>Athens Greece
                </h6>
              </li>
              <li>
                <h6
                  className={
                    this.props.width >= 992 ? "" : "d-flex flex-column"
                  }
                >
                  <span>Phone</span>+30 6978 418 570
                </h6>
              </li>
              <li>
                <h6
                  className={
                    this.props.width >= 992 ? "" : "d-flex flex-column"
                  }
                >
                  <span>Email</span>evanspoulaki@gmail.com
                </h6>
              </li>
            </ul>
            <button className="col-12">
              <i class="bi bi-download"></i>download my cv
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Info;
