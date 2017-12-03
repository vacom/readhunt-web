import React, { PureComponent } from "react";
import { withRouter } from "react-router-dom";
//API
import { loginUser, getMe } from "../../api/user";
//Components
import Spinner from "react-md-spinner";
import { Placeholder } from "../molecules/index";
class Callback extends PureComponent {
  state = {
    loading: true,
    error: false,
    msg: ""
  };
  componentDidMount() {
    const code = this.props.location.search.substring(6);
    this._oAuthLogin(code);
  }
  _oAuthLogin = async code => {
    const res = await loginUser(code);
    //this.setState({ response: JSON.stringify(res) });

    if (!res) {
      localStorage.removeItem("readhuntToken");
      this.setState({
        msg: "Ocorreu um erro na autenticação.",
        error: true,
        loading: false
      });
      return;
    }
    localStorage.setItem("readhuntToken", res.access_token);
    setTimeout(() => {
      this._getUserId();
    }, 500);
  };
  _getUserId = async () => {
    const res = await getMe();
    if (res.error) {
      localStorage.removeItem("readhuntUserId");
      this.setState({
        error: true,
        msg: "Erro ao recolher o utilizador autenticado, tente novamente",
        loading: false
      });
      return;
    }
    localStorage.setItem("readhuntUserId", res.data.id);
    setTimeout(() => {
      this.props.history.push("/");
    }, 500);
  };

  render() {
    if (this.state.loading) {
      return (
        <div className="text-center">
          <Spinner size={30} />
        </div>
      );
    }
    if (this.state.error) {
      return (
        <div className="text-center">
          <Placeholder msg={this.state.msg} iconSize={32} />
        </div>
      );
    }
  }
}

export default withRouter(Callback);
