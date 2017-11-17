import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
//Components
import AuthWrapper from "../components/organisms/AuthWrapper";

class CreateUser extends PureComponent {
  render() {
    return (
      <AuthWrapper title="Criar uma conta">
        <label forhtml="inputName" className="sr-only">
          Nome
        </label>
        <input
          type="text"
          id="inputName"
          className="form-control"
          placeholder="O seu nome"
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
        <Link to="/signin">Já têm uma conta? Iniciar sessão.</Link>
        <button
          style={{ marginTop: 10, cursor: "pointer" }}
          className="btn btn-lg btn-primary btn-block"
          type="button"
        >
          Registar
        </button>
      </AuthWrapper>
    );
  }
}

export default CreateUser;
