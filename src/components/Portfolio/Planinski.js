import React from "react";
import { Segment, Icon, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import Galerija from "./Galerija";
import slike from "./Slike";
// import "../css/Portfolio.css";

const Planinski = () => (
  <div className="gallery">
    <Segment>
      <h3>Enterijer planinskog stana</h3>
      <Button id="backButton" floated="right" as={Link} to="/">
        <Icon name="angle left" size="big" />
      </Button>
      <p>Enterijer planinskog stana</p>
      <Galerija photos={slike.planinski} />
    </Segment>
  </div>
);

export default Planinski;
