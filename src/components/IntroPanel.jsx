import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Button } from "reactstrap";
// import { data } from "../Constants/data";

const IntroPanel = ({ data }) => {
  return (
    <Container className="mt-5" style={{ height: "80vh" }}>
      <Row className="h-100">
        <Col md={6} className="d-flex flex-column justify-content-center p-3">
          <h1 className="py-4">{data.title}</h1>
          <p className="w-75">{data.description}</p>
          <div>
            <Button className="rounded-pill d-inline">{data.buttonText}</Button>
          </div>
        </Col>
        <Col md={6}>
          <img src={data.image} alt="" className="img-fluid h-100" />
        </Col>
      </Row>
    </Container>
  );
};

export default IntroPanel;
