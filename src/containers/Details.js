import React, { Component } from "react";
//Components
import { Image, Icon, Center } from "../components/atoms/index";
import { Section, Post, Placeholder } from "../components/molecules/index";
import { CommentInput } from "../components/organisms/index";
import Comment from "../components/molecules/Post";
import Spinner from "react-md-spinner";
//API
import { getArticle } from "../api/articles";
import { getVotesCountbyArticle } from "../api/votes";
import { getCategory } from "../api/categories";
import { getCommentsbyArticle } from "../api/comments";
//Utils
import * as moment from "moment";
class Details extends Component {
  state = {
    loading: true,
    error: false,
    article: [],
    votes: 0,
    category: "",
    comments: [],
    commentsLoading: true,
    msg: ""
  };
  componentDidMount() {
    const id = this.props.match.params.id;
    this._getArticle(id);
  }
  _getArticle = async id => {
    const res = await getArticle(id);
    console.log("artigo = ", res);
    const { error, data: article, msg } = res;
    if (error) {
      this.setState({ error: true, loading: false, msg });
      return;
    }
    //get votes
    this._getVotes(article.id);
    //get Category
    this._getCategorybyId(article.category_id);
    //get comments
    this._getComments(article.id);
    this.setState({
      article,
      msg,
      loading: false
    });
  };
  _getVotes = async articleId => {
    const res = await getVotesCountbyArticle(articleId);
    const { error, data, msg } = res;
    console.log("votes = ", res);
    if (error) {
      this.setState({ error: true, msg });
      return;
    }
    this.setState({
      votes: data[0].total,
      msg
    });
  };
  _getCategorybyId = async id => {
    const res = await getCategory(id);
    const { error, data: category, msg } = res;
    if (error) {
      this.setState({ error: true, msg });
      return;
    }
    this.setState({
      category,
      msg
    });
  };
  _getComments = async id => {
    const res = await getCommentsbyArticle(id);
    const { error, data: comments, msg } = res;
    // const comments = this.state.comments;
    if (error) {
      this.setState({
        commentsLoading: false,
        msg
      });
      return;
    }
    //comments.push(comment);
    this.setState({
      comments,
      commentsLoading: false,
      msg
    });
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
          {" "}
          <Placeholder msg={this.state.msg} iconSize={32} />
        </div>
      );
    }
    const { article, votes, category, comments } = this.state;
    return (
      <div>
        <div className="row">
          <div className="col-md-12 col-sm-12">
            <Post
              onDetails
              title={article.title || "Sem titulo"}
              text={article.tagline || "Sem tagline"}
              imageSrc={article.thumbnail_url || "http://via.placeholder.com/150x150"}
              category={category.content || "Sem categoria"}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-8 col-sm-12 order-sm-12 order-md-1">
            <Section noTitle>
              <Image src={article.cover_url || "http://via.placeholder.com/350x350"} />
            </Section>
            <h6 style={{ marginTop: 25 }}>Descrição</h6>
            <Section noTitle>
              <p>{article.description || "Sem descrição, edite para adiconar"}</p>
            </Section>
            <h6 style={{ marginTop: 25 }}>Comentários</h6>
            <Section noTitle>
              <CommentInput />
              {this.state.commentsLoading ? (
                <div className="text-center">
                  <Spinner size={30} />
                </div>
              ) : Object.keys(comments).length === 0 ? (
                <div>Sem comentários</div>
              ) : (
                comments.map((data, index) => {
                  return (
                    <Comment
                      key={index}
                      onDetails
                      title={data.author}
                      text={data.content}
                      imageSrc={data.avatar_url}
                      imageSize={50}
                      category={moment(data.created_at).format("ll")}
                    />
                  );
                })
              )}
            </Section>
          </div>
          <div className="col-md-4 col-sm-12  order-sm-1  order-md-12">
            <Section noTitle>
              <button
                type="button"
                className="btn btn-primary btn-lg btn-block"
              >
                <Icon name="fa-thumbs-up" color="#FFF" /> Votar
                <span
                  style={{ marginLeft: 10, fontSize: 17, color: "#e6e6e6" }}
                >
                  {votes}
                </span>
              </button>
              <hr />
              <a
                type="button"
                className="btn btn-light btn-lg btn-block"
                href={article.link}
                target="_blank"
              >
                <Icon name="fa-link" /> Website
              </a>
            </Section>
          </div>
        </div>
      </div>
    );
  }
}

export default Details;
