import React from "react"
import { Container, Row, Col } from 'react-bootstrap';
import { graphql } from "gatsby"
import Img from "gatsby-image"

import PortfolioNav from '../../components/portfolio-nav.js'
import PortfolioHeader from '../../components/portfolio-header'
import PortfolioMoreProjects from "../../components/portfolio-more-projects";
import Footer from '../../components/footer'

const MSCA = ({ data }) => {
  return (
    <>
    <title>Stephanie Wiggins | Mid-South Culinary Alliance</title>
      <PortfolioNav />
      <PortfolioHeader
        title="Mid-South Culinary Alliance"
        description='Mid-South Culinary Alliance is a non-profit that provides a healthy community and creates learning opportunities for at-risk youth.'
      />
      <Container>
        <Row className='align-items-center'>
          <Col md={6}>
            <Img fluid={data.MSCABrief.childImageSharp.fluid} fadeIn={false} alt="Food" />
          </Col>
          <Col md={6}>
            <h2 className="mb-2">The Brief.</h2>
            <h5 className="mb-4">branding&nbsp;&nbsp;•&nbsp;&nbsp;logo&nbsp;&nbsp;•&nbsp;&nbsp;website</h5>
            <p>
            In February 2020, I volunteered with AIGA’s Design for Good in order to provide a styleguide, logo, and mock-ups to be used later that month at <a href="https://www.givecampmemphis.org/" target="_blank" rel="noopener noreferrer" className="link-animate">GiveCamp Memphis</a>. At GiveCamp our team built out a website, a Saleforce org, and learning management system. 
            </p>
            <p>
            The goal of the visual identity was to capture both energy that would appeal to youth looking to enter the program and sophistication to appeal to donors looking to partner with the organization. The cornerstone of the project was the logo that captures the lead chef mentoring two students as represented by the three chef hats. 
            </p>
          </Col>
        </Row>
      </Container>
      <Container>
      <Row className='my-5'>
          <Col>
            <Img fluid={data.MSCAStylescape.childImageSharp.fluid} fadeIn={false} alt="MSCA Style Guide" />
          </Col>
        </Row>
        <Row className='my-5'>
          <Col lg={{span: 4, offset: 2}}>
            <Img fluid={data.MSCALogo.childImageSharp.fluid} fadeIn={false} alt="MSCA Logo" />
          </Col>
          <Col lg={4} className="d-flex flex-column justify-content-between">
            <Img fluid={data.MSCAAssets.childImageSharp.fluid} fadeIn={false} className='mt-2' alt="MSCA Students and Chef" />
            <Img fluid={data.MSCAPhoto.childImageSharp.fluid} fadeIn={false} className='mt-2' alt="MSCA Students and Chef" />
          </Col>
        </Row>
        <Row className='my-5'>
          <Col>
            <Img fluid={data.MSCAWebsite.childImageSharp.fluid} fadeIn={false} alt="MSCA Website" />
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
        fluid(maxWidth: 700) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    MSCAStylescape: file(relativePath: { eq: "msca_stylescape.png" }) {
      childImageSharp {
        fluid(maxWidth: 700) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    MSCALogo: file(relativePath: { eq: "msca_logo-tall.png" }) {
      childImageSharp {
        fluid(maxWidth: 700) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    MSCAAssets: file(relativePath: { eq: "msca_assets.png" }) {
      childImageSharp {
        fluid(maxWidth: 700) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    MSCAPhoto: file(relativePath: { eq: "msca_group.png" }) {
      childImageSharp {
        fluid(maxWidth: 700) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    MSCAWebsite: file(relativePath: { eq: "msca_website.png" }) {
      childImageSharp {
        fluid(maxWidth: 700) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`
