import React, { useEffect, useState } from "react";
import {
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
  Alert,
  Table,
  Button,
} from "reactstrap";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const OrderModal = ({ isOpen, toggle, quantity, orderDetails }) => {
  const [orderDetailsPayload, setOrderDetailsPayload] = useState(orderDetails);
  const notify = () =>
    toast.success("Order placed succesfully", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: "Bounce",
    });
  const [orderData, setOrderData] = useState({
    title: "",
    type: "",
    status: "Pending",
    customer: {},
    price: 0,
    quantity: 0,
  });

  const addOrderData = (orderData) => {
    axios
      .post("http://localhost:3001/order", orderData)
      .then((res) => {
        console.log("Added Successfully", res);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const updateDatabase = () => {
    let payload = { ...orderDetailsPayload };
    console.log("Order Details:", orderDetailsPayload);
    if (orderDetailsPayload.type == "product") {
      console.log(
        "Order Details in IF",
        orderDetailsPayload.sold,
        orderData.quantity ?? 1
      );
      payload = {
        ...payload,
        sold: orderDetailsPayload.sold + quantity ?? 1,
      };
    } else {
      payload = { ...payload, customer: orderDetailsPayload.customer + 1 };
    }
    console.log("Payload:", payload);

    console.log(
      `http://localhost:3001/${orderDetailsPayload.type}/${orderDetailsPayload._id}`
    );
    axios
      .put(
        `http://localhost:3001/${orderDetailsPayload.type}/${orderDetailsPayload._id}`,
        payload
      )
      .then((res) => {
        console.log("Updated Successfully", res);
        setOrderDetailsPayload(payload);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const [orderConfirmed, setOrderConfirmed] = useState(false);

  const handleConfirmOrder = () => {
    setOrderConfirmed(true);
    toggle();
    setTimeout(() => {
      setOrderData({
        ...orderData,
        title: orderDetailsPayload.title,
        type: orderDetailsPayload.type,
        price: orderDetailsPayload.price * quantity,
        quantity: quantity,
      });
      addOrderData(orderData);
      updateDatabase();
      console.log("order confirmed"); // Close the modal after showing the success message
      setOrderConfirmed(false); // Reset for next use
      notify();
    }, 1500); // Show success message for 2 seconds
  };

  return (
    <>
      <Modal isOpen={isOpen} toggle={toggle}>
        <ModalHeader toggle={toggle}>Confirm Your Order</ModalHeader>
        <ModalBody>
          <h5>Invoice Details:</h5>
          <Table striped>
            <thead>
              <tr>
                <th>#</th>
                <th>Product</th>
                <th>Quantity</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Order Number</td>
                <td>{orderDetailsPayload.title}</td>
                <td>{quantity}</td>
                <td>{orderDetailsPayload.price * quantity}</td>
              </tr>
            </tbody>
          </Table>
          <h6 className="text-end mt-3">
            <strong>Total: PKR {orderDetailsPayload.price * quantity}</strong>
          </h6>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleConfirmOrder}>
            Confirm Order
          </Button>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
        theme="light"
        transition="Bounce"
      />
      <ToastContainer />
    </>
  );
};

export default OrderModal;
