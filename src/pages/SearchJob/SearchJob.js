import React from "react";
import {
  Container,
  Row,
  Col,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

const SearchJob = () => {
  return (
    <Container>
      <h1>Find a job offer</h1>
      <Row className="justify-content-center">
        <Col style={{ backgroundColor: "red" }}>
          <Form.Label htmlFor="where-input">Where?</Form.Label>
          <FormControl
            id="where-input"
            placeholder="Town"
            aria-describedby="basic-addon3"
          />
        </Col>
        <Col>
          <Form.Label htmlFor="key-words-input">What?</Form.Label>
          <FormControl
            id="key-words-input"
            placeholder="Key words"
            aria-describedby="basic-addon3"
          />
        </Col>
        <Col>
          <Button>Search</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default SearchJob;
