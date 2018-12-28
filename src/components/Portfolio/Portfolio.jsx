import React, { Component } from "react";
import { Segment, Icon, Button } from "semantic-ui-react";
import Galerija from "./Galerija";
import { Link } from "react-router-dom";

export default class Portfolio extends Component {
  render() {
    return (
      <div className="gallery">
        <Segment>
          <h3>{this.props.heading}</h3>
          <Button id="backButton" floated="right" as={Link} to="/">
            <Icon name="angle left" size="big" />
          </Button>
          <p>{this.props.text}</p>
          <Galerija photos={this.props.pictures} />
        </Segment>
      </div>
    );
  }
}
