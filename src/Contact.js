import React, { Component } from "react";
import "./Contact.css";
class Contact extends Component {
  render() {
    return (
      <div className="contact" id="Contact">
        <h4>Contact me</h4>
        <div className="row">
          <div className="center">
            <span>
              <ion-icon name="call" />
            </span>
            <span>732-810-6650</span>
          </div>
          <div className="center">
            <span>
              <ion-icon name="mail" />
            </span>
            <span>visheshsingh16@gmail.com</span>
          </div>
          <div className="center">
            <span>
              <ion-icon name="logo-twitter" />
            </span>
            <span>Vishesh Singh</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
