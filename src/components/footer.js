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
        <Row>
          <Col md={4} lg={5} xl={{offset: 1, span: 5}}>
            <h2>Get in Touch.</h2>
          </Col>
          <Col md={8} lg={7} xl={5} className="d-flex">
            <Button variant="secondary" className="btn_email" href="mailto:stephawiggins@gmail.com">
              Email Me
            </Button>
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