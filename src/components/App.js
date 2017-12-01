import React, { PureComponent } from "react";
//Components
import Navbar from "./organisms/Navbar";
import Footer from "./organisms/Footer";
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
        <Footer />
      </div>
    );
  }
}

export default App;
