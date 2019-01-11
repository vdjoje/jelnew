import React, { Component } from "react";
import { Button, Icon } from "semantic-ui-react";
import InlineSVG from "svg-inline-react";
import { Link } from "react-scroll";
import { logo, logoGray, bars, close } from "../../assets/svg";

export default class TopbarRes extends Component {
  constructor() {
    super();
    this.state = { resmenuVisible: false };
    this.state = { submenuVisible: false };
  }

  openMenu = e => {
    this.setState({ resmenuVisible: !this.state.resmenuVisible });
    this.setState({ submenuVisible: false });
  };

  closeMenu = e => {
    this.setState({ resmenuVisible: false });
  };

  openNav = e => {
    this.setState({ submenuVisible: !this.state.submenuVisible });
    this.setState({ resmenuVisible: false });
  };

  closeNav = e => {
    this.setState({ submenuVisible: false });
  };

  render() {
    return (
      <div className="res">
        <Link id="res--logo" to="home" spy={true} smooth={true} duration={500}>
          <InlineSVG src={logo} />
        </Link>
        <Link onClick={this.openMenu} id="res--button">
          {this.state.resmenuVisible ? (
            <InlineSVG src={close} />
          ) : (
            <InlineSVG src={bars} />
          )}
        </Link>
        {this.state.resmenuVisible ? (
          <div className="res--menu">
            <Link
              onClick={this.closeMenu}
              to="usluge"
              smooth={true}
              duration={500}
            >
              <a>Usluge</a>
            </Link>
            <a onClick={this.openNav}>Portfolio</a>
            <Link
              onClick={this.closeMenu}
              to="omeni"
              smooth={true}
              duration={500}
            >
              <a>O meni</a>
            </Link>
            <Link
              onClick={this.closeMenu}
              to="kontakt"
              smooth={true}
              duration={500}
            >
              <a>Kontakt</a>
            </Link>
            <div>
              <Button
                id="res--social"
                href="https://www.facebook.com/jelena.miskovic.50"
                target="_blank"
              >
                <Icon size="large" name="facebook f" />
              </Button>
              <Button
                id="res--social"
                href="https://www.instagram.com/ena_jel/"
                target="_blank"
              >
                <Icon size="large" name="instagram" />
              </Button>
            </div>
            <a id="res--grayLogo">
              <InlineSVG src={logoGray} />
            </a>
          </div>
        ) : null}
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
