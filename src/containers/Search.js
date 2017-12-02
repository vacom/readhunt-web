import React, { Component } from "react";
//Components
import { Section, Placeholder, Post } from "../components/molecules/index";
import Spinner from "react-md-spinner";
//API
import { getSearch } from "../api/searches";
class Search extends Component {
  state = {
    loading: true,
    error: false,
    results: [],
    msg: ""
  };
  componentDidMount() {
    //const query = this.props.match.params.query;
    const param = this.props.location.search;
    const query = param.split("=");
    this._getSearchResults(query[1]);
  }
  _getSearchResults = async query => {
    const res = await getSearch(query);
    const { error, data: results, msg } = res;
    if (error) {
      this.setState({ error: true, loading: false, msg });
      return;
    }
    this.setState({ results, loading: false, msg, error: false });
  };
  render() {
    if (this.state.error) {
      return (
        <Section title={`Resultados da pesquisa (0)`}>
          <div className="text-center">
            <Placeholder
              msg={this.state.msg}
              iconSize={32}
              iconName="fa-search"
              noborder
            />
          </div>
        </Section>
      );
    }
    const { results } = this.state;
    return (
      <div className="row">
        <div className="col-md-12">
          <Section
            title={`Resultados da pesquisa (${Object.keys(results).length})`}
          >
            {this.state.loading ? (
              <div className="text-center">
                <Spinner size={30} />
              </div>
            ) : (
              results.map((data, index) => {
                return (
                  <Post
                    key={index}
                    onClick={() => this.props.history.push(`/post/${data.id}`)}
                    title={data.title || "Sem titulo"}
                    text={data.tagline || "Sem tagline"}
                    imageSrc={
                      data.thumbnail_url || "http://via.placeholder.com/150x150"
                    }
                    category={`${data.category} -  Encontrado por ${
                      data.author
                    }`}
                  />
                );
              })
            )}
          </Section>
        </div>
      </div>
    );
  }
}

export default Search;
