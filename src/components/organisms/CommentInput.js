import React, { PureComponent } from "react";
//Styles
import styled from "styled-components";
import Colors from "../../utils/Colors";
//Components
import { Icon } from "../atoms/index";
import Spinner from "react-md-spinner";
//API
import { storeCommentByArticleId } from "../../api/comments";
//Utils
let Tesseract = window.Tesseract;
class CommentInput extends PureComponent {
  state = {
    commentText: "",
    loading: false,
    loadingVoice: false,
    error: false,
    msg: ""
  };
  _convertImageToText = e => {
    const imageUrl = e.target.files[0];
    Tesseract.recognize(imageUrl)
      .progress(status => {
        this.setState({ loading: true });
      })
      .catch(err => {
        console.error(err);
      })
      .then(result => {
        this.setState({ commentText: result.text, loading: false });
      })
      .finally(resultOrError => {
        console.log(resultOrError);
      });
  };
  _storeComment = async () => {
    const { user_id, article_id } = this.props;
    const { commentText } = this.state;
    if (commentText) {
      const res = await storeCommentByArticleId(
        commentText,
        user_id,
        article_id
      );
      const { error, data, msg } = res;
      if (error) {
        this.setState({ error: true, msg: `${msg} - ${JSON.stringify(data)}` });
        return;
      }
      //Shows feedback and updates the DB
      this.props.showMessage("success", msg, undefined, "fa-check");
      this.props.updateComments();
      this.setState({
        commentText: ""
      });
    } else {
      this.setState({
        error: true,
        msg: "Comentários invisíveis não são permitidos!"
      });
    }
  };
  _convertVoiceToText = () => {
    try {
      var SpeechRecognition =
        window.SpeechRecognition || window.webkitSpeechRecognition;
      var recognition = new SpeechRecognition();

      recognition.start();

      recognition.onstart = () => {
        this.setState({ loadingVoice: true });
      };

      recognition.onspeechend = () => {
        this.setState({ loadingVoice: false });
      };

      recognition.onerror = event => {
        if (event.error === "no-speech") {
          this.setState({ loadingVoice: false });
        }
      };

      recognition.onresult = event => {
        var current = event.resultIndex;
        var transcript = event.results[current][0].transcript;
        const commentText = this.state.commentText + " " + transcript;
        this.setState({ commentText });
      };
    } catch (e) {
      console.error(e);
    }
  };
  render() {
    return (
      <div className={`card ${this.props.className}`}>
        <div className="card-body">
          <div className="row">
            <div className="col-md-12">
              <textarea
                className="form-control"
                placeholder="O que achas deste livro?"
                rows="2"
                onChange={e =>
                  this.setState({ commentText: e.target.value, error: false })
                }
                value={this.state.commentText}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <input
                id="myInput"
                type="file"
                ref={ref => (this.upload = ref)}
                style={{ display: "none" }}
                onChange={e => {
                  this._convertImageToText(e);
                }}
              />
              {this.state.loading ? (
                <Spinner className="float-left"/>
              ) : (
                <button
                  type="button"
                  className="btn btn-light float-left"
                  onClick={() => this.upload.click()}
                  style={{ cursor: "pointer" }}
                >
                  <Icon name="fa-camera" />
                </button>
              )}
              {this.state.loadingVoice ? (
                <Spinner />
              ) : (
                <button
                  type="button"
                  className="btn btn-light float-left"
                  onClick={this._convertVoiceToText}
                  style={{ cursor: "pointer" }}
                >
                  <Icon name="fa-microphone" />
                </button>
              )}
              <button
                type="button"
                className="btn btn-primary float-right"
                onClick={this._storeComment}
                style={{ cursor: "pointer" }}
              >
                Comentar
              </button>
            </div>
          </div>
        </div>
        {this.state.error ? (
          <div className="alert alert-danger" role="alert">
            {this.state.msg}
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}

CommentInput.defaultProps = {
  title: "Section Title"
};

const commentInputWithStyles = styled(CommentInput)`
  background: ${Colors.background};
  margin-bottom: 20px;
  .avatar {
    padding-right: 0;
  }
  textarea {
    margin-bottom: 10px;
  }
`;

export default commentInputWithStyles;
