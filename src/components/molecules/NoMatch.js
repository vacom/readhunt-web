import React from "react";
//Styles
import styled from "styled-components";

const NoMatch = (props) => {
  return (
    <div>Page not found</div>
  );
};

NoMatch.defaultProps = {
  text: "category"
};

const noMatchWithStyles = styled(NoMatch)`
  span {
    margin-left: 10px;
  }
`;

export default noMatchWithStyles;
