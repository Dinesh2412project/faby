import Navbar from "./Components/navbar/Navbar.jsx";
import {BrowserRouter ,Routes,Route,} from 'react-router-dom';
import  Top from'./pages/Top.jsx';
import  Features from'./pages/Features.jsx';
import  Clients from'./pages/Clients.jsx';
import   Price from'./pages/Price.jsx';
import  About from'./pages/About.jsx';
import  Faq from'./pages/Faq.jsx';
import Hero from "./Components/hero/Hero.jsx";
import Bottum from "./Components/bottum/Bottum.jsx";
import Support from "./Components/support/Support.jsx";
import Client from "./Components/client/Client.jsx";
import Course from "./Components/course/Course.jsx";
import Pricing from "./Components/pricing/Pricing.jsx";
import Aboutus from "./Components/about-us/Aboutus.jsx";
import Questions from "./Components/questions/Questions.jsx";
import Fotter from "./Components/fotter/Fotter.jsx";


function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Hero/>
      <Bottum/>
      <Support/>
      <Client/>
      <Course/>
      <Pricing/>
      <Aboutus/>
      <Questions/>
      <Fotter/>
      <Routes>
        <Route  path="/" element={<Top />}/>
        <Route path="Features" element={<Features />}/>
        <Route path="Clients" element={<Clients />}/>
        <Route path="Price" element={<Price />}/>
        <Route path="About" element={<About />}/>
        <Route path="Faq" element={<Faq />}/>
      </Routes>
      </BrowserRouter>
      
      
    </>
  )
}

export default App
