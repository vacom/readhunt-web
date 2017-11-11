import React from "react";
import { Switch } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
//Containers
import Home from "../containers/Home";

const Main = (props) => (
  <main>
    <Switch>
      <PrivateRoute exact path="/" component={Home} />
    </Switch>
  </main>
);

export default Main;
