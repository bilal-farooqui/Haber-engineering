import React, { useEffect, useState } from "react";
import {
  Button,
  Container,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Label,
  Input,
  Row,
} from "reactstrap";
import IntroPanel from "../components/IntroPanel";
import axios from "axios";

const HomeContent = () => {
  const [data, setData] = useState({
    title: "",
    description: "",
    buttonText: "",
    image: "",
    homeScreenProductDisplay: 3,
    homeScreenServiceDisplay: 3,
  });
  const [modal, setModal] = useState(false);
  const [apiData, setApiData] = useState({});

  const toggle = () => setModal(!modal);

  const updateIntroData = () => {
    axios
      .put(`http://localhost:3001/introData/${data._id}`, data)
      .then((res) => {
        console.log("Updated Successfully");
        setApiData(data);
        toggle();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const fetchIntroData = () => {
    axios
      .get("http://localhost:3001/introData")
      .then((res) => {
        console.log("DATA from API", res.data[0]);
        setData(res.data[0]);
        setApiData(res.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchIntroData();
  }, []);

  return (
    <Container>
      <Button onClick={toggle}>Customize </Button>
      <IntroPanel data={data} />
      <Modal isOpen={modal} toggle={toggle} size="lg">
        <ModalHeader>Customize Home</ModalHeader>
        <ModalBody>
          <div className="row">
            <div className="col-md-6 mb-3">
              <Label className="pulppLabel" htmlFor="">
                Title
              </Label>
              <Input
                className="pulppInput"
                type="text"
                name="branchName"
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
                name="address"
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
              <Input type="file" className="mb-4" />
            </div>
            <Row>
              <div className="col-md-6 mb-3">
                <Label className="pulppLabel" htmlFor="">
                  No of Products
                </Label>
                <Input
                  className="pulppInput"
                  type="number"
                  name="branchName"
                  onChange={(e) => {
                    setData({
                      ...data,
                      homeScreenProductDisplay: e.target.value,
                    });
                  }}
                  value={data.homeScreenProductDisplay}
                />
              </div>
              <div className="col-md-6 mb-3">
                <Label className="pulppLabel" htmlFor="">
                  No of Services
                </Label>
                <Input
                  className="pulppInput"
                  type="number"
                  name="number"
                  onChange={(e) => {
                    setData({
                      ...data,
                      homeScreenServiceDisplay: e.target.value,
                    });
                  }}
                  value={data.homeScreenServiceDisplay}
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
            }}
          >
            Cancel
          </button>
          <button className="btn btn-primary" onClick={updateIntroData}>
            Save
          </button>
          {/* <Spinner></Spinner> */}
        </ModalFooter>
      </Modal>
    </Container>
  );
};

export default HomeContent;
