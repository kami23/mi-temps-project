import React from "react";
import { Container, Row, Col, Button, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";
const FormEmployer = () => {
  return (
    <Container>
      <Row>
        <Button>Go back</Button>
        <h3>Create your employer profil </h3>
      </Row>
      <Row>
        <Col>
          <Row>
            <Col md="8">
              <Button>Sign up with Google</Button>
              <FormControl
                className="m-6"
                id="key-words-input"
                placeholder="First name*"
                aria-describedby="basic-addon3"
              />
              <FormControl
                id="key-words-input"
                placeholder="Last name*"
                aria-describedby="basic-addon3"
              />
              <FormControl
                id="key-words-input"
                placeholder="Key words"
                aria-describedby="basic-addon3"
              />
              <FormControl
                id="key-words-input"
                placeholder="Key words"
                aria-describedby="basic-addon3"
              />
            </Col>
          </Row>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
};

export default FormEmployer;
