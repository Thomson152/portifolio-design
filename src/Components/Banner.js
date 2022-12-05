import { Container, Row, Col, Button } from "react-bootstrap";
import React from "react";
import logo from "../assets/logo.svg";
import "../Components/Banner.css";
import graphic from "../assets/pattern-graphic-design.svg";
import app from "../assets/pattern-apps.svg";
import ui from "../assets/pattern-ui-ux.svg";
import illustration from "../assets/pattern-illustrations.svg";
import motion from "../assets/pattern-motion-graphics.svg";
import photographic from "../assets/pattern-photography.svg";
const Banner = () => {
  return (
    <>
      <div className="logo">
        <img src={logo} className="logo-img"  width="4%"/>

        <Button className="btn">Free Consultation</Button>
      </div>

      <div classsName="container">
        <h1 className="Design"> Design solutions made easy</h1>
        <p className="skills_text">
          With over ten years of experience in various design disciplines, I’m
          your one-stop
          <br /> shop for your design needs.
        </p>
      </div>

      <div className="image_grid">
        <div className="graphic_container">
          <img className="img1" src={graphic} width="50%" />
          <h3 className="graphic">Graphic Design</h3>
        </div>

        <div className="graphic_container2">
          <div className="graphic3">
            <div className="ui_container">
              <img src={ui} className="img2" width="70%" />
              <h3 className="ui">UI/UX</h3>
            </div>
            <div className="app_container">
              <img src={app} className="img3" width="70%" />
              <h3 className="app">Apps</h3>
            </div>
          </div>
          <div className="illustration_container">
            <img className="img4" src={illustration} width="30%" />
            <h3 className="Illustration"> Illustrations</h3>
          </div>
        </div>

        <div className="graphic_container3">
          <div className="graphic_motion">
            <img src={photographic} className="img5" width="50%" />
            <h3 className="photo">Photographic</h3>
          </div>

          <div className="graphic_photographic">
            <img src={motion}  className="img6" width="50%" />
            <h3 className="motion">Motion Graphics</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
