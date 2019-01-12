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

  componentDidUpdate() {
    console.log("width", this.state.width);
    console.log("height", this.state.height);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions = () => {
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight
    });
  };

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  render() {
    return (
      <span className="homeStart">
        <div id="navbar" />
        {this.state.width < 946 ? (
          <TopbarRes
            size={{ width: this.state.width, height: this.state.height }}
          />
        ) : (
          <Topbar
            size={{ width: this.state.width, height: this.state.height }}
          />
        )}

        <TriangleBack />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-beetwen",
            alignItems: "flex-start"
          }}
        >
          <Element name="home">
            <Image id="homeStart--image" src={back} />
            <div id="home" className="homeStart--naslov">
              <p>Arhitektura…</p>
              <p>Dizajn…</p>
              <p>Kreacija…</p>
              <p> Umjetnost…</p>
              <p> Enterijer…</p>
              <h3>“An interior is the Natural projection of the soul”</h3>
              <h5>(Coco Chanel)</h5>
            </div>
          </Element>
          <Usluge />
          <PortfolioHome />
          <Image id="homeStart--small" src={backSmall} />
          <Omeni />
          <Kontakt />
        </div>
      </span>
    );
  }
}

export default Home;
