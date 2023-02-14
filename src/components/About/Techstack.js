import React from "react";
import { Col, Row } from "react-bootstrap";
import { IoLogoJavascript, IoLogoSass, IoLogoNodejs, IoLogoGithub, IoLogoBitbucket } from "react-icons/io"
import { FaReact, FaFigma } from "react-icons/fa"
import { SiMongodb, SiVite, SiRedux } from "react-icons/si"

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <IoLogoSass />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <IoLogoJavascript />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <IoLogoNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVite />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <IoLogoGithub />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <IoLogoBitbucket />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaFigma />
      </Col>
    </Row>
  );
}

export default Techstack;
