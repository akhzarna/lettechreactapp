import React, {useState, useEffect} from 'react'
import myImg from "../src/images/tafheem.jpeg";
import Global from "./Global";

  const Home = () => {

  {/*
  const [num, setNum] = useState(10);
  useEffect(() =>{
     document.title = `You clicked ${num} times`;
     alert('In The Name of Allah');
  });
  */}

  return(
    <>

    <Global
      name = "We are developing Urdu searchable Mobile Apps"
      imgsrc={myImg}
      visit="/home"
      btname="Get Started"
    />

    </>
  );
};

export default Home;
