import React from "react";
//Styles
import styled from "styled-components";
import Colors from "../../utils/Colors";
//Components
//import { Avatar } from "../atoms/index";

const CommentInput = props => {
  return (
    <div className={`card ${props.className}`}>
      <div className="card-body">
        <div className="row">
          <div className="col-md-12">
            <textarea className="form-control" placeholder="O que achas deste livro?" rows="2"></textarea>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <button type="button" className="btn btn-primary float-right">
              Comentar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

CommentInput.defaultProps = {
  title: "Section Title"
};

const commentInputWithStyles = styled(CommentInput)`
  background: ${Colors.background};
  margin-bottom: 20px;
  .avatar{
    padding-right: 0;
  }
  textarea{
    margin-bottom: 10px;
  }
`;

export default commentInputWithStyles;
