import React, { Component } from "react";
import "./App.scss";
import Topbar from "./components/Topbar";
import Main from "./switches/Main";

class App extends Component {
  constructor() {
    super();
    this.state = {
      width: null,
      height: null
    };
    // this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }
  componentDidMount() {
    this.timer = setInterval(() => this.setState({ loaded: true }), 5000);
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }
  componentDidUpdate() {
    console.log("width", this.state.width);
    console.log("height", this.state.height);
  }
  updateWindowDimensions = () => {
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight
    });
  };

  componentWillUnmount() {
    clearInterval(this.timer);
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  render() {
    return (
      <div className="main">
        {/* {this.state.loaded ? (
          <> */}
        {this.state.width < 700 ? null : (
          <Topbar
            size={{ width: this.state.width, height: this.state.height }}
          />
        )}
        <Main />
      </div>
    );
  }
}

export default App;
