import React, { PureComponent } from "react";
//Styles
import styled from "styled-components";
import Colors from "../../utils/Colors";
//Components
import { Icon } from "../atoms/index";
import Spinner from "react-md-spinner";
//Utils
let Tesseract = window.Tesseract;
class CommentInput extends PureComponent {
  state = {
    commentText: "",
    loading: false,
    error: false,
    msg: ""
  };
  _convertImageToText = e => {
    const imageUrl = e.target.files[0];
    Tesseract.recognize(imageUrl)
      .progress(status => {
        console.log(status.progress);
        this.setState({ loading: true });
      })
      .catch(err => {
        console.error(err);
      })
      .then(result => {
        console.log(result.text);
        this.setState({ commentText: result.text, loading: false });
      })
      .finally(resultOrError => {
        console.log(resultOrError);
      });
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
                <Spinner />
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
              <button
                type="button"
                className="btn btn-primary float-right"
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
