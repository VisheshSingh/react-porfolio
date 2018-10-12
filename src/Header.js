import React, { Component } from "react";
import "./Header.css";
import Background from "./img/heroImage.jpg";

class Header extends Component {
  render() {
    const myStyles = {
      backgroundImage: `url(${Background})`,
      height: "70vh",
      backgroundSize: "cover"
    };
    return (
      <header style={myStyles}>
        <div className="content">
          <h1>{this.props.mainTitle}</h1>
          <p>Take a glimpse at my professional work....</p>
          <a href="#findMore" class="btn">
            {this.props.button}
          </a>
        </div>
      </header>
    );
  }
}

export default Header;
