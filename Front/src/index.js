import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Link, Switch } from "react-router-dom";
import Router from "./router/index";
import BottomNav from "./components/BottomNav/BottomNav";

ReactDOM.render(
  <HashRouter>
    <Router />
    <BottomNav />
  </HashRouter>,
  document.getElementById("root")
);
