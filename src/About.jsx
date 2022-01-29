import React from 'react'
import myImg from "../src/images/reactjs.jpg";
import Global from "./Global";

const About = () => {
  return(
    <>
    <Global
      name = "Grow your business"
      imgsrc={myImg}
      visit="/about"
      btname="About Us"
    />
    </>
  );
};

export default About;
