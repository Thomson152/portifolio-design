import React from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import "./Skills.css";
import profile from "../assets/image-amy.webp";

const Skills = () => {
  return (
    <>
      <div>
        <Container className="container">
          <Row>
            <Col md={6}>
              <div>
                <img className="profile" width="60%" src={profile} />
              </div>
            </Col>
            <Col md={6}>
              <div className="profile_main">
                <h2 className="header_h2">
                  I’m Amy, and I’d love to <br/>work on your next project
                </h2>
                <p className="profile_text">
                  I love working with others to create beautiful design
                  solutions. <br/> I’ve designed everything from brand illustrations
                  to complete <br/>mobile apps. I’m also handy with a camera!
                </p>
                <Button className="btn2">Free Consultation</Button>
                
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Skills;
