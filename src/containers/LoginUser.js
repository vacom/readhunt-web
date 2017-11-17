import React, { PureComponent } from "react";
import { Link, withRouter } from "react-router-dom";
//Components
import AuthWrapper from "../components/organisms/AuthWrapper";
class LoginUser extends PureComponent {
  _signIn = () => {
    this.props.history.push("/");
  };
  render() {
    return (
      <AuthWrapper title="Iniciar sessão">
        <label forhtml="inputEmail" className="sr-only">
          Email
        </label>
        <input
          type="email"
          id="inputEmail"
          className="form-control"
          placeholder="Email address"
          required
          autoFocus
        />
        <label forhtml="inputPassword" className="sr-only">
          Password
        </label>
        <input
          type="password"
          id="inputPassword"
          className="form-control"
          placeholder="Password"
          required
        />
        <Link to="/signup">Criar uma conta? Registar.</Link>
        <button
          onClick={this._signIn}
          style={{ marginTop: 10, cursor: "pointer"}}
          className="btn btn-lg btn-primary btn-block"
          type="button"
        >
          Entrar
        </button>
      </AuthWrapper>
    );
  }
}

export default withRouter(LoginUser);
