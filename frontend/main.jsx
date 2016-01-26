import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, browserHistory } from "react-router";

import App from "./components/App";
import Polls from "./components/Polls";

let documentReady = () => {
  let appNode = document.getElementById("app");

  if (appNode) {
    ReactDOM.render(
      <Router history={browserHistory}>
        <Route component={App}>
          <Route path="/" component={Polls} />
        </Route>
      </Router>
    , appNode);
  }
};

$(documentReady);
