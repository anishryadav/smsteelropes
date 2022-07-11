import React, { useState } from "react";
import { MainSlider } from "../shared/index";
import { Helmet } from "react-helmet";
import axios from "axios";

import { Modal } from "react-bootstrap";
import "./Contact.scss";

const Contact = () => {
  const [formState, setFormState] = useState({});
  const [showModal, setShowModal] = useState(false);

  const [status, setStatus] = useState("Send Message");

  const inputChangedHandler = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setStatus("Sending...");
    formValidation();
    sendEmail();
    setStatus("Send Message");
    setShowModal(true);
    setFormState({
      name: "",
      phone: "",
      email: "",
      message: "",
    });
  };
  const sendEmail = async () => {
    axios
      .post(`https://smsteelropes.herokuapp.com/contact`, formState)
      .then((res) => {
        setFormState({
          name: "",
          phone: "",
          email: "",
          message: "",
        });
      })
      .catch((error) => {
        console.log(error);
      });
    // try {
    //   const res = await fetch("/contact", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({ formState }),
    //   });
    //   const data = res.json();
    //   if (res.status !== 200 || !data) {
    //     const error = new Error(res.error);
    //     throw error;
    //   }
    // } catch (error) {
    //   console.error(error);
    // }
  };

  const formValidation = () => {
    const { name, email, phone, message } = formState;
    const formErrors = {};

    if (!name || name.trim() === "") {
      formErrors.name = "Please enter your name";
    } else if (name.length > 50) {
      formErrors.name = "I don't think there exist a name that long";
    }
    if (!phone || phone.trim() === "") {
      formErrors.phone = "Please enter your phone";
    } else if (name.length > 13) {
      formErrors.name = "I don't think there exist a phone that long";
    }
    if (!email || email.trim() === "") {
      formErrors.email = "Please enter your email";
    } else if (
      !email.match(
        //eslint-disable-next-line
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
      )
    ) {
      formErrors.email = "Please enter a valid email";
    }

    if (!message || message.trim() === "") {
      formErrors.message = "Please enter your message";
    } else if (message.length < 10) {
      formErrors.message = "Message must be at least 10 characters long";
    }

    return formErrors;
  };

  return (
    <React.Fragment>
      <Helmet>
        <title> Contact | SM Steel Ropes</title>
      </Helmet>
      <div className="app__contact" id="contact">
        <Modal
          show={showModal}
          onHide={() => setShowModal(false)}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          style={{
            backgroundColor: "#e7f2fc95",
          }}
        >
          <Modal.Header
            closeButton
            closeVariant="#e7f2fc"
            style={{ backgroundColor: "#8cc4fc" }}
          >
            <Modal.Title id="contained-modal-title-vcenter">
              Message sent successfully!
            </Modal.Title>
          </Modal.Header>
          <Modal.Body centered style={{ backgroundColor: "#d4e6f8" }}>
            <h6>
              Thank you for contacting us! We will get back to you as soon as
              possible.
            </h6>
          </Modal.Body>
          <Modal.Footer style={{ backgroundColor: "#d4e6f8" }}>
            <button
              style={{
                backgroundColor: "#7c76f0",
                padding: "5px 10px",
                border: "none",
                borderRadius: "16px",
              }}
              variant="secondary"
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
          </Modal.Footer>
        </Modal>
        <div className="app__contact-head">
          <MainSlider />
          <h1 className="head">Get in Touch</h1>
        </div>
        <div className="app__contact-main">
          <form
            method="POST"
            className="app__contact-form"
            onSubmit={handleSubmit}
          >
            <div className="app__flex">
              <label htmlFor="name"></label>
              <input
                onChange={inputChangedHandler}
                className="p-text"
                placeholder="Your Name"
                type="text"
                name="name"
                value={"" || formState.name}
                id="name"
                required
              />
            </div>
            <div className="app__flex">
              <label htmlFor="phone"></label>
              <input
                onChange={inputChangedHandler}
                className="p-text"
                type="phone"
                placeholder="Your Phone"
                value={"" || formState.phone}
                id="phone"
                name="phone"
                required
              />
            </div>
            <div className="app__flex">
              <label htmlFor="email"></label>
              <input
                onChange={inputChangedHandler}
                className="p-text"
                placeholder="Your Email"
                name="email"
                value={"" || formState.email}
                type="email"
                id="email"
                required
              />
            </div>
            <div className="app__flex">
              <label htmlFor="message"></label>
              <textarea
                onChange={inputChangedHandler}
                className="p-text"
                placeholder="Your Message"
                value={"" || formState.message}
                name="message"
                id="message"
                required
              />
            </div>
            <button type="submit" className="contactBtn">
              {status}
            </button>
          </form>

          <div className="app__contact-add">
            <li className="list-items">
              Location: G9, K-square, Kurund Village, Padgha, Bhiwandi, 421101
            </li>
            <li className="list-items">
              <a
                href="mailto:smsteelropes@yahoo.co.in"
                style={{ color: "black" }}
              >
                Email: contact@smsteelropes.com
              </a>
            </li>
            <li className="list-items">
              <a href="tel: +919820270934" style={{ color: "black" }}>
                Contact: +919820270934
              </a>
            </li>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Contact;
