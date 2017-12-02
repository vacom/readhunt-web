import React, { Component } from "react";
//Components
//import { Link } from "../components/atoms/index";
import { Section, Post } from "../components/molecules/index";
import Spinner from "react-md-spinner";
//API
import { getCategories } from "../api/categories";
import { getArticle, createArticle, updateArticle } from "../api/articles";
//Utils
import { _getUserId } from "../utils/Utils";

class New extends Component {
  state = {
    title: "",
    tagline: "",
    thumbnail_url: "",
    category_id: 1,
    article_id: 0,
    loading: true,
    error: false,
    categories: [],
    user_id: "",
    msg: "",
    category_text: "categoria",
    link: "",
    description: "",
    cover_url: "",
    modeEdit: false
  };
  componentDidMount() {
    this._getCategories();
    const isEdit = this.props.match.path.split("/");
    if (isEdit[1] === "edit") {
      this.setState({ modeEdit: true });
      const articleId = this.props.match.params.id;
      this._getArticle(articleId);
    }
  }
  _getCategories = async () => {
    const res = await getCategories();
    const { error, data: categories, msg } = res;
    if (error) {
      this.setState({ error: true, loading: false, msg });
      return;
    }
    this.setState({
      categories,
      loading: false,
      msg,
      error: false,
      user_id: _getUserId()
    });
  };
  _changeCategory = e => {
    var index = e.target.selectedIndex;
    var optionElement = e.target.childNodes[index];
    var category_id = optionElement.getAttribute("data-id");
    this.setState({
      category_text: e.target.value,
      category_id
    });
  };
  _getArticle = async id => {
    const res = await getArticle(id);
    const { error, data: article, msg } = res;
    if (error) {
      this.setState({ error: true, loading: false, msg });
      return;
    }
    const {
      title,
      tagline,
      thumbnail_url,
      link,
      description,
      cover_url,
      user_id
    } = article;
    const category = this.state.categories[Number(article.category_id - 1)];
    this.setState({
      title,
      tagline,
      thumbnail_url,
      link,
      description,
      cover_url,
      user_id,
      category_text: category.content,
      category_id: category.id,
      article_id: id,
      msg,
      loading: false,
      error: false
    });
  };
  _storeArticle = async () => {
    const res = await createArticle(this.state);
    const { error, data, msg } = res;
    if (error) {
      this.setState({ error: true, msg: `${msg} - ${JSON.stringify(data)}` });
      return;
    }
    //Shows feedback and updates the DB
    this.props.showMessage("success", msg, undefined, "fa-check");
    this.props.history.push("/");
  };
  _updateArticle = async () => {
    const res = await updateArticle(this.state);
    const { error, data, msg } = res;
    if (error) {
      this.setState({ error: true, msg: `${msg} - ${JSON.stringify(data)}` });
      return;
    }
    //Shows feedback and updates the DB
    this.props.showMessage("success", msg, undefined, "fa-check");
    this.props.history.push("/");
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
      categories,
      modeEdit,
      title,
      tagline,
      description,
      cover_url,
      link,
      thumbnail_url,
      error,
      msg
    } = this.state;
    return (
      <div className="row">
        <div className="col-md-6">
          <h5 style={{ marginBottom: 25 }}>
            {modeEdit ? "Editar livro" : "Publique algo novo"}
          </h5>
          <Section noTitle>
            <form>
              <div className="form-row">
                <div className="form-group col-md-8">
                  <label forhtml="title">Titulo</label>
                  <input
                    onChange={e => this.setState({ title: e.target.value })}
                    value={title}
                    type="text"
                    className="form-control"
                    id="title"
                    placeholder="Titulo do livro"
                  />
                </div>
                <div className="form-group col-md-4">
                  <div>
                    {" "}
                    <label forhtml="cover_url ">Categoria</label>
                  </div>
                  <select
                    className="custom-select"
                    onChange={this._changeCategory}
                  >
                    {categories.map(data => {
                      return (
                        <option
                          key={data.id}
                          data-id={data.id}
                          value={data.content}
                        >
                          {data.content}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label forhtml="tagline">Resumo</label>
                <input
                  onChange={e => this.setState({ tagline: e.target.value })}
                  value={tagline}
                  type="text"
                  className="form-control"
                  id="tagline"
                  placeholder="Resumo do livro"
                />
              </div>

              <div className="form-group">
                <label forhtml="description">Descrição</label>
                <textarea
                  id="description"
                  onChange={e => this.setState({ description: e.target.value })}
                  value={description}
                  className="form-control"
                  placeholder="Descrição do livro"
                  rows="2"
                />
              </div>

              <div className="form-group">
                <label forhtml="title">Website</label>
                <input
                  type="text"
                  onChange={e => this.setState({ link: e.target.value })}
                  value={link}
                  className="form-control"
                  id="link"
                  placeholder="Endereço do livro"
                />
              </div>

              <div className="form-row">
                <div className="form-group col-md-6">
                  <label forhtml="thumbnail_url">URL da miniatura</label>
                  <input
                    value={thumbnail_url}
                    onChange={e =>
                      this.setState({ thumbnail_url: e.target.value })
                    }
                    type="text"
                    className="form-control"
                    id="thumbnail_url"
                    placeholder="URL da miniatura"
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
              {modeEdit ? (
                <button
                  style={{ cursor: "pointer" }}
                  type="button"
                  className="btn btn-warning btn-lg btn-block"
                  onClick={this._updateArticle}
                >
                  Atualizar livro
                </button>
              ) : (
                <button
                  style={{ cursor: "pointer" }}
                  type="button"
                  className="btn btn-primary btn-lg btn-block"
                  onClick={this._storeArticle}
                >
                  Guardar livro
                </button>
              )}
            </form>
          </Section>
        </div>
        <div className="col-md-6">
          <h5 style={{ marginBottom: 25 }}>Pré-Visualização</h5>
          <Section noTitle>
            <Post
              onDetails
              title={this.state.title || "Titulo do Livro"}
              text={this.state.tagline || "Um grande livro"}
              imageSrc={
                this.state.thumbnail_url || "http://via.placeholder.com/150x150"
              }
              category={this.state.category_text || "Categoria"}
            />
          </Section>
        </div>
      </div>
    );
  }
}

export default New;
