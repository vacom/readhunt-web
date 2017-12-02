import React, { PureComponent } from "react";
import { Link, withRouter } from "react-router-dom";
//Components
import AuthWrapper from "../components/organisms/AuthWrapper";
//Utils
import { oAuthRedirectUrl } from "../utils/Constants";
class LoginUser extends PureComponent {
  _signIn = () => {
    this.props.history.push("/");
  };
  render() {
    return (
      <AuthWrapper title="Iniciar sessão">
        {/*<label forhtml="inputEmail" className="sr-only">
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
    />*/}
        <a
          href={oAuthRedirectUrl}
          style={{ marginTop: 10, cursor: "pointer" }}
          className="btn btn-lg btn-primary btn-block"
          role="button"
        >
          Entrar com Laravel
        </a>
        <br />
        <Link to="/signup">Criar uma conta? Registar.</Link>
      </AuthWrapper>
    );
  }
}

export default withRouter(LoginUser);
