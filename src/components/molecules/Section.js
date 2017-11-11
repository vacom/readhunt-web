import React from "react";
//Styles
import styled from "styled-components";

const Section = props => {
  return (
    <div className={`card ${props.className}`}>
      <div className="card-body">
        {props.noTitle ? (
          ""
        ) : (
          <span>
            <h5>{props.title}</h5>
            <hr />
          </span>
        )}
        {props.children}
      </div>
    </div>
  );
};

Section.defaultProps = {
  title: "Section Title"
};

const sectionWithStyles = styled(Section)`margin-bottom: 10px;`;

export default sectionWithStyles;
