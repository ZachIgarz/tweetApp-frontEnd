import React, { useState } from "react";
import { Row, Col, Form, Button, Spinner } from "react-bootstrap";
import "./SingUpForm.scss";
import { values, size } from "lodash";
import { toast } from "react-toastify";
import { isEmailValid } from "../../utils/validations";
import  {signUpApi} from "../../api/auth";

export default function SingUpForm(props) {
  const { setShowModal } = props;

  const [formData, setFormData] = useState(inicialFormValue());

  const [singUpLoanding, setSingUpLoanding] = useState(false);


  const onSubmit = (evento) => {
    evento.preventDefault();

    


    let validCount = 0;

    values(formData).some((value) => {
      value && validCount++;
      return null;
    });

    if (validCount !== size(formData)) {
      toast.warning("Completa todos los campos del formulario");
    } else {
      if (!isEmailValid(formData.email)) {
        toast.warning("Email Invalido");
        
      } else if (formData.password !== formData.repeatPassword) {
        toast.warning("Las Contraseñas no coinciden");
      } else if (size(formData.password) < 6) {
        toast.warning("La Contraseña tiene que tener al menos 6 caracteres ");
      } else {
        setSingUpLoanding(true);
        signUpApi(formData).then(response=>{
          if (response.code){
            toast.warning(response.message)
          }else{
            toast.success("El registro ah sido correcto")
            setShowModal(false)
            setFormData(inicialFormValue)
          }
        }).catch(() =>{
          toast.error("Error del Servidor , intentelo mas tarde")
        }).finally(()=>{
          setSingUpLoanding(false)
        })
      }
    }

    
  };

  const onChange = (evento) => {
    
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
            {!singUpLoanding ? "Registrate" : <Spinner animation="border"/>}
          
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
