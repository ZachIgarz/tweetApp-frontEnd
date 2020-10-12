import React from "react";

import { Modal } from "react-bootstrap";

import whiteLogo from "../../../assets/png/whiteLogo.png";

import "./BasicModal.scss";

export default function BasicModal(props) {
  const { show, setShow, children } = props;

  return (
    <Modal
      className="basic-modal"
      show={show}
      onHide={() => {
        setShow(false);
      }}
      centered
      size="lg"
    >
      <Modal.Header>
        <Modal.Title>
          <img src={whiteLogo} alt="TweetApp" />
          
        </Modal.Title>
      </Modal.Header>
    <Modal.Body>{children}</Modal.Body>


    </Modal>
  );
}
