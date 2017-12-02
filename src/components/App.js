import React, { PureComponent } from "react";
//Components
import Navbar from "./organisms/Navbar";
import Footer from "./organisms/Footer";
import { Icon } from "../components/atoms/index";
import AlertContainer from "react-alert";
//Pages Navigation
import Router from "./Router";
//Utils
import { ALERT_OPTIONS } from "../utils/Constants";
//Styles
import Colors from "../utils/Colors";

class App extends PureComponent {
  showAlert(
    type = "success",
    text = "Some Text",
    color = Colors.green,
    icon = "fa-link"
  ) {
    this.msg.show(text, {
      time: 3000,
      type,
      icon: <Icon name={icon} color={color} />
    });
  }
  render() {
    return (
      <div className={this.props.className}>
        <AlertContainer ref={a => (this.msg = a)} {...ALERT_OPTIONS} />
        <Navbar />
        <div className="container">
          <Router
            showMessage={(type, text, ...rest) =>
              this.showAlert(type, text, ...rest)
            }
          />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
