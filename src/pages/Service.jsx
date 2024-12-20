import React, { useEffect, useState } from "react";
import {
  Col,
  Row,
  Card,
  CardBody,
  CardText,
  CardTitle,
  Button,
} from "reactstrap";
import NavBar from "../components/NavBar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Service = () => {
  const [serviceData, setServiceData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [limit] = useState(12); // Set limit to 1 for testing
  const [totalItems, setTotalItems] = useState(0); // Store total count from API
  const navigate = useNavigate();
  // const [datatoSend, setDatatoSend] = useState({});

  const fetchServiceData = (page) => {
    const start = (page - 1) * limit;
    axios
      .get(`http://localhost:3001/service?limit=${limit}&start=${start}`)
      .then((res) => {
        console.log("DATA from service API", res.data);
        setServiceData(res.data.data);
        setTotalItems(res.data.totalCount); // Update total count
      })
      .catch((error) => {
        console.log("Error in Fetch Service API", error);
      });
  };

  useEffect(() => {
    fetchServiceData(currentPage);
  }, [currentPage]);

  const handleNextPage = () => {
    const totalPages = Math.ceil(totalItems / limit);
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <div
      className="d-flex flex-column justify-content-between"
      style={{ flex: 1 }}
    >
      <div>
        <NavBar />

        <Row className="border-bottom mx-5">
          <Col>
            <h1 className="mt-2">Services</h1>
          </Col>
        </Row>

        {serviceData
          .reduce((rows, item, index) => {
            if (index % 3 === 0) rows.push([]);
            rows[rows.length - 1].push(item);
            return rows;
          }, [])
          .map((rowData, rowIndex) => (
            <Row key={rowIndex} className="mx-5 mt-2">
              {rowData.map((mapedData, colIndex) => (
                <Col key={colIndex} sm="6" md="4" lg="4" className="p-2">
                  <Card className="h-100">
                    <CardBody className="d-flex flex-column justify-content-around">
                      <img
                        src={`http://localhost:3001/${mapedData.image.replace(
                          "\\",
                          "/"
                        )}`}
                        style={{ height: "250px", width: "100%" }}
                      />
                      <div>
                        <CardTitle tag="h5">
                          {mapedData.title.slice(0, 40)}
                        </CardTitle>
                        <CardText className="">
                          {mapedData.description.slice(0, 100)}...
                        </CardText>
                        <CardText>Price: PKR {mapedData.price}</CardText>
                        <Button
                          onClick={() => {
                            navigate("/productDisplay", {
                              state: { ...mapedData, type: "service" },
                            });
                          }}
                          className="align-self-start d-inline"
                        >
                          {mapedData.buttonText}
                        </Button>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              ))}
            </Row>
          ))}
      </div>

      <Row className="justify-content-center mt-4 mx-5">
        <Col sm="auto">
          <Button
            color="primary"
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
          >
            Previous
          </Button>
        </Col>
        <Col sm="auto">
          <p className="my-2">Page {currentPage}</p>
        </Col>
        <Col sm="auto">
          <Button
            color="primary"
            onClick={handleNextPage}
            disabled={limit * currentPage >= totalItems}
          >
            Next
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default Service;
