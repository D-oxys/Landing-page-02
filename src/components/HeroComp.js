import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const HeroComp = () => {
  return (
    <div className="hero min-vh-100 w-100 d-flex align-items-center">
      <Container>
        <Row>
          <Col className="animate__animated animate__fadeInUp text-center text-white">
            <h1>Lorem, ipsum dolor.</h1>
            <p className="text-white-50 animate__animated animate__fadeInUp animate__delay-1s">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae, labore?</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeroComp;
