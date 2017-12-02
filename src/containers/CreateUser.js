import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
//Components
import AuthWrapper from "../components/organisms/AuthWrapper";
//API
import { createNewUser } from "../api/user";
import { createProfileByUserId } from "../api/profiles";

class CreateUser extends PureComponent {
  state = {
    name: "",
    email: "",
    password: "",
    error: false,
    msg: ""
  };
  _signUpUser = async () => {
    const { name, email, password } = this.state;
    const res = await createNewUser(name, email, password);
    const { error, data, msg } = res;
    if (error) {
      this.setState({ error: true, msg: `${msg} - ${JSON.stringify(data)}` });
      return;
    }
    this._createUserProfile(data.id);
  };
  _createUserProfile = async user_id => {
    const about = "Sobre mim",
      country = "País",
      avatar_url = "http://via.placeholder.com/50x50",
      cover_url = "http://via.placeholder.com/150x150";
    const res = await createProfileByUserId(
      about,
      country,
      avatar_url,
      cover_url,
      user_id
    );
    const { error, data, msg } = res;
    if (error) {
      this.setState({ error: true, msg: `${msg} - ${JSON.stringify(data)}` });
      return;
    }
    //if the account is created with success
    this.props.history.push("/signin");
  };
  render() {
    const { error, msg } = this.state;
    return (
      <AuthWrapper title="Criar uma conta">
        {error ? (
          <div className="alert alert-danger" role="alert">
            {msg}
          </div>
        ) : (
          ""
        )}
        <label forhtml="inputName" className="sr-only">
          Nome
        </label>
        <input
          type="text"
          id="inputName"
          className="form-control"
          placeholder="O seu nome"
          onChange={e => this.setState({ name: e.target.value, error: false })}
          required
          autoFocus
        />
        <label forhtml="inputEmail" className="sr-only">
          Email
        </label>
        <input
          type="email"
          id="inputEmail"
          className="form-control"
          placeholder="Email address"
          onChange={e => this.setState({ email: e.target.value, error: false })}
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
          onChange={e =>
            this.setState({ password: e.target.value, error: false })
          }
          required
        />
        <Link to="/signin">Já têm uma conta? Iniciar sessão.</Link>
        <button
          style={{ marginTop: 10, cursor: "pointer" }}
          className="btn btn-lg btn-primary btn-block"
          type="button"
          onClick={this._signUpUser}
        >
          Registar
        </button>
      </AuthWrapper>
    );
  }
}

export default CreateUser;
