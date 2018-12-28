import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../../pages/Home";
// import Oaza from "../../components/Portfolio/Oaza";
import Ambasada from "../../components/Portfolio/Ambasada";
import Atlas from "../../components/Portfolio/Atlas";
import Benexfitnes from "../../components/Portfolio/Benexfitnes";
import Bogdanov from "../../components/Portfolio/Bogdanov";
import Vila from "../../components/Portfolio/Vila";
import Planinski from "../../components/Portfolio/Planinski";
import StambeniCetinje from "../../components/Portfolio/StambeniCetinje";
import Portfolio from "../../components/Portfolio/Portfolio";
import pictures from "../../assets/pictures";

const Oaza = () => (
  <Portfolio
    heading="Ambasada UAE u Capital Plaza Centru (Podgorica)"
    text=" Glavni projekat enterijera Ambasade UAE u Capital Plaza Centru (cca
    1095m2), Podgorica ( saradnik na projektu )"
    pictures={pictures.oaza}
  />
);

const Main = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/oaza" render={Oaza} />
      <Route path="/ambasada" component={Ambasada} />
      <Route path="/atlas" component={Atlas} />
      <Route path="/benexfitnes" component={Benexfitnes} />
      <Route path="/bogdanov" component={Bogdanov} />
      <Route path="/vila" component={Vila} />
      <Route path="/planinski" component={Planinski} />
      <Route path="/stambenicetinje" component={StambeniCetinje} />
    </Switch>
  );
};

export default Main;
