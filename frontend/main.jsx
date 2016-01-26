import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, browserHistory } from "react-router";

import App from "./components/App";

let documentReady = () => {
  let appNode = document.getElementById("app");

  if (appNode) {
    ReactDOM.render(
      <Router history={browserHistory}>
        <Route path="/" component={App} />
      </Router>
    , appNode);
  }
};

$(documentReady);
