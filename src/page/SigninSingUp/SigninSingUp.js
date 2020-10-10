import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import whiteLogo from "../../assets/png/whiteLogo.png";
import blueLogo from "../../assets/png/blueLogo.png";
import "./SigninSingUp.scss";

export default function SigninSingUp() {
  return (
    <Container className="signin-sigup" fluid>
      <Row>
        <LeftComponent />
        <RightComponent />
      </Row>
    </Container>
  );
}

function LeftComponent() {
  return (
    <Col className="signin-sigup__left" xs={6}>
      <img src={blueLogo} alt="TweetApp"></img>

      <div>
        <h2>- Sigue lo que te interesa (?</h2>
        <h2>- Enterate de que esta hablando la gente (?</h2>

        <h2>- Unete a la conversacion (?</h2>
      </div>
    </Col>
  );
}

function RightComponent() {
  return (
    <Col className="signin-sigup__right" xs={6}>
      <h2>Right Component</h2>
    </Col>
  );
}
