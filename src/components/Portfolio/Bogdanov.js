import React from "react";
import { Segment, Icon, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import Galerija from "./Galerija";
import slike from "./Slike";
// import "../css/Portfolio.css";

const Bogdanov = () => (
  <div className="gallery">
    <Segment>
      <h3>Stambeno-poslovni objekat "Bogdanov kraj" (Cetinje)</h3>
      <Button id="backButton" floated="right" as={Link} to="/">
        <Icon name="angle left" size="big" />
      </Button>
      <p>
        Glavni projekat stambeno-poslovnog objekta (cca 645 m2) na UP br. 543,
        DUP-a „Bogdanov kraj“, Cetinje ( vodeći i odgovorni projektant )
      </p>
      <Galerija photos={slike.bogdanov} />
    </Segment>
  </div>
);

export default Bogdanov;
