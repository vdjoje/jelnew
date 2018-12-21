import React from "react";
import TriangleBack from "../../components/TriangleBack";
import { Image } from "semantic-ui-react";
import back from "../../images/backnew.png";
import backSmall from "../../images/backSmall.png";
import Usluge from "../Usluge";
import PortfolioHome from "../PortfolioHome";
import Omeni from "../Omeni";
import Kontakt from "../Kontakt";
import { Element } from "react-scroll";

const Home = () => {
  return (
    <span className="homeStart">
      <TriangleBack />
      <Element name="home">
        <Image id="homeStart--image" src={back} />
        <div className="homeStart--naslov">
          <p>Arhitektura… Dizajn… Kreacija… Umjetnost… Enterijer…</p>
          <h3>
            “An interior is the Natural projection of the soul”
            </h3>
          <h5>(Coco Chanel)</h5>
        </div>
      </Element>
      <Usluge />
      <PortfolioHome />
      <Image id="homeStart--small" src={backSmall} />
      <Omeni />
      <Kontakt />
    </span>
  );
};

export default Home;
