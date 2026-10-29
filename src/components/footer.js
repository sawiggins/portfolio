import React from 'react';
import { Container, Col, Button, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  fab,
  faLinkedin,
  faGithub
} from "@fortawesome/free-brands-svg-icons";

library.add(
  fab,
  faLinkedin,
  faGithub
);

const Footer = () => {
  return (
    <Container fluid className="footer py-5">
      <Container>
        <Row className="align-items-center footer__row">
          <Col xs="auto">
            <h2>Get in Touch.</h2>
          </Col>
          <Col xs="auto" className="d-flex gap-2 gap-md-4 justify-content-center footer__icons">
            <Button
                variant="secondary"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/wigginsstephanie/"
                title="LinkedIn"
                alt="LinkedIn"
                className="btn_brand"
              >
                <FontAwesomeIcon
                  icon={["fab", "linkedin-in"]}
                />
              </Button>
              <Button 
                variant="secondary"
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/sawiggins"
                title="GitHub"
                alt="GitHub"
                className="btn_brand"
              >
                <FontAwesomeIcon
                  icon={["fab", "github"]}
                />
              </Button>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Footer