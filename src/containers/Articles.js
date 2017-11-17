import React, { Component } from "react";
//Components
import { Post } from "../components/molecules/index";
import Spinner from "react-md-spinner";
//API
import { getArticles } from "../api/articles";

class Articles extends Component {
  state = {
    loading: true,
    error: false,
    data: []
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({ loading: false });
    }, 6000);

    getArticles().then(res => {
      console.log(res);
      if (res.error) {
        this.setState({ error: true });
        return;
      }
      this.setState({ data: res.data, loading: false });
    });
  }
  render() {
    const { loading, error, data } = this.state;
    if (error) {
      return <div>Error</div>;
    }
    if(Object.keys(data).length <= 0){
        return <div>Esta vazio</div>
    }
    return (
      <div>
        {loading ? (
          <div className="text-center">
            <Spinner size={30} />
          </div>
        ) : (
          <Post
            onClick={this._goToDetails}
            title="Zero To One"
            text="Peter Thiel's new book on Startups"
            imageSrc="https://goo.gl/jXHWTb"
            votes={12}
            comments={2}
          />
        )}
      </div>
    );
  }
}

export default Articles;
