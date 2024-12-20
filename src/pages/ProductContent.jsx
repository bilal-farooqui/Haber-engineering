import React, { useState, useEffect } from "react";
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
import axios from "axios";
import MUITable from "../components/MUITable";

const ProductContent = () => {
  const [apiData, setApiData] = useState([]);
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const [data, setData] = useState({
    title: "",
    description: "",
    buttonText: "",
    image: null, // Store the image file here
    price: 0,
    sold: 0,
  });

  const fetchProductData = () => {
    axios
      .get("http://localhost:3001/product")
      .then((res) => {
        console.log("RES", res);
        setApiData(res.data.data ? res.data.data : []);
      })
      .catch((error) => console.log("Error fetching products:", error));
  };

  useEffect(() => {
    fetchProductData();
  }, []);

  // Handle image file selection
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

  const addProductData = () => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("buttonText", data.buttonText);
    formData.append("price", data.price);
    formData.append("sold", data.sold);

    if (data.image) {
      formData.append("image", data.image); // Add image file to formData
    }

    axios
      .post("http://localhost:3001/product", formData, {
        headers: {
          "Content-Type": "multipart/form-data", // Tell the server this is form data
        },
      })
      .then((res) => {
        if (res.status === 201) {
          console.log("Product added successfully:", res.data);
          fetchProductData(); // Refresh the product list
          toggle(); // Close modal
          setData({
            title: "",
            description: "",
            buttonText: "",
            image: null,
            price: 0,
            sold: 0,
          });
        }
      })
      .catch((error) => {
        console.log("Error adding product:", error);
        // Handle error: Display error message or take action
      });
  };

  return (
    <div>
      <Button className="mb-3" onClick={toggle}>
        Add Product
      </Button>
      <MUITable
        columns={[
          "S.NO",
          "Title",
          "Description",
          "Price",
          "Button Text",
          "Sold",
        ]}
        data={apiData.map((item, index) => [
          index + 1,
          item.title,
          item.description,
          item.price,
          item.buttonText,
          item.sold,
        ])}
        title="Product Data"
      />
      <Modal isOpen={modal} toggle={toggle} size="lg">
        <ModalHeader toggle={toggle}>Write Product Details</ModalHeader>
        <ModalBody>
          <Row>
            <div className="col-md-6 mb-3">
              <Label>Title</Label>
              <Input
                type="text"
                value={data.title}
                onChange={(e) => setData({ ...data, title: e.target.value })}
              />
            </div>
            <div className="col-md-6 mb-3">
              <Label>Button Text</Label>
              <Input
                type="text"
                value={data.buttonText}
                onChange={(e) =>
                  setData({ ...data, buttonText: e.target.value })
                }
              />
            </div>
            <div className="col-md-12 mb-3">
              <Label>Description</Label>
              <Input
                type="textarea"
                value={data.description}
                onChange={(e) =>
                  setData({ ...data, description: e.target.value })
                }
              />
            </div>
            <div className="col-md-12 mb-3">
              <Label>Image</Label>
              <Input type="file" onChange={handleImageUpload} />
              {data.image && (
                <div className="mt-3">
                  <img
                    src={URL.createObjectURL(data.image)} // Display image preview
                    alt="Preview"
                    style={{
                      width: "100px",
                      height: "100px",
                      objectFit: "cover",
                    }}
                  />
                </div>
              )}
            </div>
            <div className="col-md-6 mb-3">
              <Label>Price</Label>
              <Input
                type="number"
                value={data.price}
                onChange={(e) => setData({ ...data, price: +e.target.value })}
              />
            </div>
          </Row>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
          <Button color="primary" onClick={addProductData}>
            Save
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ProductContent;
