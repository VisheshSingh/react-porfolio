import React, { Component } from "react";
import "./Navigation.css";

class Navigation extends Component {
  render() {
    return (
      <div className="nav">
        <h2 className="logo">React Portfolio</h2>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navigation;
