import React from "react";
import { Route, Switch } from "react-router-dom";
import Talk from "../view/talk/talk";
import List from "../view/friendList/friendList";

const BasicRoute = () => (
  <Switch>
    <Route exact path="/chatting" component={() => <Talk />} />
    <Route exact path="/" component={() => <List />} />
  </Switch>
);

export default BasicRoute;
