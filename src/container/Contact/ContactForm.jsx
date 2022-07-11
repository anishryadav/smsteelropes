import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { MainSlider } from "../shared/index";

import {
  Form,
  Container,
  FloatingLabel,
  Row,
  Col,
  Spinner,
  Modal,
  Stack,
} from "react-bootstrap";

import useHttpHook from "../../components/hooks/hook";
import "./ContactForm.scss";

const Input = ({
  label,
  type,
  name,
  value,
  onChange,
  placeholder,
  error,
  required,
  controlId,
  isInvalid,
  ...props
}) => {
  return (
    <FloatingLabel label={label} controlId={controlId} className="mb-3">
      <Form.Control
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        isInvalid={isInvalid}
        required={required}
        {...props}
      />
      <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
    </FloatingLabel>
  );
};

const ContactForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false);
  const { sendRequest, isLoading, error, show } = useHttpHook();

  const formSubmitHandler = async (event) => {
    event.preventDefault();

    const formErrors = formValidation();

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      const sendForm = async () => {
        try {
          const { success } = await sendRequest(
            `/contact`,
            "post",
            {
              name: formState.name,
              email: formState.email,
              phone: formState.phone,
              message: formState.message,
            }
          );

          if (success) {
            setShowModal(true);
          }
        } catch (err) {}
      };
      sendForm();

      setFormState({
        name: "",
        phone: "",
        email: "",
        message: "",
      });
    }
  };

  const inputChangedHandler = (event) => {
    const { name, value } = event.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    if (!!errors[name]) {
      setErrors((prevState) => ({
        ...prevState,
        [name]: null,
      }));
    }
  };

  const formValidation = () => {
    const { name, email, phone, message } = formState;
    const formErrors = {};

    if (!name || name.trim() === "") {
      formErrors.name = "Please enter your name";
    } else if (name.length > 50) {
      formErrors.name = "I don't think there exist a name that long";
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
    if (!phone || phone.trim() === "") {
      formErrors.phone = "Please enter your phone";
    } else if (phone.length < 10) {
      formErrors.phone = "Message must be at least 10 characters long";
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
      <Modal show={show} error={error} />
      <div className="app__contact" id="contact-form">
        <MainSlider />
        <h1 className="head">Get in Touch</h1>
        <Modal
          show={showModal}
          onHide={() => setShowModal(false)}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton closeVariant="white">
            <Modal.Title id="contained-modal-title-vcenter">
              Message sent successfully!
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h6>
              Thank you for contacting me! I will get back to you as soon as
              possible.
            </h6>
          </Modal.Body>
          <Modal.Footer>
            <button variant="secondary" onClick={() => setShowModal(false)}>
              Close
            </button>
          </Modal.Footer>
        </Modal>
        <Container>
          <div className="contact-form">
            <Row className="mt-5">
              <Col className="mt-2" sm>
                <Stack gap={5}>
                  <Form noValidate onSubmit={formSubmitHandler}>
                    <Input
                      controlId="floatingInput"
                      label="Name"
                      type="text"
                      name="name"
                      value={formState.name}
                      onChange={inputChangedHandler}
                      placeholder="Name"
                      error={errors.name}
                      required
                      isInvalid={!!errors.name}
                    />

                    <Input
                      controlId="floatingPassword"
                      label="Phone"
                      type="phone"
                      name="phone"
                      value={formState.phone}
                      onChange={inputChangedHandler}
                      placeholder="Phone"
                      error={errors.phone}
                      required
                      isInvalid={!!errors.phone}
                    />

                    <Input
                      controlId="floatingPassword"
                      label="Email"
                      type="email"
                      name="email"
                      value={formState.email}
                      onChange={inputChangedHandler}
                      placeholder="Email"
                      error={errors.email}
                      required
                      isInvalid={!!errors.email}
                    />

                    <Input
                      controlId="floatingTextarea2"
                      label="Message"
                      as="textarea"
                      name="message"
                      value={formState.message}
                      onChange={inputChangedHandler}
                      placeholder="Message"
                      error={errors.message}
                      required
                      isInvalid={!!errors.message}
                      style={{ height: "200px" }}
                    />

                    <button type="submit">
                      {isLoading ? (
                        <>
                          Loading{" "}
                          <Spinner
                            as="span"
                            animation="border"
                            size="sm"
                            role="status"
                            aria-hidden="true"
                          />
                        </>
                      ) : (
                        "Send Message"
                      )}
                    </button>
                  </Form>
                </Stack>
              </Col>
              <Col>
                <div className="app__contact-add">
                  <li className="list-items">
                    Location: G9, K-square, Kurund Village, Padgha, Bhiwandi,
                    421101
                  </li>
                  <li className="list-items">
                    <a
                      href="mailto:smsteelropes@yahoo.co.in"
                      style={{ color: "black" }}
                    >
                      Email: smsteelropes@yahoo.co.in
                    </a>
                  </li>
                  <li className="list-items">
                    <a href="tel: +919820270934" style={{ color: "black" }}>
                      Contact: +919820270934
                    </a>
                  </li>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default ContactForm;
