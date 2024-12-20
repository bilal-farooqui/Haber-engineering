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
// import { productData } from "../Constants/data";
import { useNavigate } from "react-router-dom";

const ProductPanel = ({ data }) => {
  const navigate = useNavigate();
  console.log("data from product panel", data);
  return (
    <Container className="mt-5" style={{ height: "80vh" }}>
      <Row className="border-bottom border-dark">
        <Col>
          <h3>Products</h3>
        </Col>
        <Col className="d-flex flex-row-reverse">
          <a href="/product" className="text-end">
            See More
          </a>
        </Col>
      </Row>
      <Row className="mt-2">
        {data.map((mapedData, index) => (
          <Col sm="6" md="4" lg="4" key={index}>
            <Card className="h-100 mb-4 ">
              <img
                src={`http://localhost:3001/${mapedData.image.replace(
                  "\\",
                  "/"
                )}`}
                style={{ height: "250px", width: "100%" }}
              />
              <CardBody className="d-flex flex-column justify-content-around">
                <div>
                  <CardTitle tag="h5">{mapedData.title.slice(0, 40)}</CardTitle>
                  <CardText className="">
                    {mapedData.description.slice(0, 100)}...
                  </CardText>
                  <Button
                    onClick={() => {
                      navigate("/productDisplay", {
                        state: { ...mapedData, type: "service" },
                      });
                    }}
                    className="align-self-start d-inline"
                  >
                    {mapedData.buttonText}
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

export default ProductPanel;
