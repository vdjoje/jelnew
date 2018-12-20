import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.scss";
import Topbar from "./components/Topbar";
import Main from "./switches/Main";

class App extends Component {
  render() {
    return (
      <div className="main">
        <Topbar />
        <Main />
      </div>
    );
  }
}

export default App;
