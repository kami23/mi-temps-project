import React from "react";
import { Containe, Col, Card } from "react-bootstrap";
const Category = (props) => {
  return (
    <>
      <Card className="m-4" style={{ width: "18rem", border: "none" }}>
        <Card.Img variant="top" src={props.img} />
        <Card.Body>
          <Card.Title className="text-center">{props.title}</Card.Title>
        </Card.Body>
      </Card>
    </>
  );
};

export default Category;
