import React from "react";
import './Projects.css';

function Projects(){
    return(
        <section className="projects" id="projects">
            <h2>Projects</h2>
            <div className="projects-grid">

            <div className="project-card">
                <h3>Cafe Website</h3>
                <p>A frontend website built using vite+react framework. Displays Cafe products, history, menu, gallery and many more</p>
                <span className="tech">Vite + react + javascript</span>
                <a href="https://github.com/PrajwalP-git/Cafe-website" target="_blank" rel="noopener noreferrer">
                  view Code
                </a>
            </div>

            <div className="project-card">
                <h3>Book-library App</h3>
                <p>A full-stack library system built with Django and React. Supports adding, editing and deleting books with authentication</p>
                <span className="tech">React + Django + Sqlite(Django's inbuilt db)</span>
                <a href="https://github.com/PrajwalP-git/Book-library" popoverTargetAction="_blank" rel="noopener noreferrer">
                  view Code
                </a>
            </div>
            </div>
        </section>
    )
}

export default Projects;