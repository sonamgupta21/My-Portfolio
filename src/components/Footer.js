import { Container, Row, Col } from "react-bootstrap";
import github from "../assets/img/github.svg";
import linkedin from "../assets/img/nav-icon1.svg";
import dribble from "../assets/img/dribbble.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <h1 className="brand">Portfolio</h1>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/sonam-gupta-17b1211b8/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkedin} alt="" />
              </a>
              <a
                href="https://github.com/sonamgupta21"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={github} alt="" />
              </a>
              <a
                href="https://dribbble.com/sonamgupta02"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={dribble} alt="" />
              </a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
