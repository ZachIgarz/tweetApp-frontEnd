import React from "react";
import { Row, Col, Form, Button, Spinner } from "react-bootstrap";
import "./SingUpForm.scss";

export default function SingUpForm(props) {
  const { setShowModal } = props;

  const onSubmit = (evento) => {
    evento.preventDefault();
    setShowModal(false);
  };

  return (
    <div className="sing-up-form">
      <h2>Crea Tu Cuenta.</h2>

      <Form onSubmit={onSubmit}>
        <Form.Group>
          <Row>
            <Col>
              <Form.Control type="text" placeholder="Nombres"></Form.Control>
            </Col>

            <Col>
              <Form.Control type="text" placeholder="Apellidos"></Form.Control>
            </Col>
          </Row>
        </Form.Group>

        <Form.Group>
          <Form.Control type="email" placeholder="Email"></Form.Control>
        </Form.Group>

        <Form.Group>
          <Row>
            <Col>
              <Form.Control
                type="password"
                placeholder="Password"
              ></Form.Control>
            </Col>
            <Col>
              <Form.Control
                type="password"
                placeholder="Repetir Password"
              ></Form.Control>
            </Col>
          </Row>
        </Form.Group>

        <Button variant="primary" type="submit">
          Registrarse
        </Button>
      </Form>
    </div>
  );
}
