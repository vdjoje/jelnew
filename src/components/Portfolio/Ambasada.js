import React from "react";
import { Segment, Icon, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import Galerija from "./Galerija";
import slike from "./Slike";
// import "../css/Portfolio.css";

const Ambasada = () => (
  <div className="gallery">
    <Segment>
      <h3>Ambasada UAE u Capital Plaza Centru (Podgorica)</h3>
      <Button id="backButton" floated="right" as={Link} to="/">
        <Icon name="angle left" size="big" />
      </Button>
      <p>
        Glavni projekat enterijera Ambasade UAE u Capital Plaza Centru (cca
        1095m2), Podgorica ( saradnik na projektu )
      </p>
      <Galerija photos={slike.ambasada} />
    </Segment>
  </div>
);

export default Ambasada;
