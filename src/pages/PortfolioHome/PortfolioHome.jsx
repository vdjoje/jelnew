import React from "react";
import { Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
import sl1 from "../../images/Ambasada/ambasada-UAE.jpg";
import sl2 from "../../images/Benex/05.jpg";
import sl3 from "../../images/Planinski/1.jpg";

const PortfolioHome = () => {
  return (
    <span className="portfolioHome">
      <div className="portfolioHome--card">
        <Image src={sl1} as={Link} to="/ambasada" />
        <h3>Ambasada UAE</h3>
        <p>
          Glavni projekat enterijera Ambasade UAE u Capital Plaza Centru (cca
          1095m2), Podgorica
        </p>
        <h4>Saradnik na projektu</h4>
      </div>
      <div className="portfolioHome--card">
        <Image src={sl2} as={Link} to="/benexfitnes" />
        <h3>Benex Fitnes</h3>
        <p>
          Glavni projekat “Benex fitnes centra” (cca 950m2), na Capital Plaza
          Centru, Podgorica ( saradnik na projektu )
        </p>
        <h4>Saradnik na projektu</h4>
      </div>
      <div className="portfolioHome--card">
        <Image src={sl3} as={Link} to="/planinski" />
        <h3>Planiski stan</h3>
        <p>"Enterijer planinskog stana"</p>
        <h4>Autor i koordinator</h4>
      </div>
    </span>
  );
};

export default PortfolioHome;
