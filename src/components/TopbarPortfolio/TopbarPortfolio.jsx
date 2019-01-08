import React, { Component } from "react";
import { Button, Icon } from "semantic-ui-react";
import logoGray from "../../logogray.svg";
import { Link } from "react-router-dom";
import InlineSVG from "svg-inline-react";
import { arrowDown } from "../../assets/svg";
import { logo } from "../../assets/svg";

export default class TopbarPortfolio extends Component {
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
      <header>
        <div className="portBar">
          <nav id="port--button">
            <a onClick={this.openNav}>Portfolio</a>
            <InlineSVG
              id="testttt"
              className={`${this.state.submenuVisible ? "opened" : ""}`}
              src={arrowDown}
            />
          </nav>
          <Link id="topPort--logo" to="/">
            <InlineSVG className="header--logo" src={logo} />
          </Link>
        </div>
        {this.state.submenuVisible ? (
          <div id="subnav" className="header--submenu">
            <div className="header--subnav">
              <h3>01.</h3>
              <a href="/oaza">Poslovni Apartmanski Objekat ‘OAZA’</a>
              <h3>02.</h3>
              <a href="/ambasada">
                Ambasada UAE u Capital Plaza Centru (Podgorica)
              </a>
              <h3>03.</h3>
              <a href="/atlas">
                Atlas banka u Capital Plaza Centru (Podgorica)
              </a>
              <h3>04.</h3>
              <a href="/bogdanov">
                Stambeno-poslovni objekat “Bogdanov kraj” (Cetinje)
              </a>
              <h3>05.</h3>
              <a href="/benexfitnes">
                “Benex fitnes centar” u Capital Plaza Centru (Podgorica)
              </a>
              <h3>06.</h3>
              <a href="/stambenicetinje">Stambeni objekat (Cetinje)</a>
              <h3>07.</h3>
              <a href="/vila">Vila na primorju</a>
              <h3>08.</h3>
              <a href="/planinski">Planinski stan</a>
              <div id="header--kontakt">
                <a href="tel:382-67-254-844">+382 67 / 254 - 844</a>
                <br />
                <a
                  // className="kontakt--email"
                  title="My email"
                  href="mailto:arhmiskovic@gmail.com"
                >
                  arhmiskovic@gmail.com
                </a>
              </div>
              <div className="header--icons">
                <Button
                  id="header--button"
                  href="https://www.facebook.com/jelena.miskovic.50"
                  target="_blank"
                >
                  <Icon size="large" name="facebook f" />
                </Button>
                <Button
                  id="header--button"
                  href="https://www.instagram.com/ena_jel/"
                  target="_blank"
                >
                  <Icon size="large" name="instagram" />
                </Button>
              </div>
            </div>
          </div>
        ) : null}
      </header>
    );
  }
}
