import React from "react";
import {
  Container,
  Form,
  FormGroup,
  Input,
  Button,
  Label,
  Row,
  Col,
} from "reactstrap";
const Signup = () => {
  return (
    <Container className="d-flex flex-column justify-content-center align-items-center vh-100">
      <Form className="w-50 border border-dark-subtle border-3 p-4  rounded">
        <h1 className="text-center">Sign up</h1>
        <p>Create your account.</p>
        <Row>
          <Col sm="12" lg="6">
            <FormGroup floating>
              <Input
                id="FirstName"
                name="firstname"
                placeholder="First Name"
                type=""
              />
              <Label for="FirstName">First Name</Label>
            </FormGroup>
          </Col>
          <Col sm="12" lg="6">
            <FormGroup floating>
              <Input
                id="LastName"
                name="lastname"
                placeholder="Last Name"
                type=""
              />
              <Label for="LastName">Last Name</Label>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup floating>
              <Input
                id="Address"
                name="address"
                placeholder="Address"
                type=""
              />
              <Label for="LastName">Address</Label>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col sm="12" lg="6">
            <FormGroup floating>
              <Input
                id="PhoneNumber"
                name="phonenumber"
                placeholder="Phone Number"
                type=""
              />
              <Label for="PhoneNumber">Phone Number</Label>
            </FormGroup>
          </Col>
          <Col sm="12" lg="6">
            <FormGroup floating>
              <Input
                id="PostalCode"
                name="postalcode"
                placeholder="Postal Code"
                type=""
              />
              <Label for="PhoneNumber">Postal Code</Label>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup floating>
              <Input
                id="exampleEmail"
                name="email"
                placeholder="Email"
                type="email"
              />
              <Label for="exampleEmail">Email</Label>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup floating>
              <Input
                id="examplePassword"
                name="password"
                placeholder="Password"
                type="password"
              />
              <Label for="examplePassword">Password</Label>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup floating>
              <Input
                id="examplePassword2"
                name="password2"
                placeholder="Repeat Password"
                type="password"
              />
              <Label for="examplePassword2">Repeat Password</Label>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup check inline>
              <Input type="checkbox" />
              <Label check>I accept <a href="">Terms & Conditions</a> and <a href="">Privacy Policy</a></Label>
            </FormGroup>
          </Col>
        </Row>
        <Button className="w-75 rounded-pill mx-auto d-block mt-2">Register</Button>
      </Form>
    </Container>
  );
};

export default Signup;
