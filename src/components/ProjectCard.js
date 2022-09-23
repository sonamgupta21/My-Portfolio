import React from "react";
import { Col } from "react-bootstrap";

const ProjectCard = ({ project }) => {
  return (
    <Col
      className="proj"
      sm={5}
      style={{
        width: project.id === 1 ? "70%" : "500px !important",
      }}
    >
      <div className="proj-imgbx">
        <img src={project.imgUrl} alt="" />
        <div className="proj-txtx">
          <h4>{project.title}</h4>
          <span>{project.description}</span>
          <div>
            <a
              className="button"
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
            <a
              className="button"
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
            >
              Live
            </a>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default ProjectCard;
