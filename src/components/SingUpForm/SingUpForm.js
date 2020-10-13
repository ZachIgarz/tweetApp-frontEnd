import React, { useState } from "react";
import { Row, Col, Form, Button, Spinner } from "react-bootstrap";
import "./SingUpForm.scss";
import {values, size} from "lodash";
import { toast } from 'react-toastify';

export default function SingUpForm(props) {
  const { setShowModal } = props;

  const [formData, setFormData] = useState(inicialFormValue());

  const onSubmit = (evento) => {
    evento.preventDefault();
    
    console.log(formData)

    let validCount = 0;

    values(formData).some(value =>{
      value && validCount ++
      return null
    })

      if(validCount !== size(formData)){
        toast.warning("Completa todos los campos del formulario")
      }else{

        //if()
        toast.success("formulario ok")
      }

    console.log(validCount)

  };

  const onChange = (evento) => {
    console.log(evento.target.name);
    setFormData({ ...formData, [evento.target.name]: evento.target.value });
  };

  return (
    <div className="sing-up-form">
      <h2>Crea Tu Cuenta.</h2>

      <Form onSubmit={onSubmit} onChange={onChange}>
        <Form.Group>
          <Row>
            <Col>
              <Form.Control
                type="text"
                placeholder="Nombres"
                defaultValue={formData.nombres}
                name="nombres"
              ></Form.Control>
            </Col>

            <Col>
              <Form.Control
                type="text"
                placeholder="Apellidos"
                defaultValue={formData.apellidos}
                name="apellidos"
              ></Form.Control>
            </Col>
          </Row>
        </Form.Group>

        <Form.Group>
          <Form.Control
            type="email"
            placeholder="Email"
            defaultValue={formData.email}
            name="email"
          ></Form.Control>
        </Form.Group>

        <Form.Group>
          <Row>
            <Col>
              <Form.Control
                type="password"
                placeholder="Password"
                defaultValue={formData.password}
                name="password"
              ></Form.Control>
            </Col>
            <Col>
              <Form.Control
                type="password"
                placeholder="Repetir Password"
                defaultValue={formData.repeatPassword}
                name="repeatPassword"
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

function inicialFormValue() {
  return {
    nombres: "",
    apellidos: "",
    email: "",
    password: "",
    repeatPassword: "",
  };
}
