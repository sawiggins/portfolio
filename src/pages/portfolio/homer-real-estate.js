import React from "react"
import { Container, Row, Col } from 'react-bootstrap';
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import PortfolioNav from '../../components/portfolio-nav.js'
import PortfolioHeader from '../../components/portfolio-header'
import PortfolioMoreProjects from "../../components/portfolio-more-projects";
import Footer from '../../components/footer'

const HomerRealEstate = ({ data }) => {
  return (
    <>
      <title>Stephanie Wiggins | Homer Real Estate</title>
      <PortfolioNav />
      <PortfolioHeader
        title="Homer Real Estate"
        description='Homer Real Esate is an up-and-coming Memphis real estate firm. A brand, logo, and yard sign provide a firm foundation to user test and launch.'
      />
      <Container>
        <Row className='align-items-center'>
          <Col md={6}>
            <GatsbyImage image={getImage(data.HomerBrief)} alt="Real Estate" />
          </Col>
          <Col md={6}>
            <h2 className="mb-2">The Brief.</h2>
            <h5 className="mb-4">branding&nbsp;&nbsp;•&nbsp;&nbsp;logo&nbsp;&nbsp;•&nbsp;&nbsp;collateral</h5>
            <p>
              The client was considering launching a new real estate company and wanted some basic graphics to user test. As a real estate expert, he looked to differentiate his business in a sea of headshots. His idea was instead to feature his dachshund, Homer. Additionally, he would intentionally engage with local pet rescues in order to connect with clients who also had a heart for animals. 
            </p>
            <p>
              As such, the task for the logo was to combine the idea of Homer the dog, residential real estate, and allude to their tag of “we get the point” at first glance. 
            </p>
            <p>
              The client wanted to eventually feature his dog Homer on the yard sign. As a placeholder, I edited a photo of a dachshund from Unsplash to pull in the brand’s colors. 
            </p>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row className='my-5'>
          <Col lg={{span:10, offset: 1}}>
            <GatsbyImage image={getImage(data.HomerYardSign)} alt="Homer Real Estate Yard Sign" />
          </Col>
        </Row>
        <Row className='my-5'>
        <Col lg={{span:10, offset: 1}}>
            <GatsbyImage image={getImage(data.HomerLogos)} alt="Homer Real Estate Logos" />
          </Col>
        </Row>
      </Container>
      <PortfolioMoreProjects />
      <Footer />
    </>
  )
}

export default HomerRealEstate;

export const query = graphql`
  query {
    HomerBrief: file(relativePath: { eq: "homer_feature.png" }) {
      childImageSharp {
        gatsbyImageData(width: 700, placeholder: NONE, layout: CONSTRAINED)
      }
    }
    HomerYardSign: file(relativePath: { eq: "Homer_Yard-Sign.png" }) {
      childImageSharp {
        gatsbyImageData(width: 700, placeholder: NONE, layout: CONSTRAINED)
      }
    }
    HomerLogos: file(relativePath: { eq: "Homer_Logos.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 700, placeholder: NONE, layout: CONSTRAINED)
      }
    }
  }
`
