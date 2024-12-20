import React, { useState } from "react";
import NavBar from "../components/NavBar";
import { useLocation } from "react-router-dom";
import { Col, Container, Row, Input, Button } from "reactstrap";
import OrderModal from "../components/OrderModal";

const ProductDisplay = () => {
  const [selectedValue, setSelectedValue] = useState(1);

  const handleSelectChange = (e) => {
    setSelectedValue(parseInt(e.target.value));
  };
  const [modalOpen, setModalOpen] = useState(false);
  const reviews = [
    {
      id: 1,
      rating: 5,
      title: "Great Air Filter for My Generator!",
      content:
        "I've been using this air filter in my standby generator for a few months now, and it's been fantastic! It fits perfectly and keeps the engine running smoothly by preventing dirt and debris from entering the air intake. I can definitely tell the difference in performance. Highly recommended for anyone looking to maintain their generator in top condition!",
    },
    {
      id: 2,
      rating: 5,
      title: "Must-Have for Generator Maintenance!",
      content:
        "This air filter is a must-have for any generator owner. It's easy to install, and I feel confident knowing that my generator is protected from dirt and dust. I've noticed improved efficiency in my generator after replacing the old filter. Excellent quality and great value for the price!",
    },
    {
      id: 3,
      rating: 5,
      title: "Essential for Long-Term Generator Care",
      content:
        "As a frequent user of my standby generator, I know how important it is to keep it well-maintained. The air filter has worked wonders in ensuring the engine operates at its best. It's easy to replace and has made a noticeable difference in the performance and longevity of my generator.",
    },
    {
      id: 4,
      rating: 5,
      title: "Quality Product, Easy to Replace",
      content:
        "I was looking for a replacement air filter for my standby generator, and this one exceeded my expectations. The quality is top-notch, and installation was a breeze. I’m confident this filter will keep my generator running smoothly through its next season of use.",
    },
    {
      id: 5,
      rating: 5,
      title: "Perfect Fit and Efficient Performance",
      content:
        "I installed this air filter in my generator, and it fit perfectly. The quality is excellent, and it helps to prevent clogging and engine inefficiency. It’s crucial to have a reliable filter like this to keep the generator running well, especially when it’s needed in emergencies. I’m very happy with this purchase!",
    },
  ];

  const Review = ({ title, content, rating }) => {
    return (
      <div className="review">
        <h5>{title}</h5>
        <p>{content}</p>
        <div>Rating: {Array(rating).fill("⭐")}</div>
      </div>
    );
  };
  const location = useLocation();

  //   const updateProductData = () => {
  //     axios
  //       .put(`http://localhost:3001/product/${location.state._id}`)
  //       .then((res) => {
  //         console.log("Updated Successfully");
  //         toggle();
  //       })
  //       .catch((error) => {
  //         console.error(error);
  //       });
  //   };

  console.log(location.state);
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <Container className="mt-5 p-2 border border-black rounded-3">
        <Row>
          <Col md="8">
            <img
              className="rounded-3"
              style={{ height: "50vh", aspectRatio: "16/9" }}
              src={
                location.state.image && location.state.image !== ""
                  ? `http://localhost:3001/${location.state.image.replace(
                      "\\",
                      "/"
                    )}`
                  : require("../assets/installation.jpg")
              }
            />
          </Col>
          <Col className="p-3 pt-5" md="4">
            <h2 className="border-bottom">{location.state.title}</h2>
            <p>{location.state.description}</p>
            <Row>
              <Col>
                <p>{location.state.price} pkr</p>
              </Col>
              {location &&
                location.state &&
                location.state.type !== "service" && (
                  <Col>
                    <Input
                      id="exampleSelect"
                      name="select"
                      type="select"
                      onChange={handleSelectChange}
                    >
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                      <option value={3}>3</option>
                      <option value={4}>4</option>
                      <option value={5}>5</option>
                    </Input>
                  </Col>
                )}
            </Row>
            <Button onClick={() => setModalOpen(true)}>Buy Now</Button>
          </Col>
        </Row>
      </Container>
      <Container className="mt-4">
        <h2 className="border-bottom">Reviews</h2>
        <Input type="textarea" placeholder="Kindly give your review." />
        <Button className="my-2">Submit</Button>

        <h5>Cutomer Reviews:</h5>
        <div className="py-3 px-4">
          {reviews.map((review) => (
            <Review
              key={review.id}
              title={review.title}
              content={review.content}
              rating={review.rating}
            />
          ))}
        </div>
      </Container>
      <OrderModal
        isOpen={modalOpen}
        toggle={() => setModalOpen(!modalOpen)}
        quantity={selectedValue}
        orderDetails={location.state}
      />
    </div>
  );
};

export default ProductDisplay;
