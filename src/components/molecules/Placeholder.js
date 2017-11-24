import React from "react";
//Styles
import styled from "styled-components";
//Components
import { Icon } from "../atoms/index";

const Placeholder = props => {
  return (
    <div className={`card ${props.className}`}>
      <div className="card-body">
        <Icon name={props.iconName} size={props.iconSize} />
        <h6>{props.msg}</h6>
      </div>
    </div>
  );
};

Placeholder.defaultProps = {
  iconName: "fa-exclamation-triangle",
  msg: "Some error message",
};

const placeholderWithStyles = styled(Placeholder)`
  width: auto;
  ${props => props.noborder ? "border: 0" : ""}
`;

export default placeholderWithStyles;
