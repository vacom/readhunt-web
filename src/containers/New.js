import React, { Component } from "react";
//Components
//import { Link } from "../components/atoms/index";
import { Section, Post } from "../components/molecules/index";

class New extends Component {
  state = {
    title: "",
    tagline: "",
    thumbnail_url: "",
    category_id: 0,
    category_text: "categoria",
    link: "",
    description: "",
    cover_url: ""
  };
  render() {
    return (
      <div className="row">
        <div className="col-md-6">
          <h5 style={{ marginBottom: 25 }}>Publique algo novo</h5>
          <Section noTitle>
            <form>
              <div className="form-row">
                <div className="form-group col-md-8">
                  <label forhtml="title">Titulo</label>
                  <input
                    onChange={e => this.setState({ title: e.target.value })}
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
                    onChange={e =>
                      this.setState({ category_text: e.target.value })}
                  >
                    <option value="Informática">Informática</option>
                    <option value="Travel">Travel</option>
                    <option value="Arte">Arte</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label forhtml="tagline">Resumo</label>
                <input
                  onChange={e => this.setState({ tagline: e.target.value })}
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
                  className="form-control"
                  placeholder="Descrição do livro"
                  rows="2"
                />
              </div>

              <div className="form-group">
                <label forhtml="title">Website</label>
                <input
                  type="text"
                  className="form-control"
                  id="link"
                  placeholder="Endereço do livro"
                />
              </div>

              <div className="form-row">
                <div className="form-group col-md-6">
                  <label forhtml="thumbnail_url">URL da miniatura</label>
                  <input
                    onChange={e =>
                      this.setState({ thumbnail_url: e.target.value })}
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
                    className="form-control"
                    id="cover_url"
                    placeholder="URL de Capa"
                  />
                </div>
              </div>
              <button
                type="button"
                className="btn btn-primary btn-lg btn-block"
              >
                Guardar livro
              </button>
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
