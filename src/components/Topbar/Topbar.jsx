import React, { Component } from "react";
import { Menu, Image } from "semantic-ui-react";
import logo from "../../logo.svg";
// import { Link } from "react-scroll";
import { Link } from "react-scroll";
import InlineSVG from "svg-inline-react";
import { arrowDown } from "../../assets/svg";

let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-70px";
    // document.getElementById("mySidenav").style.height = "0";
    // document.getElementById("mySidenav").style.borderBottom = "0px";
  }
  prevScrollpos = currentScrollPos;
};

export default class Topbar extends Component {
  constructor() {
    super();
    this.state = { submenuVisible: false };
  }

  openNav = e => {
    this.setState({ submenuVisible: !this.state.submenuVisible });
    console.log(e);
  };

  render() {
    return (
      <header id="navbar">
        <div className="header--container">
          <nav>
            <Link to="usluge" spy={true} smooth={true} duration={500}>
              Usluge
            </Link>
            <a onClick={this.openNav}>
              Portfolio
              <InlineSVG src={arrowDown} />
            </a>
          </nav>
          <Image
            // ui="true"
            src={logo}
            id="header--logo"
            // className="App-logo"
            alt="logo"
            size="small"
            as={Link}
            spy={true}
            smooth={true}
            duration={500}
            to="home"
          />
          <nav>
            <Link to="omeni" spy={true} smooth={true} duration={500}>
              O meni
            </Link>
            <Link to="kontakt" spy={true} smooth={true} duration={500}>
              Kontakt
            </Link>
          </nav>
        </div>
        {this.state.submenuVisible ? (
          <div className="header--submenu">aaasd</div>
        ) : null}
      </header>

      // <div id="navbar" className="menuStyle">
      //   <Menu
      //     pointing
      //     secondary
      //     style={{
      //       borderBottom: "0px solid"
      //     }}
      //   >
      //     <Menu.Menu id="menuMenu" position="left">
      //       <Menu.Item
      //         id="menuItem"
      //         to="usluge"
      //         as={Link}
      //         spy={true}
      //         smooth={true}
      //         duration={500}
      //         name="USLUGE"
      //         onClick={this.handleItemClick}
      //       />
      //       <Menu.Item
      //         id="menuItem"
      //         name="PORTFOLIO"
      //         onClick={this.handleOpenNav}
      //         icon="angle down"
      //       />
      //     </Menu.Menu>
      //     <Image
      //       ui="true"
      //       src={logo}
      //       id="logoTop"
      //       // className="App-logo"
      //       alt="logo"
      //       size="small"
      //       as={Link}
      //       spy={true}
      //       smooth={true}
      //       duration={500}
      //       to="home"
      //     />
      //     <Menu.Menu id="menuMenu" position="right">
      //       <Menu.Item
      //         id="menuItem"
      //         as={Link}
      //         spy={true}
      //         smooth={true}
      //         duration={500}
      //         name="O MENI"
      //         onClick={this.handleItemClick}
      //         to="omeni"
      //       />
      //       <Menu.Item
      //         id="menuItem"
      //         as={Link}
      //         spy={true}
      //         smooth={true}
      //         duration={500}
      //         name="KONTAKT"
      //         onClick={this.handleItemClick}
      //         to="kontakt"
      //       />
      //     </Menu.Menu>
      //     <div id="mySidenav" className="sidenav">
      //       <a
      //         href="javascript:void(0)"
      //         className="closebtn"
      //         onClick={this.handleCloseNav}
      //       >
      //         &times;
      //       </a>
      //       <div className="sideOptions">
      //         <a className="menu-item" href="/oaza">
      //           Oaza
      //         </a>

      //         <a className="menu-item" href="/ambasada">
      //           Ambasada UAE
      //         </a>

      //         <a className="menu-item" href="/atlas">
      //           Atlas banka
      //         </a>

      //         <a className="menu-item" href="/bogdanov">
      //           Bogdanov kraj
      //         </a>

      //         <a className="menu-item" href="/benexfitnes">
      //           Benex fitnes centar
      //         </a>

      //         <a className="menu-item" href="/stambenicetinje">
      //           Stambeni objekat
      //         </a>

      //         <a className="menu-item" href="/vila">
      //           Vila na primorju
      //         </a>

      //         <a className="menu-item" href="/planinski">
      //           Planinski stan
      //         </a>
      //       </div>
      //     </div>
      //   </Menu>
      // </div>
    );
  }
}
