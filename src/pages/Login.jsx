import React, { useState } from "react";
import {
  Container,
  Form,
  FormGroup,
  Input,
  Button,
  FormFeedback,
} from "reactstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [touchedFields, setTouchedFields] = useState({});
  const navigate = useNavigate();

  // Handle form changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({ ...errors, [name]: "" }); // Reset errors as user types
  };

  // Trigger validation when a field loses focus
  const handleBlur = (e) => {
    const { name } = e.target;
    setTouchedFields({ ...touchedFields, [name]: true });

    if (name === "email") {
      validateEmail();
    }
  };

  // Validate email format
  const validateEmail = () => {
    const { email } = formData;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrors((prev) => ({ ...prev, email: "Enter a valid email address." }));
    } else {
      setErrors((prev) => ({ ...prev, email: "" }));
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form fields before submission
    const newErrors = {};
    if (!formData.email) newErrors.email = "Email is required.";
    if (!formData.password) newErrors.password = "Password is required.";

    // Set errors if any field is empty
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      // Fetch all users data from the server
      const response = await axios.get("http://localhost:3001/user");
      const users = response.data;

      // Find the user with the matching email
      const user = users.find((user) => user.email === formData.email);

      if (!user) {
        setErrors((prev) => ({ ...prev, email: "Email is not registered." }));
        return;
      }

      // Check if the password matches the found user
      if (user.password !== formData.password) {
        setErrors((prev) => ({ ...prev, password: "Incorrect password." }));
        return;
      }

      // After successful login
      localStorage.setItem("loggedIn", "true");

      // Navigate to the home page
      navigate("/", { state: { loggedIn: true } });
    } catch (error) {
      console.error("Error during login:", error);
      setErrors((prev) => ({
        ...prev,
        password:
          error.response?.data?.message ||
          "An error occurred. Please try again.",
      }));
    }
  };

  return (
    <div>
      <Container className="d-flex flex-column justify-content-center align-items-center vh-100">
        <Form
          className="w-50 border border-dark-subtle border-3 p-4 text-center rounded"
          onSubmit={handleSubmit}
        >
          <h1>Login</h1>
          <p>Welcome back to Haber-Engineering!</p>

          {/* Email Input */}
          <FormGroup>
            <Input
              id="exampleEmail"
              name="email"
              placeholder="Email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              invalid={touchedFields.email && !!errors.email} // Show invalid if email is touched and has errors
            />
            <FormFeedback>{errors.email}</FormFeedback>
          </FormGroup>

          {/* Password Input */}
          <FormGroup>
            <Input
              id="examplePassword"
              name="password"
              placeholder="Password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              onBlur={handleBlur}
              invalid={touchedFields.password && !!errors.password} // Show invalid if password is touched and has errors
            />
            <FormFeedback>{errors.password}</FormFeedback>
          </FormGroup>

          <Button type="submit" className="w-75 rounded-pill mx-auto d-block">
            Login
          </Button>
          <p>
            Don't have an account? <a href="/signup">Sign up</a>
          </p>
        </Form>
      </Container>
    </div>
  );
};

export default Login;
