import React from "react";
import { Row, Container, Col, Button } from "react-bootstrap";
import homePicture from "../assets/homePicture.png";
import ListCategory from "./ListCategory/ListCategory";
import SearchJob from "./SearchJob/SearchJob";
const Home = () => {
  return (
    <Container fluid="true">
      <Row>
        <Col md="2"></Col>
        <Col>
          <Row className="mt-5">
            <h1>Find your real job</h1>
            <h1>Today.</h1>
            <p>
              If you are a student and you have a skill or a talent don’t
              hesitate to join us and get your first job If you are an employeur
              please check this section employeur
            </p>
            <div>
              <Button>Find a job</Button>
              <Button>Post an offer</Button>
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
