import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Gambar1 from "../assets/img/gallery/gallery-1.jpg";
import Gambar2 from "../assets/img/gallery/gallery-2.jpg";
import Gambar3 from "../assets/img/gallery/gallery-3.jpg";
import Gambar4 from "../assets/img/gallery/gallery-4.jpg";
import Gambar5 from "../assets/img/gallery/gallery-5.jpg";
import Gambar6 from "../assets/img/gallery/gallery-6.jpg";
const GalleryComp = () => {
  return (
    <div className="gambar min-vh-100 d-flex align-items-center">
      <Container>
        <Row className="mb-5">
          <Col>
            <h1 className="fw-bold text-center">Gallery</h1>
            <p className="text-center">Lorem ipsum dolor sit amet consectetur.</p>
          </Col>
        </Row>
        <Row className="row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 g-3">
          <Col>
            <img data-aos="fade-up" src={Gambar1} alt="unsplash.com" className="w-100" />
          </Col>
          <Col>
            <img data-aos="fade-up" src={Gambar2} alt="unsplash.com" className="w-100" />
          </Col>
          <Col>
            <img data-aos="fade-up" src={Gambar3} alt="unsplash.com" className="w-100" />
          </Col>
          <Col>
            <img data-aos="fade-up" src={Gambar4} alt="unsplash.com" className="w-100" />
          </Col>
          <Col>
            <img data-aos="fade-up" src={Gambar5} alt="unsplash.com" className="w-100" />
          </Col>
          <Col>
            <img data-aos="fade-up" src={Gambar6} alt="unsplash.com" className="w-100" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default GalleryComp;
