import React, { Component } from "react";
import InlineSVG from "svg-inline-react";
import { logo } from "../../assets/svg";
import { Link } from "react-scroll";

export default class TopbarRes extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div style={{ position: "absolute" }}>
        <a>testtaa</a>
        <Link to="home" spy={true} smooth={true} duration={500}>
          <InlineSVG className="header--logo" src={logo} />
        </Link>
      </div>
    );
  }
}
