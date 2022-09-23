import React from "react";
import { projects, designs } from "../utils/data";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import { isVisible } from "@testing-library/user-event/dist/utils";
import DesignCard from "./DesignCard";

const Projects = () => {
  return (
    <section className="project" id="projects">
      <Container>
        <Row className="justify-content-center">
          <Col>
            <h2>Projects</h2>
            <h5 className="sub-title">Some of my latest Projects</h5>

            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Development</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Designs</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content
                id="slideInUp"
                className={
                  isVisible ? "animate__animated animate__slideInUp" : ""
                }
              >
                <Tab.Pane eventKey="first">
                  <Row className="justify-content-center">
                    {projects.map((project, index) => {
                      return <ProjectCard key={project.id} project={project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Row className="justify-content-center">
                    {designs.map((design, index) => {
                      return <DesignCard key={design.id} design={design} />;
                    })}
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
