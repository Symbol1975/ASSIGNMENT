import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const handleLoginClose = () => setShowLogin(false);
  const handleLoginShow = () => setShowLogin(true);
  const handleRegisterClose = () => setShowRegister(false);
  const handleRegisterShow = () => setShowRegister(true);

  return (
    <div className="App">
      <Row className="mt-5">
        <Col className="text-center">
          <Button variant="primary" onClick={handleLoginShow}>
            Open Login Modal
          </Button>
          <Button variant="secondary" className="ms-3" onClick={handleRegisterShow}>
            Open Registration Modal
          </Button>
        </Col>
      </Row>

      {/* Login Modal */}
      <Modal show={showLogin} onHide={handleLoginClose}>
        <Modal.Header closeButton>
          <Modal.Title>LOGIN TO MY ACCOUNT</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formEmail" className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="formPassword" className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter password" />
            </Form.Group>

            <Form.Group controlId="formBasicCheckbox" className="mb-3">
              <Form.Check type="checkbox" label="Remember Me On This Computer" />
            </Form.Group>

            <Button variant="primary" className="w-100" type="submit">
              LOGIN
            </Button>

            <div className="mt-3 text-center">
              <a href="#" className="text-decoration-none">Forgot Your Password?</a>
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <div className="w-100 text-center">
            <p>Don't have an account? <a href="#" className="text-decoration-none" onClick={() => { setShowLogin(false); setShowRegister(true); }}>Create A New Account</a></p>
          </div>
        </Modal.Footer>
      </Modal>

      {/* Registration Modal */}
      <Modal show={showRegister} onHide={handleRegisterClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create A New Account</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formRegisterEmail" className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="formRegisterPassword" className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter password" />
            </Form.Group>

            <Form.Group controlId="formConfirmPassword" className="mb-3">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" placeholder="Confirm password" />
            </Form.Group>

            <Button variant="primary" className="w-100" type="submit">
              Register
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default App;
