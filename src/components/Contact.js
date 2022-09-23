import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import github from "../assets/img/github.svg";
import linkedin from "../assets/img/nav-icon1.svg";
import dribble from "../assets/img/dribbble.svg";

const Contact = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });
    setButtonText("Send");
    let result = await response.json();
    setFormDetails(formInitialDetails);
    if (result.code === 200) {
      setStatus({ succes: true, message: "Message sent successfully" });
    } else {
      setStatus({
        succes: false,
        message: "Something went wrong, please try again later.",
      });
    }
  };

  return (
    <section className="contact" id="contact">
      <Container>
        <Row>
          <Col md={7}>
            <h2>Get in Touch</h2>
            <form onSubmit={handleSubmit}>
              <Row>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    value={formDetails.firstName}
                    placeholder="First Name"
                    onChange={(e) => onFormUpdate("firstName", e.target.value)}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    value={formDetails.lastName}
                    placeholder="Last Name"
                    onChange={(e) => onFormUpdate("lastName", e.target.value)}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="email"
                    value={formDetails.email}
                    placeholder="Email Address"
                    onChange={(e) => onFormUpdate("email", e.target.value)}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="tel"
                    value={formDetails.phone}
                    placeholder="Phone No."
                    onChange={(e) => onFormUpdate("phone", e.target.value)}
                  />
                </Col>
                <Col sm={12} className="px-1">
                  <textarea
                    rows="6"
                    value={formDetails.message}
                    placeholder="Message"
                    onChange={(e) => onFormUpdate("message", e.target.value)}
                  />
                  <button type="submit">
                    <span>{buttonText}</span>
                  </button>
                </Col>

                {status.message && (
                  <Col>
                    <p
                      className={
                        status.success === false ? "danger" : "success"
                      }
                    >
                      {status.message}
                    </p>
                  </Col>
                )}
              </Row>
            </form>
          </Col>
          <Col sm={5}>
            <Row className="contact-txt">
              <Col sm={12}>
                <a
                  href="https://github.com/sonamgupta21"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button>
                    Github <img src={github} alt="" />
                  </button>
                </a>
              </Col>
              <Col sm={12}>
                <a
                  href="https://www.linkedin.com/in/sonam-gupta-17b1211b8/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button>
                    Linkedin <img src={linkedin} alt="" />
                  </button>
                </a>
              </Col>
              <Col sm={12}>
                <a
                  href="https://dribbble.com/sonamgupta02"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button>
                    Dribble <img src={dribble} alt="" />
                  </button>
                </a>
              </Col>
              <Col sm={12} className="info">
                <div>Email:</div> sonam2001gupta@gmail.com
              </Col>
              <Col sm={12} className="info">
                <div>Phone:</div> +91 9118569902
              </Col>
              <Col sm={12} className="info">
                <div>Address:</div> Ghaziabad, Uttar Pradesh, India
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
