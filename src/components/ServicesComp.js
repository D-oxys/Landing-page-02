import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const ServicesComp = () => {
  return (
    <div className="min-vh-100 d-flex align-items-center">
      <Container>
        <Row className="mb-5">
          <Col>
            <h1 className="fw-bold text-center">Services</h1>
            <p className="text-center">Lorem ipsum dolor sit amet consectetur.</p>
          </Col>
        </Row>
        <Row className="row-cols-lg-3 row-cols-md-2 row-cols-1 justify-content-center">
          <Col className="py-5 px-3 text-center" data-aos="fade-right" data-aos-delay="200">
            {/* Coin icon */}
            <i className="fa-solid fa-coins fs-2 mb-3"></i>
            <h5 className="fw-bold">Harga Terjangkau</h5>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          </Col>
          <Col className="py-5 px-3 text-center" data-aos="zoom-in" data-aos-delay="200">
            {/* Coin icon */}
            <i className="fa-solid fa-thumbs-up fs-2 mb-3"></i>
            <h5 className="fw-bold">Harga Terjangkau</h5>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          </Col>
          <Col className="py-5 px-3 text-center" data-aos="fade-left" data-aos-delay="200">
            {/* Coin icon */}
            <i className="fa-solid fa-shield-halved fs-2 mb-3"></i>
            <h5 className="fw-bold">Harga Terjangkau</h5>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ServicesComp;
