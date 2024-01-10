import React from "react";
import "./App.css";
import Home from "./component/Home";
import NavBar from "./component/NavBar";
import AboutMe from "./component/About-Me";
import Projects from "./component/Projects";
import Links from "./component/Links";
import Photo from "./component/Photo";
import {Route, Routes} from "react-router-dom";
import Footer from "./component/Footer";





const App = () => {
  return (
    <>
    <NavBar/>
      <Photo/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/aboutme" element={<AboutMe/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/links" element={<Links/>}/>   
        </Routes>
    
      <Footer/>
    </>
    
  )
}


export default App