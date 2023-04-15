import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Spinner } from "react-bootstrap";
import "./login.css";

const Login = ({ handleFormLoad }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Here");
    if (!email || !password) {
      return alert("Enter All The Field Values!");
    }

    //TODO call api to submit the form
  };
  return (
    <>
      <div className="entry-page">
        <div className="jumbotron m-3">
          <Container>
            <Row>
              <Col>
                <h1 className="headerText text-center">Admin Login</h1>
                <hr />
                <Form autoComplete="off" onSubmit={handleSubmit}>
                  <Form.Group>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter Email"
                      required
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      name="password"
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
                      placeholder="Enter Password"
                      required
                    />
                  </Form.Group>
                  <br />
                  <Button type="submit">Sign In</Button>
                  {loading && <Spinner variant="primary" animation="border" />}
                </Form>
                <hr />
              </Col>
            </Row>

            <Row>
              <Col>
                <a href="#!" onClick={() => handleFormLoad("passwordReset")}>
                  Forget Password?
                </a>
              </Col>
            </Row>
            <Row className="py-4">
              <Col>
                Are you new here? <a href="#!">Register Now</a>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Login;
