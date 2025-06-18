import React from "react";
import './Contact.css';

function Contact(){
    return(
        <section className="contact" id="contact">
            <h2>Contact Me</h2>
            <p>You can reach me via email/connect with me on platforms below.</p>

            <div className="contact-links">
                <p>Email:<a href="prajwaldec112001@gmail.com">prajwaldec112001@gmail.com</a></p>
                <p>Github:<a href="https://github.com/PrajwalP-git" target="_blank" rel="noopener noreferrer">github.com/PrajwalP-git</a></p>
                <p>LinkedIn:<a href="https://www.linkedin.com/in/prajwal-prasad-6895a4319" target="_blank" rel="noopener noreferrer">linkedin.com/in/prajwal-prasad-6895a4319</a></p>
            </div>
        </section>
    )
}

export default Contact;