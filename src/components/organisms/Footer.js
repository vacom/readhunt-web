import React from "react";
//Styles
import styled from "styled-components";
//Components
import { Link } from "../atoms/index";

const Footer = props => {
  return (
    <footer className={`${props.className}`}>
      <div className="container">
        <span className="text-muted">
          Criado por{" "}
          <Link href="http://www.formette.com" target="_blank">
            Vitor Amaral - 76182
          </Link>{" "}
          | MCMM-MI | TDI
        </span>
      </div>
    </footer>
  );
};

const footerWithStyles = styled(Footer)`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 45px;
  background: #f9f9f9;
  border-top: 1px solid #ececec;
  span {
    position: relative;
    top: 10px;
  }
`;

export default footerWithStyles;
