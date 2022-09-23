// import logo from './logo.svg';
import {logo, password, user} from './index.js';

import './App.css';

// React Bootstrap
import { Form, Button, Row, Col} from "react-bootstrap"

function App() {
    return ( 
        <div className="loginApp d-flex justify-content-center align-items-center">
            <header> 
                <img src={logo} alt="Logo"></img>
            </header>
            <Form className='login'>
                <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                    <Col sm={1}>
                        <img src={user} alt="Logo"></img>
                    </Col>
                    <Col sm={10}>
                        <Form.Control type="email" placeholder="Email" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                    <Col sm={1}>
                        <img src={password} alt="Logo"></img>
                    </Col>
                    <Col sm={10}>
                    <Form.Control type="password" placeholder="Password" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                    <Col sm={{ span: 10, offset: 5 }}>
                        <Button variant='outline-light'type='submit'>
                            Sign in
                        </Button>
                    </Col>
                </Form.Group>
        </Form>
    </div>
    );
}

export default App;