import React from "react";

import { HashRouter, Route, Switch } from "react-router-dom";
// import Talk from "../view/talk/talk";
import List from "../view/friendList/friendList";
import Login from "../view/login/login";
import Sign from "../view/register/register";
import Me from "../view/my/my";

const BasicRoute = () => (
    <HashRouter>
        <Switch>
            {/*<Route exact path="/chatting" component={() => <Talk />} />*/}
            <Route exact path="/" component={() => <Login />} />
            <Route exact path="/register" component={() => <Sign />} />
            <Route exact path="/list" component={() => <List />} />
            <Route exact path="/my" component={() => <Me />} />
        </Switch>
    </HashRouter>
);
export default BasicRoute;