import React, { useState } from "react";
import {
  Button,
  Container,
  Form,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  //   ModalTitle,
  FormGroup,
  Label,
  Input,
  Row,
} from "reactstrap";
import IntroPanel from "../components/IntroPanel";
import { introData } from "../Constants/data";

const HomeContent = () => {
  const [data, setData] = useState(introData);
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  console.log("Intro Data", introData);

  return (
    <Container>
      <Button onClick={toggle}>Customize </Button>
      <IntroPanel data={data} />
      <Modal isOpen={modal} toggle={toggle} size="lg">
        <ModalHeader closeButton>Customize Home</ModalHeader>
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
                    setData({ ...data, title: e.target.value });
                  }}
                  value={data.title}
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
                    setData({ ...data, title: e.target.value });
                  }}
                  value={data.title}
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
              setData(introData);
              toggle();
            }}
          >
            Cancel
          </button>
          <button className="btn btn-primary" onClick={toggle}>
            Save
          </button>
          {/* <Spinner></Spinner> */}
        </ModalFooter>
      </Modal>
    </Container>
  );
};

export default HomeContent;
