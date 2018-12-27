import React from "react";
import { Segment, Icon, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import Galerija from "./Galerija";
import slike from "./Slike";
// import "../css/Portfolio.css";

const Vila = () => (
  <div className="gallery">
    <Segment>
      <h3>Enterijer vile na primorju</h3>
      <Button id="backButton" floated="right" as={Link} to="/">
        <Icon name="angle left" size="big" />
      </Button>
      <p>Enterijer vile na primorju</p>
      <Galerija photos={slike.vila} />
    </Segment>
  </div>
);

export default Vila;
