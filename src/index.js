import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
//Styles
import { injectGlobal } from "styled-components";
import Colors from "./utils/Colors";
//Containers
import App from "./components/App";
import LoginUser from "./containers/LoginUser";
import CreateUser from "./containers/CreateUser";
import Callback from "./components/organisms/Callback";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
  <Router>
    <div>
      <Switch>
        <Route path="/signin" component={LoginUser} />
        <Route path="/signup" component={CreateUser} />
        <Route exact path="/callback" component={Callback} />
        <App />
      </Switch>
    </div>
  </Router>,
  document.getElementById("root")
);

registerServiceWorker();

// Global style
// eslint-disable-next-line
injectGlobal`
  html{
    position:relative; 
    min-height: 100%;
  }
  body, html {
    margin: 0;
    background: ${Colors.background};
    font-family: 'Roboto', sans-serif;
  }
  body{
    min-height: 20rem;
    padding-top: 5.2rem;
    padding-bottom: 1.5em;
    margin-bottom:45px;
  }
`;
