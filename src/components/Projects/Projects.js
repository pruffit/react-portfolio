import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import calculator from '../../Assets/Projects/calculator.png'
import task from '../../Assets/Projects/task.png'
import surf from '../../Assets/Projects/surf.png'

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={calculator}
              isBlog={false}
              title="Calculator"
              description="React calculator."
              ghLink="https://github.com/pruffit/calculator"
              demoLink="https://www.calculator.danilkotlaev.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={task}
              isBlog={false}
              title="Task List"
              description="MERN task list."
              ghLink="https://github.com/pruffit/MernTaskListFrontend"
              demoLink="https://todo.danilkotlaev.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={surf}
              isBlog={false}
              title="Surfboard"
              description="Surfboar landing page."
              ghLink="https://github.com/pruffit/Surfboard/tree/development"
              demoLink="https://surfboard.danilkotlaev.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
