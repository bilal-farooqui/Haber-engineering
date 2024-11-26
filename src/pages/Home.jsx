import React from "react";
import NavBar from "../components/NavBar";
import IntroPanel from "../components/IntroPanel";
import ServicePanel from "../components/ServicePanel";
import ProductPanel from "../components/ProductPanel";
import EndingPanel from "../components/EndingPanel";

const Home = () =>{

    return(
        <>
        <NavBar/>
        <IntroPanel/>
        <ServicePanel/>
        <ProductPanel/>
        <EndingPanel/>
        </>
    )
};

export default Home