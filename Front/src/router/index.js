import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Talk from "../view/talk/talk";

const BasicRoute = () => (
  <HashRouter>
    <Switch>
      <Route exact path="/" component={() => <Talk />} />
    </Switch>
  </HashRouter>
);

export default BasicRoute;
