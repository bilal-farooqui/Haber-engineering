import React from "react";
import NavBar from "../components/NavBar";
import IntroPanel from "../components/IntroPanel";
import ServicePanel from "../components/ServicePanel";
import ProductPanel from "../components/ProductPanel";

const Home = () =>{

    return(
        <>
        <NavBar/>
        <IntroPanel/>
        <ServicePanel/>
        <ProductPanel/>
        </>
    )
};

export default Home