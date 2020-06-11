import React from "react";
import { HashRouter, Route, Switch, Link } from "react-router-dom";
import Talk from "../view/talk/talk";
import List from "../view/friendList/friendList";

const BasicRoute = () => (
  <HashRouter>
    <Switch>
        <Route exact path="/chatting" component={() => <Talk />} />
        <Route exact path="/" component={() => <List />} />
    </Switch>
  </HashRouter>
);

export default BasicRoute;
