import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../../pages/Home";
import Oaza from "../../components/Portfolio/Oaza";
import Ambasada from "../../components/Portfolio/Ambasada";
import Atlas from "../../components/Portfolio/Atlas";
import Benexfitnes from "../../components/Portfolio/Benexfitnes";
import Bogdanov from "../../components/Portfolio/Bogdanov";
import Vila from "../../components/Portfolio/Vila";
import Planinski from "../../components/Portfolio/Planinski";
import StambeniCetinje from "../../components/Portfolio/StambeniCetinje";

const Main = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/oaza" component={Oaza} />
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
