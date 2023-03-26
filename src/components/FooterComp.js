import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const FooterComp = () => {
  return (
    <div className="bg-slate-900 pb-3 pt-4">
      <Container>
        <Row>
          <Col>
            <h3 className="fw-bold text-white">Ngoding</h3>
          </Col>
          <Col className="text-end">
            <i class="fa-brands fs-1 mx-lg-3 fa-facebook  mx-2 text-white"></i>
            <i class="fa-brands fs-1 mx-lg-3 fa-instagram  mx-2 text-white"></i>
            <i class="fa-brands fs-1 mx-lg-3 fa-tiktok  mx-2 text-white"></i>
          </Col>
        </Row>
        <Row className="">
          <Col>
            <p className="hien text-center text-slate-900">Love you pipit fitriani</p>
            <i class="fa-light fa-horizontal-rule"></i>
            <p className="text-white-50 text-center">
              &copy; Copyright by doxys and Make with <i class="fa-solid fa-heart"></i> all reserved
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FooterComp;
