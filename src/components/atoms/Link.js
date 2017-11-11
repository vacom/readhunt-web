import React from "react";
//Styles
import styled from "styled-components";
import Colors from "../../utils/Colors";

const Link = (props) => {
  return(
  <a className={props.className} {...props}>
    {props.children}
  </a>
  )
};


const linkWithStyles = styled(Link)`
  &:hover{
    cursor: pointer;
    color: ${Colors.link.hover};
  }
`;

export default linkWithStyles;
