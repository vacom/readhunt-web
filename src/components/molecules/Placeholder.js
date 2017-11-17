import React from "react";
//Styles
import styled from "styled-components";
import Colors from "../../utils/Colors";
//Components
import {Icon} from '../atoms/index';

const Placeholder = props => {
  return (
    <div className={`${props.className}`}>
        
    </div>
  );
};

const placeholderWithStyles = styled(Placeholder)`
  
`;

export default placeholderWithStyles;
