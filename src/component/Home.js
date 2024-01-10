import React from "react";
import Typewriter from "typewriter-effect";
import textAnimation from "./Home.module.css";
import mpc60two from "../img/MPC60_NewLens2_300x300.jpg";

const Home = () => {
  return (
    <>
          
      <div className={textAnimation.container}>
        <div className={textAnimation.container2}>
          <h1 className={textAnimation.wiggle}>H</h1>
          <h1 className={textAnimation.wiggle}>e</h1>
          <h1 className={textAnimation.wiggle}>l</h1>
          <h1 className={textAnimation.wiggle}>l</h1>
          <h1 className={textAnimation.wiggle}>o</h1>
        </div> 
          
          <div className={textAnimation.container2}>
          <h2 className={textAnimation.wiggle}> I</h2>
          <h2 className={textAnimation.wiggle}>'</h2>
          <h2 className={textAnimation.wiggle}>m</h2>
        </div> 

        <div className={textAnimation.container2}>
          <h2 className={textAnimation.wiggle}>R</h2>
          <h2 className={textAnimation.wiggle}>o</h2>
          <h2 className={textAnimation.wiggle}>n</h2>
          <h2 className={textAnimation.wiggle}>i</h2>
          <h2 className={textAnimation.wiggle}>e</h2>
          <h2 className={textAnimation.wiggle}>l</h2>
        </div>       
      </div>
          <h3 className="web-dev">Web Developer</h3>
    </>
  );
};

export default Home;


