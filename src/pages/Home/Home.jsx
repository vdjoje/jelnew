import React, { Component } from "react";
import Topbar from "../../components/Topbar";
import TopbarRes from "../../components/TopbarRes";
import TriangleBack from "../../components/TriangleBack";
import { Image } from "semantic-ui-react";
import back from "../../images/backnew.png";
import backSmall from "../../images/backSmall.png";
import Usluge from "../Usluge";
import PortfolioHome from "../PortfolioHome";
import Omeni from "../Omeni";
import Kontakt from "../Kontakt";
import { Element } from "react-scroll";

class Home extends Component {
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
      <span className="homeStart">
        <div id="navbar" />
        {this.state.width < 700 ? (
          <TopbarRes />
        ) : (
          <Topbar
            size={{ width: this.state.width, height: this.state.height }}
          />
        )}

        <TriangleBack />
        <Element name="home">
          <Image id="homeStart--image" src={back} />
          <div className="homeStart--naslov">
            <p>Arhitektura… Dizajn… Kreacija… Umjetnost… Enterijer…</p>
            <h3>“An interior is the Natural projection of the soul”</h3>
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
  }
}

export default Home;
