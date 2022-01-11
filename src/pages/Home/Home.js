import React from "react";
import { Row, Container, Col, Button } from "react-bootstrap";
import homePicture from "../../assets/homePicture.png";
import ListCategory from "../ListCategory/ListCategory";
import SearchJob from "../SearchJob/SearchJob";
import "./Home.css";

const Home = () => {
  return (
    <Container fluid="true">
      <Row>
        <Col md="1" lg="1"></Col>
        <Col>
          <Row className="mt-5">
            <h1 className="slogan">Find your real job</h1>
            <h1 className="textPrimaryColor">Today.</h1>
            <p className="textSecondaryColor">
              If you are a student and you have a skill or a talent don’t
              hesitate to join us and get your first job If you are an employeur
              please check this section employeur
            </p>
            <div className="setOfButtons">
              <Button className="signupButton">Find a job</Button>
              <Button className="signinButton espaceButton">
                Post an offer
              </Button>
            </div>
          </Row>
          <Row></Row>
          <Row></Row>
        </Col>
        <Col>
          <img src={homePicture} />
        </Col>
      </Row>
      <ListCategory />
      <SearchJob />
    </Container>
  );
};

export default Home;
