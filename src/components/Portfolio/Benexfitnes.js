import React from "react";
import { Segment, Icon, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import Galerija from "./Galerija";
import slike from "./Slike";
// import "../css/Portfolio.css";

const Benex = () => (
  <div className="gallery">
    <Segment>
      <h3>"Benex fitnes centar" u Capital Plaza Centru (Podgorica)</h3>
      <Button id="backButton" floated="right" as={Link} to="/">
        <Icon name="angle left" size="big" />
      </Button>
      <p>
        Glavni projekat “Benex fitnes centra” (cca 950m2), na Capital Plaza
        Centru, Podgorica ( saradnik na projektu )
      </p>
      <Galerija photos={slike.benex} />
    </Segment>
  </div>
);
export default Benex;
