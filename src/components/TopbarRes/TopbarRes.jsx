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
      <div className="res">
        <a>testtaa</a>
        <Link id="res--logo" to="home" spy={true} smooth={true} duration={500}>
          <InlineSVG src={logo} />
        </Link>
        <a>menu</a>
      </div>
    );
  }
}
