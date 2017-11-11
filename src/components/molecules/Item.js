import React from "react";
//Styles
import styled from "styled-components";
//Components
import { Link, Icon } from "../atoms/index";

const Item = props => {
  return (
    <Link className={props.className} {...props}>
      <Icon name={props.iconName} color={props.iconColor}/>
      <span>{props.text}</span>
    </Link>
  );
};

Item.defaultProps = {
  text: "category"
};

const itemWithStyles = styled(Item)`
  span {
    margin-left: 10px;
  }
`;

export default itemWithStyles;
