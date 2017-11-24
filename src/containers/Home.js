import React, { Component } from "react";
//Components
import { Section } from "../components/molecules/index";
import Articles from "./Articles";
import Categorias from "./Categories";
import Suggestions from "./Suggestions";

class Home extends Component {
  componentDidMount() {
    //getArticles().then(x => console.log(x));
  }
  _goToDetails = () => {
    this.props.history.push("/post/1");
  };
  render() {
    return (
      <div className="row">
        <div className="col-md-3">
          <h6>Categorias</h6>
          <Categorias />
        </div>
        <div className="col-md-6">
          <Section title="Livros">
            <Articles />
          </Section>
        </div>
        <div className="col-md-3">
          <h6>Sugestões</h6>
          <Suggestions />
        </div>
      </div>
    );
  }
}

export default Home;
