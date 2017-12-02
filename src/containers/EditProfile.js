import React, { Component } from "react";
//Components
//import { Link } from "../components/atoms/index";
import { Section, Post } from "../components/molecules/index";
import Spinner from "react-md-spinner";
//API
import { getProfilebyId, updateProfileByUserId } from "../api/profiles";
import { updateUserById } from "../api/user";

class EditProfile extends Component {
  state = {
    loading: false,
    error: false,
    profile: [],
    user_id: 0,
    msg: "",
    name: "",
    about: "",
    country: "",
    avatar_url: "",
    cover_url: ""
  };
  componentDidMount() {
    const user_id = this.props.match.params.id;
    this._getProfile(user_id);
  }
  _getProfile = async user_id => {
    const res = await getProfilebyId(user_id);
    const { error, data, msg } = res;
    if (error) {
      this.setState({ error: true, loading: false, msg });
      return;
    }
    this.setState({
      profile: data[0],
      name: data[0].name,
      about: data[0].about,
      country: data[0].country,
      avatar_url: data[0].avatar_url,
      cover_url: data[0].cover_url,
      user_id,
      msg,
      loading: false,
      error: false
    });
  };
  _updateProfile = async () => {
    const res = await updateProfileByUserId(this.state);
    const { error, data, msg } = res;
    if (error) {
      this.setState({ error: true, msg: `${msg} - ${JSON.stringify(data)}` });
      return;
    }
    //Shows feedback and updates the DB
    this.props.showMessage("success", msg, undefined, "fa-check");
    this.props.history.push(`/profile/${this.state.user_id}`);
  };
  _updateUserName = async () => {
    const { name, user_id } = this.state;
    const res = await updateUserById(name, user_id);
    const { error, data, msg } = res;
    if (error) {
      this.setState({ error: true, msg: `${msg} - ${JSON.stringify(data)}` });
      return;
    }
    this._updateProfile();
  };
  render() {
    if (this.state.loading) {
      return (
        <div className="text-center">
          <Spinner size={30} />
        </div>
      );
    }
    const {
      name,
      about,
      country,
      avatar_url,
      cover_url,
      error,
      msg
    } = this.state;
    return (
      <div className="row">
        <div className="col-md-6">
          <h5 style={{ marginBottom: 25 }}>Informações de perfil</h5>
          <Section noTitle>
            <form>
              <div className="form-row">
                <div className="form-group col-md-8">
                  <label forhtml="name">Nome</label>
                  <input
                    onChange={e => this.setState({ name: e.target.value })}
                    value={name}
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="O seu nome"
                  />
                </div>
                <div className="form-group col-md-4">
                  <div className="form-group">
                    <label forhtml="country">País</label>
                    <input
                      type="text"
                      onChange={e => this.setState({ country: e.target.value })}
                      value={country}
                      className="form-control"
                      id="country"
                      placeholder="O seu país"
                    />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label forhtml="about">Sobre mim</label>
                <textarea
                  id="about"
                  onChange={e => this.setState({ about: e.target.value })}
                  value={about}
                  className="form-control"
                  placeholder="Um pouco sobre ti"
                  rows="2"
                />
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label forhtml="avatar_url">URL do Avatar</label>
                  <input
                    value={avatar_url}
                    onChange={e =>
                      this.setState({ avatar_url: e.target.value })
                    }
                    type="text"
                    className="form-control"
                    id="avatar_url"
                    placeholder="URL do Avatar"
                  />
                </div>
                <div className="form-group col-md-6">
                  <label forhtml="cover_url">URL de Capa</label>
                  <input
                    type="text"
                    onChange={e => this.setState({ cover_url: e.target.value })}
                    value={cover_url}
                    className="form-control"
                    id="cover_url"
                    placeholder="URL de Capa"
                  />
                </div>
              </div>
              {error ? (
                <div className="alert alert-danger" role="alert">
                  {msg}
                </div>
              ) : (
                ""
              )}
              <button
                style={{ cursor: "pointer" }}
                type="button"
                className="btn btn-warning btn-lg btn-block"
                onClick={this._updateUserName}
              >
                Atualizar perfil
              </button>
            </form>
          </Section>
        </div>
        <div className="col-md-6">
          <h5 style={{ marginBottom: 25 }}>Pré-Visualização</h5>
          <Section noTitle>
            <Post
              onDetails
              title={this.state.name || "O seu nome"}
              text={this.state.about || "Um pouco sobre ti"}
              imageSrc={
                this.state.avatar_url || "http://via.placeholder.com/150x150"
              }
              category={this.state.country || "País"}
            />
          </Section>
        </div>
      </div>
    );
  }
}

export default EditProfile;
