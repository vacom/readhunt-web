import React from "react";
//Styles
import styled from "styled-components";

const Image = (props) => (
   <img className={`rounded img-fluid ${props.className}`} src={props.src} alt=""/>
);

Image.defaultProps = {
  src: 'http://via.placeholder.com/400x400',
  width: 400,
  height: 400
};

const imageWithStyles = styled(Image)`
  width: 100%;
  height: ${(props) => props.height || 400}px;
`;

export default imageWithStyles;
