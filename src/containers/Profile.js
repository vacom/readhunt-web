import React, { PureComponent } from "react";
//Components
import { Image } from "../components/atoms/index";
import { Section, Post, Placeholder } from "../components/molecules/index";
import Spinner from "react-md-spinner";
//API
import { getProfilebyId } from "../api/profiles";
//Utils
import { _getUserId, _isLoggedIn } from "../utils/Utils";
class Profile extends PureComponent {
  state = {
    loading: true,
    error: false,
    profile: [],
    msg: ""
  };
  componentDidMount() {
    const userId = this.props.match.params.id;
    this._getProfile(userId);
  }
  _getProfile = async userId => {
    const res = await getProfilebyId(userId);
    const { error, data, msg } = res;
    if (error) {
      this.setState({ error: true, loading: false, msg });
      return;
    }
    this.setState({
      profile: data[0],
      msg,
      loading: false,
      error: false
    });
  };
  _logout = () => {
    window.localStorage.removeItem("readhuntToken");
    window.localStorage.removeItem("readhuntUserId");
    setTimeout(() => {
      this.props.history.push("/signin");
    }, 250);
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
    const { profile } = this.state;
    return (
      <div>
        <div className="row">
          <div className="col-md-12 col-sm-12">
            <Section noTitle>
              <Image
                src={profile.cover_url || "http://via.placeholder.com/350x350"}
              />
            </Section>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 col-sm-12">
            <Post
              onDetails
              title={profile.name || "Sem titulo"}
              text={profile.country || "Sem país"}
              imageSrc={
                profile.avatar_url || "http://via.placeholder.com/150x150"
              }
              category={profile.email || "Sem email"}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            {_isLoggedIn() ? (
              Number(_getUserId()) === Number(profile.user_id) ? (
                <div className="alert alert-light" role="alert">
                  <a href={`#/profile/edit/${_getUserId()}`} className="alert-link">
                    Editar informações
                  </a>{" "}
                  |{" "}
                  <a
                    onClick={this._logout}
                    className="alert-link"
                    style={{ color: "#ff5467", cursor: "pointer" }}
                  >
                    Sair de sessão
                  </a>
                </div>
              ) : (
                ""
              )
            ) : (
              <div className="alert alert-light" role="alert">
                É teu este Perfil?{" "}
                <a href="#/signin" className="alert-link">
                  Iniciar sessão
                </a>. para editar.
              </div>
            )}
          </div>
        </div>
        <div className="row">
          <div className="col-md-8 col-sm-12 order-sm-12 order-md-1">
            <h6 style={{ marginTop: 25 }}>Sobre mim</h6>
            <Section noTitle>
              <p>{profile.about || "Sem sobre mim, edite para adiconar"}</p>
            </Section>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
