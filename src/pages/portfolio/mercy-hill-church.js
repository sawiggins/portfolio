import React from "react"
import { Container, Row, Col } from 'react-bootstrap';
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import PortfolioNav from '../../components/portfolio-nav.js'
import PortfolioHeader from '../../components/portfolio-header'
import PortfolioMoreProjects from "../../components/portfolio-more-projects";
import Footer from '../../components/footer'

const MercyHill = ({ data }) => {
  return (
    <>

      <PortfolioNav />
      
      <PortfolioHeader
        title="Mercy Hill Church"
        description='Reflecting the diverse neighborhood, Mercy Hill Church connects those in Midtown Memphis to life in Christ.'
      />
      <Container>
        <Row className='align-items-center'>
          <Col md={6}>
            <GatsbyImage image={getImage(data.MercyHillBrief)} alt="Church" />
          </Col>
          <Col md={6}>
            <h2 className="mb-2">The Brief.</h2>
            <h5 className="mb-4">print and digital collateral</h5>
            <p>
              After a fine arts jack of all trades staff member moved, Mercy Hill Church needed help with some print and digital collateral material. 
            </p>
            <p>
              Having recently relocated to a new building, they needed a yard banner to catch people's eye while driving down a major road. Additionally, they requested collateral to support the day-to-day ministries of the church. These included magnets featuring ministries and initiatives as well as digital sermon and announcement slides.
            </p>
          </Col>
        </Row>
      </Container>
      <Container>
      <Row className='my-5'>
          <Col lg={{span:10, offset: 1}}>
            <GatsbyImage image={getImage(data.MercyHillBanner)} alt="Mercy Hill Yard Banner" />
          </Col>
        </Row>
        <Row className='my-5'>
          <Col lg={6}>
            <GatsbyImage image={getImage(data.MercyHillPostcards)} alt="Mercy Hill Magnets" className='mt-2'/>
          </Col>
          <Col lg={6}>
            <GatsbyImage image={getImage(data.MercyHillSlide)} alt="Digital Slides" className='mt-2'/>
          </Col>
        </Row>
      </Container>

      <PortfolioMoreProjects />
      <Footer />
    </>
  )
}

export default MercyHill;

export const query = graphql`
  query {
    MercyHillBrief: file(relativePath: { eq: "MercyHill_Brief.png" }) {
      childImageSharp {
        gatsbyImageData(width: 700, placeholder: NONE, layout: CONSTRAINED)
      }
    }
    MercyHillBanner: file(relativePath: { eq: "mercy-hill_banner.png" }) {
      childImageSharp {
        gatsbyImageData(width: 700, placeholder: NONE, layout: CONSTRAINED)
      }
    }
    MercyHillPostcards: file(relativePath: { eq: "mercy-hill_postcards.png" }) {
      childImageSharp {
        gatsbyImageData(width: 700, placeholder: NONE, layout: CONSTRAINED)
      }
    }
    MercyHillSlide: file(relativePath: { eq: "mercy-hill_advent-mockup-tv.png" }) {
      childImageSharp {
        gatsbyImageData(width: 700, placeholder: NONE, layout: CONSTRAINED)
      }
    }
  }
`

export const Head = () => <title>Stephanie Wiggins | Mercy Hill Church</title>
