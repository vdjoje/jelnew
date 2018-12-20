import React from "react";
import TriangleBack from "../../components/TriangleBack";
import { Image } from "semantic-ui-react";
import back from "../../images/backnew.png";
import Usluge from "../Usluge";
import PortfolioHome from "../PortfolioHome";
import Omeni from "../Omeni";
import Kontakt from "../Kontakt";

const Home = () => {
  return (
    <span className="homeStart">
      <TriangleBack />
      <div className="homeStart--test">TTtest</div>
      <Image id="imgTest" scr={back} />
      <Usluge />
      <PortfolioHome />
      <Omeni />
      <Kontakt />
    </span>
  );
};

export default Home;
