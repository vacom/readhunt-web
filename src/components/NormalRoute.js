import React from "react";
import { Route, Redirect } from "react-router-dom";
const openRoute = true;

//Verifies if the user is logggedIn, if not redirect to login page
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      openRoute ? (
        <Component {...props} {...rest} />
      ) : (
        <Redirect
          to={{
            pathname: "/signin",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

export default PrivateRoute;
