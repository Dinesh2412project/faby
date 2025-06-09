import React from "react";
import Navbar from "../../Components/navbar/Navbar";
import Hero from '../../Components/hero/Hero';
import Bottum from '../../Components/bottum/Bottum';
import Support from '../../Components/support/Support';
import Client from '../../Components/client/Client.jsx';
import Course from '../../Components/course/Course.jsx';
import Pricing from '../../Components/pricing/Pricing.jsx';
import Aboutus from '../../Components/aboutUs/Aboutus.jsx';
import Questions from '../../Components/questions/Questions.jsx';
import Fotter from '../../Components/fotter/Fotter.jsx';
const Home = () => {
  return (
    <div>
      <Navbar />
     <Hero/>
      <Bottum/>
       <Support/>
      <Client/>
      <Course/>
      <Pricing/>
      <Aboutus/>
     <Questions/>
      <Fotter/>
    </div>
  );
};

export default Home;
