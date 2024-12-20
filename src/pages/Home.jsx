import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import IntroPanel from "../components/IntroPanel";
import ServicePanel from "../components/ServicePanel";
import ProductPanel from "../components/ProductPanel";
import EndingPanel from "../components/EndingPanel";
import axios from "axios";

const Home = () => {
  const [introData, setIntroData] = useState({
    title: "",
    description: "",
    buttonText: "",
    image: "",
    homeScreenProductDisplay: 3,
    homeScreenServiceDisplay: 3,
  });

  const [serviceData, setServiceData] = useState([]);
  const [productData, setProductData] = useState([]);

  const fetchServiceData = () => {
    axios
      .get("http://localhost:3001/service")
      .then((res) => {
        console.log("DATA from API", res.data);
        setServiceData(
          res.data.data.slice(0, introData.homeScreenServiceDisplay)
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const fetchIntroData = () => {
    axios
      .get("http://localhost:3001/introData")
      .then((res) => {
        console.log("DATA from API", res.data[0]);
        setIntroData(res.data[0]);
        fetchServiceData(0, res.data[0].homeScreenProductDisplay ?? 3);
        fetchProductData(0, res.data[0].homeScreenProductDisplay ?? 3);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const fetchProductData = (start, limit) => {
    axios
      .get(`http://localhost:3001/product?limit=${limit}&start=${start}`)
      .then((res) => {
        console.log("DATA from API PRODUCT", res.data);
        setProductData(
          res.data.data.slice(0, introData.homeScreenProductDisplay ?? 2 + 1)
        );
        console.log("data of product api", productData);
      })
      .catch((error) => {
        console.log("error in Fetch Product API", error);
      });
  };
  useEffect(() => {
    fetchIntroData();
  }, []);

  return (
    <>
      <NavBar />
      <IntroPanel data={introData} />
      <ServicePanel data={serviceData} />
      <ProductPanel data={productData} />
      <EndingPanel />
    </>
  );
};

export default Home;
