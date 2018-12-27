import React from "react";
import { Segment, Icon, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import Galerija from "./Galerija";
import slike from "./Slike";

const Oaza = () => (
  <span className="porfolio">
    <div className="portfolio--gallery">
      <h3>Poslovno-apartmanski objekat "Oaza"</h3>
      <Button id="backButton" floated="right" as={Link} to="/">
        <Icon name="angle left" size="big" />
      </Button>
      <p>
        Glavni projekat poslovno-apartmanskog objekta “Oaza” (cca 6690 m 2) na
        UP br.6 u zoni B DUP-a ” Zona centralnih djelatnosti- Cetinjski put”,
        Podgorica ( autor i koordinator )
      </p>
      <Galerija photos={slike.oaza} />
    </div>
  </span>
);

export default Oaza;
