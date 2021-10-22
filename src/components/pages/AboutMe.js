import React from 'react';
import '../styles/AboutMe.css';


const AboutMe = ({ handlePageChange }) => {
  return (
    <main className="container row justify-content-md-center home-main mx-auto mt-lg-5">
      <div className="col-lg-6 col-md-12 divEl">
        <h1 className="title my-3 divEl">About Me</h1>
        <h2 className="about-section my-5 divEl">
          Being involved in technology has been an on going fascination of mine. It has always
          been more about knowing how the technology runs/works instead of just playing what the 
          developer made. What really got me into web development was always scrolling through
          the internet and coming across these websites that were very intriguing and well coded. 
          After watching a few video's on it, I decided to enroll in a coding bootcamp at UNC
          Chapel Hill (the best decision of my life). From there I started my coding career as
          a web developer. 
        </h2>
        <br />
        <div
            onClick={() => handlePageChange("Contact")}
            className="contact-me divEl"
          >
            Contact Me
          </div>
      </div>
    </main>
  );
};

export default AboutMe;
