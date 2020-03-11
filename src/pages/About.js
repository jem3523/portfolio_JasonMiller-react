import React from "react";
import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="container pb-3 background-white mt-3">
        <div className="row">
            <div className="col-12">
                <h3>About Me</h3>
            </div>
        </div>
        <div className="row">
            <div className="col-md-3">
                <img className="img-responsive pb-3 pr-5" height="190px" width="190px" src="assets/images/Miller_photo.jpg" alt="Jason Miller pic"/><br/>
                <a href= "./assets/images/Jason Miller resume.pdf" className = "font-green" target="_blank" rel="noopener noreferrer">R&#233;sum&#233;</a><br/>
                <a href= "https://github.com/jem3523" className = "font-green" target="_blank" rel="noopener noreferrer">GitHub Account</a><br/>
                <a href= "https://www.linkedin.com/in/jmillerconsulting/" className = "font-green" target="_blank" rel="noopener noreferrer">LinkedIn Account</a><br/>
                <Link to="/contact" className = "font-green">jaericm@yahoo.com</Link><br/><br/>
            </div>
            <div className="col-md-7">
                <p>As a Full Stack Web Developer with a background in English education, analysis, and project management (PMP &amp; SCRUM certified), I bring a unique blend of twenty-five years of experience to technology projects. Although my passion is software development, I draw on my years as a teacher, analyst, and project manager as I work on the code to ask insightful questions, organize my resources, test my work, and communicate clearly (whether it be writing documentation, giving large-group presentations to stakeholders, or moderating small-group interactions).</p>
                <p>I also enjoy working with other cultures, having lived or traveled extensively in Africa, India, and the UK. Although I taught secondary school in Ethiopia and managed a content development team in England as a resident, I have also set up numerous off-shore teams in India and have traveled there many times. Each experience has added to my ability to collaborate with others.</p>
            </div>
        </div>
    </div>
  )
}

export default About;
