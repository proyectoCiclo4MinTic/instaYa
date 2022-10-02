import { logo, password, user } from "../../index.js";
import { Form, Button, Row, Col } from "react-bootstrap";
import "./OrderRegister.css";

const OrderRegister = () => {
  return (
    <div>
      <Form className="register-user-item__register">
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
          <Col sm={1}>
            <img src={user} alt="Logo"></img>
          </Col>
          <Col sm={1}>
            <Form.Control type="text" placeholder="Largo"></Form.Control>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
          <Col sm={1}>
            <img src={user} alt="Logo"></img>
          </Col>
          <Col sm={1}>
            <Form.Control type="text" placeholder="Ancho"></Form.Control>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
          <Col sm={1}>
            <img src={user} alt="Logo"></img>
          </Col>
          <Col sm={1}>
            <Form.Control type="text" placeholder="Alto"></Form.Control>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
          <Col sm={1}>
            <img src={user} alt="Logo"></img>
          </Col>
          <Col sm={1}>
            <Form.Control type="text" placeholder="Peso"></Form.Control>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
          <Col sm={1}>
            <img src={user} alt="Logo"></img>
          </Col>
          <Col sm={10}>
            <Form.Control
              type="text"
              placeholder="Dirección regogida"
            ></Form.Control>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
          <Col sm={1}>
            <img src={user} alt="Logo"></img>
          </Col>
          <Col sm={10}>
            <Form.Control
              type="text"
              placeholder="Ciudad recogida"
            ></Form.Control>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
          <Col sm={1}>
            <img src={user} alt="Logo"></img>
          </Col>
          <Col sm={10}>
            <Form.Control
              type="text"
              placeholder="Nombre destinatario"
            ></Form.Control>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
          <Col sm={1}>
            <img src={user} alt="Logo"></img>
          </Col>
          <Col sm={10}>
            <Form.Control
              type="text"
              placeholder="Cédula/Nit destinatario"
            ></Form.Control>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
          <Col sm={1}>
            <img src={user} alt="Logo"></img>
          </Col>
          <Col sm={10}>
            <Form.Control
              type="text"
              placeholder="Dirección entrega"
            ></Form.Control>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
          <Col sm={1}>
            <img src={user} alt="Logo"></img>
          </Col>
          <Col sm={10}>
            <Form.Control
              type="text"
              placeholder="Ciudad entrega"
            ></Form.Control>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Col sm={{ span: 10, offset: 5 }}>
            <Button variant="outline-light" type="submit">
              Crear Órden
            </Button>
          </Col>
        </Form.Group>
      </Form>
    </div>
  );
};

export default OrderRegister;
