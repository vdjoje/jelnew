import React, { Component } from "react";
import { Image, Button, Icon } from "semantic-ui-react";
import logoGray from "../../logogray.svg";
import { Link } from "react-scroll";
import InlineSVG from "svg-inline-react";
import { logo, arrowDown, arrowTest } from "../../assets/svg";

export default class Topbar extends Component {
  constructor() {
    super();
    this.state = { submenuVisible: false };
  }

  openNav = e => {
    this.setState({ submenuVisible: !this.state.submenuVisible });
  };

  closeNav = e => {
    this.setState({ submenuVisible: false });
  };

  closeResNav = e => {
    this.setState({ resVisible: false });
  };

  render() {
    let prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
      let currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
      } else {
        document.getElementById("navbar").style.top = "-70px";
      }
      prevScrollpos = currentScrollPos;
    };

    return (
      <header id="navbar">
        <div className="header--container">
          <nav>
            <Link
              onClick={this.closeNav}
              to="usluge"
              spy={true}
              smooth={true}
              duration={500}
            >
              Usluge
            </Link>
            <a onClick={this.openNav}>
              Portfolio
              <InlineSVG
                className={`${this.state.submenuVisible ? "opened" : ""}`}
                src={arrowDown}
              />
            </a>
          </nav>
          <Link to="home" spy={true} smooth={true} duration={500}>
            <InlineSVG className="header--logo" src={logo} />
          </Link>
          <nav>
            <Link
              onClick={this.closeNav}
              to="omeni"
              spy={true}
              smooth={true}
              duration={500}
            >
              O meni
            </Link>
            <Link
              onClick={this.closeNav}
              to="kontakt"
              spy={true}
              smooth={true}
              duration={500}
            >
              Kontakt
            </Link>
          </nav>
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
