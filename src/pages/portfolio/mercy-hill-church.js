import React from "react"
import { Container, Row, Col } from 'react-bootstrap';

import SiteNav from '../../components/nav.js'
import PortfolioHeader from '../../components/portfolio-header'
import PortfolioMoreProjects from "../../components/portfolio-more-projects";
import Footer from '../../components/footer'

import MercyHillBrief from '../../images/MercyHill_Brief.png'
import MercyHillBanner from '../../images/mercy-hill_banner.png'
import MercyHillPostcards from '../../images/mercy-hill_postcards.png'
import MercyHillSlide from '../../images/mercy-hill_advent-mockup-tv.png'

const MercyHill = () => {
  return (
    <>
      <SiteNav />
      
      <PortfolioHeader
        title="Mercy Hill Church"
        description='Reflecting the diverse neighborhood, Mercy Hill Church connects those in Midtown Memphis to life in Christ.'
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
              After a fine arts jack of all trades staff member moved, Mercy Hill Church needed help with some print and digital collateral material. 
            </p>
            <p>
              In relocating to a new building themselves, they needed a new yard banners to catch people's eye driving down a major road as well as supporting the day to day ministries of the church. These included magnets featuring ministries and initiatives as well as digital sermon and announcement slides.
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
            <img src={MercyHillPostcards} alt='Mercy Hill Magnets' className='mt-2'/>
          </Col>
          <Col lg={6}>
            <img src={MercyHillSlide} alt='Digital Slides' className='mt-2'/>
          </Col>
        </Row>
      </Container>

      <PortfolioMoreProjects />
      <Footer />
    </>
  )
}

export default MercyHill;
