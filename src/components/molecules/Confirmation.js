import React from "react";
//Components
import { Link } from "../atoms/index";
//Styles
import Colors from "../../utils/Colors";
import styled from "styled-components";

const Confirmation = props => {
  return (
    <div
      className={`card mx-auto animated zoomInUp ${props.className}`}
      style={{ display: props.show ? "inline" : "none" }}
    >
      <div className="card-body">
        <h6>{props.title}</h6>
        <p>{props.description}</p>
        <div className="text-right">
          <Link className="cancelAction" onClick={() => props.onCancel()}>
            Cancelar
          </Link>
          <button
            className="btn btn-danger"
            style={{ cursor: "pointer" }}
            onClick={() => props.onConfirmation()}
            color={props.onConfirmationColor}
          >
            {props.onConfirmationText}
          </button>
        </div>
      </div>
    </div>
  );
};

Confirmation.defaultProps = {
  title: "Form Title",
  description: "Form Date",
  onConfirmationText: "Delete",
  onConfirmationColor: Colors.red,
  show: false
};

const ConfirmationWithStyled = styled(Confirmation)`
  width: 20rem;
  position: absolute;
  left: 0;
  right: 0;
  z-index: 9999;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  .cancelAction {
    margin-right: 10px;
  }
`;

export default ConfirmationWithStyled;
