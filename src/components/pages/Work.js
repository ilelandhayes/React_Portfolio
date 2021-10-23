import React from "react";
import { Card, Row } from "react-bootstrap";
import "../styles/Work.css";

import tattoo from "../../assets/project-imgs/tattoo-shop.png";
import cryptowatch from "../../assets/project-imgs/CryptoWatch.png";
import password from "../../assets/project-imgs/Password-Generator.png";
import codingquiz from "../../assets/project-imgs/Coding-Quiz.png";
import weatherdashboard from "../../assets/project-imgs/Weather-Dashboard.png";
import workday from "../../assets/project-imgs/Work-Day-Scheduler.png";
import github from "../../assets/icons/github.svg";
import application from "../../assets/icons/browser.png"

const Work = ({ handlePageChange }) => {
  return (
    <div>
      <Row className="proj-rows">
        <Card style={{ width: "20rem", bg: "rgb(245, 229, 229)" }}>
          <Card.Img variant="top" src={tattoo} />
          <Card.Body>
            <Card.Title className="proj-title">Tattoo Shop</Card.Title>
            <Card.Text>A freelance project based on a Tattoo shop. A well sought out but simple informational
                    application to portray the aspects of the shop 
                    as well as the body art.</Card.Text>
            <a
              href="https://github.com/ChaseNicks/tattoo_shop"
              target="_blank"
              rel="noreferrer"
            >
              <img className="github" src={github} alt="Github" />
            </a>
            <a
              href="https://chasenicks.github.io/tattoo_shop/"
              target="_blank"
              rel="noreferrer"
            >
              <img className="app-link" src={application} alt="Github" />
            </a>
          </Card.Body>
        </Card>

        <Card style={{ width: "20rem", bg: "rgb(245, 229, 229)" }}>
          <Card.Img variant="top" src={cryptowatch} />
          <Card.Body>
            <Card.Title className="proj-title">Crypto Watch</Card.Title>
            <Card.Text>A crypto application that gives users useful insight of whats going on in the crypto market,
                    able to see a 3 month view of price action and volume,
                     also current news.</Card.Text>
            <a
              href="https://github.com/Copernichris/CryptoWatch"
              target="_blank"
              rel="noreferrer"
            >
              <img className="github" src={github} alt="Github" />
            </a>
            <a
              href="https://copernichris.github.io/CryptoWatch/"
              target="_blank"
              rel="noreferrer"
            >
              <img className="app-link" src={application} alt="Github" />
            </a>
          </Card.Body>
        </Card>
        <Card style={{ width: "20rem", bg: "rgb(245, 229, 229)" }}>
          <Card.Img variant="top" src={password} />
          <Card.Body>
            <Card.Title className="proj-title">Password Generator</Card.Title>
            <Card.Text>A password generator for company employees that is soly based upon
                     criteria they have chosen for their specific password.</Card.Text>
            <a
              href="https://github.com/ilelandhayes/Password-Generator"
              target="_blank"
              rel="noreferrer"
            >
              <img className="github" src={github} alt="Github" />
            </a>
            <a
              href="https://ilelandhayes.github.io/Password-Generator/"
              target="_blank"
              rel="noreferrer"
            >
              <img className="app-link" src={application} alt="Github" />
            </a>
          </Card.Body>
        </Card>
        <Card style={{ width: "20rem", bg: "rgb(245, 229, 229)" }}>
          <Card.Img variant="top" src={codingquiz} />
          <Card.Body>
            <Card.Title className="proj-title">Javascript Quiz</Card.Title>
            <Card.Text>A JavaScript Quiz that test your common knowledge on Javascript.</Card.Text>
            <a
              href="https://github.com/ilelandhayes/Javascript-Quiz"
              target="_blank"
              rel="noreferrer"
            >
              <img className="github" src={github} alt="Github" />
            </a>
            <a
              href="https://ilelandhayes.github.io/Javascript-Quiz/"
              target="_blank"
              rel="noreferrer"
            >
              <img className="app-link" src={application} alt="Github" />
            </a>
          </Card.Body>
        </Card>
        <Card style={{ width: "20rem", bg: "rgb(245, 229, 229)" }}>
          <Card.Img variant="top" src={weatherdashboard} />
          <Card.Body>
            <Card.Title className="proj-title">Weather Dashboard</Card.Title>
            <Card.Text>This is a Weather Dashboard application that can be used by the user to search for forecast 
                    of multiple cites. Very useful for planning a trip correspondingly.</Card.Text>
            <a
              href="https://github.com/ilelandhayes/Weather-Dashboard"
              target="_blank"
              rel="noreferrer"
            >
              <img className="github" src={github} alt="Github" />
            </a>
            <a
              href="https://ilelandhayes.github.io/Weather-Dashboard/"
              target="_blank"
              rel="noreferrer"
            >
              <img className="app-link" src={application} alt="Github" />
            </a>
          </Card.Body>
        </Card>
        <Card style={{ width: "20rem", bg: "rgb(245, 229, 229)" }}>
          <Card.Img variant="top" src={workday} />
          <Card.Body>
            <Card.Title className="proj-title">Work Day Schedular</Card.Title>
            <Card.Text>This is a working Daily Planner that can be used by employee's that
                     have very busy schedules, to keep track of their day.</Card.Text>
            <a
              href="https://github.com/ilelandhayes/Daily-Planner"
              target="_blank"
              rel="noreferrer"
            >
              <img className="github" src={github} alt="Github" />
            </a>
            <a
              href="https://ilelandhayes.github.io/Daily-Planner/"
              target="_blank"
              rel="noreferrer"
            >
              <img className="app-link" src={application} alt="Github" />
            </a>
          </Card.Body>
        </Card>
      </Row>
    </div>
  );
};

export default Work;
