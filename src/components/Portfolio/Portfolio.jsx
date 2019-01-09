import React, { Component } from "react";
import { Icon, Button } from "semantic-ui-react";
import Galerija from "./Galerija";
import { Link } from "react-router-dom";
import TopbarPortfolio from "../TopbarPortfolio";

export default class Portfolio extends Component {
  constructor() {
    super();
    this.state = {
      width: null,
      height: null,
      columns: 2
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
    console.log("columns", this.state.columns);
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
    // if (this.state.width < 700) {
    //   this.setState({
    //     columns: 1
    //   });
    // } else {
    //   this.setState({
    //     columns: 2
    //   });
    // }

    return (
      <span className="porfolio">
        {this.state.width < 700 ? (
          <div
            style={{
              color: "black",
              position: "absolute",
              top: "0px",
              left: "0px",
              background: "red"
            }}
          >
            testtt
          </div>
        ) : (
          <TopbarPortfolio
            size={{ width: this.state.width, height: this.state.height }}
          />
        )}
        <div className="portfolio--gallery">
          <Button id="backButton" as={Link} to="/">
            <Icon name="close" size="big" />
          </Button>
          <div className="portfolio--frame">
            <h2>{this.props.numbers} </h2>
            <h3>{this.props.heading}</h3>
            <p>{this.props.text}</p>
            <h4>{this.props.position}</h4>
            <div className="portfolio--images">
              <Galerija
                columns={this.state.columns}
                photos={this.props.pictures}
              />
            </div>
          </div>
        </div>
      </span>
    );
  }
}
