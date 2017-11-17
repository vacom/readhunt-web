import React from "react";
//Styles
import styled from "styled-components";

const AuthWrapper = (props) => {
  return (
    <div className={`container ${props.className}`}>
      <form className="form-signin">
        <h2 className="form-signin-heading">{props.title}</h2>
        {props.children}
      </form>
    </div>
  );
};

const authWrapperWithStyles = styled(AuthWrapper)`
  .form-signin {
    max-width: 330px;
    padding: 15px;
    margin: 0 auto;
  }
  .form-signin .form-signin-heading,
  .form-signin .checkbox {
    margin-bottom: 10px;
  }
  .form-signin .checkbox {
    font-weight: 400;
  }
  .form-signin .form-control {
    position: relative;
    box-sizing: border-box;
    height: auto;
    padding: 10px;
    font-size: 16px;
  }
  .form-signin .form-control:focus {
    z-index: 2;
  }
  .form-signin input[type="email"] {
    margin-bottom: -1px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }
  .form-signin input[type="password"] {
    margin-bottom: 10px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
`;

export default authWrapperWithStyles;
