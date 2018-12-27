import React from "react";
import { Segment, Icon, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import Galerija from "./Galerija";
import slike from "./Slike";
// import "../css/Portfolio.css";

const Stambeni = () => (
  <div className="gallery">
    <Segment>
      <h3>Stambeni objekat (Cetinje)</h3>
      <Button id="backButton" floated="right" as={Link} to="/">
        <Icon name="angle left" size="big" />
      </Button>
      <p>Stambeni objekat na UP 523, Cetinje ( autor i koordinator )</p>
      <Galerija photos={slike.stambeni} />
    </Segment>
  </div>
);

export default Stambeni;
