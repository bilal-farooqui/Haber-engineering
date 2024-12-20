import React, { useState, useEffect } from "react";
import {
  Container,
  Form,
  FormGroup,
  Input,
  Button,
  Label,
  Row,
  Col,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormFeedback,
} from "reactstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    address: "",
    phonenumber: "",
    postalcode: "",
    email: "",
    password: "",
    password2: "",
    termsAccepted: false,
  });

  const [errors, setErrors] = useState({});
  const [touchedFields, setTouchedFields] = useState({});
  const [existingEmails, setExistingEmails] = useState([]); // Store fetched emails
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  // Fetch emails from the database on component mount
  useEffect(() => {
    const fetchEmails = async () => {
      try {
        const response = await axios.get("http://localhost:3001/user");
        const emails = response.data.map((user) => user.email);
        setExistingEmails(emails);
      } catch (error) {
        console.error("Error fetching user emails:", error);
      }
    };

    fetchEmails();
  }, []);

  // Handle form changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
    setErrors({ ...errors, [name]: "" }); // Reset errors as user types
  };

  // Trigger validation when a field loses focus
  const handleBlur = (e) => {
    const { name } = e.target;
    setTouchedFields({ ...touchedFields, [name]: true });

    if (name === "email") {
      validateEmail();
    } else if (name === "password2") {
      validatePasswordMatch();
    }
  };

  // Validate email
  const validateEmail = () => {
    const { email } = formData;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email regex
    if (!emailRegex.test(email)) {
      setErrors((prev) => ({ ...prev, email: "Enter a valid email address." }));
    } else if (existingEmails.includes(email)) {
      setErrors((prev) => ({ ...prev, email: "Email is already registered." }));
    } else {
      setErrors((prev) => ({ ...prev, email: "" }));
    }
  };

  // Validate password match
  const validatePasswordMatch = () => {
    const { password, password2 } = formData;
    if (password !== password2) {
      setErrors((prev) => ({
        ...prev,
        password2: "Passwords do not match.",
      }));
    } else {
      setErrors((prev) => ({ ...prev, password2: "" }));
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate all fields before submission
    const newErrors = {};
    if (!formData.firstname) newErrors.firstname = "First name is required.";
    if (!formData.lastname) newErrors.lastname = "Last name is required.";
    if (!formData.email) newErrors.email = "Email is required.";
    if (!formData.password) newErrors.password = "Password is required.";
    if (formData.password !== formData.password2)
      newErrors.password2 = "Passwords do not match.";
    if (!formData.termsAccepted)
      newErrors.termsAccepted = "You must accept the terms and conditions.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      // Send data to the server
      await axios.post("http://localhost:3001/user", formData);
      setIsModalOpen(true); // Show success modal
    } catch (error) {
      console.error("Error during signup:", error);
      setErrors((prev) => ({
        ...prev,
        email: error.response?.data?.message || "Registration failed.",
      }));
    }
  };

  return (
    <Container className="d-flex flex-column justify-content-center align-items-center vh-100">
      <Form
        className="w-50 border border-dark-subtle border-3 p-4 rounded"
        onSubmit={handleSubmit}
      >
        <h1 className="text-center">Sign up</h1>
        <p>Create your account.</p>
        <Row>
          <Col sm="12" lg="6">
            <FormGroup floating>
              <Input
                id="FirstName"
                name="firstname"
                placeholder="First Name"
                value={formData.firstname}
                onChange={handleChange}
                onBlur={handleBlur}
                invalid={touchedFields.firstname && !!errors.firstname}
              />
              <Label for="FirstName">First Name</Label>
              <FormFeedback>{errors.firstname}</FormFeedback>
            </FormGroup>
          </Col>
          <Col sm="12" lg="6">
            <FormGroup floating>
              <Input
                id="LastName"
                name="lastname"
                placeholder="Last Name"
                value={formData.lastname}
                onChange={handleChange}
                onBlur={handleBlur}
                invalid={touchedFields.lastname && !!errors.lastname}
              />
              <Label for="LastName">Last Name</Label>
              <FormFeedback>{errors.lastname}</FormFeedback>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup floating>
              <Input
                id="Email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                invalid={touchedFields.email && !!errors.email}
              />
              <Label for="Email">Email</Label>
              <FormFeedback>{errors.email}</FormFeedback>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup floating>
              <Input
                id="Password"
                name="password"
                placeholder="Password"
                type="password"
                value={formData.password}
                onChange={handleChange}
              />
              <Label for="Password">Password</Label>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup floating>
              <Input
                id="Password2"
                name="password2"
                placeholder="Repeat Password"
                type="password"
                value={formData.password2}
                onChange={handleChange}
                onBlur={handleBlur}
                invalid={touchedFields.password2 && !!errors.password2}
              />
              <Label for="Password2">Repeat Password</Label>
              <FormFeedback>{errors.password2}</FormFeedback>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup check inline>
              <Input
                type="checkbox"
                name="termsAccepted"
                checked={formData.termsAccepted}
                onChange={handleChange}
              />
              <Label check>
                I accept <a href="">Terms & Conditions</a> and{" "}
                <a href="">Privacy Policy</a>
              </Label>
              {errors.termsAccepted && (
                <div className="text-danger">{errors.termsAccepted}</div>
              )}
            </FormGroup>
          </Col>
        </Row>
        <Button
          type="submit"
          className="w-75 rounded-pill mx-auto d-block mt-2"
        >
          Register
        </Button>
      </Form>

      {/* Success Modal */}
      <Modal isOpen={isModalOpen}>
        <ModalHeader>Registration Successful</ModalHeader>
        <ModalBody>
          Your account has been created successfully. You can now log in.
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={() => navigate("/login")}>
            Go to Login
          </Button>
        </ModalFooter>
      </Modal>
    </Container>
  );
};

export default Signup;
