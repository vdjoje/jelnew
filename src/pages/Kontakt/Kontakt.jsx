import React from "react";
import { Button, Icon, Image } from "semantic-ui-react";
import { Element, Link } from "react-scroll";
import uon2x from "../../uon2x.png";
import InlineSVG from "svg-inline-react";
import { logo } from "../../assets/svg";

const Kontakt = () => {
  return (
    <div className="kontakt">
      <Element name="kontakt">
        <p id="kontakt" className="kontakt--naslov">
          KONTAKT
        </p>
      </Element>
      <div className="kontakt--content">
        <div className="kontakt--ime">
          <p>jelena</p>
          <p>mišković</p>
        </div>
        <div className="kontakt--info">
          <a href="tel:382-67-254-844">+382 67 / 254 - 844</a>
          <a
            // className="kontakt--email"
            title="My email"
            href="mailto:arhmiskovic@gmail.com"
          >
            arhmiskovic@gmail.com
          </a>
          <div className="kontakt--social">
            <Button
              id="kontakt--face"
              href="https://www.facebook.com/jelena.miskovic.50"
              target="_blank"
            >
              <Icon size="big" name="facebook f" />
            </Button>
            <Button
              id="kontakt--insta"
              href="https://www.instagram.com/ena_jel/"
              target="_blank"
            >
              <Icon size="big" name="instagram" />
            </Button>
          </div>
        </div>
        <Link spy={true} smooth={true} duration={500} to="home">
          <InlineSVG id="kontakt--logo" src={logo} />
        </Link>
      </div>
      <div className="kontakt--footer">
        <div className="kontakt--copy">Copyright by Jelena Mišković </div>
        <div className="kontakt--footLogo">
          <p className="kontakt--devby">Developed by</p>
          <Image
            id="kontakt--uon"
            href="https://uon.rs/"
            target="_blank"
            src={uon2x}
          />
        </div>
      </div>
    </div>
  );
};

export default Kontakt;
