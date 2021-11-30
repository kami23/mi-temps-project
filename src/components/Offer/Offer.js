import React from "react";
import { Container } from "react-bootstrap";
import Tag from "../Tag/Tag";
const Offer = (props) => {
  return (
    <Container>
      <div>
        <img src={props.companyLogo} alt="Company logo" />
        <div>
          Certified company
          <span className="m-4">Published at 06/11/2020</span>
        </div>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
          tempus suspendisse ac vel viverra leo pellentesque aliquam.....
        </div>
        <div>
          <span>Field:</span>Application developpement/coding
        </div>
        <Tag tagName="CSS" />
      </div>
    </Container>
  );
};

export default Offer;
