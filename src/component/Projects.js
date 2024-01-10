import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import photo2 from "../img/ratieimg2.jpg"


const Projects = () => {
    return (
        <>
        <div className="photo2-container">
            <div className="photo2">
                <a href="https://frontend-ratiemate.onrender.com" target="_blank">
                    <img src={photo2} />
                    
                </a>
            </div>
        </div> 
        </>
    )
}
export default Projects