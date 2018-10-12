import React, { Component } from "react";
import "./Services.css";
class Services extends Component {
  render() {
    return (
      <div className="services" id="Services">
        <h3>services</h3>
        <h2>What I offer</h2>
        <div className="row">
          <div>
            <span>
              <ion-icon name="phone-portrait" />
            </span>
            <h4>Responsive</h4>
            <p>Looks good on all devices!</p>
          </div>
          <div>
            <span>
              <ion-icon name="brush" />
            </span>
            <h4>Redesigned</h4>
            <p>Freshly redesigned for Bootstrap 4</p>
          </div>
          <div>
            <span>
              <ion-icon name="thumbs-up" />
            </span>
            <h4>Favorite</h4>
            <p>
              Millions of users <ion-icon name="heart" /> Bootstrap
            </p>
          </div>
          <div>
            <span>
              <ion-icon name="help" />
            </span>
            <h4>Question</h4>
            <p>I mustache you a question...</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Services;
