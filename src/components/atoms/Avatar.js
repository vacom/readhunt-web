import React from "react";
//Styles
import styled from "styled-components";

const Avatar = (props) => (
   <img className={`rounded img-fluid ${props.className}`} src={props.src} alt=""/>
);

Avatar.defaultProps = {
  src: 'http://i.pravatar.cc/100',
  size: 150
};

const avatarWithStyles = styled(Avatar)`
  width: ${(props) => props.size || 150}px;
`;

export default avatarWithStyles;
