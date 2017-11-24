import React, { PureComponent } from "react";
//Components
import Navbar from "./organisms/Navbar";
//Pages Navigation
import Router from "./Router";

class App extends PureComponent {
  state = {
    query: ""
  };
  render() {
    return (
      <div className={this.props.className}>
        <Navbar />
        <div className="container">
          <Router />
        </div>
      </div>
    );
  }
}

export default App;
