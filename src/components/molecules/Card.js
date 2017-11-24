import React from "react";
//Styles
import styled from "styled-components";

const Card = props => {
  return (
    <div className={`card ${props.className}`}>
      <div className="card-body">
        <h4 className="card-title">{props.title}</h4>
        <h6 className="card-subtitle mb-2 text-muted">{props.subtitle}</h6>
        <p className="card-text">{props.text}</p>
        {props.children}
      </div>
    </div>
  );
};

Card.defaultProps = {
  title: "Book Title",
  subtitle: "Book subtitle",
  text: "Book text"
};

const cardWithStyles = styled(Card)`
  width: auto;
  margin-bottom: 10px;
  &:last-child {
    margin-bottom: 0;
  }
`;

export default cardWithStyles;
