import React from "react";
import './Skills.css';

function Skills(){
    return(
        <section className="skills" id="skills">
            <h2>Skills</h2>
            <div className="skills-grid">
                <div className="skill">Python</div>
                <div className="skill">Django</div>
                <div className="skill">Linux(basic CLI)</div>
                <div className="skill">Github(basic deployments)</div>
                <div className="skill">AWS(basics & in progress)</div>
                <div className="skill">Networking(basics)</div>
                <div className="skill">React(basics)</div>
                <div className="skill">Javascript(basics)</div>

            </div>
        </section>
    );
}

export default Skills;