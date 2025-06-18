import React from "react";
import './About.css';
import ProfilePic from '../images/Prajwal.jpg';

function About(){
    return(
        <section className="about" id="about">
            <h2>About Me</h2>
            <div className="about-content">
                <img src={ProfilePic} alt="Prajwal" className="profile-pic"/>
                <p>
                    I'm Prajwal P- a passionate learner exploring Cloud computing,DevOps & Web Development.
                    Currently diving into full stack with Python & React, and building web projects while
                    aligning with my path into DevOps.
                    </p>
                </div>
        </section>
    );
}

export default About;