import React, { PureComponent } from "react";
import { withRouter } from "react-router-dom";
//API
import { loginUser } from "../../api/user";

class Callback extends PureComponent {
  state = {
    response: "loading..."
  };
  componentDidMount() {
    const code = this.props.location.search.substring(6);
    this._oAuthLogin(code);
  }
  _oAuthLogin = async code => {
    const res = await loginUser(code);
    this.setState({ response: JSON.stringify(res) });
    console.log(res);
    if (!res) {
      localStorage.removeItem("readhuntToken");
      this.setState({ response: "Ocorreu um erro na autenticação." });
      return;
    }
    console.log(res.access_token);
    localStorage.setItem("readhuntToken", res.access_token);
    setTimeout(() => {
     // this.props.history.push("/");
    }, 1000);
  };

  render() {
    return <div>{this.state.response}</div>;
  }
}

export default withRouter(Callback);
