import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Talk from "../view/talk/talk";
import List from "../view/friendList/friendList"

const BasicRoute = () => (
  <HashRouter>
    <Switch>
      <Route exact path="/" component={() => <Talk />} />
      <Route exact path="/list" component={() => <List />} />
    </Switch>
  </HashRouter>
);

export default BasicRoute;
