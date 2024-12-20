import React, { useEffect, useState } from "react";
import MUITable from "../components/MUITable";
import axios from "axios";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Label,
  Input,
  Row,
} from "reactstrap";

const ServiceContent = () => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const [data, setData] = useState({
    title: "",
    description: "",
    buttonText: "",
    image: "",
    price: 0,
    customer: 0,
  });

  const addServiceData = () => {
    const formData = new FormData();

    // Append fields to formData
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("buttonText", data.buttonText);
    formData.append("price", data.price);
    formData.append("customer", data.customer); // Assuming customer field exists in serviceData

    // Check if an image is present, and append it
    if (data.image) {
      formData.append("image", data.image); // Add image file to formData
    }
    console.log("DATA IMAGE", data.image);
    // Send POST request with formData
    axios
      .post("http://localhost:3001/service", formData, {
        headers: {
          "Content-Type": "multipart/form-data", // Tell the server this is form data
        },
      })
      .then((res) => {
        if (res.status === 201) {
          console.log("Service added successfully:", res.data);
          fetchServiceData(); // Refresh the service list
          toggle(); // Close modal if needed
          setData({
            title: "",
            description: "",
            buttonText: "",
            image: null,
            price: 0,
            customer: 0,
          });
        }
      })
      .catch((error) => {
        console.log("Error adding service:", error);
        // Handle error: Display error message or take action
      });
  };

  const [apiData, setApiData] = useState([]);
  const fetchServiceData = () => {
    axios
      .get("http://localhost:3001/service")
      .then((res) => {
        console.log("DATA from API", res.data);
        setApiData(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Validate file type and size (optional)
      const validTypes = ["image/jpeg", "image/png", "image/gif"];
      if (!validTypes.includes(file.type)) {
        alert("Invalid file type. Only JPEG, PNG, and GIF are allowed.");
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        // 5MB size limit
        alert("File is too large. Maximum allowed size is 5MB.");
        return;
      }
      setData({ ...data, image: file }); // Save the file itself in state
    }
  };

  useEffect(() => {
    fetchServiceData();
  }, []);

  return (
    <div>
      <Button className="mb-3" onClick={toggle}>
        Add Service
      </Button>
      <MUITable
        columns={[
          "S.NO",
          "title",
          "description",
          "price",
          "Button Text",
          "No. of Customers",
        ]}
        data={apiData.map((data, index) =>
          apiData.length > 0
            ? [
                index + 1,
                data?.title,
                data?.description,
                data?.price,
                data?.buttonText,
                data?.customer,
              ]
            : []
        )}
        title="Service Data"
      />
      <Modal isOpen={modal} toggle={toggle} size="lg">
        <ModalHeader>Write Service Details</ModalHeader>
        <ModalBody>
          <div className="row">
            <div className="col-md-6 mb-3">
              <Label className="pulppLabel" htmlFor="">
                Title
              </Label>
              <Input
                className="pulppInput"
                type="text"
                name="title"
                onChange={(e) => {
                  setData({ ...data, title: e.target.value });
                }}
                value={data.title}
              />
            </div>
            <div className="col-md-6 mb-3">
              <Label className="pulppLabel" htmlFor="">
                Button Text
              </Label>
              <Input
                className="pulppInput"
                type="text"
                name="buttonText"
                onChange={(e) => {
                  setData({ ...data, buttonText: e.target.value });
                }}
                value={data.buttonText}
              />
            </div>
            <div>
              <Label for="exampleText">Description</Label>
              <Input
                className="mb-4"
                id="exampleText"
                name="text"
                type="textarea"
                onChange={(e) => {
                  setData({ ...data, description: e.target.value });
                }}
                value={data.description}
              />
            </div>
            <div>
              <Input
                type="file"
                className="mb-4"
                onChange={handleImageUpload}
              />
            </div>
            <Row>
              <div className="col-md-6 mb-3">
                <Label className="pulppLabel" htmlFor="">
                  Price
                </Label>
                <Input
                  className="pulppInput"
                  type="number"
                  name="price"
                  onChange={(e) => {
                    setData({
                      ...data,
                      price: e.target.value,
                    });
                  }}
                  value={data.price}
                />
              </div>
            </Row>

            <label htmlFor="">{""}</label>
          </div>
        </ModalBody>
        <ModalFooter>
          <button
            className="btn btn-secondary"
            onClick={() => {
              setData(apiData);
              toggle();
              setData({
                title: "",
                description: "",
                buttonText: "",
                image: "",
                price: 0,
                customer: 0,
              });
            }}
          >
            Cancel
          </button>
          <button
            className="btn btn-primary"
            onClick={() => {
              addServiceData(data);
              toggle();
              setData({
                title: "",
                description: "",
                buttonText: "",
                image: "",
                price: 0,
                customer: 0,
              });
            }}
          >
            Save
          </button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ServiceContent;
