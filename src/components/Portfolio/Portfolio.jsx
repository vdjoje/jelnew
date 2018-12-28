import React, { Component } from "react";
import { Icon, Button } from "semantic-ui-react";
import Galerija from "./Galerija";
import { Link } from "react-router-dom";

export default class Portfolio extends Component {
  render() {
    return (
      <span className="porfolio">
        <div className="portfolio--gallery">
          <Button id="backButton" as={Link} to="/">
            <Icon name="close" size="big" />
          </Button>
          <div className="portfolio--frame">
            <h2>{this.props.numbers} </h2>
            <h3>{this.props.heading}</h3>
            <p>{this.props.text}</p>
            <h4>{this.props.position}</h4>
            <div className="portfolio--images">
              <Galerija photos={this.props.pictures} />
            </div>
          </div>
        </div>
      </span>
    );
  }
}
