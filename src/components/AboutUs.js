import React from "react";
import "./about.css";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div>
      <div id="about-mission">
        <h2>About Us</h2>
        <p>
          InfoPilot is a web application that provides a personal and guided
          search experience for users looking to find accurate and relevant
          information on interested topics.
        </p>
        <h3>Our Mission</h3>
        <p>
          Our mission is to empower users to easily find and access quality
          information on any topic, helping them make informed decisions and
          learn new things.
        </p>
      </div>
      <h3 style={{textAlign:"center",}}>Our Team</h3>
      <div className="team-members">
        <div className="team-member">
          <img src="https://www.recapo.com/wp-content/uploads/2013/05/steve-harvey1.jpg" alt="CEO" id="ceo" />
          <h4>Alvin</h4>
          <p>CEO</p>
          <p>
            Alvin has over 7 years of experience in the tech industry,
            specializing in search engine optimization and user experience
            design.
          </p>
        </div>

        




        <div className="team-member">
          <img src="https://www.gmod-fan.ru/uploads/posts/2016-08/1471684079_1448718266_df.jpg" alt="Team member 2" />
          <h4>Claire </h4>
          <p>Lead Developer</p>
          <p>
            Jane is an experienced full-stack developer with expertise in React,
            Node.js, and MongoDB.
          </p>
        </div>









        <div className="team-member">
          <img src="https://i.pinimg.com/originals/96/b9/b0/96b9b075894201bb6ed9efe8c2b4902f.jpg" alt="Team member 2" />
          <h4>Ada Wong </h4>
          <p>UI/UX designer</p>
          <p>
            Ada Wong is a highly skilled user interface and user experience engineer.
          </p>
        </div>
      </div>
      <h3 style={{textAlign:"center"}}>Contact Us</h3>
      <p style={{textAlign:"center"}}>
        If you have any questions or feedback, please don't hesitate to reach
        out to us via the <Link to="/contact">Contact form </Link>.
      </p>
     
    </div>
  );
};

export default About;
