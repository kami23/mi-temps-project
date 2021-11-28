import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import employerSignUp from "../../assets/employerSignUp.png";
import studentSignUp from "../../assets/studentSignUp.png";
import { Link } from "react-router-dom";
const SignUp = () => {
  return (
    <Container>
      <Button className="m-4">Go back</Button>
      <Row className="justify-content-center mt-5">
        <Link to="/FormEmployer">
          <Col md="4" className="text-center">
            <h4>An employer</h4>
            <img src={employerSignUp} alt="employerSignUp" />
          </Col>
        </Link>
        <Col md="1"></Col>
        <Col md="4" className="text-center">
          <h4>A student</h4>
          <img src={studentSignUp} alt="studentSignUp" />
        </Col>
      </Row>
    </Container>
  );
};

export default SignUp;
