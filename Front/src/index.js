import React from "react";
import axios from './axios/index';
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import Router from "./router/index";
import BottomNav from "./components/BottomNav/BottomNav";

React.$axios = axios;

ReactDOM.render(
  <HashRouter>
    <Router />
    <BottomNav />
  </HashRouter>,
  document.getElementById("root")
);
