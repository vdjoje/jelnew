import React from "react";
import { Segment, Icon, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import Galerija from "./Galerija";
import slike from "./Slike";
// import "../css/Portfolio.css";

const Atlas = () => (
  <div className="gallery">
    <Segment>
      <h3>Atlas Banka u Capital Plaza Centru (Podgorica)</h3>
      <Button id="backButton" floated="right" as={Link} to="/">
        <Icon name="angle left" size="big" />
      </Button>
      <p>
        Glavni projekt enterijera filijale Atlas banke u Capital Plazi (cca
        200m2) ,Podgorica ( koautor filijale, saradnik na projektu )
      </p>
      <Galerija photos={slike.atlas} />
    </Segment>
  </div>
);

export default Atlas;
