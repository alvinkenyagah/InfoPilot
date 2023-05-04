import React from 'react';
import "./about.css"
const About = () => {
  return (
    <div>
        <div id="about-mission">
      <h2>About Us</h2>
      <p>InfoPilot is a web application that provides a personal and guided search experience for users looking to find accurate and relevant information on interested topics.</p>
      <h3>Our Mission</h3>
      <p>Our mission is to empower users to easily find and access quality information on any topic, helping them make informed decisions and learn new things.</p>
      </div>
      <h3>Our Team</h3>
      <div className="team-members">
        <div className="team-member">
          <img src="path/to/team-member-photo-1.jpg" alt="Team member 1" />
          <h4>John Doe</h4>
          <p>CEO</p>
          <p>John has over 10 years of experience in the tech industry, specializing in search engine optimization and user experience design.</p>
        </div>
        <div className="team-member">
          <img src="path/to/team-member-photo-2.jpg" alt="Team member 2" />
          <h4>Jane Smith</h4>
          <p>Lead Developer</p>
          <p>Jane is an experienced full-stack developer with expertise in React, Node.js, and MongoDB.</p>
        </div>
      </div>
      <h3>Contact Us</h3>
      <p>If you have any questions or feedback, please don't hesitate to reach out to us at <a href="mailto:info@infopilot.com">info@infopilot.com</a>.</p>
      <div className="social-links">
        <a href="https://twitter.com/infopilot" target="_blank" rel="noopener noreferrer">Twitter</a>
        <a href="https://www.facebook.com/infopilot" target="_blank" rel="noopener noreferrer">Facebook</a>
        <a href="https://www.linkedin.com/company/infopilot" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </div>
  );
};

export default About;
