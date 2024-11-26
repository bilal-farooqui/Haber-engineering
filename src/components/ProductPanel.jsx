import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardText,
  Button,
} from "reactstrap";
import { productData } from "../Constants/data";


const ServicePanel = () => {
  return (
    <Container className="mt-5" style={{ height: "80vh" }}>
      <Row className="border-bottom border-dark">
        <Col>
          <h3>Products</h3>
        </Col>
        <Col>
          <p className="text-end">See More</p>
        </Col>
      </Row>
      <Row className="mt-2">
        {productData.map((service, index) => (
          <Col sm="6" md="3" lg="4" key={index}>
            <Card className="h-100 ">
              <img style={{height:"70%"}} alt="" src={service.image} />
              <CardBody className="d-flex flex-column justify-content-around">
                <div>
                  <CardTitle tag="h5">{service.title}</CardTitle>
                  <CardText className="">{service.description}</CardText>
                <Button className="align-self-start d-inline">
                  {service.buttonText}
                </Button>
                </div>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ServicePanel;
