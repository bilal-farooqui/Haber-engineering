import { useState } from "react";
import React from "react";
import {
  Offcanvas,
  OffcanvasBody,
  OffcanvasHeader,
  NavbarToggler,
  Button,
  Row,
} from "reactstrap";
const SideBar = ({direction, data}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <NavbarToggler onClick={toggle} />
      <Offcanvas direction={direction} isOpen={isOpen} toggle={toggle}>
        <OffcanvasHeader className="border-bottom" toggle={toggle}>
          <img
            className="pe-3"
            style={{ height: "10vh" }}
            src={data.pfp}
            alt=""
          />
          {data.accountName}
        </OffcanvasHeader>
        <OffcanvasBody>
          {data.options.map((option, index) => (
            <Row className="border-bottom border-dark" key={index}>
              <Button className="m-1" style={{ border: "0px" }} outline>
                {" "}
                {option}{" "}
              </Button>
            </Row>
          ))}
        </OffcanvasBody>
      </Offcanvas>
    </div>
  );
};

export default SideBar;
