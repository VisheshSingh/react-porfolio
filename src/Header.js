import React, { Component } from "react";

import Background from "./img/heroImage.jpg";

class Header extends Component {
  render() {
    const myStyles = {
      backgroundImage: `url(${Background})`,
      height: "70vh",
      backgroundSize: "cover"
    };
    return <header style={myStyles} />;
  }
}

export default Header;
