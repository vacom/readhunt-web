import React from "react";
//Styles
import styled from "styled-components";
import Colors from "../../utils/Colors";

const Link = ({ className, children, href, style, target }) => {
  return (
    <a className={className} href={href} style={style} target={target}>
      {children}
    </a>
  );
};

const linkWithStyles = styled(Link)`
  &:hover {
    cursor: pointer;
    color: ${Colors.link.hover};
  }
`;

export default linkWithStyles;
