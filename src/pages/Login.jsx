import React from "react";
import { Container, Form, FormGroup, Input, Button } from "reactstrap";

const Login = () => {
  return (
    <div className="">
    <Container className="d-flex flex-column justify-content-center align-items-center vh-100">
      <Form className="w-50 border border-dark-subtle border-3 p-4 text-center rounded">
      <h1 className="">Login</h1>
      <p>Welcome back to Haber-Engineering!</p>
        <FormGroup>
          <Input 
            id="exampleEmail"
            name="email"
            placeholder="Email"
            type="email"
          />
        </FormGroup>
        <FormGroup>
          <Input
            id="examplePassword"
            name="password"
            placeholder="Password"
            type="password"
          />
        </FormGroup>
        <Button className="w-75 rounded-pill mx-auto d-block">
            Login
        </Button>
        <p>Don't have an account? <a href="">Sign up</a></p>
      </Form>
      
    </Container>
    </div>
  );
};

export default Login;
