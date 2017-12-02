import React from "react";
import { Switch, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import NormalRoute from "./NormalRoute";
//Containers
import Home from "../containers/Home";
import Details from "../containers/Details";
import New from "../containers/New";
import Profile from "../containers/Profile";
import EditProfile from "../containers/EditProfile";
import Search from "../containers/Search";
import NoMatch from "../components/molecules/NoMatch";

const Main = props => (
  <main>
    <Switch>
      <NormalRoute exact path="/" component={Home} />
      <NormalRoute path="/post/:id" component={Details} {...props} />
      <NormalRoute exact path="/search*" component={Search} />
      <PrivateRoute exact path="/new" component={New} {...props} />
      <PrivateRoute exact path="/edit/:id" component={New} {...props} />
      <NormalRoute exact path="/profile/:id" component={Profile} {...props} />
      <PrivateRoute
        exact
        path="/profile/edit/:id"
        component={EditProfile}
        {...props}
      />
      <Route component={NoMatch} />
    </Switch>
  </main>
);

export default Main;
