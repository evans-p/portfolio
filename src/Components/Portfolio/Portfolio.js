import React from "react";
import { CSSTransition } from "react-transition-group";

import Header from "../Header/Header";
import PortfolioItem from "../PortfolioItem/PortfolioItem";
import PortfolioModal from "../PortfolioModal/PortfolioModal";

import "./Portfolio.css";

import { portfolioData, portfolioHeader } from "../../Data/porfolioData";

class Portfolio extends React.Component {
  componentDidMount() {
    this.props.closeModal();
  }

  renderPortfolioItems() {
    if (this.props.width >= 992) {
      return (
        <div className="row gx-4">
          <div className="col-12 col-md-6 col-lg-4">
            {portfolioData
              .slice(0, Math.floor(portfolioData.length / 3))
              .map((el, idx) => (
                <PortfolioItem
                  key={el.id}
                  {...el}
                  openModal={this.props.openModal}
                  closeModal={this.props.closeModal}
                />
              ))}
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            {portfolioData
              .slice(
                Math.floor(portfolioData.length / 3),
                Math.floor((2 * portfolioData.length) / 3)
              )
              .map((el, idx) => (
                <PortfolioItem
                  key={el.id}
                  {...el}
                  openModal={this.props.openModal}
                  closeModal={this.props.closeModal}
                />
              ))}
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            {portfolioData
              .slice(Math.floor((2 * portfolioData.length) / 3))
              .map((el, idx) => (
                <PortfolioItem
                  key={el.id}
                  {...el}
                  openModal={this.props.openModal}
                  closeModal={this.props.closeModal}
                />
              ))}
          </div>
        </div>
      );
    }

    if (this.props.width >= 768) {
      return (
        <div className="row gx-4">
          <div className="col-12 col-md-6 col-lg-4">
            {portfolioData
              .slice(0, Math.floor(portfolioData.length / 2))
              .map((el, idx) => (
                <PortfolioItem
                  key={el.id}
                  {...el}
                  openModal={this.props.openModal}
                  closeModal={this.props.closeModal}
                />
              ))}
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            {portfolioData
              .slice(Math.floor(portfolioData.length / 2))
              .map((el, idx) => (
                <PortfolioItem
                  key={el.id}
                  {...el}
                  openModal={this.props.openModal}
                  closeModal={this.props.closeModal}
                />
              ))}
          </div>
        </div>
      );
    }

    return (
      <div className="row gx-4">
        <div className="col-12 col-md-6 col-lg-4">
          {portfolioData.map((el, idx) => (
            <PortfolioItem
              key={el.id}
              {...el}
              openModal={this.props.openModal}
              closeModal={this.props.closeModal}
            />
          ))}
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="Portfolio">
        <Header {...portfolioHeader} />
        <div className="container">{this.renderPortfolioItems()}</div>
        <CSSTransition
          in={this.props.modalOpen}
          nodeRef={React.createRef()}
          timeout={300}
          classNames="fade"
          unmountOnExit
        >
          <div className="overlay" onClick={this.props.closeModal}></div>
        </CSSTransition>

        <CSSTransition
          in={this.props.modalOpen}
          nodeRef={this.nodeRef}
          timeout={300}
          classNames="slide-in"
          unmountOnExit
        >
          <PortfolioModal
            {...this.props.modalData}
            width={this.props.width}
            closeModal={this.props.closeModal}
          />
        </CSSTransition>
      </div>
    );
  }
}

export default Portfolio;
