import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Login from "../view/login/login";

const BasicRoute = () => (
  <HashRouter>
    <Switch>
      <Route exact path="/" component={() => <Login />} />
    </Switch>
  </HashRouter>
);

export default BasicRoute;
