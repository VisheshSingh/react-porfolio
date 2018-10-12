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
        <Header />
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
