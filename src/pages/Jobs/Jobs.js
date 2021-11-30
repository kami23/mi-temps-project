import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Offer from "../../components/Offer/Offer";

const Jobs = () => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <div>Filters</div>
          </Col>
          <Col>
            <Offer />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Jobs;
