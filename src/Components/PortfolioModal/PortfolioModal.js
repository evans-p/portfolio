import React from "react";

import SecondaryButton from "../SecondaryButton/SecondaryButton";
import MainButton from "../MainButton/MainButton";

import "./PortfolioModal.css";

class PortfolioModal extends React.Component {
  render() {
    return (
      <div className="PortfolioModal">
        <div className="wrapper">
          <img src={this.props.img} alt={this.props.title} />
          <div className="row">
            <div className="col d-flex flex-column align-items-start">
              <h3>{this.props.title}</h3>
              <ul>
                {this.props.info
                  ? this.props.info.map((el) => {
                      return (
                        <li key={Math.floor(999999999 * Math.random())}>
                          {el[0]}
                          <span className="label">{el[1]}</span>:
                          <span className="value">{el[2]}</span>
                        </li>
                      );
                    })
                  : null}
              </ul>
              {this.props.link ? (
                <a
                  href={this.props.link}
                  target="_blank"
                  style={{ marginBottom: "30px" }}
                >
                  <MainButton
                    text="Preview"
                    icon={<i className="bi bi-box-arrow-up-right"></i>}
                  />
                </a>
              ) : null}
            </div>
            {this.props.width >= 950 ? (
              <div className="col d-flex justify-content-end">
                <SecondaryButton
                  text="close"
                  icon={<i className="bi bi-x-lg"></i>}
                  marginRight={30}
                  action={this.props.closeModal}
                />
              </div>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

export default PortfolioModal;
