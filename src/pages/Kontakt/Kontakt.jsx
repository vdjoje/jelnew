import React from "react";
import { Button, Icon, Image } from "semantic-ui-react";
import { Element, Link } from "react-scroll";
import logo from "../../logo.svg";
import uon2x from "../../uon2x.png";

const Kontakt = () => {
  return (
    <span className="kontakt">
      <Element name="kontakt">
        <p className="kontakt--naslov">KONTAKT</p>
      </Element>
      <div className="kontakt--ime">
        <p>jelena</p>
        <p>miskovic</p>
      </div>
      <div className="kontakt--info">
        <a href="tel:382-67-254-844">+382 67 / 254 - 844</a>
        <br />
        <br />
        <br />
        <a
          className="email"
          title="My email"
          href="mailto:arhmiskovic@gmail.com"
        >
          arhmiskovic@gmail.com
        </a>
        <div style={{ marginTop: "50px" }}>
          <Button
            id="faceDugme"
            href="https://www.facebook.com/jelena.miskovic.50"
            target="_blank"
          >
            <Icon size="big" name="facebook f" />
          </Button>
          <Button
            id="instaDugme"
            href="https://www.instagram.com/ena_jel/"
            target="_blank"
          >
            <Icon size="big" name="instagram" />
          </Button>
        </div>
      </div>
      <Image
        id="logoMj"
        src={logo}
        size="small"
        as={Link}
        spy={true}
        smooth={true}
        duration={500}
        to="home"
      />
      <div id="copy">Copyright by Jelena Mišković </div>
      <p id="copyRight">Developed by</p>
      <Image id="copyLogo" href="https://uon.rs/" target="_blank" src={uon2x} />
    </span>
  );
};

export default Kontakt;
