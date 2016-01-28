import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, browserHistory } from "react-router";
import jQuery from "jquery";

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


// Load Google Charts
(() => {
  let options = {
    url: "https://www.gstatic.com/charts/loader.js",
    dataType: "script",
    cache: true
  };

  jQuery.ajax(options).done(() => {
    google.charts.load("current", {packages:["corechart"]});
    google.charts.setOnLoadCallback( () => { console.log("Google Charts Loaded"); });
  });
})()


$(documentReady);
