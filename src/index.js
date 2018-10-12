import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
import Navigation from "./Navigation";
import Header from "./Header";
import * as serviceWorker from "./serviceWorker";

class App extends React.Component {
  render() {
    return (
      <div>
        <Navigation title="React Portfolio" />
        <Header mainTitle="My Stylish portfolio!" button="find out more" />
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
