import React from 'react';
import Form from "react-bootstrap/Form";
import '../styles/Contact.css';
import github from '../../assets/icons/github.svg';
import twitter from '../../assets/icons/linkedin.svg';
import linkedin from '../../assets/icons/twitter.svg';


const Contact = ({ handlePageChange }) => {
    return (
        <main className="container row justify-content-md-center home-main mx-auto mt-lg-5 ">
        <div className="col-lg-6 col-md-12 ">
          <div className="container py-4">
            <Form
              action="https://formspree.io/f/mwkazejb"
              method="POST"
              id="contactForm"
            >
              <Form.Group className="name-form">
                <Form.Label htmlFor="name" className="header1">Name</Form.Label>
                <Form.Control
                  className="inputGroup"
                  type="text"
                  name="name"
                  placeholder="Enter name"
                  required
                />
              </Form.Group>
              <Form.Group className="name-form">
                <Form.Label htmlFor="emailAddress" className="header1">Email address</Form.Label>
                <Form.Control
                  className="inputGroup"
                  id="emailAddress"
                  name="_replyto"
                  type="email"
                  placeholder="Email Address"
                  required
                />
              </Form.Group>
              <Form.Group className="name-form">
                <Form.Label htmlFor="message" className="header1">Message</Form.Label>
                <Form.Control
                  className="inputGroup"
                  id="message"
                  type="text"
                  placeholder="Message"
                  name="message"
                  as="textarea"
                  rows={4}
                  required
                />
              </Form.Group>
              <div className="d-grid">
                <button
                  id="button-teal"
                  className="btn btn-lg inputGroup mt-2 contact-button"
                  type="submit"
                  name="action"
                >
                  Submit
                </button>
              </div>
            </Form>
          </div>
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

export default Contact;