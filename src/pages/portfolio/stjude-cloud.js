import React from "react"
import { Container, Row, Col } from 'react-bootstrap';

import PortfolioHeader from '../../components/portfolio-header'
import PortfolioMoreProjects from "../../components/portfolio-more-projects";
import Footer from '../../components/footer'

import SJCBrief from '../../images/StJudeCloud_Brief.png'

const StJudeCloud = () => {
  return (
    <>
      <PortfolioHeader
        title="St. Jude Cloud"
        description='St. Jude Cloud shares genomics data with scientists around the world.'
      />
      <Container>
        <Row className='align-items-center'>
          <Col md={6}>
            <img src={SJCBrief} alt='Cells' />
          </Col>
          <Col md={6}>
            <h2 className="mb-2">The Brief.</h2>
            <h5 className="mb-4">UX/UI design&nbsp;&nbsp;•&nbsp;&nbsp;development</h5>
            <p>
             text here
            </p>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row className='my-5'>
          <Col lg={{span:10, offset: 1}}>
            <img src='' alt='Genomics Platform Homepage' />
          </Col>
        </Row>
        <Row className="flex-column align-items-center">
          <h6>FEATURED PROJECT</h6>
          <h2>Electronic Data Access Agreement Wizard</h2>
          <p>
            Text here
          </p>
        </Row>
        <Row className='my-5'>
          <Col lg={8}>
            <img src='' alt='EDAA Mockup' />
          </Col>
          <Col lg={4}>
            <img src='' alt='UX Flow' />
          </Col>
        </Row>
      </Container>
      <PortfolioMoreProjects />
      <Footer />
    </>
  )
}

export default StJudeCloud;