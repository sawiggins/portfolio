import React from "react"
import { Container, Row, Col } from 'react-bootstrap';
import { graphql } from "gatsby"
import Img from "gatsby-image"

import PortfolioNav from '../../components/portfolio-nav.js'
import PortfolioHeader from '../../components/portfolio-header'
import PortfolioMoreProjects from "../../components/portfolio-more-projects";
import Footer from '../../components/footer'

const MercyHill = ({ data }) => {
  return (
    <>
      <title>Stephanie Wiggins | Mercy Hill Church</title>

      <PortfolioNav />
      
      <PortfolioHeader
        title="Mercy Hill Church"
        description='Reflecting the diverse neighborhood, Mercy Hill Church connects those in Midtown Memphis to life in Christ.'
      />
      <Container>
        <Row className='align-items-center'>
          <Col md={6}>
            <Img fluid={data.MercyHillBrief.childImageSharp.fluid} fadeIn={false} alt="Church" />
          </Col>
          <Col md={6}>
            <h2 className="mb-2">The Brief.</h2>
            <h5 className="mb-4">print and digital collateral</h5>
            <p>
              After a fine arts jack of all trades staff member moved, Mercy Hill Church needed help with some print and digital collateral material. 
            </p>
            <p>
              In relocating to a new building themselves, they needed a new yard banner to catch people's eye driving down a major road. Additionally, they requested collateral to support the day-to-day ministries of the church. These included magnets featuring ministries and initiatives as well as digital sermon and announcement slides.
            </p>
          </Col>
        </Row>
      </Container>
      <Container>
      <Row className='my-5'>
          <Col lg={{span:10, offset: 1}}>
            <Img fluid={data.MercyHillBanner.childImageSharp.fluid} fadeIn={false} alt="Mercy Hill Yard Banner" />
          </Col>
        </Row>
        <Row className='my-5'>
          <Col lg={6}>
            <Img fluid={data.MercyHillPostcards.childImageSharp.fluid} fadeIn={false} alt="Mercy Hill Magnets" className='mt-2'/>
          </Col>
          <Col lg={6}>
            <Img fluid={data.MercyHillSlide.childImageSharp.fluid} fadeIn={false} alt="Digital Slides" className='mt-2'/>
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
        fluid(maxWidth: 700) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    MercyHillBanner: file(relativePath: { eq: "mercy-hill_banner.png" }) {
      childImageSharp {
        fluid(maxWidth: 700) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    MercyHillPostcards: file(relativePath: { eq: "mercy-hill_postcards.png" }) {
      childImageSharp {
        fluid(maxWidth: 700) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    MercyHillSlide: file(relativePath: { eq: "mercy-hill_advent-mockup-tv.png" }) {
      childImageSharp {
        fluid(maxWidth: 700) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`
