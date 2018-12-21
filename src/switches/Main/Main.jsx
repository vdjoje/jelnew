import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../../pages/Home";

const Main = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      {/* <Route path="/oaza" component={Oaza} />
      <Route path="/ambasada" component={Ambasada} />
      <Route path="/atlas" component={Atlas} />
      <Route path="/benexfitnes" component={Benexfitnes} />
      <Route path="/bogdanov" component={Bogdanov} />
      <Route path="/vila" component={Vila} />
      <Route path="/planinski" component={Planinski} />
      <Route path="/stambenicetinje" component={StambeniCetinje} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/sidebar" component={Sidebar} /> */}
    </Switch>
  );
};

export default Main;
