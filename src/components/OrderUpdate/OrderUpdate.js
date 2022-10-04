import "./OrderUpdate.css";
import { logo, password, user } from "../../index.js";
import { Form, Button, Row, Col } from "react-bootstrap";
import Card from "../UI/Card";
import { useParams } from "react-router-dom";

const OrderUpdate = () => {
  const params = useParams();
  console.log(params.orderID);
  return (
    <div className="order-update">
      <h2>Actualización de Órden #: {params.orderID}</h2>
      <h3></h3>

      <Form className="order-update-form register-user-item__register">
        <Form.Group
          as={Row}
          className="order-update-form__date mb-3"
          controlId=""
        >
          <Col sm={1}>
            <img src={user} alt="Logo"></img>
          </Col>
          <Col sm={3}>
            <Form.Control type="date"></Form.Control>
          </Col>
        </Form.Group>
        <Form.Group
          as={Row}
          className="order-update-form__time mb-3"
          controlId=""
        >
          <Col sm={1}>
            <img src={user} alt="Logo"></img>
          </Col>
          <Col sm={3}>
            <Form.Control type="time" min="08:00" max="17:00"></Form.Control>
          </Col>
        </Form.Group>
        <Form.Group
          as={Row}
          className="order-update-form__status mb-3"
          controlId=""
        >
          <Col sm={1}>
            <img src={user} alt="Logo"></img>
          </Col>
          <Col sm={3}>
            <Form.Select aria-label="Default select example">
              <option>Estado</option>
              <option value="1">Guardado</option>
              <option value="2">Cumplido</option>
              <option value="3">Cancelado</option>
            </Form.Select>
          </Col>
        </Form.Group>

        <Form.Group
          as={Row}
          className="order-update-form__length mb-3"
          controlId=""
        >
          <Col sm={1}>
            <img src={user} alt="Logo"></img>
          </Col>
          <Col sm={2}>
            <Form.Control type="number" placeholder="Largo cm"></Form.Control>
          </Col>
        </Form.Group>
        <Form.Group
          as={Row}
          className="order-update-form__width mb-3"
          controlId=""
        >
          <Col sm={1}>
            <img src={user} alt="Logo"></img>
          </Col>
          <Col sm={2}>
            <Form.Control type="number" placeholder="Ancho cm"></Form.Control>
          </Col>
        </Form.Group>
        <Form.Group
          as={Row}
          className="order-update-form__height mb-3"
          controlId=""
        >
          <Col sm={1}>
            <img src={user} alt="Logo"></img>
          </Col>
          <Col sm={2}>
            <Form.Control type="number" placeholder="Alto cm"></Form.Control>
          </Col>
        </Form.Group>
        <Form.Group
          as={Row}
          className="order-update-form__weight mb-3"
          controlId=""
        >
          <Col sm={1}>
            <img src={user} alt="Logo"></img>
          </Col>
          <Col sm={2}>
            <Form.Control type="number" placeholder="Peso grs"></Form.Control>
          </Col>
        </Form.Group>

        <Form.Group
          as={Row}
          className="order-update-form__delicate mb-3"
          controlId=""
        >
          <Col sm={1}>
            <img src={user} alt="Logo"></img>
          </Col>
          <Col sm={3}>
            <Form.Select aria-label="Default select example">
              <option>Delicado/No Delicado</option>
              <option value="1">Delicado</option>
              <option value="2">No Delicado</option>
            </Form.Select>
          </Col>
        </Form.Group>

        <Form.Group
          as={Row}
          className="order-update-form__sender-address mb-3"
          controlId=""
        >
          <Col sm={1}>
            <img src={user} alt="Logo"></img>
          </Col>
          <Col sm={10}>
            <Form.Control
              type="text"
              placeholder="Dirección recogida"
            ></Form.Control>
          </Col>
        </Form.Group>
        <Form.Group
          as={Row}
          className="order-update-form__sender-city mb-3"
          controlId=""
        >
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
        <Form.Group
          as={Row}
          className="order-update-form__recipient-name mb-3"
          controlId=""
        >
          <Col sm={1}>
            <img src={user} alt="Logo"></img>
          </Col>
          <Col sm={10}>
            <Form.Control
              type="text"
              placeholder="Nombre completo destinatario"
            ></Form.Control>
          </Col>
        </Form.Group>
        <Form.Group
          as={Row}
          className="order-update-form__recipient-id mb-3"
          controlId=""
        >
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
        <Form.Group
          as={Row}
          className="order-update-form__recipient-address mb-3"
          controlId=""
        >
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
        <Form.Group
          as={Row}
          className="order-update-form__recipient-city mb-3"
          controlId=""
        >
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
        <Form.Group as={Row} className="order-update-form__submit-button mb-3">
          <Col sm={{ span: 10, offset: 5 }}>
            <Button variant="outline-light" type="submit">
              Actualizar Órden
            </Button>
          </Col>
        </Form.Group>
      </Form>
    </div>
  );
};

export default OrderUpdate;
