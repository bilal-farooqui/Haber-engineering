import React from "react";
import { Row, Col} from "reactstrap";
import { footerData } from "../Constants/data";

const EndingPanel = () => {
  return (
    <div className="bg-black text-secondary">
      <Row className="m-0 p-2">
        <Col sm="12" md="10" lg="5" className="d-flex-column align-items-center">
          <h3>{footerData[0].title}</h3>
          <p>{footerData[0].content}</p>
        </Col>
        <Col sm="12" md="10" lg="7" className="d-flex flex-column justify-content-between">
          <Row>
          <h3>{footerData[1].title}</h3>
          <a href="" class="link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">{footerData[1].phone}</a>
          <a href="" class="link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">{footerData[1].email}</a>
          </Row>
          <Row className="align-items-end">
          <a href="" class="link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">{footerData[2].link1}</a>
          <a href="" class="link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">{footerData[2].link2}</a>
          <a href="" class="link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">{footerData[2].link3}</a>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default EndingPanel;
