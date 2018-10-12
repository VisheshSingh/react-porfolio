import React, { Component } from "react";
import "./About.css";
class About extends Component {
  render() {
    return (
      <div className="about" id="About">
        <h2>{this.props.aboutme}</h2>
        <p>
          I am a front-end developer and I love to design modern websites/layout
          that appeal to masses
        </p>
        <a href="#hire-me" class="btn">
          Hire me
        </a>
      </div>
    );
  }
}

export default About;
