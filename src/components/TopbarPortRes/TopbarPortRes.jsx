import React, { Component } from "react";
import { Link } from "react-router-dom";
import InlineSVG from "svg-inline-react";
import { arrowDown } from "../../assets/svg";
import { logo } from "../../assets/svg";

export default class TopbarPortfolioRes extends Component {
  constructor() {
    super();
    this.state = { submenuVisible: false };
    this.state = { resVisible: false };

    console.log(this.props);
  }

  openNav = e => {
    this.setState({ submenuVisible: !this.state.submenuVisible });
    this.setState({ resVisible: false });
  };

  closeNav = e => {
    this.setState({ submenuVisible: false });
  };

  openResNav = e => {
    this.setState({ resVisible: !this.state.resVisible });
  };

  closeResNav = e => {
    this.setState({ resVisible: false });
  };

  render() {
    return (
      <div className="portfRes">
        <div>
          <nav id="portfRes--button">
            <a onClick={this.openNav}>Portfolio</a>
            <InlineSVG
              id="portfRes-arrow"
              className={`${this.state.submenuVisible ? "opened" : ""}`}
              src={arrowDown}
            />
          </nav>
          <Link id="topPort--logo" to="/">
            <InlineSVG className="header--logo" src={logo} />
          </Link>
        </div>
        {this.state.submenuVisible ? (
          <div className="res--submenu">
            <div className="res--subnav">
              <ol>
                <li>
                  <a href="/oaza">Poslovni Apartmanski Objekat ‘OAZA’</a>
                </li>
                <li>
                  <a href="/ambasada">Ambasada UAE u Capital Plaza Centru</a>
                </li>
                <li>
                  <a href="/atlas">Atlas banka u Capital Plaza Centru</a>
                </li>
                <li>
                  <a href="/bogdanov">
                    Stambeno-poslovni objekat “Bogdanov kraj”
                  </a>
                </li>
                <li>
                  <a href="/benexfitnes">
                    “Benex fitnes centar” u Capital Plaza Centru
                  </a>
                </li>
                <li>
                  <a href="/stambenicetinje">Stambeni objekat </a>
                </li>
                <li>
                  {" "}
                  <a href="/vila">Vila na primorju</a>
                </li>
                <li>
                  <a href="/planinski">Planinski stan</a>
                </li>
              </ol>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}
