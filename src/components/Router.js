import React from "react";
import { Switch, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
//Containers
import Home from "../containers/Home";
import Details from "../containers/Details";
import New from "../containers/New";
import Profile from "../containers/Profile";
import Search from "../containers/Search";
import NoMatch from "../components/molecules/NoMatch";

const Main = props => (
  <main>
    <Switch>
      <PrivateRoute exact path="/" component={Home} />
      <Route path="/post/:id" component={Details} />
      <Route path="/search" component={Search} />
      <PrivateRoute exact path="/new" component={New} />
      <PrivateRoute exact path="/edit/:id" component={New} />
      <PrivateRoute exact path="/profile" component={Profile}/>
      <Route component={NoMatch} />
    </Switch>
  </main>
);

export default Main;
