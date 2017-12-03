import React, { PureComponent } from "react";
import { withRouter } from "react-router-dom";
//Components
import { Avatar, Link, Icon } from "../atoms/index";
//Styles
import styled from "styled-components";
import Colors from "../../utils/Colors";
//utils
import { _refreshPage, _isLoggedIn, _getUserId } from "../../utils/Utils";
//API
import { getProfilebyId } from "../../api/profiles";
class Navbar extends PureComponent {
  state = {
    searchQuery: "",
    loading: true,
    error: false,
    avatar_url: "",
    msg: ""
  };
  componentDidMount() {
    this._getProfileAvatar();
  }
  _getProfileAvatar = async () => {
    const id = _getUserId();
    const res = await getProfilebyId(id);
    const { error, data: user, msg } = res;
    if (error) {
      this.setState({ error: true, loading: false, msg });
      return;
    }
    this.setState({
      avatar_url: user[0].avatar_url,
      msg,
      loading: false,
      error: false
    });
  };
  _goToSearch = e => {
    if (e.key === "Enter") {
      const query = this.state.searchQuery;
      this.props.history.push(`/search?q=${query}`);
      setTimeout(() => {
        _refreshPage();
      }, 10);
    }
  };
  render() {
    return (
      <nav
        className={`navbar navbar-expand-md fixed-top bg-light justify-content-between ${
          this.props.className
        }`}
      >
        <div className="container">
          <a
            style={{ cursor: "pointer" }}
            className="navbar-brand"
            onClick={() => this.props.history.push(`/`)}
          >
            Readhunt
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav mr-auto">
              <li>
                <form className="form-inline">
                  <input
                    onKeyPress={this._goToSearch}
                    onChange={e =>
                      this.setState({ searchQuery: e.target.value })
                    }
                    className="form-control mr-md-6 rd-search"
                    type="search"
                    placeholder="Pesquisar"
                    aria-label="Search"
                  />
                </form>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  className="nav-link"
                  onClick={() => this.props.history.push(`/`)}
                >
                  <button
                    className="btn btn-sm align-middle btn-outline-secondary rd-add"
                    type="button"
                  >
                    <Icon name="fa-home" size={18} />
                  </button>
                </Link>
              </li>
              {_isLoggedIn() ? (
                [
                  <li className="nav-item" key="addbook">
                    <Link
                      className="nav-link"
                      onClick={() => this.props.history.push(`/new`)}
                    >
                      <button
                        className="btn btn-sm align-middle btn-outline-secondary rd-add"
                        type="button"
                      >
                        Adicionar livro
                      </button>
                    </Link>
                  </li>,
                  <li className="nav-item" key="profileAvatar">
                    <Link
                      className="nav-link"
                      onClick={() =>
                        this.props.history.push(`/profile/${_getUserId()}`)
                      }
                    >
                      <Avatar
                        src={`${this.state.avatar_url ||
                          "http://via.placeholder.com/150x150"}`}
                        size={30}
                      />
                    </Link>
                  </li>
                ]
              ) : (
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    onClick={() => this.props.history.push(`/signin`)}
                    style={{ marginTop: "4px", cursor: "pointer", color: "#297DF6" }}
                  >
                    Iniciar Sessão?
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

const navbarWithStyles = styled(Navbar)`
  background-color: ${Colors.white} !important;
  border-bottom: 1px solid ${Colors.border};
  .nav-link,
  .rd-add {
    &:hover {
      cursor: pointer;
    }
  }
  .rd-search {
    height: 35px;
    width: 450px;
  }
`;
export default withRouter(navbarWithStyles);
