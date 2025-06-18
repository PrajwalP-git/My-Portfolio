import React from "react";
import './Hero.css';

function Hero(){
    return(
        <section className="hero" id="Hero">
         <div className="hero-content">
         <h1>Hello, I'm<span className="name">Prajwal P</span></h1>
         <p className="tagline">Learning the Stack, one Line at a Time</p>
         <a href="#projects" className="hero-btn">View Projects</a>
         </div>
    </section>
    );
}

export default Hero;