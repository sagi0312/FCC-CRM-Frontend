import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Spinner } from "react-bootstrap";
import "./login.css";

const PasswordReset = ({ handleFormLoad }) => {
  const [email, setEmail] = useState("");
  const [loading] = useState(false);

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      return alert("Please Enter Email!");
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
                <h1 className="headerText text-center">Reset Password</h1>
                <hr />
                <Form autoComplete="off" onSubmit={handleOnSubmit}>
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
                  <br />
                  <Button type="submit">Reset Password</Button>
                  {loading && <Spinner variant="primary" animation="border" />}
                </Form>
                <hr />
              </Col>
            </Row>
            <Row className="py-4">
              <Col>
                Already Registered?{" "}
                <a href="#!" onClick={() => handleFormLoad("login")}>
                  Sign In Now
                </a>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
};

export default PasswordReset;
