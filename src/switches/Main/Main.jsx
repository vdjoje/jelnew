import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../../pages/Home";
// import Oaza from "../../components/Portfolio/Oaza";
// import Ambasada from "../../components/Portfolio/Ambasada";
// import Atlas from "../../components/Portfolio/Atlas";
// import Benexfitnes from "../../components/Portfolio/Benexfitnes";
// import Bogdanov from "../../components/Portfolio/Bogdanov";
// import Vila from "../../components/Portfolio/Vila";
// import Planinski from "../../components/Portfolio/Planinski";
// import StambeniCetinje from "../../components/Portfolio/StambeniCetinje";
import Portfolio from "../../components/Portfolio/Portfolio";
import pictures from "../../assets/pictures";

const Oaza = () => (
  <Portfolio
    numbers="01."
    heading='Poslovno-apartmanski objekat "Oaza"'
    text="Glavni projekat poslovno-apartmanskog objekta “Oaza” (cca 6690 m 2) na
    UP br.6 u zoni B DUP-a ” Zona centralnih djelatnosti- Cetinjski put”,
    Podgorica ( autor i koordinator )"
    position="Autor i koordinator"
    pictures={pictures.oaza}
  />
);

const Ambasada = () => (
  <Portfolio
    numbers="02."
    heading="Ambasada UAE u Capital Plaza Centru (Podgorica)"
    text="Glavni projekat enterijera Ambasade UAE u Capital Plaza Centru (cca
    1095m2), Podgorica "
    position="Saradnik na projektu"
    pictures={pictures.ambasada}
  />
);

const Atlas = () => (
  <Portfolio
    numbers="03."
    heading="Atlas Banka u Capital Plaza Centru (Podgorica)"
    text="Glavni projekt enterijera filijale Atlas banke u Capital Plazi (cca
      200m2), Podgorica"
    position="Koautor filijale, saradnik na projektu"
    pictures={pictures.atlas}
  />
);

const Benexfitnes = () => (
  <Portfolio
    numbers="05."
    heading='"Benex fitnes centar" u Capital Plaza Centru (Podgorica)'
    text="Glavni projekat “Benex fitnes centra” (cca 950m2), na Capital Plaza
    Centru, Podgorica ( saradnik na projektu )"
    position="Saradnik na projektu"
    pictures={pictures.benex}
  />
);

const Bogdanov = () => (
  <Portfolio
    numbers="04."
    heading='Stambeno-poslovni objekat "Bogdanov kraj" (Cetinje)'
    text="Glavni projekat stambeno-poslovnog objekta (cca 645 m2) na UP br. 543,
    DUP-a „Bogdanov kraj“, Cetinje ( vodeći i odgovorni projektant )"
    position="Vodeći i odgovorni projektant"
    pictures={pictures.bogdanov}
  />
);

const Vila = () => (
  <Portfolio
    numbers="07."
    heading="Enterijer vile na primorju"
    text="Enterijer vile na primorju"
    position="Autor i koordinator"
    pictures={pictures.vila}
  />
);

const Planinski = () => (
  <Portfolio
    numbers="08."
    heading="Enterijer planinskog stana"
    text="Enterijer planinskog stana"
    position="Autor i koordinator"
    pictures={pictures.planinski}
  />
);

const StambeniCetinje = () => (
  <Portfolio
    numbers="06."
    heading="Stambeni objekat (Cetinje)"
    text="Stambeni objekat na UP 523, Cetinje ( autor i koordinator )"
    position="Autor i koordinator"
    pictures={pictures.stambeni}
  />
);

const Main = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/oaza" render={Oaza} />
      <Route path="/ambasada" render={Ambasada} />
      <Route path="/atlas" render={Atlas} />
      <Route path="/benexfitnes" render={Benexfitnes} />
      <Route path="/bogdanov" render={Bogdanov} />
      <Route path="/vila" render={Vila} />
      <Route path="/planinski" render={Planinski} />
      <Route path="/stambenicetinje" render={StambeniCetinje} />
    </Switch>
  );
};

export default Main;
