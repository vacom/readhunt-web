import React from "react";
//Styles
import styled from "styled-components";
import Colors from "../../utils/Colors";

const List = props => {
  return (
    <div className={`list-group ${props.className}`}>{props.children}</div>
  );
};

const listWithStyles = styled(List)`
  .list-group-item {
    border: 1px solid ${Colors.background};
    background: none;
    margin-top: 5px;
  }
  .active,
  .list-group-item:hover {
    background: ${Colors.white};
    color: ${Colors.link.highlight};
    border: 1px solid ${Colors.border};
  }
`;

export default listWithStyles;
