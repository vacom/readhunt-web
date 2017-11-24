import React, { Component } from "react";
//Components
import {Link} from "../components/atoms/index";
import { List, Card, Placeholder } from "../components/molecules/index";
import Spinner from "react-md-spinner";
//API
import { getSuggestions } from "../api/suggestions";

class Suggestions extends Component {
  state = {
    loading: true,
    error: false,
    suggestions: [],
    msg: ""
  };
  componentDidMount() {
    this._getSuggestions();
  }
  _getSuggestions = async () => {
    const res = await getSuggestions();
    const { error, data: suggestions, msg } = res;
    if (error) {
      this.setState({ error: true, loading: false, msg });
      return;
    }
    this.setState({ suggestions, loading: false, msg });
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
    return (
      <List>
        {this.state.suggestions.map((data, index) => {
          return (
            <Card
              key={index}
              title={data.title}
              subtitle={`Encontrado por ${data.name}`}
              text={data.tagline}
            >
              <Link href={`#/post/${data.id}`}>Ver livro</Link>
            </Card>
          );
        })}
      </List>
    );
  }
}

export default Suggestions;
