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
                <li>
                  <i className="bi bi-file-earmark-text"></i>
                  <span className="label">project</span>:
                  <span className="value">website</span>
                </li>
                <li>
                  <i className="bi bi-file-earmark-text"></i>
                  <span className="label">project</span>:
                  <span className="value">website</span>
                </li>
                <li>
                  <i className="bi bi-file-earmark-text"></i>
                  <span className="label">project</span>:
                  <span className="value">website</span>
                </li>
                <li>
                  <i className="bi bi-file-earmark-text"></i>
                  <span className="label">project</span>:
                  <span className="value">website</span>
                </li>
              </ul>
              <MainButton
                text="Preview"
                icon={<i className="bi bi-box-arrow-up-right"></i>}
              />
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
