import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faSearch,
  faUsers,
  faComment,
} from "@fortawesome/free-solid-svg-icons";

import BasicModal from "../../components/Modal/BasicModal";
import SignUpForm from "../../components/SignUpForm";

import whiteLogo from "../../assets/png/whiteLogo.png";
import blueLogo from "../../assets/png/blueLogo.png";
import "./SigninSingUp.scss";

export default function SigninSingUp() {
  const [showModal, setShowModal] = useState(false);
  const [contentModal, setContentModal] = useState(null);

  const openModal = (content) => {
    setShowModal(true);
    setContentModal(content);
  };

  return (
    <>
      <Container className="signin-sigup" fluid>
        <Row>
          <LeftComponent />
          <RightComponent openModal={openModal} setShowModal={setShowModal} />
        </Row>
      </Container>

      <BasicModal show={showModal} setShow={setShowModal}>
        {contentModal}
      </BasicModal>
    </>
  );
}

function LeftComponent() {
  return (
    <Col className="signin-sigup__left" xs={6}>
      <img src={blueLogo} alt="TweetApp"></img>

      <div>
        <h2>
          <FontAwesomeIcon icon={faSearch} />
          Sigue lo que te interesa.
        </h2>
        <h2>
          <FontAwesomeIcon icon={faUsers} />
          Enterate de que esta hablando la gente.
        </h2>

        <h2>
          <FontAwesomeIcon icon={faComment} />
          Unete a la conversacion.
        </h2>
      </div>
    </Col>
  );
}

function RightComponent(props) {
  const { openModal, setShowModal } = props;

  return (
    <Col className="signin-sigup__right" xs={6}>
      <div>
        <img src={whiteLogo} alt="Tweet" />
        <h2>Mira lo que esta pasando en el mundo es este momento</h2>
        <h3>Unete hoy mismo a TweetApp</h3>

        <Button
          variant="primary"
          onClick={() => openModal(<SignUpForm setShowModal={setShowModal} />)}
        >
          Registrate
        </Button>

        <Button
          variant="outline-primary"
          onClick={() => openModal(<h2>Formulario Login</h2>)}
        >
          Iniciar Session
        </Button>
      </div>
    </Col>
  );
}
