import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute } from "react-router";
import createHistory from "history/lib/createHashHistory";
import jQuery from "jquery";

import App from "./components/App";
import Polls from "./components/Polls";

let documentReady = () => {
  let appNode = document.getElementById("app");

  const history = createHistory({queryKey: false});

  if (appNode) {
    ReactDOM.render(
      <Router history={history}>
        <Route path="/" component={App}>
          <IndexRoute component={Polls} />
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
