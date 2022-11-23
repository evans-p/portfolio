import React from "react";

import Header from "../Header/Header";
import PortfolioItem from "../PortfolioItem/PortfolioItem";

import "./Portfolio.css";

class Portfolio extends React.Component {
  renderPortfolioItems() {
    const tmp = new Array(11).fill(0);

    if (this.props.width >= 992) {
      return (
        <div className="row gx-4">
          <div className="col-12 col-md-6 col-lg-4">
            {tmp.slice(0, 1 + Math.floor(tmp.length / 3)).map((el, idx) => (
              <PortfolioItem key={Math.floor(9999999 * Math.random)} id={idx} />
            ))}
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            {tmp
              .slice(
                1 + Math.floor(tmp.length / 3),
                1 + Math.floor((2 * tmp.length) / 3)
              )
              .map((el, idx) => (
                <PortfolioItem
                  key={Math.floor(9999999 * Math.random)}
                  id={idx}
                />
              ))}
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            {tmp.slice(1 + Math.floor((2 * tmp.length) / 3)).map((el, idx) => (
              <PortfolioItem key={Math.floor(9999999 * Math.random)} id={idx} />
            ))}
          </div>
        </div>
      );
    }

    if (this.props.width >= 768) {
      return (
        <div className="row gx-4">
          <div className="col-12 col-md-6 col-lg-4">
            {tmp.slice(0, 1 + Math.floor(tmp.length / 2)).map((el, idx) => (
              <PortfolioItem key={Math.floor(9999999 * Math.random)} id={idx} />
            ))}
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            {tmp.slice(1 + Math.floor(tmp.length / 2)).map((el, idx) => (
              <PortfolioItem key={Math.floor(9999999 * Math.random)} id={idx} />
            ))}
          </div>
        </div>
      );
    }

    return (
      <div className="row gx-4">
        <div className="col-12 col-md-6 col-lg-4">
          {tmp.map((el, idx) => (
            <PortfolioItem key={Math.floor(9999999 * Math.random)} id={idx} />
          ))}
        </div>
      </div>
    );
  }

  render() {
    const headParameters = {
      titleMain: "my",
      titleSecondary: "portfolio",
      subtitle:
        "A FEW RECENT DESIGN AND CODING PROJECTS. WANT TO SEE MORE? EMAIL ME.",
    };
    return (
      <div className="Portfolio">
        <Header {...headParameters} />
        <div className="container">
          <div className="row gx-4">{this.renderPortfolioItems()}</div>
        </div>
      </div>
    );
  }
}

export default Portfolio;
