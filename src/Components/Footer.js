import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import logo from "../assets/logo.svg";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <Container>
      <div className="footer">
        <Row>
          <Col md={6}>
            <h2 className="title">Book a call with me</h2>
            <p className="text">
              I’d love to have a chat to see how I can help you. The best first{" "}
              step is for us to discuss your project during a free consultation.
              Then we can move forward from there.
            </p>
          </Col>
          <Col md={6}>
            <div className="cont">
              <Button className="btn3">Free Consultation</Button>
            </div>
          </Col>
        </Row>
      </div>
      
    </Container>
    <div className="logo2">
    <img src={logo} width="4%" />
    <Button className="btn">Free Consultation</Button>
  </div>
    </>
  
   
  );
};

export default Footer;
