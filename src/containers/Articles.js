import React, { Component } from "react";
import { withRouter } from "react-router-dom"; //Components
import { Post, Placeholder } from "../components/molecules/index";
import Spinner from "react-md-spinner";
//API
import { getArticles, getArticlesByCategory } from "../api/articles";
import { getCategory } from "../api/categories";
//Utils
import * as moment from "moment";
class Articles extends Component {
  state = {
    loading: true,
    error: false,
    articles: [],
    category: [],
    pageCount: 0,
    showArticles: 3,
    msg: ""
  };
  componentDidMount() {
    const { categoryId } = this.props;
    this._getArticles(categoryId);
    this._getCategorybyId(1);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.categoryId !== this.props.categoryId) {
      this._getArticles(nextProps.categoryId);
    }
  }
  _getArticles = async categoryId => {
    let res = "";
    if (categoryId === 0) {
      res = await getArticles();
    } else {
      res = await getArticlesByCategory(categoryId);
    }
    const { error, data: articles, msg } = res;
    if (error) {
      this.setState({ error: true, loading: false, msg });
      return;
    }
    const pageCount = Object.keys(articles).length - 4;
    this.setState({ articles, loading: false, msg, pageCount, error: false });
  };
  _getCategorybyId = async id => {
    const res = await getCategory(id);
    const { error, data: category, msg } = res;
    if (error) {
      this.setState({ msg });
      return;
    }
    return category.content || "Sem categoria";
  };
  _showMoreArticles = () => {
    this.setState({
      showArticles: Object.keys(this.state.articles).length,
      pageCount: 0
    });
  };
  render() {
    if (this.state.error) {
      return (
        <div className="text-center">
          <Placeholder msg={this.state.msg} iconSize={32} />
        </div>
      );
    }
    const { articles, pageCount, showArticles } = this.state;
    console.log(articles);
    return (
      <div>
        {this.state.loading ? (
          <div className="text-center">
            <Spinner size={30} />
          </div>
        ) : (
          articles.map((data, index) => {
            if (index <= showArticles) {
              return (
                <Post
                  key={index}
                  onClick={() => this.props.history.push(`/post/${data.id}`)}
                  title={data.title || "Sem titulo"}
                  text={data.tagline || "Sem tagline"}
                  imageSrc={
                    data.thumbnail_url || "http://via.placeholder.com/150x150"
                  }
                  category={
                    `${data.category} - ${moment(data.created_at).fromNow()}` ||
                    "Sem categoria"
                  }
                />
              );
            }
            return true;
          })
        )}
        {pageCount <= 0 ? (
          ""
        ) : (
          <button
            onClick={this._showMoreArticles}
            type="button"
            style={{ marginTop: 10, cursor: "pointer" }}
            className="btn btn-light  btn-block"
          >
            {`Ver mais ${pageCount}`}
          </button>
        )}
      </div>
    );
  }
}

export default withRouter(Articles);
