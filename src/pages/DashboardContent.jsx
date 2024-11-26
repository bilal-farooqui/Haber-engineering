import React from "react";
import { Col, Container, Row, Label } from "reactstrap";
import LineChart from "../components/LineChart";
import BarChart from "../components/BarChart";
import PieChart from "../components/PieChart";
import DoughnutChart from "../components/DoughnutChart";
const DashboardContent = () => {
  return (
    <Container>
      <Label style={{ fontSize: "32px" }} className="mx-5 mb-4">
        Dashboard
      </Label>
      <Row>
        <Col md="1"></Col>
        <Col md="5">
          <LineChart />
        </Col>
        <Col md="5">
          <BarChart />
        </Col>
        <Col md="1"></Col>
      </Row>
      <Row style={{ marginTop: "20px" }}>
        <Col md="1"></Col>
        <Col md="5">
          <PieChart />
        </Col>
        <Col md="5">
          <DoughnutChart />
        </Col>
        <Col md="1"></Col>
      </Row>
    </Container>
  );
};

export default DashboardContent;
