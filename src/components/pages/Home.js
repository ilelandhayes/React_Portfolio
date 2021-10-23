import React from 'react';
import "../styles/Home.css";
import github from '../../assets/icons/github.svg';
import twitter from '../../assets/icons/linkedin.svg';
import linkedin from '../../assets/icons/twitter.svg';

const Home = ({ handlePageChange }) => {
  return (
    <main className="container row justify-content-md-center home-main mx-auto mt-lg-5">
      <div className="col-lg-6 col-md-12 divEl">
        <h1 className="intro my-5 divEl">Hello, I am Leland</h1>
        <h2 className="summary my-5 divEl">
          I am a Full-Stack Developer. I like dabbling in various portions of
          front and back end development, while intergrateing new technologies.
          Love creating very clean and simplistic website designs.
        </h2>
        <div className="connect justify-content-md-center my-5 divEl">
          <a
            href="https://www.linkedin.com/in/lelandhayes/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="linkedin"
              src={linkedin}
              alt="LinkedIn"
            />
          </a>
          <a
            href="https://github.com/ilelandhayes"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="github"
              src={github}
              alt="Github"
            />
          </a>
          <a
            href="https://twitter.com/LelandHayes7"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="twitter"
              src={twitter}
              alt="Twitter"
            />
          </a>
        </div>
      </div>
    </main>
  );
};

export default Home;
