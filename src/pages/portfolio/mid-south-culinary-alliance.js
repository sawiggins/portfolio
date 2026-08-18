import React from "react"
import { Container, Row, Col } from 'react-bootstrap';
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import PortfolioNav from '../../components/portfolio-nav.js'
import PortfolioHeader from '../../components/portfolio-header'
import PortfolioMoreProjects from "../../components/portfolio-more-projects";
import Footer from '../../components/footer'

const MSCA = ({ data }) => {
  return (
    <>
      <PortfolioNav />
      <PortfolioHeader
        title="Mid-South Culinary Alliance"
        description='Mid-South Culinary Alliance is a non-profit that provides a healthy community and creates learning opportunities for at-risk youth.'
      />
      <Container>
        <Row className='align-items-center'>
          <Col md={6}>
            <GatsbyImage image={getImage(data.MSCABrief)} alt="Food" />
          </Col>
          <Col md={6}>
            <h2 className="mb-2">The Brief.</h2>
            <h5 className="mb-4">branding&nbsp;&nbsp;•&nbsp;&nbsp;logo&nbsp;&nbsp;•&nbsp;&nbsp;website</h5>
            <p>
            In February 2020, I volunteered with AIGA’s Design for Good in order to provide a styleguide, logo, and mock-ups to be used later that month at <a href="https://www.givecampmemphis.org/" target="_blank" rel="noopener noreferrer" className="link-animate">GiveCamp Memphis</a>. At GiveCamp our team built out a website, a Salesforce org, and learning management system for the nonprofit. 
            </p>
            <p>
            The goal of the visual identity was to capture both energy that would appeal to youth and sophistication that would appeal to donors. The cornerstone of the project was the logo – the lead chef mentoring two students as represented by the three chef hats. 
            </p>
          </Col>
        </Row>
      </Container>
      <Container>
      <Row className='my-5'>
          <Col>
            <GatsbyImage image={getImage(data.MSCAStylescape)} alt="MSCA Style Guide" />
          </Col>
        </Row>
        <Row className='my-5'>
          <Col lg={{span: 4, offset: 2}}>
            <GatsbyImage image={getImage(data.MSCALogo)} alt="MSCA Logo" />
          </Col>
          <Col lg={4} className="d-flex flex-column justify-content-between">
            <GatsbyImage image={getImage(data.MSCAAssets)} className='mt-2' alt="MSCA Students and Chef" />
            <GatsbyImage image={getImage(data.MSCAPhoto)} className='mt-2' alt="MSCA Students and Chef" />
          </Col>
        </Row>
        <Row className='my-5'>
          <Col>
            <GatsbyImage image={getImage(data.MSCAWebsite)} alt="MSCA Website" />
          </Col>
        </Row>
      </Container>

      <PortfolioMoreProjects />
      <Footer />
    </>
  )
}

export default MSCA;

export const query = graphql`
  query {
    MSCABrief: file(relativePath: { eq: "msca_feature.png" }) {
      childImageSharp {
        gatsbyImageData(width: 700, placeholder: NONE, layout: CONSTRAINED)
      }
    }
    MSCAStylescape: file(relativePath: { eq: "msca_stylescape.png" }) {
      childImageSharp {
        gatsbyImageData(width: 700, placeholder: NONE, layout: CONSTRAINED)
      }
    }
    MSCALogo: file(relativePath: { eq: "msca_logo-tall.png" }) {
      childImageSharp {
        gatsbyImageData(width: 700, placeholder: NONE, layout: CONSTRAINED)
      }
    }
    MSCAAssets: file(relativePath: { eq: "msca_assets.png" }) {
      childImageSharp {
        gatsbyImageData(width: 700, placeholder: NONE, layout: CONSTRAINED)
      }
    }
    MSCAPhoto: file(relativePath: { eq: "msca_group.png" }) {
      childImageSharp {
        gatsbyImageData(width: 700, placeholder: NONE, layout: CONSTRAINED)
      }
    }
    MSCAWebsite: file(relativePath: { eq: "msca_website.png" }) {
      childImageSharp {
        gatsbyImageData(width: 700, placeholder: NONE, layout: CONSTRAINED)
      }
    }
  }
`

export const Head = () => <title>Stephanie Wiggins | Mid-South Culinary Alliance</title>
