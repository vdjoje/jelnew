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
          Lorem ipsum dolor sit amet, quod efficiendi at mel. In vis dico
          accumsan postulant, in his vocibus periculis argumentum, eos ad graece
          option patrioque. Novum tempor interesset ut eos. Inermis tractatos ex
          his, vel in stet aliquam. Cum ex nusquam patrioque maiestatis, sea
          partem impetus consequuntur ex, no qui numquam facilis.
        </p>
      </div>
      <div className="portfolioHome--card">
        <Image src={sl2} as={Link} to="/benexfitnes" />
        <h3>Benex Fitnes</h3>
        <p>
          Lorem ipsum dolor sit amet, quod efficiendi at mel. In vis dico
          accumsan postulant, in his vocibus periculis argumentum, eos ad graece
          option patrioque. Novum tempor interesset ut eos. Inermis tractatos ex
          his, vel in stet aliquam. Cum ex nusquam patrioque maiestatis, sea
          partem impetus consequuntur ex, no qui numquam facilis.
        </p>
      </div>
      <div className="portfolioHome--card">
        <Image src={sl3} as={Link} to="/planinski" />
        <h3>Planiski stan</h3>
        <p>
          Lorem ipsum dolor sit amet, quod efficiendi at mel. In vis dico
          accumsan postulant, in his vocibus periculis argumentum, eos ad graece
          option patrioque. Novum tempor interesset ut eos. Inermis tractatos ex
          his, vel in stet aliquam. Cum ex nusquam patrioque maiestatis, sea
          partem impetus consequuntur ex, no qui numquam facilis.
        </p>
      </div>
    </span>
  );
};

export default PortfolioHome;
