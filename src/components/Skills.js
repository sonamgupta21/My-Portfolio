import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { skills } from "../utils/data";
import colorSharp from "../assets/img/color-sharp.png";
const Skills = () => {
  return (
    <section className="skill" id="skills">
      <Container>
        <Row className="skill-bx ">
          <h2>Skills</h2>
          <h5 className="sub-title">Get to know more about me</h5>
          <Col xs={12} md={6} xl={6}>
            <h3>Hi!!</h3>

            <p>
              I'm Sonam Gupta, a high-spirited front-end web developer and
              designer here. I simply enjoy working on the code, developing
              beautiful websites.I have built many web applications using
              framework ReactJS. I have also designed websites and
              learned how to achieve a smooth user-flow designs. My intent is to
              construct or design web products that can solve problems from
              different niches and industries using tech.
            </p>
            <p>
              I will love to hear from you. Whether it's a project, job
              opportunity, or just a chat. Feel free to contact me.
            </p>
          </Col>
          <Col xs={12} md={6} xl={6}>
            <Row className="skill-container">
              {skills.map((skill) => {
                return <div className="skill-div">{skill}</div>;
              })}
            </Row>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} alt="Img" />
    </section>
  );
};

export default Skills;
