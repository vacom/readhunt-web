import React, { PureComponent } from "react";
import { withRouter } from "react-router-dom";
//Components
import { Avatar, Link, Icon } from "../atoms/index";
//Styles
import styled from "styled-components";
import Colors from "../../utils/Colors";
//utils
import { _refreshPage, _isLoggedIn } from "../../utils/Utils";
class Navbar extends PureComponent {
  state = {
    searchQuery: ""
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
          <a className="navbar-brand" href="#/">
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
                <Link className="nav-link" href="#/">
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
                    <Link className="nav-link" href="#/new">
                      <button
                        className="btn btn-sm align-middle btn-outline-secondary rd-add"
                        type="button"
                      >
                        Adicionar livro
                      </button>
                    </Link>
                  </li>,
                  <li className="nav-item" key="profileAvatar">
                    <Link className="nav-link" href="#/profile/1">
                      <Avatar src="https://goo.gl/qd6RoG" size={30} />
                    </Link>
                  </li>
                ]
              ) : (
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    href="#/signin"
                    style={{ marginTop: "4px" }}
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
