import React from "react";
//Styles
import styled from "styled-components";
import Colors from "../../utils/Colors";
//Components
//import Icon from "../atoms/Icon";

const Post = (props) => {
  return (
    <div className={`row ${props.className}`} onClick={props.onClick}>
      <div className="col-sm-12">
        <div className="card">
          <div className="card-body">
            <img
              src={props.imageSrc}
              className="rounded float-left rd-thumbnail"
              alt="thumb"
            />
            <div className="content float-left">
              <h5
                className={`card-title ${props.onDetails
                  ? ""
                  : "text-truncate"}`}
              >
                {props.title}
              </h5>
              <p
                className={`card-text ${props.onDetails
                  ? ""
                  : "text-truncate"}`}
              >
                {props.text}
              </p>
              <span className="badge badge-light">{props.category}</span>
            </div>
            {props.onDetails ? (
              ""
            ) : (""/*
              <div className="rd-tools text-right">
                <button type="button" className="btn btn-sm btn-outline-dark">
                  <Icon
                    size={15}
                    name="fa-thumbs-up"
                    color={Colors.link.normal}
                  />{" "}
                  {props.votes}
                </button>
                <button type="button" className="btn btn-sm btn-outline-dark">
                  <Icon
                    size={15}
                    name="fa-comment"
                    color={Colors.link.normal}
                  />{" "}
                  {props.comments}
                </button>
              </div>
            */)}
          </div>
        </div>
      </div>
    </div>
  );
};

Post.defaultProps = {
  imageSrc: "http://via.placeholder.com/150x150",
  title: "Book Title",
  subtitle: "Book subtitle",
  text: "Book text",
  votes: "0",
  comments: "0",
  category: "Arte"
};

const postWithStyles = styled(Post)`
  .card {
    border-top: 0;
    border-right: 0;
    border-left: 0;
    ${props =>
      props.onDetails
        ? "background: transparent; border: none; margin-bottom: 20px;"
        : ""};
    &:hover {
      ${props => (props.onDetails ? "" : "cursor: pointer;")};
      background: ${Colors.card.hover};
    }
  }
  .rd-thumbnail {
    width: ${props => props.imageSize || 75}px;
  }
  .card-body {
    padding: 10px;
  }
  .content {
    margin-left: 10px;
  }

  .card-title,
  .card-text {
    ${props => (props.onDetails ? "max-width: 100%;" : "max-width: 280px;")};
  }
  .card-title {
    margin-bottom: 0.15rem;
  }
  .card-text {
    color: ${Colors.link.normal};
    margin: 0;
  }
  .rd-tools button {
    margin-left: 5px;
    border-color: ${Colors.link.hover};
    &:hover {
      cursor: pointer;
    }
  }
`;

export default postWithStyles;
