import React from "react";
import photo3 from "../img/Moupdasco-1.jpg"



const AboutMe = () => {
    return (
      <div className="about-container">
        <a className="photo3-container" href="https://rtobeats.bandcamp.com/" target="_blank">
           <img className="photo3" src={photo3}/>
        </a>
       
        <p className="about">
          My first love is music, as a heart transplant recipient being able to create music helped me get through the journey of dealing with advanced haert failure and now I have a new lease on life and I'm making some changes.  As a web developer, my enthusiasm for learning and growing in  this dynamic field knows no bounds. Join me on my new journey as I explore the exciting realms of code, technology, and innovation! 
           
        </p>
     </div> 
    )
}

export default AboutMe