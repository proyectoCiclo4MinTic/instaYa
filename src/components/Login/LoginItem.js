import "./LoginItem.css";
import { logo, password, user } from "../../index.js";
import { Form, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function LoginItem() {
  return (
    <div className="login-item d-flex justify-content-center align-items-center">
      <header className="login-item__header">
        <img src={logo} className="login-item__logo" alt="Logo" />
      </header>
      <Form className="login">
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
          <Col sm={1}>
            <img src={user} alt="Logo"></img>
          </Col>
          <Col sm={10}>
            <Form.Control type="email" placeholder="Email" />
          </Col>
        </Form.Group>

        <Form.Group
          as={Row}
          className="mb-3"
          controlId="formHorizontalPassword"
        >
          <Col sm={1}>
            <img src={password} alt="Logo"></img>
          </Col>
          <Col sm={10}>
            <Form.Control type="password" placeholder="Password" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Col sm={{ span: 10, offset: 5 }}>
            <Button variant="outline-light" type="submit">
              <Link to="/orders">Sign in</Link>
            </Button>
          </Col>
        </Form.Group>
      </Form>
    </div>
  );
}

export default LoginItem;
