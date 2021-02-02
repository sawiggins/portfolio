import React from "react"
import { Container, Row, Col } from 'react-bootstrap';

import PortfolioHeader from '../../components/portfolio-header'
import PortfolioMoreProjects from "../../components/portfolio-more-projects";
import Footer from '../../components/footer'

import MercyHillBrief from '../../images/MercyHill_Brief.png'
import MercyHillBanner from '../../images/mercy-hill_banner.jpeg'
import MercyHillPostcards from '../../images/mercy-hill_postcards.png'
import MercyHillSlide from '../../images/mercy-hill_advent-mockup-tv.png'

const MercyHill = () => {
  return (
    <>
      <PortfolioHeader
        title="Mercy Hill Church"
        description='Reflecting the diverse neighborhood, Mercy Hill Church aimed to reach those in and around their neighborhood in Midtown Memphis.'
      />
      <Container>
        <Row className='align-items-center'>
          <Col md={6}>
            <img src={MercyHillBrief} alt='Church' />
          </Col>
          <Col md={6}>
            <h2 className="mb-2">The Brief.</h2>
            <h5 className="mb-4">print and digital collateral</h5>
            <p>
            magnets, banner, digital slides
            </p>
          </Col>
        </Row>
      </Container>
      <Container>
      <Row className='my-5'>
          <Col lg={{span:10, offset: 1}}>
            <img src={MercyHillBanner} alt='Mercy Hill Yard Banner' />
          </Col>
        </Row>
        <Row className='my-5'>
          <Col lg={6}>
            <img src={MercyHillPostcards} alt='Mercy Hill Magnets' />
          </Col>
          <Col lg={6}>
            <img src={MercyHillSlide} alt='Digital Slides' />
          </Col>
        </Row>
      </Container>

      <PortfolioMoreProjects />
      <Footer />
    </>
  )
}

export default MercyHill;
